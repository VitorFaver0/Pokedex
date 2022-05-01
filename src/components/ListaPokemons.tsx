import theme from '../styles/theme'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { TitleCard, PaperContainer } from '../styles/components/ListaPokemons';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import TypeIcon from './TypeIcon';
import { useRouter } from 'next/router';
import { json } from 'stream/consumers';
import { stringify } from 'querystring';

const paperParams = {
    height: 200,
    width: 130,
    backgroundColor: '#fff'
}

const ListaPokemons: React.FC = () =>{
    const [pokemons, setPokemons] = useState([])
    const router = useRouter()

    const fetchPokemons = () =>{
        if(pokemons.length==0){
            const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

            const pokemonPromises = []

            for(let i = 1; i<=150; i++){
                pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
            }

            Promise.all(pokemonPromises)
                .then(pokemonsResponse =>{
                    return setPokemons(pokemonsResponse)
            })

        }

    }
    fetchPokemons()

    const abrirPokemon = (pokemon) =>{
        router.push({
            pathname: '/pokemonInfo',
            query: { pokemon: JSON.stringify(pokemon) }
        })
    }

    return (
        <div style={{marginTop: '10px', marginBottom:'10px'}}>
            <Grid container sx={{flexGrow:1}} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={2}>
                        {pokemons.map((pokemon) =>
                            <Grid key={pokemon.id} item className='card'>
                                <Paper sx={paperParams}>
                                    <PaperContainer onClick={() =>abrirPokemon(pokemon)}>
                                        <TitleCard className='name'>
                                            {"#" + pokemon.id + " " + pokemon.name}
                                        </TitleCard>
                                        <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                                            <img src={pokemon.sprites.front_default}></img>
                                            <Stack direction="column" spacing={0.5}>
                                                {pokemon.types.map((typeObj) =>
                                                    <Chip key={typeObj.slot} icon={<TypeIcon type={typeObj.type.name}></TypeIcon>} style={{textTransform:'capitalize', color:'#fff'}} label={typeObj.type.name} size="small"/>)
                                                }
                                            </Stack>
                                        </div>
                                    </PaperContainer>
                                </Paper>
                            </Grid>)
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
  }

export default ListaPokemons;
