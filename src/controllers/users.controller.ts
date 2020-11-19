import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { User } from '../models/user.model';

class UsersController {

    public async index(req: Request, res: Response) {

        try {
            const users = await User.findAll({
                where: { name: {
                    [Op.like] : '%A%'
                } },
                raw: true
            });
            console.log(users);

            res.send(users);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }

        // try {
        //     const users = await User.findAll({
        //         where: { name: 'Ana', familyName: 'Belén' },
        //         raw: true
        //     });
        //     console.log(users);

        //     res.send(users);
        // } catch (error) {
        //     console.log(error);
        //     res.sendStatus(500);
        // }

        // try {
        //     //podemos hace varias llamadas sin complicar la lógica con callbacks
        //     const users = await User.findAll({ raw: true });
        //     const userJavier = await User.findByPk(2, { raw: true });
        //     console.log(users);

        //     // res.send(users);
        //     // res.send(userJavier);
        //     if (userJavier) {//si hay resultados
        //         res.send(userJavier);
        //     } else {//si no hay resultados
        //         res.sendStatus(404);
        //     }
        // } catch (error) {
        //     console.log(error);
        //     res.sendStatus(500);
        // }


        // con callbacks que ya no se usa Callback hell!!
        // User.findAll({ raw: true })
        //     .then((users) => {
        //         User.findByPk(2)
        //             .then((result) => {

        //                 console.log(users);
        //                 res.send(users);
        //             })
        //             .catch((err) => {

        //             });
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

        // res.send('Index, la ruta funciona');
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