import type { RenderLeafProps } from 'slate-react';
import type { Text } from 'slate';
import { CustomText } from '../interface';

const isCustomText = (el: Text): el is CustomText => (
  'bold' in el
  || 'code' in el
  || 'italic' in el
  || 'underline' in el
);

export const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  if (isCustomText(leaf)) {
    if (leaf.bold) {
      children = <strong>{children}</strong>
    }

    if (leaf.code) {
      children = <code>{children}</code>
    }

    if (leaf.italic) {
      children = <em>{children}</em>
    }

    if (leaf.underline) {
      children = <u>{children}</u>
    }
  }

  return <span {...attributes}>{children}</span>
};