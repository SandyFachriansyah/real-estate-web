import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";


export const verifyToken = (req, res, next) => {
    const token = req.cookies.acces_token;
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return next(errorHandler(403, 'Forbidden'));
  
      req.user = user;
      next();
    });
  };
