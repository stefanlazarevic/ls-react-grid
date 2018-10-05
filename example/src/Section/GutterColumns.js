import React from 'react';
import { Section, SectionTitle } from '../components/Section';
import { Container, Row, Column } from 'ls-react-grid'
import { Box } from '../components/Box';

export default props => (
      <Section>
        <Container>
          <Row>
            <Column>
              <SectionTitle>Gutter</SectionTitle>
            </Column>
          </Row>
          <Row>
            <Column noGutter xs={3}>
              <Box>3</Box>
            </Column>
            <Column noGutter xs={3}>
              <Box>3</Box>
            </Column>
            <Column noGutter xs={3}>
              <Box>3</Box>
            </Column>
            <Column noGutter xs={3}>
              <Box>3</Box>
            </Column>
          </Row>
        </Container>
      </Section>
);
