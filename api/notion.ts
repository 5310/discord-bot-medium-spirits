import { VercelRequest, VercelResponse } from '@vercel/node'
export default (request: VercelRequest, response: VercelResponse): void => {
  try {
    console.log(process.env.NOTION_TOKEN_RPGING)
    response.status(501).json({
      content: 'The Notion spirit is not ready yet...',
    })
  } catch (e) {
    response.status(400).json({
      content: 'The spirit cannot understand you...',
    })
  }
}
