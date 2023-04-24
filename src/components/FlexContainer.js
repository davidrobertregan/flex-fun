
import { useState, useEffect } from "react"
import FlexItem from "./FlexItem"

function FlexContainer( { parentValues } ) {
    const [images, setImages] = useState([])

    // future option to grab images from a different breed, or refetch images
    // future option to delete half of the images
    const getData = () => {
        fetch("https://dog.ceo/api/breed/bulldog/images/random/18")
        .then(resp => resp.json())
        .then(data => setImages(data.message))
    }

    useEffect(getData, [])
    
    let parentClasses
    const createParentClassString = () => {
        const classesArr = [] 
        for(let key in parentValues) {
            const kebabKey = key.split('').map((l, idx) => l.toUpperCase() === l ? `${idx !== 0 ? '-' : ''}` + l.toLowerCase(): l).join('')
            classesArr.push(`${kebabKey}--${parentValues[key]}`)
        }

        let classesStr = classesArr.toString()
        parentClasses = classesStr.replaceAll(',', ' ')
    }

    createParentClassString()

    const flexItems = images.map((i, idx) => <FlexItem key={i} image={i} idx={idx}></FlexItem>)

    return(
        <div className="flex-container grid-item">
            <h1>Flex Container</h1>
            <div className={`flex-container__flex-box ${parentClasses}`}>
                {flexItems}
            </div>
        </div>
    )
}

export default FlexContainer