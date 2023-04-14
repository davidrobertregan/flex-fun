// create series of dropdowns for flex options
// update parent class obj state on change of drop down to value via callback

function FlexOptions() {
    return(
        <div className="flex-options grid-item">
            <h1>Flex Options</h1>
            <label>Flex Direction</label>
            <select>
                <option>Row</option>
                <option>Row Reverse</option>
                <option>Column</option>
                <option>Column Reverse</option>
            </select>
        </div>
    )
}

export default FlexOptions