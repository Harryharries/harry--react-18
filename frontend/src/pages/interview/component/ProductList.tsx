import { memo } from "react";
import { ProductItem } from "./ui/ProductItem";
import { useProductContext } from "../Hooks/useProductContext";

const ProductList: React.FC = memo(() => {
const { products } = useProductContext()
  return (
    <div className="p-4 flex flex-col gap-5">
      {products ? (
        products.map((product) => {
          return (
            <ProductItem key={product.id} product={product}></ProductItem>
          );
        })
      ) : (
        <div> 0 product found </div>
      )}
    </div>
  );
});

 export { ProductList };

// type Props = {
//   products: Product[] | null;
// };

// const ProductList: React.FC<Props> = memo(({ products }) => {
//   return (
//     <div className="p-4 flex flex-col gap-5">
//       {products ? (
//         products.map((product) => {
//           return (
//             <ProductItem key={product.id} product={product}></ProductItem>
//           );
//         })
//       ) : (
//         <div> 0 product found </div>
//       )}
//     </div>
//   );
// });

// export { ProductList };
