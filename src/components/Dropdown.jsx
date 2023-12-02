function Dropdown(props) {
    return (
    <div>
        <p>{props.name}</p>
        <select
            name={props.name}
            id={props.id}
        >
            {props.children}

        </select>
    </div>
    )
}

export default Dropdown;