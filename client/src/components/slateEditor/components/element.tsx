import type { RenderElementProps } from 'slate-react';

export const Element = ({ attributes, children, element }: RenderElementProps) => {
  switch (element.type) {
    case 'block-quote':
      return <blockquote className="border-l-2 px-2 m-4 text-gray-400" {...attributes}>{children}</blockquote>
    case 'bulleted-list':
      return <ul className="m-4 pl-10 list-disc" {...attributes}>{children}</ul>
    case 'numbered-list':
      return <ol className="m-4 pl-10 list-decimal" {...attributes}>{children}</ol>
    case 'heading':
      return <h1 className="m-4 font-bold text-4xl" {...attributes}>{children}</h1>
    case 'heading-two':
      return <h2 className="m-4 font-bold text-2xl" {...attributes}>{children}</h2>
    case 'list-item':
      return <li {...attributes}>{children}</li>
    default:
      return <p className="m-4" {...attributes}>{children}</p>
  }
};
