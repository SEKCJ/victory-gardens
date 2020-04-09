import { Query } from "../index";
import { IVegetables } from "../../Models/index";

const allMyvegs = () => {
  return Query<IVegetables[]>("SELECT * FROM myvegetables");
};

// returns the names of the vegs a particular user has in their myvegs list based on that user's userid // (CM)
const oneMyvegByTheuserid = (theuserid: number) => {
  return Query<IVegetables[]>(
    "SELECT users.firstname, vegetables.name FROM myvegetables JOIN vegetables ON vegetables.id = myvegetables.vegetableid JOIN users ON users.id = myvegetables.theuserid WHERE theuserid = ?",
    [theuserid]
  );
  // ('SELECT * FROM myvegetables WHERE theuserid = ?', [theuserid])
};

// returns what users have a particular veg in their myvegs list based on that veg's vegetableid // (CM)
const oneMyvegByVegid = (vegetableid: number) => {
  return Query<IVegetables[]>(
    "SELECT * FROM myvegetables WHERE vegetableid = ?",
    [vegetableid]
  );
};

// adds a veg to myvegs table. May need to do a WHERE query to make it user specific // (CM)
const postMyveg = (theuserid: number, vegetableid: number) => {
  return Query<IVegetables>(
    "SET @@auto_increment_increment = 1; INSERT INTO myvegetables (theuserid, vegetableid) SET (?,?)",
    [theuserid, vegetableid]
  );
};

// removes a veg from a user's myvegs list based on that veg's vegetableid // (CM)
const deleteMyveg = (vegetableid: number) => {
  return Query("DELETE FROM myvegetables WHERE vegetableid = ?", [vegetableid]);
};

export default {
  allMyvegs,
  oneMyvegByTheuserid,
  oneMyvegByVegid,
  postMyveg,
  deleteMyveg,
};
