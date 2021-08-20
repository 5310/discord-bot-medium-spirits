import { VercelRequest, VercelResponse } from '@vercel/node'

export default (request: VercelRequest, response: VercelResponse): void => {
  console.log('in handler')
  try {
    console.log('in try')
    if (
      request.body.content
        .replace(/[^s$5zck3<i1|eeyo0()°]/gi, '')
        .trim()
        .match(/(s|\$|5|z)(c|k|<)(i|1|\||ee)(o|0|°|yo)/i) &&
      !request.body.content.match(/scio/i)
    )
      response.status(200).send('😒')
    console.log('exiting try')
  } catch (e) {
    response.status(400)
    console.log('exiting catch')
  }
  console.log('exiting handler')
}
