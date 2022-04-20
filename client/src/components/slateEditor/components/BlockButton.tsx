import type { ReactNode } from 'react';
import {
  Editor,
  Transforms,
  Element as SlateElement,
} from 'slate';
import { useSlate } from 'slate-react';
import { LIST_TYPES } from '../constants/listTypes';
import Button from '@@components/ui/button/button';

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: n =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
  });

  return !!match;
}

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: n =>
      LIST_TYPES.includes(
        !Editor.isEditor(n) && SlateElement.isElement(n) && n.type
      ),
    split: true,
  });

  const newProperties: Partial<SlateElement> = {
    type: isActive ? 'paragraph' : isList ? 'list-item' : format,
  };

  Transforms.setNodes(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
}

export interface IBlockButton {
  format: string;
  icon: ReactNode;
}

export const BlockButton = ({ format, icon }: IBlockButton) => {
  const editor = useSlate();

  return (
    <Button
      round
      startIcon={icon}
      bgColor={isBlockActive(editor, format) ? 'active' : 'none'}
      onMouseDown={event => {
        event.preventDefault();

        toggleBlock(editor, format);
      }} />
  );
}