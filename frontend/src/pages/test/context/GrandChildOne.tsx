import { useSubscribeContext } from "@/hooks/useSubscribeContext";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GrandChildOne = () => {
    const contextValue  = useSubscribeContext();

    if (!contextValue) {
        throw new Error("MyContext must be used within a Provider");
    }

    const [isSubscribed, setIsSubscribed] = contextValue;
    return ( 
        <div>
            <h3>Grand Child One</h3>
            {/* <button onClick={()=>props.subscribe('wewewew')}>sub</button> */}
            <button onClick={()=>setIsSubscribed(!isSubscribed)}>sub</button>
        </div>
     );
}

export default GrandChildOne;