import * as express from "express";
import DB from "../DB";
import { hasRole, isAdmin } from "../Auth/authCheckpoint";

const router = express.Router();




export default router;