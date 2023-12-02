import React from "react";

function FormField (props) {
    return (
        <div>
            <p>{props.title}</p>
            <input
                type={props.type}
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
        )

}

export default FormField;



