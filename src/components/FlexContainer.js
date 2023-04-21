
import { useState, useEffect, useRef } from "react"
import FlexItem from "./FlexItem"

function FlexContainer( { parentClassesObj } ) {
    const [images, setImages] = useState([])
    const [boxStyles, setBoxStyles] = useState({
        width: 'auto',
        height: 'auto'
    })
    const flexBox = useRef()
    const [drag, setDrag] = useState({
        active: false,
        x: '',
        y: ''
    })

    // useEffect(() => {
    //     setDim({...dim, w: flexBox.current.clientWidth, h: flexBox.current.clientHeight})
    // }, [])
    
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
        for(let key in parentClassesObj) {
            const kebabKey = key.split('').map((l, idx) => l.toUpperCase() === l ? `${idx !== 0 ? '-' : ''}` + l.toLowerCase(): l).join('')
            classesArr.push(`${kebabKey}--${parentClassesObj[key]}`)
        }

        let classesStr = classesArr.toString()
        parentClasses = classesStr.replaceAll(',', ' ')
    }
    createParentClassString()

    const startResize = (e) => {
        setDrag({
                ...drag,
                active: true,
                x: e.clientX,
                y: e.clientY
            }
        )
    }

    const handleMouseMove = (e) => {
        const { active, x, y } = drag
        if (active) {
            const xDiff = Math.abs(x - e.clientX);
            const yDiff = Math.abs(y - e.clientY);
            const newW = x > e.clientX ? flexBox.current.clientWidth - xDiff : flexBox.current.clientWidth + xDiff
            const newH = y > e.clientY ? flexBox.current.clientHeight - yDiff : flexBox.current.clientHeight + yDiff

            setDrag({...drag, x: e.clientX, y: e.clientY})
            if(newW > 300 && newH > 300) {
                setBoxStyles({...boxStyles, width: newW, height: newH})
            }
        }
    }

    const stopResize = () => {
        setDrag({...drag, active: false})
    }

    const flexItems = images.map((i, idx) => <FlexItem key={i} image={i} idx={idx}></FlexItem>)

    return(
        <div className="flex-container grid-item" onMouseMove={handleMouseMove} onMouseUp={stopResize}>
            <h1>Flex Container</h1>
            <div className={`flex-container__flex-box ${parentClasses}`} style={boxStyles} ref={flexBox}>
                <button className="flex-container__horizontal-drag" onMouseDown={startResize}>🖐</button>
                {flexItems}
            </div>
        </div>
    )
}

export default FlexContainer