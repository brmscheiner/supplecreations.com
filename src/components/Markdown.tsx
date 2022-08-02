import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownProps {
  content: string;
}

export default function Markdown(props: MarkdownProps): JSX.Element {
  const { content } = props;
  return (
    <ReactMarkdown>
      {content}
    </ReactMarkdown>
  )
}
