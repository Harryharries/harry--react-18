import React from "react";
import { Country } from "../../type/types";

type Props = {
    country: Country;
}


const CountryView: React.FC<Props> = React.memo(({country})=>{
    return (
    <div>
        {country.name.common}  |  {country.capital}
    </div> 
    )
});

export {CountryView}


// type Props = {
//     country: Country;
//     onDetele: (name: string)=> void
// }

// const CountryView = React.memo(({country, onDetele}: Props)=>{
//     return (
//     <div onClick={()=>onDetele(country.name.common)}>
//         {country.name.common}  |  {country.capital}
//     </div> 
//     )
// });

// export {CountryView}