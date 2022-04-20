/* eslint-disable react/display-name */
import React, { useCallback, useMemo, useState, useImperativeHandle } from 'react';
import { Editable, withReact, Slate } from 'slate-react';
import {
  Editor,
  createEditor,
  Descendant,
} from 'slate';
import { withHistory } from 'slate-history';
import { LooksOne, LooksTwo, FormatQuote, FormatListNumbered, FormatListBulleted } from '@mui/icons-material';
import { initialValue } from './mock';
import { Element, Leaf, Toolbar, BlockButton } from './components';

export type SlateEditorRef = {
  getEditor: () => Editor;
};

export const SlateEditor = React.forwardRef<SlateEditorRef>(
  (_props, ref) => {
    const [value, setValue] = useState<Descendant[]>(initialValue);
    const renderElement = useCallback(props => <Element {...props} />, [])
    const renderLeaf = useCallback(props => <Leaf {...props} />, [])
    const editor = useMemo(() => withHistory(withReact(createEditor())), []);

    useImperativeHandle(ref, () => ({ getEditor: () => editor }));
  
    return (
      <Slate editor={editor} value={value} onChange={value => setValue(value)}>
        <Toolbar>
          <BlockButton format="heading" icon={<LooksOne fontSize="small" />} />
          <BlockButton format="heading-two" icon={<LooksTwo fontSize="small" />} />
          <BlockButton format="block-quote" icon={<FormatQuote fontSize="small" />} />
          <BlockButton format="numbered-list" icon={<FormatListNumbered fontSize="small" />} />
          <BlockButton format="bulleted-list" icon={<FormatListBulleted fontSize="small" />} />
        </Toolbar>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Enter some rich text…"
          spellCheck
          autoFocus
        />
      </Slate>
    );
  }
);

export default SlateEditor;