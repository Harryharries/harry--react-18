import { useSubscribeContext } from "@/hooks/useSubscribeContext";

const GrandChildTwo = () => {
    const contextValue = useSubscribeContext();

    const [isSubscribed] = contextValue;
    return ( 
        <div>
            <h3>Grand Child Two</h3>
            { isSubscribed ? (<div>did</div>):(<div>not</div>)

            }
        </div>
     );
}

export default GrandChildTwo;