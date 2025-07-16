import { DriverData } from '../services/supabase';

export const generatePrompt = (driverData: DriverData, question: string): string => {
  const { trips_this_week, total_earnings, active_warnings } = driverData;

  return `
    You are a helpful assistant for a taxi driver on the NavEdge platform.
    Driver Info:
    - Trips completed this week: ${trips_this_week}
    - Total earnings: ${total_earnings} AED
    - Active warnings: ${active_warnings.length ? active_warnings.join(', ') : 'None'}
    The driver asked: "${question}"
    Respond clearly and helpfully.
  `;
};