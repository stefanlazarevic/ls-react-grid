import React from 'react';
import { Section, SectionTitle } from '../components/Section';
import { Container, Row, Column } from 'ls-react-grid'
import { Box } from '../components/Box';

export default props => (
    <Section>
        <Container>
            <Row>
            <Column>
                <SectionTitle>Reversed Column</SectionTitle>
            </Column>
            </Row>
            <Row>
            <Column reversed>
                <Box>1</Box>
                <Box>2</Box>
                <Box>3</Box>
                <Box>4</Box>
            </Column>
            </Row>
        </Container>
    </Section>
);
