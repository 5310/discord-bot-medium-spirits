import { VercelRequest, VercelResponse } from '@vercel/node'

export default (request: VercelRequest, response: VercelResponse) => {
  console.log(request)
  const prompt = request.body.prompt.trim()

  const [pattern, flags] = request.body.regex.slice(1).split('/')
  const regex = new RegExp(pattern, flags)

  response
    .status(200)
    .send(`Hello from ${prompt.match(regex).groups.target ?? 'the beyond!'}!`)
}
