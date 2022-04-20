import { useRef } from 'react';
import { Editor, Path } from 'slate';
import { useEthers } from '@usedapp/core';
import type { IArticleInput } from '@@common/article';
import SlateEditor, { SlateEditorRef } from '../slateEditor';
import Header from './components/Header';

export interface IDrafts {
  addArticle: ({ variables }: { variables: { articleInput: IArticleInput } }) => void;
}

const getConcatedString = (editor: Editor, path: Path): string => Editor.string(editor, path);

const Drafts = (props: IDrafts) => {
  const { addArticle } = props;
  const { account } = useEthers();

  const onSubmit = () => {
    const editor = editorRef.current.getEditor();

    /** Error handle */
    if (editor.children.length < 3) {
      console.log('children length < 3\n');
      return;
    }

    const title = getConcatedString(editor, [0]);
    const description = getConcatedString(editor, [1]);
    const content = JSON.stringify(editor.children.slice(2));

    addArticle({
      variables: {
        articleInput: {
          userId: account,
          title,
          description,
          content,
        },
      },
    });

    console.log('api-->\n', title, description, content, account);
  };

  const editorRef = useRef<SlateEditorRef>({ getEditor: () => null });

  return (
    <div className="flex flex-col w-full h-full">
      <Header onSubmit={onSubmit} />
      <SlateEditor ref={editorRef} />
    </div>
  );
}

export default Drafts;