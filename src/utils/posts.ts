import fs from "fs";
import glob from "glob";
import { join } from "path";
import remark from "remark";
import html from "remark-html";
import matter from 'gray-matter';

const postDirPrefix = "src/_posts/";
const postsDirectory = join(process.cwd(), postDirPrefix)

export type Post = {
  metaData: MetaData,
  markdown: string,
  path: string
}

type MetaData = {
  title: string,
  date: string,
  tags: string[],
}

// TODO: Error Handling
export const getPostBySlug = (slug: string[]): Post => {
  const path = slug.join("/");
  const fullPath = join(postsDirectory, `${path}.md`)
  const fileContent = fs.readFileSync(fullPath, 'utf8');
  const { data, content: markdown } = matter(fileContent);
  
  const metaData: MetaData ={
    title: data.title ?? "No Title",
    date: data.date ?? "No Date",
    tags: data.tags ?? []
  }

  return {
    metaData: metaData,
    markdown: markdown,
    path: "posts/" + path
  }
}

// TODO: Error Handling
// getAllPosts returns path for each post.
// [
//    ["posts", "20200101-hello"],
//    ["posts", "20200202-goodbye"]
// ]
export const getAllPostPaths = (): string[][] => {
  const posts = glob.sync(`${postDirPrefix}/**/*.md`)
  return posts
          .map(file => file.split(postDirPrefix).pop())
          .map(slug => (slug as string).replace(/\.md$/, '').split('/'))
              
}

export const markdownToHtml = async (markdown: string) => {
  const result = await remark().use(html).process(markdown);
  return result.toString()
}

