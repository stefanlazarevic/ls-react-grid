# ls-react-grid

> React implementation of grid system based on flex css property and bootstrap grid syntax.

[![NPM](https://img.shields.io/npm/v/ls-react-grid.svg)](https://www.npmjs.com/package/ls-react-grid) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
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

## License

MIT © [stefanlazarevic @ lazarevicstefan.com](https://github.com/stefanlazarevic)
