import { useState } from 'react';
import './features.css';
import { PS6 } from '../../constants/common.constants';
import ComponentHeader from '../component-header/component-header';
import FeatureBar from '../feature-bar/feature-bar';
import earbudImage from '../../assets/earbuds.png';
import waterDrop from '../../assets/water-drop.png';
import PS6Button from '../button/button.component';
import handWhite from '../../assets/button/hand-point-white.png';
import handBlack from '../../assets/button/hand-point-black.png';
import { v4 as uuid } from 'uuid';

const Features = () => {
    const [currentFeature, setCurrentFeature] = useState(0);

    const handlerMouseOver = (featureIndex = -1) => setCurrentFeature(featureIndex + 1);


    return (
        <div className='features-wrapper' id='feature-body'>
            <ComponentHeader
                stylePropClass={'feature-header-style'}
                onMouseOverEvent={() => handlerMouseOver()}
                primaryTitle={PS6.features.primaryTitle}
            />
            <div className="feature-body page-black-box-shadow">
                <div className="feature-bar-wrapper">
                    {
                        PS6.features.featuresList.map((feature, index) => {
                            return <FeatureBar
                                key={uuid()}
                                onMouseOverEvent={() => handlerMouseOver(index)}
                                title={feature.title}
                                imageURL={feature.image} 
                            />
                        })
                    }
                </div>

                <div className="feature-description-wrapper">
                    <div className="feature-description">
                        <div className="feature-heading">
                            {PS6.features.featureDetailsList[currentFeature].title}
                        </div>
                        <div className="about-feature">
                            {PS6.features.featureDetailsList[currentFeature].description}
                        </div>
                        <PS6Button buttonTitle='More Feature' buttonIcon={handWhite} buttonHoverIcon={handBlack}/>
                    </div>

                    <div className="earbud">
                        <img src={earbudImage} alt="earbudImage" />
                    </div>

                </div>
                
                <div className="water-drop">
                    <img src={waterDrop} alt="waterDropImage" />
                </div>

            </div>
        </div>
    )
}

export default Features;