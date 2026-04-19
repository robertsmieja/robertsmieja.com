import rss from "@astrojs/rss"
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts"
import type { APIContext } from "astro"
import { getSortedBlogPosts } from "../lib/blogUtils"

export async function GET(context: APIContext) {
  const posts = await getSortedBlogPosts()

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
