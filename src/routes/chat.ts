import express, { Request, Response } from 'express';
import { fetchDriverData } from '../services/supabase';
import { generatePrompt } from '../utils/promptBuilder';
import { getGPTResponse } from '../services/gpt';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { driver_id, question } = req.body;

    // Fetch driver data from Supabase
    const driverData = await fetchDriverData(driver_id);

    // Build GPT prompt
    const prompt = generatePrompt(driverData, question);

    // Get GPT response
    const gptResponse = await getGPTResponse(prompt);

    // Send response to client
    res.json({ response: gptResponse });
  } catch (error) {
    console.error('Error in /chat route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;