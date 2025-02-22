import './feature-bar.css';

const FeatureBar = ({
    title = "",
    imageURL = "",
    onMouseOverEvent = () => {}
}) => {
    return (
        <div className='feature'
            onMouseOver={onMouseOverEvent}
        >
            <div className="feature-image">
                <img src={imageURL} alt="feature" />
            </div>
            <div className="feature-title">
                {title}
            </div>

        </div>
    );
};

export default FeatureBar;