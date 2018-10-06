import React from 'react';
import { Section, SectionTitle } from '../components/Section';
import { Container, Row, Column } from 'ls-react-grid'
import { Box } from '../components/Box';

export default props => (
    <Section>
        <Container>
            <Row>
            <Column>
                <SectionTitle>Vertical Alignment</SectionTitle>
            </Column>
            </Row>
            <Row>
                <Column>
                    <h3>Top</h3>
                </Column>
            </Row>
            <Row data-container justify="even" align="top">
                <Column xs={2}>
                    <Box data-box>2</Box>
                </Column>
                <Column xs={1}>
                    <Box data-box>1</Box>
                </Column>
                <Column  xs={4}>
                    <Box data-box>4</Box>
                </Column>
            </Row>
            <Row>
                <Column>
                    <h3>Middle</h3>
                </Column>
            </Row>
            <Row data-container justify="even" align="middle">
                <Column xs={2}>
                    <Box data-box>2</Box>
                </Column>
                <Column xs={1}>
                    <Box data-box>1</Box>
                </Column>
                <Column xs={4}>
                    <Box data-box>4</Box>
                </Column>
            </Row>
            <Row>
                <Column>
                    <h3>Bottom</h3>
                </Column>
            </Row>
            <Row data-container justify="even" align="bottom">
                <Column xs={2}>
                    <Box data-box>2</Box>
                </Column>
                <Column xs={1}>
                    <Box data-box>1</Box>
                </Column>
                <Column xs={4}>
                    <Box data-box>4</Box>
                </Column>
            </Row>
            <Row>
                <Column>
                    <h3>Stretch</h3>
                </Column>
            </Row>
            <Row data-container justify="even" align="stretch">
                <Column xs={2}>
                    <Box data-box>2</Box>
                </Column>
                <Column xs={1}>
                    <Box data-box>1</Box>
                </Column>
                <Column xs={4}>
                    <Box data-box>4</Box>
                </Column>
            </Row>
        </Container>
    </Section>
);
