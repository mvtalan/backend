import { body, ValidationChain, validationResult } from "express-validator";
import { Request, Response, NextFunction, RequestHandler } from "express";

const handleValidationErrors = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  };

export const validateMyUserRequest = [
    body("name").isString().notEmpty().withMessage("Name must be a string"),
    body("addressLine1")
      .isString()
      .notEmpty()
      .withMessage("AddressLine1 must be a string"),
    body("city").isString().notEmpty().withMessage("City must be a string"),
    body("country").isString().notEmpty().withMessage("Country must be a string"),
    // handleValidationErrors,
  ];


// export const validateMyUserRequest: (RequestHandler | ValidationChain)[] = [
//   body("name").isString().notEmpty().withMessage("Name must be a string"),
//   body("addressLine1").isString().notEmpty().withMessage("AddressLine1 must be a string"),
//   body("city").isString().notEmpty().withMessage("City must be a string"),
//   body("country").isString().notEmpty().withMessage("Country must be a string"),
  // async (req: Request, res: Response, next: NextFunction) => {
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     return res.status(400).json({ errors: errors.array() });
  //   }
  //   next();
  // }
// ];