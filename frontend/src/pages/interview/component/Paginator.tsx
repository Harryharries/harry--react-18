import { memo } from "react";
import { useProductContext } from "../Hooks/useProductContext";

const Paginator: React.FC= memo(
  () => {
    const { currPage, total, limit, setPage } = useProductContext()
    const pageArray = [];
    const totalPageNumber = Math.ceil(total / limit);
    for (let i = 0; i < totalPageNumber; i++) {
      pageArray.push(
        <button
          disabled={currPage === i}
          className={currPage === i ? `font-bold` : `font-thin`}
          key={i}
          onClick={() => setPage(i)}
        >
          {i + 1}
        </button>
      );
    }

    return (
      <>
        <div className="flex flex-row gap-3"> {pageArray} </div>
        <div> total : {total}</div>
      </>
    );
  }
);

export { Paginator };

// type Props = {
//   currPage: number;
//   total: number;
//   limit: number;
//   setPage: (currPage: number) => void;
// };

// const Paginator: React.FC<Props> = memo(
//   ({ currPage, total, limit, setPage }) => {
//     const pageArray = [];
//     const totalPageNumber = Math.ceil(total / limit);
//     for (let i = 0; i < totalPageNumber; i++) {
//       pageArray.push(
//         <button
//           disabled={currPage === i}
//           className={currPage === i ? `font-bold` : `font-thin`}
//           key={i}
//           onClick={() => setPage(i)}
//         >
//           {i + 1}
//         </button>
//       );
//     }

//     return (
//       <>
//         <div className="flex flex-row gap-3"> {pageArray} </div>
//         <div> total : {total}</div>
//       </>
//     );
//   }
// );

// export { Paginator };
