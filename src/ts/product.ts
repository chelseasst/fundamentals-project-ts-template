export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: "carry-ons" | "suitcases" | "luggage sets" | "kids' luggage";
  color: string;
  size: "S" | "M" | "L" | "XL" | "S-L" | "S, M, XL";
  salesStatus: boolean;
  rating: number;
  popularity: number;
  blocks: string[];
}
