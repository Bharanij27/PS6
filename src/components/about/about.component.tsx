import './about.css';
import { PS6 } from '../../constants/common.constants';
import PSIcon from '../../assets/psicon.png'
import facebook from '../../assets/media/facebook.png';
import youtube from '../../assets/media/youtube.png';
import x from '../../assets/media/x.png';
import instagram from '../../assets/media/instagram.png';
import globle from '../../assets/globe.png';


const About = () => {
    const socialMediaIcons = [facebook, instagram, x, youtube];

    return (
        <div className="about-container">
            <div className="about-ps-title">
                <img src={PSIcon} alt="ps" />
                <div>{PS6.about.title}</div>
            </div>
            <div className="divider"></div>

            <div className="about-body">
                {
                    PS6.about.data.map((info) => {
                        return (
                            <div className="about-body-wrapper" key={info.title}>
                                <div className="about-body-title">
                                    {info.title}
                                </div>
                                <div className="content-wrapper">
                                    {info.list.map((details) => {
                                        if (details !== 'socials_icon') {
                                            return (
                                                <div className="about-body-content" key={details}>
                                                    {
                                                        Object.keys(PS6?.about?.externalLinks).includes(details) ? 
                                                            <a 
                                                                href={
                                                                    PS6.about.externalLinks[details as keyof typeof PS6.about.externalLinks]
                                                                }
                                                                target='_blank'
                                                            >{details}</a>
                                                        :
                                                        details
                                                    }
                                                </div>
                                            );
                                        } else {
                                            return socialMediaIcons.map((icon, index) => (
                                                <img className="social_icons" src={icon} alt="icon" key={index} />
                                            ));
                                        }
                                    })}
                                </div>
                            </div>
                        );
                    })
                }
            </div>

            <div className="divider"></div>

            <div className="about-sony">
                <div className="sony">
                    <div className='title'>{PS6.sony.main_title}</div>
                    <div className='content'>{PS6.sony.title}</div>
                    <div className='content'>{PS6.sony.content}</div>
                </div>
            </div>

            <div className="divider"></div>

            <div className="global">
                <div className="country">
                    <img src={globle} alt="" />
                    <div className="country-name">India</div>
                </div>
                <div className="terms">
                    {PS6.sony.terms.map((term, index) => {
                        return (
                            <div className='term' key={term}>
                                <span className='term-content'>
                                    {term}
                                </span>
                                {index != PS6.sony.terms.length - 1 && <span className='term-divider'></span>}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default About;