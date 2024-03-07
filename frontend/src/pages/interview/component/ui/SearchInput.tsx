import React from "react";

type Props = {
    inputValue: string;
    handleSearch: (text:string)=>void
}

const SearchInput: React.FC<Props> = React.memo(({inputValue, handleSearch})=>{
    
    return (
    <input
        type="text"
        value={inputValue}
        onChange={(e)=>handleSearch(e.target.value)}
        placeholder="search"
    ></input>)
})

export {
    SearchInput
}