import React from 'react';
import { Section, SectionTitle } from '../components/Section';
import { Container, Row, Column } from 'ls-react-grid'
import { Box } from '../components/Box';

export default props => (
          <Section>
        <Container>
          <Row>
            <Column>
              <SectionTitle>Responsive Columns</SectionTitle>
            </Column>
          </Row>
          <Row>
            <Column xs={12} sm={4}>
              <Box>xs=12 sm=4</Box>
            </Column>
            <Column xs={12} sm={8}>
              <Box>xs=12 sm=8</Box>
            </Column>
          </Row>
          <Row>
            <Column xs={6} sm={8} md={10}>
              <Box>xs=6 sm=8 md=10</Box>
            </Column>
            <Column xs={6} sm={4} md={2}>
              <Box>xs=6 sm=4 md=2</Box>
            </Column>
          </Row>
          <Row>
            <Column xs={12} lg={6}>
              <Box>xs=12 lg=6</Box>
            </Column>
            <Column xs={12} lg={6}>
              <Box>xs=12 lg=6</Box>
            </Column>
          </Row>
          <Row>
            <Column xs={5} xlg={12}>
              <Box>xs=5 xlg=12 </Box>
            </Column>
            <Column xs={7} xlg={12}>
              <Box>xs=7 xlg=12</Box>
            </Column>
          </Row>
        </Container>
      </Section>
);
