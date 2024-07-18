const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const userRouter = require("./user/router");

router.use("/users", userRouter);

const authRouter = require("./auth/router");

router.use("/login", authRouter);

const creationsRouter = require("./creations/router");

router.use("/creations", creationsRouter);

/* ************************************************************************* */

module.exports = router;
