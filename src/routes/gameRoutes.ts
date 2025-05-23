import express from 'express';
import { updateWinCount, updateWinStreak, addPlayHistory, getLeaderboard } from '../controllers/gameController';

const router = express.Router();

router.post('/count', updateWinCount);
router.post('/streak', updateWinStreak);
router.post('/history', addPlayHistory);
router.get('/leaderboard', getLeaderboard);

export default router; 