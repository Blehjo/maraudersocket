import { Request, Response } from 'express';

export const isAuth = (req: any, res: Response, next: any) => {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
};