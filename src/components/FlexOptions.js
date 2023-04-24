import Dropdown from "./Dropdown"
// create series of dropdowns for flex options
// update parent class obj state on change of drop down to value via callback

function FlexOptions({ onUpdateProperty, parentProperties }) {
    let dropdownComponents = []

    for(let prop in parentProperties){
        dropdownComponents.push(<Dropdown property={prop} options={parentProperties[prop]} onUpdateProperty={onUpdateProperty}/>)
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