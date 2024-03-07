
import MyContext from "@/services/providers/test/MyContext";
import { useContext } from "react";

export function useSubscribeContext(){
    const contextValue = useContext(MyContext);
    if (!contextValue) {
        throw new Error("MyContext must be used within a Provider");
    }
    return contextValue
}
