import { VercelRequest, VercelResponse } from '@vercel/node'

export const manifest = {
  type: 'reply',
  description: 'Echoes whatever is invoked as the `s` query',
  examples: {
    type: 'reply',
    trigger: '/^Marco/i',
    endpoint: '.../echo?s=Polo!',
    examples: [{ prompt: 'Marco!', result: 'Polo!' }],
  },
}

export default (request: VercelRequest, response: VercelResponse) => {
  try {
    const content = request.query.s
    if (content === undefined) throw new Error('No string given to echo')
    response.status(200).json({
      content,
    })
  } catch (e) {
    response.status(400).json({
      content: 'The spirit refuses to greet you...',
    })
  }
}
