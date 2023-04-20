import Dropdown from "./Dropdown"
// create series of dropdowns for flex options
// update parent class obj state on change of drop down to value via callback

function FlexOptions({ onUpdateProperty }) {

    const parentOptions = {
        flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
        flexWrap: ['wrap', 'nowrap', 'wrap-reverse'],
        justifyContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
        alignItems: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
        alignContent: ['flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around']
    }

    let dropdownComponents = []

    for(let prop in parentOptions){
        dropdownComponents.push(<Dropdown property={prop} options={parentOptions[prop]} onUpdateProperty={onUpdateProperty}/>)
    }

    return(
        <div className="flex-options grid-item">
            <h1>Flex Options</h1>
            <div className="flex-options__dropdown-components">
                {dropdownComponents}
            </div>
        </div>
    )
}

export default FlexOptions