
import { useState, useEffect } from "react"

function FlexContainer() {
    const [images, setImages] = useState([])

    // future option to grab images from a different breed
    const getData = () => {
        fetch("https://dog.ceo/api/breed/bulldog/images/random/10")
        .then(resp => resp.json())
        .then(data => setImages(data.message))
    }

    useEffect(getData, [])

    const imgElements = images.map(i => <img key={i} width="100px" src={i} alt="dog"></img>)

    return(
        <div>
            <h1>Flex Container</h1>
            {imgElements}
        </div>
    )
}

export default FlexContainer