import { useEffect, useRef, useState } from "react";
import { Country } from "./type/types";
import { CountryView } from "./component/ui/CountryView";
import { useDebounce } from "./Hooks/UseDebounce";

const BASE_URL = "https://restcountries.com/v3.1/";

function InterviewPage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const debounceSearch = useDebounce(searchInput);

  const abortControllerRef = useRef<AbortController | null>(null)

  useEffect(() => {
    const fetchCountries = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController()

      setLoading(true);
      try {
        setError(null);
        let res: Response;
        if (debounceSearch === "") {
          res = await fetch(`${BASE_URL}/all`, {
            signal: abortControllerRef.current?.signal
          });
        } else {
          res = await fetch(`${BASE_URL}/capital/${debounceSearch}`, {
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
    fetchCountries();
  }, [debounceSearch]);

  return (
    <div className="p-4">
      <div>
        <input
          type="text"
          placeholder="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        ></input>
      </div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          {error && <div> {error} </div>}
          {!error &&
            countries.map((country) => {
              return (
                  <CountryView
                    key={country.name.common}
                    country={country}
                  ></CountryView>

              );
            })}
        </>
      )}
    </div>
  );
}

export default InterviewPage;
