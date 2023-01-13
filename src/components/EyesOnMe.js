// Code EyesOnMe Component Here
import React from "react";

const focus = ((e) => console.log("Good!"))
const blur = ((e) => console.log("Hey! Eyes on me!"))

function EyesOnMe(){
    return(
        <button onFocus={focus} onBlur={blur}>Eyes on me</button>
    )
}

export default EyesOnMe