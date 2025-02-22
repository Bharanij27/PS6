import './button.css'

const PS6Button = ({
    buttonTitle = "",
    buttonIcon = "",
    buttonHoverIcon = ""
}) => {
    return (
        <div className="ps6-button">
            <button type="button">
                <div className="button-content">
                    <span>{buttonTitle}</span>
                    <img className="main" src={buttonIcon} alt="buttonIcon" />
                    <img className="on-hover" src={buttonHoverIcon} alt="buttonIcon" />
                </div>
            </button>
        </div>
    );
};

export default PS6Button;