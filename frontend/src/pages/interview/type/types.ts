export interface Country {
    name:{
      common: string;
    };
    capital: string;
  }

export interface Product {
  id: number,
  title: string,
  price: number
}

export interface ProductRes{
  products: Product[];
  total: number,
  skip: number,
  limit: number,
}