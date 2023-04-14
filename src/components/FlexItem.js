

function FlexItem({ image, idx }) {
    return(
        <div className="flex-container__flex-item">
            <div className="flex-container__flex-item-number">{idx}</div>
            <img src={image}></img>
        </div>  
    )
}

export default FlexItem