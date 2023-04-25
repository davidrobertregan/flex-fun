
import { useState, useEffect } from "react"
import FlexItem from "./FlexItem"

function FlexContainer( { parentValues } ) {
    const [images, setImages] = useState([])

    const getData = () => {
        fetch("https://dog.ceo/api/breed/bulldog/images/random/18")
        .then(resp => {
            if(resp.ok) {
                resp.json().then(data => setImages(data.message))
            } else {
                console.log('The server a status of:', resp.status)
            }
        })
    }

    useEffect(getData, [])
    
    const createParentClassString = () => {
        let parentClasses = ''
        for(let prop in parentValues) {
            const kebabKey = prop.split('').map((l, idx) => l.toUpperCase() === l ? `${idx !== 0 ? '-' : ''}` + l.toLowerCase() : l).join('')
            parentClasses = `${parentClasses} ${kebabKey}--${parentValues[prop]}`
        }
        return parentClasses
    }

    const flexItems = images.map((i, idx) => <FlexItem key={i} image={i} idx={idx}></FlexItem>)

    return(
        <div className="flex-container grid-item">
            <h1>Flex Container</h1>
            <div className={`flex-container__flex-box ${createParentClassString()}`}>
                {flexItems}
            </div>
        </div>
    )
}

export default FlexContainer