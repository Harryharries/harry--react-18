import React from "react";
import { Country } from "../../type/types";

interface Props {
    country: Country;
}


const CountryView = React.memo(({country}: Props)=>{
    return (
    <div>
        {country.name.common}  |  {country.capital}
    </div> 
    )
});

export {CountryView}