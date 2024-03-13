import {  useCallback, useState } from "react";
import { useDebounce } from "./Hooks/UseDebounce";
import { useCountriesFetch } from "./Hooks/UseCountriesFetch";
import { CountryList } from "./component/CountryList";
import { SearchInput } from "./component/ui/SearchInput";
import { useTheme } from "./context/ThemeContext";


function InterviewPage() {
  const [searchInput, setSearchInput] = useState("");
  const debounceSearch = useDebounce(searchInput);
  const {countries, error, loading} = useCountriesFetch(debounceSearch)
  const { theme, toggleTheme } = useTheme();
  

  const reset = () => {
    setSearchInput("")
  }

  const handleSearch = useCallback((text: string) => {
    setSearchInput(text)
  },[setSearchInput])
  


  return (
    
    <div className={`p-4 ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>


      <div className={`flex`}>
        <SearchInput inputValue={searchInput} handleSearch={handleSearch}></SearchInput>
        {/* <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        ></input> */}

        <button onClick={reset}>RESET</button>
      </div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          {error && <div> {error} </div>}
          {(!error && countries) && <CountryList countries={countries}></CountryList>}
        </>
      )}
    </div>
  );
}

export default InterviewPage;



// const [users, setUsers] = useState(defaultUsers);

// const handleRemove = (id: number) => {
//   const newUsers = users.filter((user) => user.id !== id);
//   setUsers(newUsers);
// };
// console.log("paerent rerender")

// const handleRemoveCountry = useCallback((name: string) => {
//   const newCountries = countries.filter((user) => user.name.common !== name);
//   setCountries(newCountries);
// },[countries]);
// // const handleRemoveCountry = (name: string) => {
// //   const newCountries = countries.filter((user) => user.name.common !== name);
// //   setCountries(newCountries);
// // }

// useEffect(() => {
//   const fetchCountries = async () => {
//     abortControllerRef.current?.abort();
//     abortControllerRef.current = new AbortController()

//     setLoading(true);
//     try {
//       setError(null);
//       let res: Response;
//       if (debounceSearch === "") {
//         res = await fetch(`${BASE_URL}/all`, {
//           signal: abortControllerRef.current?.signal
//         });
//       } else {
//         res = await fetch(`${BASE_URL}/capital/${debounceSearch}`, {
//           signal: abortControllerRef.current?.signal
//         });
//       }

//       if (!res.ok) {
//         if (res.status === 404) {
//           throw new Error("0 Country found");
//         } else {
//           throw new Error("Fail to fetch countries");
//         }
//       }
//       const data = await res.json();
//       setCountries(data);
//       setLoading(false);
//     } catch (e) {
//       if (e instanceof Error) {
//         setError(e.message);
//       } else {
//         setError("Can not fetch data");
//       }
//       setLoading(false);
//     }
//   };
//   fetchCountries();
// }, [debounceSearch]);

// const reset = () =>{
//   setUsers(defaultUsers)
// }

// return (
//   <div className="flex flex-row">
//     <div className="p-4">
//     <button onClick={reset}>
//       reset 
//     </button>
//     <div className='tutorial flex flex-col items-start'>
//     {users.map((user) => {
//       return (
//         <button key={user.name} onClick={() => handleRemove(user.id)}>
//           {user.name}
//         </button>
//       );
//     })}
//   </div>
//     </div>
//     <div className="p-4">
//       <div>
//         <input
//           type="text"
//           placeholder="search"
//           value={searchInput}
//           onChange={(e) => setSearchInput(e.target.value)}
//         ></input>
//       </div>
//       {loading ? (
//         <div>Loading</div>
//       ) : (
//         <>
//           {error && <div> {error} </div>}
//           {!error &&
//             countries.map((country) => {
//               return (
//                   <CountryView
//                     key={country.name.common}
//                     country={country}
//                     onDetele={handleRemoveCountry}
//                   ></CountryView>

//               );
//             })}
//         </>
//       )}
//     </div>
//   </div>

// );
// }

// export default InterviewPage;
