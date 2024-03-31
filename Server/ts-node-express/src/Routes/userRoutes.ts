const express = require("express");
import {
  createUser,
  deleteUser,
  findById,
  getUsers,
  updateUser,
} from "../Controllers/userController";
const router = express.Router();

router.get("/getAll", getUsers);
router.get("/findById/:user_id", findById);
router.post("/createUser", createUser);
router.put("/update/:user_id", updateUser);
router.delete("/deleteUser/:user_id", deleteUser);

export default router;
