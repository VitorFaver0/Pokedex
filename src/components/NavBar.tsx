import {AppBar,Toolbar, IconButton, Typography, InputBase, cardHeaderClasses} from '@mui/material'
import Menu from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import theme from '../styles/theme'
import Pokebola from '../assets/pokeball.svg';
import { styled, alpha } from '@mui/material/styles';
import { display } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

type Params = {
    exibirMenu: boolean;
}


const NavBar: React.FC<Params> = (props:Params) =>{

    function handleChange(event) {
        var cards = document.getElementsByClassName('card') as HTMLCollectionOf<HTMLElement>

        for (let i = 0; i< cards.length; i++) {
            let card = cards[i].getElementsByClassName('name')
            if(card[0].innerHTML.indexOf(event.target.value.toLowerCase()) !== -1){
                cards[i].style.display = 'block';
            }
            else{
                cards[i].style.display = 'none';
            }
        }
    }

    var showSearchBar = {}
    if(props.exibirMenu)(
        showSearchBar = {
            display:'block'
        }
    )
    else{
        showSearchBar = {
            display:'none'
        }
    }

    return (
      <>
        <AppBar position="sticky" style={{backgroundColor: theme.colors.primary, color: theme.colors.text}}>
            <Toolbar>
                <IconButton aria-label='app' color='inherit'>
                    <Menu/>
                </IconButton>
                <Typography variant='h6'>
                    Pokedex
                </Typography>
                <Pokebola style={{maxWidth:'35px', maxHeigth:'35px', margin:'1px', paddingLeft:'3px'}}></Pokebola>
                <div style={showSearchBar}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                        placeholder="Procurar..."
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={handleChange}
                        />
                    </Search>
                </div>
            </Toolbar>
        </AppBar>
      </>
    )
  }

export default NavBar;
