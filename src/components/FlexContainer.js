
import { useState, useEffect } from "react"

function FlexContainer() {
    const [images, setImages] = useState({})

    const getData = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(data => setImages(data))
    }

    useEffect(getData, [])

    console.log(images)
    return(
        <div>
            <h1>Flex Container</h1>
            <img src={images.message}></img>
        </div>
    )
}

export default FlexContainer