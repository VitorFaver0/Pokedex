import {Icon, Grass, Poison, Fire, Flying, Bug, Water, Dark, Dragon, Electric, Fairy, Fighting, Ghost, Ground, Ice, Normal, Psychic, Rock, Steel } from '../styles/components/TypeIcons';
import GrassSVG from '../assets/types/grass.svg'
import PoisonSVG from '../assets/types/poison.svg'
import FireSVG from '../assets/types/fire.svg'
import FlyingSVG from '../assets/types/flying.svg'
import BugSVG from '../assets/types/bug.svg'
import WaterSVG from '../assets/types/water.svg'
import DarkSVG from '../assets/types/dark.svg'
import DragonSVG from '../assets/types/dragon.svg'
import ElectricSVG from '../assets/types/electric.svg'
import FairySVG from '../assets/types/fairy.svg'
import FightingSVG from '../assets/types/fighting.svg'
import GhostSVG from '../assets/types/ghost.svg'
import GroundSVG from '../assets/types/ground.svg'
import IceSVG from '../assets/types/ice.svg'
import NormalSVG from '../assets/types/normal.svg'
import PsychicSVG from '../assets/types/psychic.svg'
import RockSVG from '../assets/types/rock.svg'
import SteelSVG from '../assets/types/steel.svg'

type Params = {
    type: string;
}

const TypeIcon: React.FC<Params> = (Params) =>{
    switch ( Params.type ) {
        case "bug":
            return(
                <Bug>
                    <Icon>
                        <BugSVG/>
                    </Icon>
                </Bug>
            )
        case "dark":
            return(
                <Dark>
                    <Icon>
                        <DarkSVG/>
                    </Icon>
                </Dark>
            )
        case "dragon":
            return(
                <Dragon>
                    <Icon>
                        <DragonSVG/>
                    </Icon>
                </Dragon>
            )
        case "electric":
            return(
                <Electric>
                    <Icon>
                        <ElectricSVG/>
                    </Icon>
                </Electric>
            )
        case "fairy":
            return(
                <Fairy>
                    <Icon>
                        <FairySVG/>
                    </Icon>
                </Fairy>
            )
        case "fighting":
            return(
                <Fighting>
                    <Icon>
                        <FightingSVG/>
                    </Icon>
                </Fighting>
            )
        case "fire":
            return(
                <Fire>
                    <Icon>
                        <FireSVG/>
                    </Icon>
                </Fire>
            )
        case "flying":
            return(
                <Flying>
                    <Icon>
                        <FlyingSVG/>
                    </Icon>
                </Flying>
            )
        case "ghost":
            return(
                <Ghost>
                    <Icon>
                        <GhostSVG/>
                    </Icon>
                </Ghost>
            )
        case "grass":
            return(
                <Grass>
                    <Icon>
                        <GrassSVG/>
                    </Icon>
                </Grass>
            )
        case "ground":
            return(
                <Ground>
                    <Icon>
                        <GroundSVG/>
                    </Icon>
                </Ground>
            )
        case "ice":
            return(
                <Ice>
                    <Icon>
                        <IceSVG/>
                    </Icon>
                </Ice>
            )
        case "normal":
            return(
                <Normal>
                    <Icon>
                        <NormalSVG/>
                    </Icon>
                </Normal>
            )
        case "poison":
            return(
                <Poison>
                    <Icon>
                        <PoisonSVG/>
                    </Icon>
                </Poison>
            )
        case "psychic":
            return(
                <Psychic>
                    <Icon>
                        <PsychicSVG/>
                    </Icon>
                </Psychic>
            )
        case "rock":
            return(
                <Rock>
                    <Icon>
                        <RockSVG/>
                    </Icon>
                </Rock>
            )
        case "steel":
            return(
                <Steel>
                    <Icon>
                        <SteelSVG/>
                    </Icon>
                </Steel>
            )
        case "water":
            return(
                <Water>
                    <Icon>
                        <WaterSVG/>
                    </Icon>
                </Water>
            )
        default:
            return(<></>)
     }
}

export default TypeIcon;
