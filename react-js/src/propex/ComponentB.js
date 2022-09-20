import React from "react";
function ComponentB(props)
{
    return(
        <div>
            <h1>Component A</h1>
            <pre>{JSON.stringify(props)}</pre>
            <h4>value 1:{props.value1}</h4>
            <h4>value 2:{props.value2}</h4>
        </div>
    )
}
export default ComponentB