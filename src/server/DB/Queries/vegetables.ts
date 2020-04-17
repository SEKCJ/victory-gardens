import { Query } from "../index";
import { IVegetables } from "../../Models/index";

// returns all info for all vegs with image url
const allVegs = async () => {
  return Query<IVegetables[]>(
    `SELECT vegetables.name, vegetables.sci_name, vegetables.id, images.url
    FROM vegetables
    JOIN images ON vegetables.id = images.vegetableid
    ORDER BY vegetables.name ASC`
  );
};

// returns all info for one veg with image url based on the veg's unique id
const oneVegById = async (id: number) => {
  return Query<IVegetables[]>(`SELECT vegetables.*, images.url
  FROM vegetables
  JOIN images ON vegetables.id = images.vegetableid
  WHERE id = ?`, [id]);
};

const vegByName = async (name: string) => {
  let values = [name + "%"]
  return Query<IVegetables[]>(`SELECT a.name, a.sci_name, a.id, b.url
   FROM vegetables a
   JOIN images b ON a.id = b.vegetableid
   WHERE name like ?
   ORDER BY a.name ASC`, values)
}
// returns name of one veg with image url based on the veg's name
// const oneVegByName = (name: string) => {
//   return Query<IVegetables[]>("SELECT * FROM vegetables WHERE name = ?", [name,]);
// };

// adds a veg to vegs table
const postVeg = async (values: any) => {
  return Query<IVegetables>(
    "SET @@auto_increment_increment = 1; INSERT INTO vegetables VALUES ?", values);
};

const putVeg = async (values: any, id: number) => {
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
  vegByName,
  // oneVegByName,
  postVeg,
  putVeg,
  deleteVeg,
};
