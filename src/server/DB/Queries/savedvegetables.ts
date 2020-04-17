import { Query } from "../index";
import { IVegetables } from "../../Models/index";

const allSavedVegs = async () => {
  return Query<IVegetables[]>("SELECT * FROM myvegetables a JOIN images b ON a.vegetableid = b.vegetableid");
};

// returns the firstnames of the users and the vegs that particular user has in their myvegs list based on that user's userid // (CM)
const oneSavedVegByToken = async (token: string) => {
  return Query<IVegetables[]>(
    `SELECT 
    vegetables.name,
    vegetables.sci_name,
    vegetables.id,
    vegetables.spacing,
    images.url
    FROM myvegetables 
    JOIN vegetables ON vegetables.id = myvegetables.vegetableid 
    JOIN users ON users.id = myvegetables.theuserid 
    JOIN images on myvegetables.vegetableid = images.vegetableid
    JOIN tokens on users.id = tokens.userid
    WHERE tokens.token = ?
    ORDER BY vegetables.name ASC`,
    [token]
  );
  // ('SELECT * FROM myvegetables WHERE theuserid = ?', [theuserid])
};

// returns what users have a particular veg in their myvegs list based on that veg's vegetableid // (CM)
// const oneSavedVegByVegid = (vegetableid: number) => {
//   return Query<IVegetables[]>(
//     "SELECT * FROM myvegetables WHERE vegetableid = ?",
//     [vegetableid]
//   );
// };

const vegCheck = async (theuserid: number, vegetableid: number) => {
  return Query<IVegetables[]>(
    `SELECT vegetableid FROM myvegetables WHERE theuserid = ? AND vegetableid = ?`, [theuserid, vegetableid]
  )
}

// adds a veg to myvegs table. May need to do a WHERE query to make it user specific // (CM)
const postSavedVeg = async (theuserid: number, vegetableid: number) => {
  return Query<IVegetables>(
    "SET @@auto_increment_increment = 1; INSERT INTO myvegetables (theuserid, vegetableid) VALUES (?,?)",
    [theuserid, vegetableid]
  );
};

// removes a veg from a user's myvegs list based on that veg's vegetableid // (CM)
const deleteSavedVeg = async (theuserid: number, vegetableid: number) => {
  return Query("DELETE FROM myvegetables WHERE theuserid = ? AND vegetableid = ?", [theuserid, vegetableid]);
};

export default {
  allSavedVegs,
  oneSavedVegByToken,
  // oneSavedVegByVegid,
  vegCheck,
  postSavedVeg,
  deleteSavedVeg,
};
