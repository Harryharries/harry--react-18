// import { useQuery } from "@tanstack/react-query";

// import { useEffect, useState } from "react";
// // import Child from "./ui/test/Child";
// import { User, fetchUsers } from "@/utils/utils";
// import Search from "./ui/test/Search";
// import { useDebounce } from "@/hooks/useDebounce";
import { Provider } from "@/services/providers/test/MyContext";
import Parent from "./ui/test/context/Parent";

const Playground = () => {

// react query
    // const query = useQuery({})
//     const [count, setCount] = useState(0)
//     console.log("render: " +count)
//     const handleAddCount = () => {
//         setCount(count+1)
//         console.log(count)
//     }
//   return (
//       <div className="container mx-auto flex justify-between items-center">
//         <div>
//             <div>Count: {count}</div>
//             <button onClick={()=>handleAddCount()}>
//                 +
//             </button>
//         </div>
//       </div>
//   );


//component communication
    // const [parentInput, setParentInput] = useState("")
    // const [childInput, setchildInput] = useState("")

    // const parentFn = (value:string) => {
    //     console.log("testing", value);
    // };
    // return (
    // <div className="container mx-auto">
    //     <div className="text-4xl"> parent</div>
    //     <div>value from child: {childInput}</div>
    //     <input type="text" onChange={(e)=>setParentInput(e.target.value)}></input>
    //     <Child parentInput={parentInput} setChildInput={setchildInput} parentFn={parentFn}></Child>
    // </div>
    // );

// custom use debounce hooks

    // const [loading, setLoading] = useState(false);
    // const [search, setSearch] = useState('');
    // const [users, setUsers] = useState<User[]>([])
    // const debounceSearch = useDebounce(search);

    // useEffect(() => {
    //     const loadUsers = async ()=>{
    //         setLoading(true);

    //         const loadedUsers = await fetchUsers(debounceSearch)
    //         setUsers(loadedUsers)
    //         setLoading(false);
    //     }

    //     loadUsers()
    //   return () => {
    //   }
    // }, [debounceSearch])
    

    // return (
    // <div className="container mx-auto">
    //     <Search onChange={setSearch}></Search>
    //     {loading ? 
    //     <div>loading...</div> : 
    //     users.map((user)=>{
    //         return <div key={user.id}>{user.name}</div>
    //         }) 
    //     }
    //  </div>
    // );


// context

return (
    <Provider>
        <div className="container mx-auto">
            <Parent></Parent>
        </div>
    </Provider>
    );
};

export default Playground;
