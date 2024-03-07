import { useEffect, useReducer, useState } from "react";

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

// return (
//     <Provider>
//         <div className="container mx-auto">
//             <Parent></Parent>
//         </div>
//     </Provider>
//     );

//effect and render and state

// const [count, setCount] = useState(0);
// const countr = useRef(0);

// useEffect(() => {
//   // The code that we want to run
//   console.log('The count is:', count);

//   // Optional return function
//   return () => {
//     console.log('I am being cleaned up!');
//   };
// }, [count]); // The dependency array

// return (
//   <div className='tutorial'>
//     <h1>Count: {count}</h1>
//     <button onClick={() => setCount(count - 1)}>
//       Decrement
//     </button>
//     <button onClick={() => setCount(count + 1)}>
//       Increment
//     </button>
//     <button onClick={() => countr.current++}>
//       IncrementRef
//     </button>
//   </div>
// );


// common
// const [count, setCount] = useState(0);

// useEffect(() => {
//   // The code that we want to run
//   console.log('The count is:', count);

//   // Optional return function
//   return () => {
//     console.log('I am being cleaned up!');
//   };
// }, [count]); // The dependency array


// return (
//   <div className='tutorial'>
//     <h1>Count: {count}</h1>
//     <button onClick={() => setCount(count - 1)}>
//       Decrement
//     </button>
//     <button onClick={() => setCount(count + 1)}>
//       Increment
//     </button>

//   </div>
// );

//
const [state, dispatch] = useReducer(counterReducer, { count: 0 });

console.log("render")

return (
  <div>
    Count: {state.count}
    <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>Increment</button>
    <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>Decrement</button>
  </div>
);


};
type CounterState = {
  count: number;
};

type CounterAction =
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: number };

  const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + action.payload };
      case 'decrement':
        return { count: state.count - action.payload };
      default:
        // TypeScript ensures exhaustiveness checking. This part helps to ensure that every action is handled.
        throw new Error(`Unhandled action type`);
    }
  };

export default Playground;
