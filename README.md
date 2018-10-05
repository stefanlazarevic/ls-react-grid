# ls-react-grid

[![NPM](https://img.shields.io/npm/v/ls-react-grid.svg)](https://www.npmjs.com/package/ls-react-grid) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> React implementation of grid system based on flex css property, styled-components and bootstrap grid syntax.

Like Bootstrap, React Grid system uses a series of containers, rows, and columns to layout and align content. It is built with [styled-components](https://www.styled-components.com/docs/basics) and [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) and is fully responsive.

LS React Grid does not come with styled-components to prevent known issue #[several instances of styled-components](https://www.styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page) and because of that it is required to have library in your local node_modules.

## Install

```bash
npm install --save styled-components@3.4.9

npm install --save ls-react-grid
```

## Usage

```jsx
import React, { Component } from 'react'

import { Container, Row, Column } from 'ls-react-grid'

class Example extends Component {
  render () {
    return (
      <Container>
        <Row>
          <Column>
            <h1>Hello ls-react-grid</h1>
          </Column>
        </Row>
      </Container>
    )
  }
}
```

## Demo

See what you can do with this package [here](https://stefanlazarevic.github.io/ls-react-grid/).

## Component Documentation

- [Container](https://github.com/stefanlazarevic/ls-react-grid/blob/master/docs/Container.md)
- [Row](https://github.com/stefanlazarevic/ls-react-grid/blob/master/docs/Row.md)
- [Column](https://github.com/stefanlazarevic/ls-react-grid/blob/master/docs/Column.md)
## License

MIT © [stefanlazarevic @ lazarevicstefan.com](https://github.com/stefanlazarevic)
