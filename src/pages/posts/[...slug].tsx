import * as React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { getPostBySlug, getAllPostPaths, markdownToHtml, Post } from '@/utils/posts';
import Prism from 'prismjs';


type Props = {
  post: Post,
  markdownHtml: string 
}

const PostDetailPage: NextPage<Props> = ({ post, markdownHtml }) => {
  const router = useRouter();

  React.useEffect(() => {
    Prism.highlightAll();
  }, [])

  if (router.isFallback)
    return <div>Loading...</div>

  return (
    <div className="p-4 pb-24">
      <div className="">
        <h1 className="text-3xl font-bold">
          {post.metaData.title}
        </h1>
        <p className="py-1 text-gray-400">{post.metaData.date}</p>
        <div className="">
          {post.metaData.tags.map(tag => {
            return (
              <div
                key={`${post.metaData.title}-${tag}`}
                className="inline-block px-2 mr-1 bg-gray-200 rounded-full">
                  {tag}
              </div>
            )
          })}
        </div>
      </div>
      <div
        className="py-8 markdown-field"
        dangerouslySetInnerHTML={{ __html: markdownHtml }}>
      </div>
    </div>
  )
}

type Params = {
  params: {
    slug: string[]
  }
}
export const getStaticProps: GetStaticProps<Props> = async({params}: Params) => {
  const post = getPostBySlug(params.slug)
  const html = await markdownToHtml(post.markdown);

  return {
    props: {
      post: post,
      markdownHtml: html,
    }
  }
}

// TODO: StaticPathsとStaticPropsの間をTypeSafeにしたい
export const getStaticPaths = async() => {
  const posts = getAllPostPaths()
  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post
        }
      }
    }),
    fallback: false
  }
}

export default PostDetailPage

