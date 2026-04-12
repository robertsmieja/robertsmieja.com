import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts"
import type { APIContext } from "astro"

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog")).sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
  )

  return rss({
    title: `${SITE_TITLE}'s Blog RSS Feed`,
    description: SITE_DESCRIPTION,
    site: context.site!.toString(),
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  })
}
