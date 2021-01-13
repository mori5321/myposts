import * as React from 'react';
import { NextPage } from 'next';
import { BlogSummary } from '@/components/modules/Blog';

const TopPage: NextPage = () => {
  return (
    <div>
      <div className="container p-4">
        <div className="pb-6">
          <BlogSummary
            title="React, TypeScript and Tailwind CSS"
            date="2020-12-01"
            tags={["React.js", "TypeScript", "Tailwind"]}
          />
        </div>
        <div className="pb-6">
          <BlogSummary
            title="9 reasons that you'd better use rocon rather than react-router"
            date="2020-12-01"
            tags={["React.js", "TypeScript", "Tailwind"]}
          />
        </div>
        <div className="pb-6">
          <BlogSummary
            title="CSS Modules in WASM/Rust"
            date="2020-12-01"
            tags={["React.js", "TypeScript", "Tailwind"]}
          />
        </div>
        <div className="pb-6">
          <BlogSummary
            title="React, TypeScript and Tailwind CSS"
            date="2020-12-01"
            tags={["React.js", "TypeScript", "Tailwind"]}
          />
        </div>
      </div>
    </div>
  )
}

export default TopPage;
