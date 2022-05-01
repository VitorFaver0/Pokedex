import { useRouter } from 'next/router'
import { CardContainer, ImageContainer, Teste } from '../styles/components/CardPokemon';
import { Button, Chip, Stack, CircularProgress } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import theme from '../styles/theme'
import TypeIcon from './TypeIcon';
import StatusBar from './StatusBar';


type Params = {
    pokemon: any;
}

function setColorCard(type){
    switch ( type ) {
        case "bug":
            return {background: theme.colors.bug}
        case "dark":
            return {background: theme.colors.dark}
        case "dragon":
            return {background: theme.colors.dragon}
        case "electric":
            return {background: theme.colors.electric}
        case "fairy":
            return {background: theme.colors.fairy}
        case "fighting":
            return {background: theme.colors.fighting}
        case "fire":
            return {background: theme.colors.fire}
        case "flying":
            return {background: theme.colors.flying}
        case "ghost":
            return {background: theme.colors.ghost}
        case "grass":
            return {background: theme.colors.grass}
        case "ground":
            return {background: theme.colors.ground}
        case "ice":
            return {background: theme.colors.ice}
        case "normal":
            return {background: theme.colors.normal}
        case "poison":
            return {background: theme.colors.poison}
        case "psychic":
            return {background: theme.colors.psychic}
        case "rock":
            return {background: theme.colors.rock}
        case "steel":
            return {background: theme.colors.steel}
        case "water":
            return {background: theme.colors.water}
        default:
            return {background: '#fff'}
     }
}

const PokemonInfo: React.FC<Params> = (props) =>{
    const router = useRouter()
    const colorCard = setColorCard(props.pokemon.types[0].type.name)

    function handleVoltar(){
        router.push('/')
    }

    return (

        <CardContainer>
            <div style={colorCard}>
                <div>
                    <Button variant='outlined' style={{background:'#16D6FB'}} onClick={() =>handleVoltar()}><ArrowBackIcon/></Button>
                </div>
                <ImageContainer>
                    <img style={{height:'30vh', maxHeight:'30vh', margin:'10px', width:'15vw', maxWidth:'15vw'}} src={props.pokemon.sprites.other.dream_world.front_default}></img>
                    <div style={{alignItems:'center', }}>
                        <h2 style={{textTransform:'capitalize'}}>{props.pokemon.name}</h2>
                        <div>
                            <h4 style={{textTransform:'capitalize'}}>Heigth: {props.pokemon.height}</h4>
                            <h4 style={{textTransform:'capitalize'}}>Weigth: {props.pokemon.weight}</h4>
                        </div>
                        <Stack direction="column" spacing={0.5} style={{margin:'5px'}}>
                            {props.pokemon.types.map((typeObj) =>
                                <Chip key={typeObj.slot} icon={<TypeIcon type={typeObj.type.name}></TypeIcon>} style={{textTransform:'capitalize', color:'#fff', background:'gray'}} label={typeObj.type.name} size="small"/>)
                            }
                        </Stack>
                    </div>
                </ImageContainer>
            </div>
            <div style={{ width:'100%'}}>
                <div style={{display:'flex', justifyContent:'center', color: 'black', borderBottom:'solid 1px black'}}><h2>Stats</h2></div>
                    {props.pokemon.stats.map((status) =>
                        <StatusBar tipo={status.stat.name} valor_base={status.base_stat}></StatusBar>)
                    }


            </div>
        </CardContainer>
    )

}

export default PokemonInfo;
