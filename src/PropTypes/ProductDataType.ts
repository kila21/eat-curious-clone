import { VarietyType } from "./VarietyType";

export interface ProductDataType {
  index: number;
  name: string;
  img: string;
  backgroundColor: string;
  page: {
    variety: VarietyType[];
    ingredients: string;
    allergens: string;
    storage: string;
    instructions: string;
    weights: string;
    case: string;
  };
}
