import { ProductList } from "./component/ProductList";
import { Paginator } from "./component/Paginator";

const PageSearch: React.FC = () => {
  
    return (
      <>
        <div>hello</div>
        <ProductList></ProductList>
        <Paginator></Paginator>
      </>
    );
  };
  
  export { PageSearch };
  

// const PageSearch: React.FC = () => {
//   const { products, currPage, total, limit, setPage } = useProductFetch();

//   return (
//     <>
//       <div>hello</div>
//       <ProductList products={products}></ProductList>
//       <Paginator
//         currPage={currPage}
//         total={total}
//         limit={limit}
//         setPage={setPage}
//       ></Paginator>
//     </>
//   );
// };

// export { PageSearch };


