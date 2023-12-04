function Dropdown(props) {
    return (
    <section>
        <p>{props.name}</p>
        <select
            name={props.name}
            id={props.id}
        >
            {props.children}

        </select>
    </section>
    )
}

export default Dropdown;