import React from 'react';
import { Section, SectionTitle } from '../components/Section';
import { Container, Row, Column } from 'ls-react-grid'
import { Box } from '../components/Box';

export default props => (
      <Section>
        <Container>
          <Row>
            <Column>
              <SectionTitle>Reversed Direction</SectionTitle>
            </Column>
          </Row>
          <Row reversed>
            <Column>
              <Box>1</Box>
            </Column>
            <Column>
              <Box>2</Box>
            </Column>
            <Column>
              <Box>3</Box>
            </Column>
            <Column>
              <Box>4</Box>
            </Column>
          </Row>
        </Container>
      </Section>
);
