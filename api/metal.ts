import { VercelRequest, VercelResponse } from '@vercel/node'

export default (request: VercelRequest, response: VercelResponse): void => {
  try {
    response.status(200).send('🤘🤟')
  } catch (e) {
    response.status(400)
  }
  response.status(204)
}
