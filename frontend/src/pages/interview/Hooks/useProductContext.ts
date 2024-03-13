import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export function useProductContext() {
    const context = useContext(ProductContext)

    if (context === undefined) {
        throw new Error("useProductContext need to be within ProductProvider")
    }
    return context
}