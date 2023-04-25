import { useState, useRef } from "react"

function FlexItem({ image, idx }) {
    const [order, setOrder] = useState(0)

    /* I didn't want to change the image size value on each re-render, hence useRef */
    const imageSize = useRef(['sm', 'med', 'lg'][Math.floor(Math.random() * 3)])

    const handleClick = () => {
        setOrder((order) => order - 1)
    }

    return(
        <div className={`flex-container__flex-item flex-container__flex-item--${imageSize.current}`} onClick={handleClick} style={{ order: order }}>
            <div className="flex-container__flex-item-number">{idx + 1}</div>
            <div className={`flex-container__flex-item-order ${order < 0 ? '' : 'hide'}`}>{order}</div>
            <img src={image}></img>
        </div>  
    )
}

export default FlexItem