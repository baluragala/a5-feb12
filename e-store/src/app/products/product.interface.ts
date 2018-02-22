export interface Product {
  id: string;
  productName: string;
  price: string;
  InTheBox: string;
  modelNumber: string;
  size?: string;
  brand?: string;
  color?: string;
  touchScreen?: "yes";
  image?: string;
}
