import { useState } from "react"


function FlexItem({ image, idx }) {
    const [order, setOrder] = useState(0)
    const [displayOrder, setDisplayOrder] = useState(false)

    const handleClick = () => {
        setOrder((order) => order - 1)
        setDisplayOrder(true)
        setTimeout(() => {
            setDisplayOrder(false)
        }, 1000)
    }

    return(
        <div className="flex-container__flex-item" onClick={handleClick} style={{order: order}}>
            <div className="flex-container__flex-item-number">{idx}</div>
            <div className={`flex-container__flex-item-order ${displayOrder ? '' : 'hide'}`}>{order}</div>
            <img src={image}></img>
        </div>  
    )
}

export default FlexItem