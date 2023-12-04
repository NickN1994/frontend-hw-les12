import React from "react";

function FormField (props) {
    return (
        <section>
            <p>{props.title}</p>
            <input
                type={props.type}
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
        </section>
        )

}

export default FormField;



