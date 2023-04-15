import { useState } from "react"


function FlexItem({ image, idx }) {
    const [order, setOrder] = useState(0)

    const handleClick = () => {
        setOrder((order) => order - 1)
    }
    return(
        <div className="flex-container__flex-item" onClick={handleClick} style={{order: order}}>
            <div className="flex-container__flex-item-number">{idx}</div>
            <img src={image}></img>
        </div>  
    )
}

export default FlexItem