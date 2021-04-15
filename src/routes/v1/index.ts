import { Router } from 'express';
import authenticationRoutes from './authentication';
import booksRoutes from './books';
import currenciesRoutes from './currencies';
import profileRoutes from './profile';

const router = Router();

router.use('/auth', authenticationRoutes);

router.use('/books', booksRoutes);

router.use('/currencies', currenciesRoutes);

router.use('/profile', profileRoutes);

export default router;
