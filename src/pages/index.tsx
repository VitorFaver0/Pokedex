import Head from 'next/head'
import { Container } from '../styles/pages/Home';
import NavBar from '../components/NavBar'
import ListaPokemons from '../components/ListaPokemons';
import { truncate } from 'fs/promises';

const Home: React.FC = () =>{
  return (
    <Container>
        <Head>
            <title>Pokedex</title>
            <link rel="icon" href="favicon.ico" />
        </Head>
        <NavBar exibirMenu={true}></NavBar>
        <ListaPokemons></ListaPokemons>
    </Container>
  )
}

export default Home;
