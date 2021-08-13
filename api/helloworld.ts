import { VercelRequest, VercelResponse } from '@vercel/node'

export default (request: VercelRequest, response: VercelResponse) => {
  console.debug(request.body)

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
      content: 'The Specter refuses to greet you...',
    })
  }
}
