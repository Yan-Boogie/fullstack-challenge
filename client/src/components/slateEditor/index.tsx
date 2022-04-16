import { useCallback, useMemo, useState } from 'react';
import isHotkey from 'is-hotkey';
import { Editable, withReact, useSlate, Slate } from 'slate-react';
import {
  Editor,
  Transforms,
  createEditor,
  Descendant,
  Element as SlateElement,
} from 'slate';
import { withHistory } from 'slate-history';
import { LooksOne, LooksTwo, FormatQuote, FormatListNumbered, FormatListBulleted } from '@mui/icons-material';
import { HOTKEYS } from './constants/hotKeys';
import { initialValue } from './mock';
import { Element, Leaf, Toolbar, BlockButton } from './components';

export const SlateEditor = () => {
  const [value, setValue] = useState<Descendant[]>(initialValue);
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      <Toolbar>
        <BlockButton format="heading-one" icon={<LooksOne fontSize="small" />} />
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
        // onKeyDown={event => {
        //   for (const hotkey in HOTKEYS) {
        //     if (isHotkey(hotkey, event as any)) {
        //       event.preventDefault()
        //       const mark = HOTKEYS[hotkey]
        //       toggleMark(editor, mark)
        //     }
        //   }
        // }}
      />
    </Slate>
  );
};

export default SlateEditor;