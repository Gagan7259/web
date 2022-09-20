import React from "react";
import ComponentB from './ComponentB'
function ComponentA() {
let a=100
let b=200
return<div>
    <h1>Component A</h1>\
    <ComponentB value1={a} value2={b}/>
</div>
}
export default ComponentA