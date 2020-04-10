import { Query } from "../index";
import { IVegetables } from "../../Models/index";

// returns all info for all vegs with image url
const allVegs = () => {
  return Query<IVegetables[]>(
    "SELECT vegetables.*, images.url FROM vegetables JOIN images ON vegetables.id = images.vegetableid"
  );
};

// returns all info for one veg with image url based on the veg's unique id
const oneVegById = (id: number) => {
  return Query<IVegetables[]>("SELECT vegetables.*, images.url FROM vegetables JOIN images ON vegetables.id = images.vegetableid WHERE id = ?", [id]);
};

// returns name of one veg with image url based on the veg's name
const oneVegByName = (name: string) => {
  return Query<IVegetables[]>("SELECT * FROM vegetables WHERE name = ?", [name,]);
};

// adds a veg to vegs table
const postVeg = (values: any) => {
  return Query<IVegetables>(
    "SET @@auto_increment_increment = 1; INSERT INTO vegetables VALUES ?", values);
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
