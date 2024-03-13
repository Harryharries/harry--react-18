import { Product } from "../../type/types";

type Props = {
  product: Product;
};

const ProductItem: React.FC<Props> = ({ product }) => {
  return (
    <div>
      {product.id} | {product.title} | {product.price}
    </div>
  );
};

export { ProductItem };
