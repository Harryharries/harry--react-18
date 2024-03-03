// import { useState } from "react";

interface ChildPorps {
    parentInput: string,
    setChildInput: React.Dispatch<React.SetStateAction<string>>,
    parentFn:  (value: string) => void
}

function Child(props: ChildPorps) {
    return ( 
        <div>
            <div className="text-2xl"> child</div>
            <div>value from p: {props.parentInput}</div>
            {/* <div>child value: {childInput}</div> */}
            <input type="text" onChange={(e)=>props.setChildInput(e.target.value)}></input>
            <div> <button onClick={()=> props.parentFn("asdasdas")}>callpfn</button></div>
        </div>
     );
}

export default Child;