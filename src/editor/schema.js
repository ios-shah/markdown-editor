const schema = {
  blocks: {
    'heading-one': { nodes: [{ objects: ['text'] }], marks: [''] },
    'heading-two': { nodes: [{ objects: ['text'] }], marks: [''] },
    'heading-three': { nodes: [{ objects: ['text'] }], marks: [''] },
    'heading-four': { nodes: [{ objects: ['text'] }], marks: [''] },
    'heading-five': { nodes: [{ objects: ['text'] }], marks: [''] },
    'heading-six': { nodes: [{ objects: ['text'] }], marks: [''] },
    'block-quote': { marks: [''] },
    'ol-list': { marks: [''] },
    'ul-list': { marks: [''] },
    'code-block': { marks: [''] },
    'horizontal-rule': {
      isVoid: true,
    },
    link: { nodes: [{ objects: ['text'] }] },
  },
  document: {
    nodes: [
      {
        types: [
          'paragraph',
          'heading-one',
          'heading-two',
          'heading-three',
          'heading-four',
          'heading-five',
          'heading-six',
          'block-quote',
          'code-block',
          'code',
          'horizontal-rule',
          'ul-list',
          'ol-list',
          'link',
        ],
        min: 0,
      },
    ],
  },
};

export default schema;

