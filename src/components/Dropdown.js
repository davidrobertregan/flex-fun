

function Dropdown({ property, options, onUpdateProperty }) {
    return(
        <div className="dropdown-component">
            <label>{property}</label>
            <select name={property} onChange={onUpdateProperty}>
                {options.map(o => <option>{o}</option>)}
            </select>
        </div>
    )
}

export default Dropdown