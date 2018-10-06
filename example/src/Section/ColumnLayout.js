import React from 'react';
import { Section, SectionTitle } from '../components/Section';
import { Container, Row, Column } from 'ls-react-grid'
import { Box } from '../components/Box';

export default props => (
    <Section>
        <Container>
            <Row>
            <Column>
                <SectionTitle>Column</SectionTitle>
            </Column>
            </Row>
            <Row>
            <Column>
                <Box>1</Box>
                <Box>2</Box>
                <Box>3</Box>
                <Box>4</Box>
            </Column>
            </Row>
        </Container>
    </Section>
);
