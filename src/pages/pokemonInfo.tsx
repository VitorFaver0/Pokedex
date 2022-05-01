import Head from 'next/head'
import { Container } from '../styles/pages/Home';
import NavBar from '../components/NavBar'
import { withRouter, useRouter } from 'next/router'
import { useState } from 'react';
import CardPokemon from '../components/CardPokemon'

type Params = {
    router: {
        query:{
            pokemon: string;
        }
    }
}

const PokemonInfo: React.FC = (props:Params) =>{
    const pokemon = JSON.parse(props.router.query.pokemon);

    return (
        <Container>
            <Head>
                <title>Pokedex</title>
                <link rel="icon" href="favicon.ico" />
            </Head>
            <NavBar exibirMenu={false}></NavBar>
            <CardPokemon pokemon={pokemon}></CardPokemon>
        </Container>
    )

}

export default withRouter(PokemonInfo);
