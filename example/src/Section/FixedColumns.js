import React from 'react';
import { Section, SectionTitle } from '../components/Section';
import { Container, Row, Column } from 'ls-react-grid'
import { Box } from '../components/Box';

export default props => (
    <Section>
        <Container>
          <Row>
            <Column>
              <SectionTitle>Fixed Column Width</SectionTitle>
            </Column>
          </Row>
          <Row>
            <Column fixed width="200px">
              <Box>200px</Box>
            </Column>
            <Column>
              <Box>auto</Box>
            </Column>
          </Row>
        </Container>
      </Section>
);
