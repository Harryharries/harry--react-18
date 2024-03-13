import { ReactNode } from "react";
import { ProductContext } from "../ProductContext";
import { useProductFetch } from "../../Hooks/UseProductFetch";

interface ProductProviderProps {
    children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({children})=>{
    const productContextValue = useProductFetch();
    return <ProductContext.Provider value={productContextValue}>{children}</ProductContext.Provider>
}