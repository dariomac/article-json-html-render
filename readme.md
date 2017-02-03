# article-json-html-render 

Base for html-based article-json renderer, such as [article-json-to-amp](https://www.npmjs.com/package/article-json-to-amp)

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install article-json-html-render --save
```

## Usage

```js
import setupArticle from 'article-json-html-render';
import {element, string} from 'deku';

const items = [
  {type: 'paragraph', children: [{content: 'foo'}]},
  {type: 'embed', embedType: 'image', src: 'http://example.com/image.jpg'}
];

// Render into Deku component tree
const Article = setupArticle({
  embeds: {
    image: embed => <img src={embed.src} />
  }
});

console.log(string.render(<Article items={items} />));

// Render into html
const renderHtml = setupArticle.html();
console.log(renderHtml(items));
```

## Tests

```sh
npm install
npm test
```

## Dependencies

- [lodash.startswith](https://github.com/lodash/lodash): The lodash method `_.startsWith` exported as a module.
- [magic-virtual-element](https://github.com/dekujs/magic-virtual-element): Build virtual tree elements with magic attributes

## Dev Dependencies

- [babel-cli](https://github.com/babel/babel/tree/master/packages): Babel command line.
- [babel-core](https://github.com/babel/babel/tree/master/packages): Babel compiler core.
- [babel-plugin-transform-react-jsx](https://github.com/babel/babel/tree/master/packages): Turn JSX into React function calls
- [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages): Babel preset for all es2015 plugins.
- [babel-tape-runner](https://github.com/wavded/babel-tape-runner): Babel + Tape for running your ES Next tests
- [deku](https://github.com/dekujs/deku): Create view components using a virtual DOM
- [faucet](https://github.com/substack/faucet): human-readable TAP summarizer
- [package-json-to-readme](https://github.com/zeke/package-json-to-readme): Generate a README.md from package.json contents
- [semistandard-deku](https://github.com/micnews/semistandard-deku): All the goodness of `feross/standard` with semicolons sprinkled on top. Adapted for deku
- [snazzy](https://github.com/feross/snazzy): Format JavaScript Standard Style as Stylish (i.e. snazzy) output
- [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers


## License

MIT

_Generated by [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_
