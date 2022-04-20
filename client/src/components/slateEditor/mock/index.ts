import type { Descendant } from 'slate';

export const initialValue: Descendant[] = [
  {
    type: 'heading',
    children: [
      { text: '標題' },
    ],
  },
  {
    type: 'heading-two',
    children: [
      { text: '副標題' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      { text: '內文' },
    ],
  },
]