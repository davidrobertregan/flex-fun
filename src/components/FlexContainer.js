
import { useState, useEffect } from "react"

function FlexContainer() {
    const [images, setImages] = useState([])
    // use state to set flex properties... classes? styled components?

    // future option to grab images from a different breed, or refetch images
    const getData = () => {
        fetch("https://dog.ceo/api/breed/bulldog/images/random/18")
        .then(resp => resp.json())
        .then(data => setImages(data.message))
    }

    useEffect(getData, [])

    const imgElements = images.map(i => <img key={i} className="flex-container__flex-item" width="100px" src={i} alt="dog"></img>)

    return(
        <div className="flex-container grid-item">
            <h1>Flex Container</h1>
            <div className="flex-container__flex-box">
                {imgElements}
            </div>
        </div>
    )
}

export default FlexContainer