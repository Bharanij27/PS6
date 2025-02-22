import './controller.css'
import { PS6 } from '../../constants/common.constants'
import PSCard from '../card/card.component';
import JoyStickLeft  from '../../assets/accessories/joystick1.png';
import JoyStickCenter  from '../../assets/accessories/joystick2.png';
import JoyStickRight  from '../../assets/accessories/joystick3.png';
import ComponentHeader from '../component-header/component-header'

const Controller = () => {
    return (
        <div className="controller-wrapper">
            <ComponentHeader 
                primaryTitle={PS6.controller.primaryTitle}
                secondaryTitle={PS6.controller.secondaryTitle}
                description={PS6.controller.description}
            />
            <div className="accessories-card-container">
                <PSCard imageURL={JoyStickLeft}/>
                <PSCard imageURL={JoyStickCenter} className='center'/>
                <PSCard imageURL={JoyStickRight}/>
            </div>
        </div>
    );
};

export default Controller;