import element from 'magic-virtual-element';
import setupBlockquote from './components/blockquote';
import startswith from 'lodash.startswith';

const isText = type => type === 'paragraph' || startswith(type, 'header');

const hasContent = ({children}) =>
  children.some(child => child.type !== 'linebreak' &&
    (child.content && child.content.trim()) || child.mark);

const setup = ({Paragraph, Header, Embed, renderEmptyTextNodes}) => {
  const types = {
    blockquote: ({children, pullQuote}) => <Blockquote items={children} pullQuote={pullQuote} />,
    embed: item => Embed.test(item) ? <Embed {...item} /> : '',
    header1: ({children}) => <Header level={1} items={children} />,
    header2: ({children}) => <Header level={2} items={children} />,
    header3: ({children}) => <Header level={3} items={children} />,
    header4: ({children}) => <Header level={4} items={children} />,
    header5: ({children}) => <Header level={5} items={children} />,
    header6: ({children}) => <Header level={6} items={children} />,
    paragraph: ({children}) => <Paragraph items={children} />
  };

  const blockList = items => items.map(renderItem);
  const Blockquote = setupBlockquote({blockList});
  const renderItem = item => {
    const {type} = item;
    const typeFn = types[type];
    if (!typeFn || (!renderEmptyTextNodes && isText(type) && !hasContent(item))) {
      return '';
    }

    return typeFn(item);
  };

  return blockList;
};

export default setup;
