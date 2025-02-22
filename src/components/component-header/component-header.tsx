import './component-header.css'

const ComponentHeader = ({
    stylePropClass = '',
    primaryTitle = '',
    secondaryTitle = '',
    description = '',
    onMouseOverEvent = () => {}
}) => {
    return (
        <div className="heading">
            <div className={'title-wrapper ' + stylePropClass} onMouseOver={onMouseOverEvent}>
                <p className="title">{primaryTitle}</p>
                {
                    secondaryTitle && 
                    <p className="title">{secondaryTitle}</p>
                }
            </div>
            {
                description &&
                <div className="controller-description">
                    {description}
                </div>
            }
        </div>
    )
}

export default ComponentHeader;