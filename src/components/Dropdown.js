

function Dropdown({ property, options, onUpdateProperty }) {

    const titleCaseProperty = () => {
        const result = property.replace(/([A-Z])/g, " $1");
        return result.charAt(0).toUpperCase() + result.slice(1);
    }

    return(
        <div className="dropdown-component">
            <div className="dropdown-component__dropdown">
                <span>{titleCaseProperty()}</span>
                <select name={property} onChange={onUpdateProperty}>
                    {options.map(o => <option>{o}</option>)}
                </select>
            </div>
        </div>
    )
}

export default Dropdown