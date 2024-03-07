import React from "react";
import { Country } from "../type/types";
import { CountryView } from "./ui/CountryView";

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

// const CountryList: React.FC<Props> = React.memo(({countries})=>{
//   const items = [];
//   if(countries.length < 3)
//   for (let i = 0; i < 1500; i++) {
//     items.push(<SlowPost key={i} index={i} />);
//   }
//     return (
//     <div>
//            { countries.map((country) => {
//               return (
//                   <CountryView
//                     key={country.name.common}
//                     country={country}
//                   ></CountryView>

//               );
//             })}
//             <ul>{items}</ul>
//     </div> 
//     )
// });

// export {CountryList}

// const SlowPost = ({ index }: { index: number }) => {
//   const startTime = performance.now();
//   while (performance.now() - startTime < 1) {
//     // Do nothing for 1 ms per item to emulate extremely slow code
//   }

//   return <li className='item'>Post #{index + 1}</li>;
// };