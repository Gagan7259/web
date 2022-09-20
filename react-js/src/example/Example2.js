import React from "react";
import Example1 from "./Example1";
function Example2(props)
{
    return(
        <div>
            <h4>Component B</h4>
            <pre>{JSON.stringify(props)}</pre>
            <h4>{value 1: {props.exam1}</h4>
            <h4>{value 2: {props.Example2}</h4>
        </div>
    )
}
    export default Example2