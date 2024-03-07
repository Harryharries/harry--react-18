import GrandChildOne from "./GrandChildOne";

const ChildOne = () => {
    return ( 
        <div>
            <h3>Child One</h3>
            {/* <GrandChildOne subscribe={props.subscribe}></GrandChildOne> */}
            <GrandChildOne></GrandChildOne>
        </div>
     );
}

export default ChildOne;