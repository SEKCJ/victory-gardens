import { Query } from "../index";
import { IVegetables } from "../../Models/index";

// return the whole list of helpchooseherbs
const allHerbsHelp = async () => {
  return Query<IVegetables[]>(
    `SELECT herbs.name, herbs.id, herbs_categories.category, helpchooseherbs.categoryid
    FROM herbs
    JOIN helpchooseherbs ON herbs.id = helpchooseherbs.herbsid
    JOIN herbs_categories ON helpchooseherbs.categoryid = herbs_categories.id
    ORDER BY herbs.id ASC`);
};

// return one category in helpchooseherbs based on that category's categoryid
const oneHerbHelpByCategory = async (categoryid: number) => {
  return Query<IVegetables[]>(
  `SELECT herbs.name, herbs.id, herbs_categories.category
  FROM herbs
  JOIN helpchooseherbs ON herbs.id = helpchooseherbs.herbsid
  JOIN herbs_categories ON helpchooseherbs.categoryid = herbs_categories.id
  WHERE helpchooseherbs.categoryid = ?`, [categoryid]);
}

const oneHerbHelpByHerbsId = async (herbsid: number) => {
  return Query<IVegetables[]>(
  `SELECT herbs.name, herbs.id, herbs_categories.category
  FROM herbs
  JOIN helpchooseherbs ON herbs.id = helpchooseherbs.herbsid
  JOIN herbs_categories ON helpchooseherbs.categoryid = herbs_categories.id
  WHERE helpchooseherbs.herbsid = ?`, [herbsid]);
}

const postHerbHelp = async (herbsid: number, categoryid: number) => {
  let values = [herbsid, categoryid];
  return Query('INSERT INTO helpchooseherbs(herbsid, categoryid) VALUES(?,?);--', values)
}

const putHerbHelp = async (oldherbsid: number, oldcategoryid: number, herbsid: number, categoryid: number) => {
  let values = [herbsid, categoryid, oldherbsid, oldcategoryid];
  return Query('UPDATE helpchoose SET herbsid = ?, categoryid = ? WHERE herbsid = ? AND categoryid = ?;--', values)
}

const deleteHerbHelp = async (herbsid: number) => {
  return Query('DELETE FROM helpchoose WHERE herbsid = ?', [herbsid])
}

export default {
  allHerbsHelp,
  oneHerbHelpByCategory,
  oneHerbHelpByHerbsId,
  postHerbHelp,
  putHerbHelp,
  deleteHerbHelp
};