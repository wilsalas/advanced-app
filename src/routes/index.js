const appRouter = require("express")();
const users = require("../components/users/routes");

appRouter.use("/users", users);

module.exports = appRouter;
