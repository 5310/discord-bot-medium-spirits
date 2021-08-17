import { VercelRequest, VercelResponse } from '@vercel/node'

export const manifest = {
  type: 'reply',
  description:
    'Whenever anyone calls something [adjective]-ass noun, move the hypen one word to the right',
  examples: {
    type: 'reply',
    trigger: '/[a-z]+(-| +)ass +/i',
    endpoint: '.../xkcd-hyphen',
    examples: [
      {
        prompt: `Man, that's a sweet-ass car!`,
        result: `> Man, that's a sweet ass-car!`,
      },
    ],
  },
}

export default (request: VercelRequest, response: VercelResponse): void => {
  try {
    const regex = /[a-z]+(?<ass>(-| +)ass +)/i
    const match = request.body.content.match(regex)
    const content =
      '> ' +
      request.body.content.replace(
        regex,
        match[0].replace(match.groups.ass, ' ass-'),
      )
    response.status(200).json({
      content,
    })
  } catch (e) {
    response.status(400)
  }
}
