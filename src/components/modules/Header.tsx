import * as React from 'react';
import Link from 'next/link';

const Header = () => (
  <>
    <div className="fixed top-0 left-0 w-screen bg-white bg-opacity-90">
      <div className="container max-w-4xl p-4 mx-auto">
        <h1 className="text-2xl font-bold">        
          <Link href="/">
            @moss5321
          </Link>
        </h1>
     </div>
    </div>
  </>
)

export { Header }
