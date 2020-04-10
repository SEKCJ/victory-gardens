import { Query } from "../index";
import { IVegetables } from "../../Models/index";

const allHelp = () => {
    return Query<IVegetables[]>("SELECT * FROM helpchoose");
  };

  
export default {
    allHelp
};