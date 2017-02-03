import setupArticle from './components/article';
import setupBlocklist from './block-list';
import setupEmbed from './components/embed';
import setupRenderText from './render-text';
import setupHeader from './components/header';
import setupParagraph from './components/paragraph';
import createHtmlRender from './html';

const setup = opts => {
  const renderText = setupRenderText(opts);

  return setupArticle({
    blockList: setupBlocklist({
      Embed: setupEmbed({
        embeds: opts.embeds || {},
        customCaption: opts.customCaption,
        renderText
      }),
      Header: setupHeader({renderText}),
      Paragraph: setupParagraph({renderText}),
      renderEmptyTextNodes: opts.renderEmptyTextNodes
    })
  });
};

setup.html = createHtmlRender(setup);
module.exports = setup;
