import { VercelRequest, VercelResponse } from '@vercel/node'

export const manifest = {
  type: 'reply',
  description: 'Says hello',
  examples: {
    type: 'reply',
    trigger: '/^(hullo|hello|hi|hey).*/i',
    endpoint: '.../hello',
    examples: [
      { prompt: 'Hi!', result: 'Hello from the beyond!' },
      { prompt: 'Hello World!', result: 'Hello from the World!' },
    ],
  },
}

export default (request: VercelRequest, response: VercelResponse): void => {
  try {
    const prompt = request.body.content.trim()
    const regex = /^(hullo|hello|hi|hey) *(?<target>.*)/i

    response.status(200).json({
      content: `Hello from ${
        prompt.match(regex).groups.target || 'the beyond!'
      }!`,
    })
  } catch (e) {
    response.status(400).json({
      content: 'The spirit refuses to greet you...',
    })
  }
}
