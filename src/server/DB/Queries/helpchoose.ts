import { Query } from "../index";
import { IVegetables } from "../../Models/index";

// return the whole list of helpchoose
const allHelp = async () => {
  return Query<IVegetables[]>(
    `SELECT a.name, a.id, c.category, b.categoryid
    FROM vegetables a
    JOIN helpchoose b ON a.id = b.vegetableid
    JOIN choose_categories c ON b.categoryid = c.id
    ORDER BY a.id ASC`);
};

// return one category in helpchoose based on that category's categoryid
const oneHelpByCategory = async (categoryid: number) => {
  return Query<IVegetables[]>(`
  SELECT a.name, a.id, c.category
  FROM vegetables a
  JOIN helpchoose b ON a.id = b.vegetableid
  JOIN choose_categories c ON b.categoryid = c.id
  WHERE b.categoryid = ?`, [categoryid]);
}

const oneHelpByVegId = async (vegetableid: number) => {
  return Query<IVegetables[]>(`
  SELECT a.name, a.id, c.category
  FROM vegetables a
  JOIN helpchoose b ON a.id = b.vegetableid
  JOIN choose_categories c ON b.categoryid = c.id
  WHERE b.vegetableid = ?`, [vegetableid]);
}

const postHelp = async (vegetableid: number, categoryid: number) => {
  let values = [vegetableid, categoryid];
  return Query('INSERT INTO helpchoose(vegetableid, categoryid) VALUES(?,?);--', values)
}

const putHelp = async (oldvegetableid: number, oldcategoryid: number, vegetableid: number, categoryid: number) => {
  let values = [vegetableid, categoryid, oldvegetableid, oldcategoryid];
  return Query('UPDATE helpchoose SET vegetableid = ?, categoryid = ? WHERE vegetableid = ? AND categoryid = ?;--', values)
}

const deleteHelp = async (vegetableid: number) => {
  return Query('DELETE FROM helpchoose WHERE vegetableid = ?', [vegetableid])
}

export default {
  allHelp,
  oneHelpByCategory,
  oneHelpByVegId,
  postHelp,
  putHelp,
  deleteHelp
};