import express from 'express';


const router = express.Router();

router.get('/', getUsers );
router.get('/', createUser);
router.get('/:id', updateUser);
router.get('/:id', deleteUser);



export default router;