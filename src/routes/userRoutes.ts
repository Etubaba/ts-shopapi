 import express ,{Router}from 'express';
 import { userAuth,handRegistration, userList} from '../controllers/userController';

 const router:Router=express.Router();


 router.post('/register',handRegistration)
 router.post('/login',userAuth)
 router.get('/users',userList)

 export default router;