import { Query } from "../index";
import { IVegetables } from "../../Models/index";

// returns all info for all herbs with image url
const allHerbs = async () => {
  return Query<IVegetables[]>(
    `SELECT herbs.name, herbs.sci_name, herbs.id, herbsimages.url
    FROM herbs
    JOIN herbsimages ON herbs.id = herbsimages.herbsid`
  );
};

// returns all info for one herb with image url based on the veg's unique id
const oneHerbById = async (id: number) => {
  return Query<IVegetables[]>(
    `SELECT herbs.*, herbsimages.url
    FROM herbs
    JOIN herbsimages ON herbs.id = herbsimages.herbsid
    WHERE id = ?`,
    [id]
  );
};

const herbByName = async (name: string) => {
  let values = [name + "%"];
  return Query<IVegetables[]>(
    `SELECT herbs.name, herbs.sci_name, herbs.id, herbsimages.url
     FROM herbs
     JOIN herbsimages ON herbs.id = herbsimages.herbsid
     WHERE name like ?`,
    values
  );
};

// adds a veg to vegs table
const postHerb = async (values: any) => {
  return Query<IVegetables>(
    "SET @@auto_increment_increment = 1; INSERT INTO herbs VALUES ?",
    values
  );
};

const putHerb = async (values: any, id: number) => {
  return Query<IVegetables>("UPDATE herbs SET ? WHERE id =?", [
    values,
    id,
  ]);
};

const deleteHerb = (id: number) => {
  return Query("DELETE FROM herbs WHERE id = ?", [id]);
};

export default {
  allHerbs,
  oneHerbById,
  herbByName,
  postHerb,
  putHerb,
  deleteHerb
};
