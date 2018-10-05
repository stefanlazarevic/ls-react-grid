import React from 'react';
import { Section, SectionTitle } from '../components/Section';
import { Container, Row, Column } from 'ls-react-grid'
import { Box } from '../components/Box';

export default props => (
    <Section>
        <Container>
          <Row>
            <Column>
              <SectionTitle>12 Column Grid</SectionTitle>
            </Column>
          </Row>
          <Row>
            <Column>
              <Box />
            </Column>
          </Row>
          <Row>
            <Column xs={1}>
              <Box />
            </Column>
            <Column xs={11}>
              <Box />
            </Column>
          </Row>
          <Row>
            <Column xs={2}>
              <Box />
            </Column>
            <Column xs={10}>
              <Box />
            </Column>
          </Row>
          <Row>
            <Column xs={3}>
              <Box />
            </Column>
            <Column xs={9}>
              <Box />
            </Column>
          </Row>
          <Row>
            <Column xs={4}>
              <Box />
            </Column>
            <Column xs={8}>
              <Box />
            </Column>
          </Row>
          <Row>
            <Column xs={5}>
              <Box />
            </Column>
            <Column xs={7}>
              <Box />
            </Column>
          </Row>
          <Row>
            <Column xs={6}>
              <Box />
            </Column>
            <Column xs={6}>
              <Box />
            </Column>
          </Row>
        </Container>
    </Section>
);
