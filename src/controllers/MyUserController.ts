import { Request, RequestHandler, Response } from "express";
import User from "../models/user";


const createCurrentUser: RequestHandler = async (req: Request, res: Response) => {
    try {
      const { auth0Id } = req.body;
      const existingUser = await User.findOne({ auth0Id });
  
      if (existingUser) {
        return ;
      }
  
      const newUser = new User(req.body);
      await newUser.save();
  
      res.status(201).json(newUser.toObject());
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error creating user" });
    }
  };

  export default {

    createCurrentUser,

  };