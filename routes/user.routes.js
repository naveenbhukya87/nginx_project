const { allUsers, singleUser, insertUser, updateUser, deleteUser } = require("../controllers/user.controller");

const router = require("express").Router();

router.get("/all", allUsers)
router.post("/find", singleUser)
router.post("/insert", insertUser)
router.put("/update", updateUser)
router.post("/delete", deleteUser)


module.exports = router;