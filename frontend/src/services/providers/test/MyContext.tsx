import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type ContextType = [boolean, Dispatch<SetStateAction<boolean>>];

const MyContext = createContext<ContextType | undefined>(undefined);

function Provider(props: { children: ReactNode }) {
    const [isSubscribed, setIsSubscribed] = useState(false)
    return(
        <MyContext.Provider value={[isSubscribed, setIsSubscribed]}>
            {props.children}
        </MyContext.Provider>
    )
}

export { Provider }
export default MyContext