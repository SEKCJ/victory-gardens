import { Query } from "../index";
import { IVegetables } from "../../Models/index";

const allVegs = () => {
  return Query<IVegetables[]>("SELECT * FROM vegetables");
};

const oneVegById = (id: number) => {
  return Query<IVegetables[]>("SELECT * FROM vegetables WHERE id = ?", [id]);
};

const oneVegByName = (name: string) => {
  return Query<IVegetables[]>("SELECT * FROM vegetables WHERE name = ?", [
    name,
  ]);
};

const postVeg = (values: any) => {
  return Query<IVegetables>(
    "SET @@auto_increment_increment = 1; INSERT INTO vegetables SET ?",
    values
  );
};

const putVeg = (values: any, id: number) => {
  return Query<IVegetables>("UPDATE vegetables SET ? WHERE id =?", [
    values,
    id,
  ]);
};

const deleteVeg = (id: number) => {
  return Query("DELETE FROM vegetables WHERE id = ?", [id]);
};

export default {
  allVegs,
  oneVegById,
  oneVegByName,
  postVeg,
  putVeg,
  deleteVeg,
};
