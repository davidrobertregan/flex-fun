
import { useState, useEffect } from "react"

function FlexContainer() {
    const [images, setImages] = useState([])
    const [parentClassesObj, setParentClassesObj] = useState({
        justifyContent: "justify-content--flex-end",
        flexDirection: "flex-direction--row",
        flexWrap: "flex-wrap--wrap",
        alignItems: "align-items--stretch",
        alignContent: "align-content--normal"
    })
    const [classes, setClasses] = useState([])

    const createParentClassString = () => {
        const classesArr = [] 
        for(let key in parentClassesObj ) {
            classesArr.push(parentClassesObj[key])
        }

        let classString = classesArr.toString()
        setClasses(classString.replaceAll(',', ' '))
    }

    useEffect(createParentClassString, [parentClassesObj])

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
            <button onClick={() => setParentClassesObj({...parentClassesObj, justifyContent: "justify-content--flex-start"})}>Flex Start</button>
            <h1>Flex Container</h1>
            <div className={`flex-container__flex-box ${classes}`}>
                {imgElements}
            </div>
        </div>
    )
}

export default FlexContainer