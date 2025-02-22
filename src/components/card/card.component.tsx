import './card.css'

const PSCard = ({
    imageURL= "",
    className = ""
}) => {
    return (
        <div className={"ps6-card " + className}>
            <img src={imageURL} alt="controller"/>
        </div>
    )
}

export default PSCard;