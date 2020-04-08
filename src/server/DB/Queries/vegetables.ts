import { Query } from "../index";
import { IVegetables } from "../../Models/index";

const allVeg = () => {
  return Query<IVegetables[]>(`SELECT * FROM vegetables `);
};

const oneVegById = (id: number) => {
  return Query<IVegetables[]>(`SELECT * FROM vegetables WHERE id = ?`, [id]);
};

const oneVegByName = (name: string) => {
  return Query<IVegetables[]>(`SELECT * FROM vegetables WHERE name = ?`, [
    name,
  ]);
};

const postVeg = (
  name: string,
  sci_name: string,
  soil: string,
  position: string,
  frost_tolerant: string,
  feeding: string,
  companions: string,
  bad_companions: string,
  spacing: string,
  sow_and_plant: string,
  planting_months: string,
  harvesting_months: string,
  notes: string,
  harvesting: string,
  troubleshooting: string,
  help_me_choose: string
) => {
  let values = [
    name,
    sci_name,
    soil,
    position,
    frost_tolerant,
    feeding,
    companions,
    bad_companions,
    spacing,
    sow_and_plant,
    planting_months,
    harvesting_months,
    notes,
    harvesting,
    troubleshooting,
    help_me_choose,
  ];
  return Query<IVegetables>(
    `INSERT INTO vegetables(
        name,
        sci_name,
        soil,
        position,
        frost_tolerant,
        feeding,
        companions,
        bad_companions,
        spacing,
        sow_and_plant,
        planting_months,
        harvesting_months,
        notes,
        harvesting,
        troubleshooting,
        help_me_choose) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    values
  );
};

const putVeg = (
  id: number,
  name: string,
  sci_name: string,
  soil: string,
  position: string,
  frost_tolerant: string,
  feeding: string,
  companions: string,
  bad_companions: string,
  spacing: string,
  sow_and_plant: string,
  planting_months: string,
  harvesting_months: string,
  notes: string,
  harvesting: string,
  troubleshooting: string,
  help_me_choose: string
) => {
  let values = [
    id,
    name,
    sci_name,
    soil,
    position,
    frost_tolerant,
    feeding,
    companions,
    bad_companions,
    spacing,
    sow_and_plant,
    planting_months,
    harvesting_months,
    notes,
    harvesting,
    troubleshooting,
    help_me_choose,
  ];
  return Query<IVegetables>(
    `UPDATE vegetables SET
        id = ?,
        name = ?,
        sci_name = ?,
        soil = ?,
        position = ?,
        frost_tolerant = ?,
        feeding = ?,
        companions = ?,
        bad_companions = ?,
        spacing = ?,
        sow_and_plant = ?,
        planting_months = ?,
        harvesting_months = ?,
        notes = ?,
        harvesting = ?,
        troubleshooting = ?,
        help_me_choose = ?
        WHERE id =?`,
    values
  );
};

const deleteVeg = (id: number) => {
  return Query("DELETE FROM vegetabless WHERE id = ?", [id]);
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
