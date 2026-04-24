import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import { sortPosts } from "../lib/blogUtils"
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts"
import type { APIContext } from "astro"

export async function GET(context: APIContext) {
  const posts = sortPosts(await getCollection("blog"))

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
