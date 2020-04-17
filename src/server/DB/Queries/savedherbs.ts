import { Query } from "../index";
import { IVegetables } from "../../Models/index";

const allSavedHerbs = async () => {
  return Query<IVegetables[]>(
    `SELECT * FROM myherbs
      JOIN herbsimages ON myherbs.herbsid = herbsimages.herbsid`
  );
};

const oneSavedHerbByToken = async (token: string) => {
  return Query<IVegetables[]>(
    `SELECT 
    herbs.name,
    herbs.sci_name,
    herbs.id,
    herbs.spacing,
    herbsimages.url
    FROM myherbs 
    JOIN herbs ON herbs.id = myherbs.herbsid 
    JOIN users ON users.id = myherbs.theuserid 
    JOIN herbsimages on myherbs.herbsid = herbsimages.herbsid
    JOIN tokens on users.id = tokens.userid
    WHERE tokens.token = ?`,
    [token]
  );
};

const herbCheck = async (theuserid: number, herbsid: number) => {
  return Query<IVegetables[]>(
    `SELECT herbsid FROM myherbs WHERE theuserid = ? AND herbsid = ?`,
    [theuserid, herbsid]
  );
};

// adds an herb to myherbs table. // (CM)
const postSavedHerb = async (theuserid: number, herbsid: number) => {
  return Query<IVegetables>(
    "SET @@auto_increment_increment = 1; INSERT INTO myherbs (theuserid, herbsid) VALUES (?,?)",
    [theuserid, herbsid]
  );
};

// removes an herb from a user's myherbs list based on that herb's herbsid // (CM)
const deleteSavedHerb = async (theuserid: number, herbsid: number) => {
  return Query(
    "DELETE FROM myherbs WHERE theuserid = ? AND herbsid = ?",
    [theuserid, herbsid]
  );
};

export default {
  allSavedHerbs,
  oneSavedHerbByToken,
  herbCheck,
  postSavedHerb,
  deleteSavedHerb
};
