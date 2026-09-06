import router from 'express';
import { registerUser } from '../controllers/user.controller.js';

const routes=router();
routes.route('/register').post(registerUser);



export default routes;