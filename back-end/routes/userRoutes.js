import express from "express";
import { createUser, deleteuser, getUsers, getUsersById, updateUser } from "../controller/userController.js";

const Router = express.Router();

Router.get('/users', getUsers);
Router.get('/users/:id', getUsersById);
Router.post('/users', createUser);
Router.patch('/users/:id', updateUser);
Router.delete('/users/:id', deleteuser);


export default Router;