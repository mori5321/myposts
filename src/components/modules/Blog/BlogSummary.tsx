import * as React from 'react';

type BlogSummaryProps = {
  title: string,
  date: string,
  tags: string[],
}
const BlogSummary = (props: BlogSummaryProps) => (
  <div className="cursor-pointer hover:opacity-70">
    <h3 className="text-2xl font-bold">
      {props.title}
    </h3>
    <div className="flex my-1 text-sm">
      <p className="text-gray-400">{props.date}</p>
      <div className="flex px-4">
        {props.tags.map(tag => {
          return <div className="px-2 bg-gray-200 rounded-full">{tag}</div>
        })}
      </div>
    </div>
  </div>
)

export { BlogSummary }
