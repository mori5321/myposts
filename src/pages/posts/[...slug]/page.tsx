import * as React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';

const PostDetailPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  console.log(slug);

  return (
    <div>
      { slug && slug[0]  }
    </div>
  )
}

export default PostDetailPage

