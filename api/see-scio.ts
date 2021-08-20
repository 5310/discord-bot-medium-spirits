import { VercelRequest, VercelResponse } from '@vercel/node'

export default (request: VercelRequest, response: VercelResponse): void => {
  try {
    if (
      request.body.content
        .replace(/[^s$5zck3<i1|eeyo0()°]/gi, '')
        .trim()
        .match(/(s|\$|5|z)(c|k|<)(i|1|\||ee)(o|0|°|yo)/i) &&
      !request.body.content.match(/scio/i)
    )
      response.status(200).send('😒') // ok
  } catch (e) {
    response.status(400) // bad request
  }
  response.status(204) // no content
}
