import { VercelRequest, VercelResponse } from '@vercel/node'

const RANKS = [...'Ａ２３４５６７８９ＸＪＱＫ']
const SUITS = [...'♠♥♦♣']
const JOKER = '🃟🃏'

const zip = (xs: unknown[], ys: unknown[]) =>
  xs.flatMap((x) => ys.map((y) => `${x}${y}`))

const shuffle = (xs: unknown[]) => {
  const result = [] as unknown[]
  for (let i = 0; i < xs.length; ++i) {
    const j = Math.floor(Math.random() * (i + 1))
    if (j !== i) result[i] = result[j]
    result[j] = xs[i]
  }
  return result
}

const limit = (min: number, max: number, x: number) =>
  x < min ? min : x > max ? max : x

const DECK = [...zip(RANKS, SUITS), JOKER, JOKER]

export default (request: VercelRequest, response: VercelResponse): void => {
  try {
    const count = limit(
      1,
      DECK.length,
      parseInt(request.body.content.match(/(?<count>[0-9]+)/i)?.groups.count) ||
        1,
    )
    const cards = shuffle(DECK).slice(0, count)
    response.status(200).json({
      content: cards.join(', '),
    })
  } catch (e) {
    response.status(400).json({
      content: 'The spirit refuses to greet you...',
    })
  }
  response.status(204)
}
