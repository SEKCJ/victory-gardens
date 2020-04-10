import { Query } from "../index";
import { IVegetables } from "../../Models/index";

const allHelp = () => {
    return Query<IVegetables[]>("SELECT * FROM help_me_choose");
  };

export default {
    allHelp
};