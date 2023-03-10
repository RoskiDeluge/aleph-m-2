// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const {prompt, chatId, model, session} = req.body;
    if (!prompt) {
        res.status(400).json({answer: "Please provide a prompt."})
        return;
    }

    if (!chatId) {
        res.status(400).json({answer: "Please provide a valid chat ID."})
        return;
    }

    // ChatGPT query

    const response = await 
  res.status(200).json({ name: 'John Doe' })
}
