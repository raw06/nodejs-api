const UserController = require("./controllers/users.controller.js");
const ValidationMiddleware = require("../authorization/middlewares/auth.validation.middleware");
exports.routesConfig = function (app) {
  app.post("/users", [UserController.insert]);

  app.get("/users/:userId", [
    ValidationMiddleware.validJWTNeeded,
    UserController.getById,
  ]);

  app.get("/users", [ValidationMiddleware.validJWTNeeded, UserController.list]);

  app.delete("/users/:userId", [
    ValidationMiddleware.validJWTNeeded,
    UserController.removeById,
  ]);

  app.post("/auth");
};
