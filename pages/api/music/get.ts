import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const password = req.query.auth as string;
  if (password !== process.env.API_PASSWORD) {
    res.status(401).json({ error: 'Invalid password' });
    return;
  }
  
  const ids = (req.body.ids as string).split(',').map(id => id.trim());
  if (ids.length === 0) {
    res.status(400).json({ error: 'No IDs provided' });
    return;
  }

  const youtubeApiKey = process.env.YOUTUBE_API_KEY;

  

  res.status(200).json({ name: 'John Doe' })
}
