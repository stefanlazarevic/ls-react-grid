import React, { Component, Fragment } from 'react'

import { Container, Row, Column } from 'ls-react-grid'
import styled from 'styled-components'

import FixedColumns from './Section/FixedColumns'
import ResponsiveColumns from './Section/ResponsiveColumns'
import AutoWidthColumns from './Section/AutoWidthColumns'
import GutterColumns from './Section/GutterColumns'

const Header = styled.div`
  background-color: #f5f5f5;
  color: #444;
  text-align: center;
  border-bottom: 1px solid #eee;
  padding: 2rem 0;
  h1 {
    margin-top: 0;
  }
`;

export default class App extends Component {
  render () {
    return (
      <Fragment>
        <Header>
          <Container>
            <Row>
              <Column>
                <h1>LS React Grid</h1>
              </Column>
            </Row>
          </Container>
        </Header>
        <FixedColumns />
        <ResponsiveColumns />
        <AutoWidthColumns />
        <GutterColumns />
      </Fragment>
    )
  }
}
