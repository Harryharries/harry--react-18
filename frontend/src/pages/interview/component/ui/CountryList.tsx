import React from "react";
import { Country } from "../../type/types";
import { CountryView } from "./CountryView";

type Props = {
    countries: Country[];
}


const CountryList: React.FC<Props> = React.memo(({countries})=>{
    return (
    <div>
           { countries.map((country) => {
              return (
                  <CountryView
                    key={country.name.common}
                    country={country}
                  ></CountryView>

              );
            })}
    </div> 
    )
});

export {CountryList}