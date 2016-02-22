import {element} from 'deku';
import FigureCaption from './figure-caption';

const setup = ({embeds}) => ({
  test: ({embedType}) => embeds[embedType],
  render: ({props}) => {
    const {embedType, caption} = props;
    const embed = embeds[embedType] && embeds[embedType](props);

    const captionElm = (caption && caption.length > 0)
      ? <FigureCaption items={caption} /> : '';

    return <figure>{embed}{captionElm}</figure>;
  }
});

export default setup;
