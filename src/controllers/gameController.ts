import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

// @desc    Update user's win count
// @route   POST /api/game/count
// @access  Private
export const updateWinCount = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      res.status(401).json({ message: 'Not authorized, no token' });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret_key') as { id: string };
    const user = await User.findById(decoded.id);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const { result } = req.body;
    if (result === 'win') {
      user.winCount += 1;
    } else {
      user.loseCount += 1;
    }

    await user.save();
    res.json({ winCount: user.winCount, loseCount: user.loseCount });
  } catch (error) {
    res.status(400).json({ message: 'Error updating win count' });
  }
};

// @desc    Update user's win streak
// @route   POST /api/game/streak
// @access  Private
export const updateWinStreak = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      res.status(401).json({ message: 'Not authorized, no token' });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret_key') as { id: string };
    const user = await User.findById(decoded.id);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const { result } = req.body;
    if (result === 'win') {
      user.winCount += 1;
      user.winStreak += 1;
    } else {
      user.loseCount += 1;
      user.winStreak = 0;
    }

    await user.save();
    res.json({ winCount: user.winCount, loseCount: user.loseCount, winStreak: user.winStreak });
  } catch (error) {
    res.status(400).json({ message: 'Error updating win streak' });
  }
};

// @desc    Add play history
// @route   POST /api/game/history
// @access  Private
export const addPlayHistory = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      res.status(401).json({ message: 'Not authorized, no token' });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret_key') as { id: string };
    const user = await User.findById(decoded.id);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const { result } = req.body;
    user.playHistory.push({ date: new Date(), result });
    await user.save();

    res.json({ message: 'Play history added successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error adding play history' });
  }
};

// @desc    Get leaderboard
// @route   GET /api/game/leaderboard
// @access  Public
export const getLeaderboard = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find()
      .select('username winStreak')
      .sort({ winStreak: -1 })
      .limit(10);

    res.json(users);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching leaderboard' });
  }
}; 