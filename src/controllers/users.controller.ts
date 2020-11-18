import { Request, Response } from 'express';

class UsersController {

    public index(req: Request, res: Response) {
        res.send('Index, la ruta funciona');
    }
    public show(req: Request, res: Response) {
        res.send('Show, la ruta funciona');
    }
}

export const usersController = new UsersController();