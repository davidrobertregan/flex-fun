import Dropdown from "./Dropdown";
// create series of dropdowns for flex options
// update parent class obj state on change of drop down to value via callback

function FlexOptions({ onUpdateProperty, parentProperties }) {

    const createDropdowns = () => {
        let dropdownComponents = []
        for(let property in parentProperties){
            dropdownComponents.push(<Dropdown key={property} property={property} options={parentProperties[property]} onUpdateProperty={onUpdateProperty}/>)
        }
        return dropdownComponents
    }

    return(
        <div className="flex-options grid-item">
            <h1>Flex Options</h1>
            <div className="flex-options__dropdown-components">
                {createDropdowns()}
            </div>
        </div>
    )
}

export default FlexOptions