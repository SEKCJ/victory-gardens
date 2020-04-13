import { Query } from "../index";
import { IVegetables } from "../../Models/index";

// return the whole list of helpchoose
const allHelp = () => {
    return Query<IVegetables[]>("SELECT * FROM helpchoose JOIN images ON vegetableid = images.vegetableid");
  };

  // return one category in helpchoose based on that category's categoryid
const oneHelp = (categoryid: number) => {
  return Query<IVegetables[]>('SELECT * FROM helpchoose WHERE categoryid = ?', [categoryid])
}

const deleteHelp = (vegetableid: number) => {
  return Query ('DELETE FROM helpchoose WHERE vegetableid = ?', [vegetableid])
}
  
export default {
    allHelp,
    oneHelp,
    deleteHelp
};