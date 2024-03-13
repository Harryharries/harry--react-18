import { useEffect, useRef, useState } from "react";
import { Product, ProductRes } from "../type/types";
const BASE_URL = "https://dummyjson.com/products";
export function useProductFetch(){
    const [products, setProduct] = useState<Product[] | null>(null);
    const [currPage, setPage] = useState(0);
    const [limit] = useState(10);
    const [total, setTotal] = useState(0);
    const abortControllerRef = useRef<AbortController | null>(null);

    useEffect(() => {
        abortControllerRef.current = new AbortController();
        const skip = currPage * limit;
        const url = BASE_URL + "?limit=" + limit + "&skip=" + skip;
        const fetchProducts = async () => {
          const res = await fetch(url, {
            signal: abortControllerRef.current?.signal,
          });
          const data = (await res.json()) as ProductRes;
    
          setTotal(data.total);
          setProduct(data.products);
        };
    
        fetchProducts();
    
        return () => {
          abortControllerRef.current?.abort();
        };
      }, [currPage, limit]);

    return {products, currPage, limit, total, setPage}
}