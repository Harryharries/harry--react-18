import { useEffect, useRef, useState } from "react";
import { Country } from "../type/types";

export function useCountriesFetch(searchInput:string){
    const [countries, setCountries] = useState<Country[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const abortControllerRef = useRef<AbortController | null>(null)
    const BASE_URL = "https://restcountries.com/v3.1/";


    useEffect(()=>{
        const fetchCountries = async () => {
            abortControllerRef.current = new AbortController()
      
            setLoading(true);
            try {
              setError(null);
              let res: Response;
              if (searchInput === "") {
                res = await fetch(`${BASE_URL}/all`, {
                  signal: abortControllerRef.current?.signal
                });
              } else {
                res = await fetch(`${BASE_URL}/capital/${searchInput}`, {
                  signal: abortControllerRef.current?.signal
                });
              }
      
              if (!res.ok) {
                if (res.status === 404) {
                  throw new Error("0 Country found");
                } else {
                  throw new Error("Fail to fetch countries");
                }
              }
              const data = await res.json();
              setCountries(data);
              setLoading(false);
            } catch (e) {
              if (e instanceof Error) {
                setError(e.message);
              } else {
                setError("Can not fetch data");
              }
              setLoading(false);
            }
          };

        fetchCountries()

        return ()=>{
            abortControllerRef.current?.abort();
        }
    }, [searchInput])

    return {countries, error, loading}
}