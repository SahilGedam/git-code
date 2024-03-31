const express = require('express');
import { getUsers } from "../Controllers/userController";
const router = express.Router();

router.get('/getAll',getUsers);

export default router;