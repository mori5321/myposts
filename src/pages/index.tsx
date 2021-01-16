import * as React from 'react';
import { GetStaticProps,NextPage } from 'next';
import { BlogSummary } from '@/components/modules/Blog';
import { getAllPostPaths, getPostBySlug, Post } from '@/utils/posts';


type Props = {
  posts: Post[],
  paths: string[][],
}
const TopPage: NextPage<Props> = (props) => {
  if (!props.posts) {
    return <>Loading...</>
  }

  return (
    <div>
      <div className="container p-4">
        {
          props.posts.map(post => {
            return (
              <div className="pb-6" key={post.metaData.title}>
                  <BlogSummary
                    title={post.metaData.title}
                    date={post.metaData.date}
                    tags={post.metaData.tags}
                    path={post.path}
                  />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}


export const getStaticProps: GetStaticProps<Props> = async() => {
  const postPaths = getAllPostPaths()
  const posts = postPaths.map((path) => getPostBySlug(path))

  return {
    props: {
      paths: postPaths,
      posts: posts
    }
  }
}

export default TopPage;
