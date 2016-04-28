import setupArticle from './components/article';
import setupBlocklist from './block-list';
import setupEmbed from './components/embed';

const setup = opts => setupArticle({
  blockList: setupBlocklist({
    Embed: setupEmbed(opts),
    renderEmptyTextNodes: opts.renderEmptyTextNodes
  })
});

module.exports = setup;
