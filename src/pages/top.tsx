import * as React from 'react';
import { GetStaticProps,NextPage } from 'next';
import { BlogSummary } from '@/components/modules/Blog';
import { getAllPosts, getPostBySlug } from '@/utils/posts';


type Props = {
  posts: string[],
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
              <div className="pb-6">
                <BlogSummary
                  title={post.substr(0, 10)}
                  date="2020-12-01"
                  tags={["React.js", "TypeScript", "Tailwind"]}
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
  const postPaths = getAllPosts()
  const posts = postPaths.map((path) => getPostBySlug(path))

  console.log(posts);
  return {
    props: {
      paths: postPaths,
      posts: posts
    }
  }
}

export default TopPage;
