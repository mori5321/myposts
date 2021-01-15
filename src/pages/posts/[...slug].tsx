import * as React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { getPostBySlug, getAllPosts, markdownToHtml } from '@/utils/posts';

type Props = {
  post: {
    content: string
  }
}

const PostDetailPage: NextPage<Props> = ({ post }) => {
  const router = useRouter();
  const { slug } = router.query as { slug: string[] }; // compromising use of 'as'

  console.log("Slug", slug);
  if (router.isFallback)
    return <div>Loading...</div>

  return (
    <div className="p-4">
      <div
        className="markdown-field"
        dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}

type Params = {
  params: {
    slug: string[]
  }
}
export const getStaticProps = async({params}: Params) => {
  const post = getPostBySlug(params.slug)
  const html = await markdownToHtml(post)

  return {
    props: {
      post: {
        content: html
      }
    }
  }
}

// TODO: StaticPathsとStaticPropsの間をTypeSafeにしたい
export const getStaticPaths = async() => {
  const posts = getAllPosts()
  console.log("Slug:Posts", posts);
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

