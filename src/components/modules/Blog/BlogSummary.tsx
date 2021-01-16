import * as React from 'react';
import Link from 'next/link';

type BlogSummaryProps = {
  title: string,
  date: string,
  tags: string[],
  path: string
}
const BlogSummary = (props: BlogSummaryProps) => (
  <Link href={props.path}>
    <div className="cursor-pointer hover:opacity-70">
      <h3 className="text-2xl font-bold">
        {props.title}
      </h3>
    <div className="flex my-1 text-sm">
      <p className="text-gray-400">{props.date}</p>
      <div className="flex px-4">
        {props.tags.map(tag => {
          return <div key={`${props.title}-${tag}`} className="px-2 mr-1 bg-gray-200 rounded-full">{tag}</div>
        })}
      </div>
    </div>
    </div>
  </Link>
)

export { BlogSummary }
