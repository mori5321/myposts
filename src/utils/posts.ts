import fs from "fs";
import glob from "glob";
import { join } from "path";
import remark from "remark";
import html from "remark-html";

const postDirPrefix = "_posts/";
const postsDirectory = join(process.cwd(), postDirPrefix)


// TODO: Error Handling
const getPostBySlug = (slug: string[]): string => {
  const path = slug.join("/");
  const fullPath = join(postsDirectory, `${path}.md`)
  const markdown = fs.readFileSync(fullPath, 'utf8');
  // console.log("Markdown", markdown)
  return markdown
}

// TODO: Error Handling
const getAllPosts = (): string[][] => {
  const posts = glob.sync(`${postDirPrefix}/**/*.md`)
  return posts
          .map(file => file.split(postDirPrefix).pop())
          .map(slug => (slug as string).replace(/\.md$/, '').split('/'))
              
}

const markdownToHtml = async (markdown: string) => {
  const result = await remark().use(html).process(markdown);
  return result.toString()
}

export { getPostBySlug, getAllPosts, markdownToHtml }
