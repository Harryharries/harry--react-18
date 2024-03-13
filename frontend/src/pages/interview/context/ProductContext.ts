import { createContext } from "react";
import { Product } from "../type/types";

interface ProductContextType {
    products: Product[] | null;
    currPage: number;
    total: number;
    limit: number;
    setPage: (page: number)=>void;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined)