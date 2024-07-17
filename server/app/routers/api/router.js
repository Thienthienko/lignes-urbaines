const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const userRouter = require("./user/router");

router.use("/users", userRouter);

/* ************************************************************************* */

module.exports = router;
