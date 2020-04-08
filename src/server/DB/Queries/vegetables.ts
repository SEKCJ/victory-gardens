import { Query } from "../index";
import { IVegetables } from "../../Models/index";

const allVeg = () => {
  return Query<IVegetables[]>(`SELECT * FROM vegetables `);
};

const oneVegById = (id: number) => {
  return Query<IVegetables[]>('SELECT * FROM vegetables WHERE id = ?', [id]);
};

const oneVegByName = (name: string) => {
  return Query<IVegetables[]>('SELECT * FROM vegetables WHERE name = ?', [
    name,
  ]);
};

const postVeg = (values: any) => {
  return Query<IVegetables>('INSERT INTO vegetables SET ?', values);
};

const putVeg = (values: any, id: number) => {
  return Query<IVegetables>('UPDATE vegetables SET ? WHERE id =?', [values, id]);
};

const deleteVeg = (id: number) => {
  return Query('DELETE FROM vegetabless WHERE id = ?', [id]);
};

export default {
  allVeg,
  oneVegById,
  oneVegByName,
  postVeg,
  putVeg,
  deleteVeg,
};

// // sucks and doesn't quite work, but it's close and WAY less messy
// const post = (<IVegetables>) => {
//     let values = [<IVegetables>];
//     return Query<IVegetables>(`INSERT INTO vegetables() VALUES ()`, values)
// };
