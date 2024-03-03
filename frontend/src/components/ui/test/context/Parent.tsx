import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

const Parent = () => {
    // const subscribe = (value: string) =>{
    //     console.log("changea", value)
    //     setIsSubscribed(!isSubscribed)
    // }
    return ( 
        <div>
            <h3>Parent</h3>
            {/* <ChildOne subscribe={subscribe}></ChildOne>
            <ChildTwo isSubscribed={isSubscribed}></ChildTwo> */}
            <ChildOne></ChildOne>
            <ChildTwo></ChildTwo>
        </div>
     );
}

export default Parent;