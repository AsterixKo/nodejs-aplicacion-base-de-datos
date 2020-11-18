import { Request, Response } from 'express';
import { User } from '../models/user.model';

class UsersController {

    public index(req: Request, res: Response) {
        res.send('Index, la ruta funciona');
    }
    public show(req: Request, res: Response) {
        User.findAll({
            raw: true
        })
            .then((results) => {
                console.log(results)
            })
            .catch((error) => {
                console.log(error)
            });
        res.send('Show, la ruta funciona');
    }
}

export const usersController = new UsersController();