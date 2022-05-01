import { Bar, BarContainer } from "../styles/components/StatusBar";
import HealthSVG from '../assets/health.svg'
import SwordSVG from '../assets/sword.svg'
import ShieldSVG from '../assets/shield.svg'
import SpecialAttackSVG from '../assets/energy-svgrepo-com.svg'

import { iconButtonClasses } from "@mui/material";

type Params = {
    tipo: string;
    valor_base: number;
}

const valor_max = 180


function definirParametros(tipo, valor){
    var cor
    var icon
    switch (tipo) {
        case "hp":
            cor = 'green'
            icon = <HealthSVG></HealthSVG>
            break;
        case "attack":
            cor = 'red'
            icon = <SwordSVG></SwordSVG>
            break;
        case "defense":
            cor = 'blue'
            icon= <ShieldSVG></ShieldSVG>
            break;
        case "special-attack":
            cor = 'yellow'
            icon = <SpecialAttackSVG></SpecialAttackSVG>
            break;
        case "special-defense":
            cor = 'purple'
            break;
        case "speed":
            cor = 'aquamarine'
            break;
        default:
            cor = '#fff'
            break;
    }


    let percentual = valor*100/valor_max;
    var parametros = {
        background: cor, //Cor da barra
        width: percentual+'%', //Tamanho em percentual
        icone: icon
    }

    return parametros
}

const StatusBar: React.FC<Params> = (props) =>{



    const parametros = definirParametros(props.tipo, props.valor_base)

    return (
        <>
            <div style={{ display:'flex', flexDirection:'column', alignItems:'center', color:'black', textTransform:'capitalize'}}>
                <h4>{props.tipo}</h4>
            </div>
            <div style={{ display:'flex', flexDirection:'row', justifyContent:'center', color:'black',}}>
                {props.valor_base}
                <div style={{marginTop:'2px'}}>{parametros.icone}</div>
                <BarContainer>
                    <Bar style={parametros}>
                    </Bar>
                </BarContainer>
                {valor_max} Maxs
            </div>
        </>
    )

}

export default StatusBar;
