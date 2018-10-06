import React from 'react';
import { Section, SectionTitle } from '../components/Section';
import { Container, Row, Column } from 'ls-react-grid'
import { Box } from '../components/Box';

export default props => (
    <Section>
        <Container>
            <Row>
            <Column>
                <SectionTitle>Horizontal Alignment</SectionTitle>
            </Column>
            </Row>
            <Row>
                <Column>
                    <h3>Start</h3>
                </Column>
            </Row>
            <Row justify="start">
                <Column xs={2}>
                    <Box>2</Box>
                </Column>
                <Column xs={1}>
                    <Box>1</Box>
                </Column>
                <Column xs={4}>
                    <Box>4</Box>
                </Column>
            </Row>
            <Row>
                <Column>
                    <h3>Center</h3>
                </Column>
            </Row>
            <Row justify="center">
                <Column xs={2}>
                    <Box>2</Box>
                </Column>
                <Column xs={1}>
                    <Box>1</Box>
                </Column>
                <Column xs={4}>
                    <Box>4</Box>
                </Column>
            </Row>
            <Row>
                <Column>
                    <h3>End</h3>
                </Column>
            </Row>
            <Row justify="end">
                <Column xs={2}>
                    <Box>2</Box>
                </Column>
                <Column xs={1}>
                    <Box>1</Box>
                </Column>
                <Column xs={4}>
                    <Box>4</Box>
                </Column>
            </Row>
            <Row>
                <Column>
                    <h3>Between</h3>
                </Column>
            </Row>
            <Row justify="between">
                <Column xs={2}>
                    <Box>2</Box>
                </Column>
                <Column xs={1}>
                    <Box>1</Box>
                </Column>
                <Column xs={4}>
                    <Box>4</Box>
                </Column>
            </Row>
            <Row>
                <Column>
                    <h3>Around</h3>
                </Column>
            </Row>
            <Row justify="around">
                <Column xs={2}>
                    <Box>2</Box>
                </Column>
                <Column xs={1}>
                    <Box>1</Box>
                </Column>
                <Column xs={4}>
                    <Box>4</Box>
                </Column>
            </Row>
            <Row>
                <Column>
                    <h3>Even</h3>
                </Column>
            </Row>
            <Row justify="even">
                <Column xs={2}>
                    <Box>2</Box>
                </Column>
                <Column xs={1}>
                    <Box>1</Box>
                </Column>
                <Column xs={4}>
                    <Box>4</Box>
                </Column>
            </Row>
        </Container>
    </Section>
);
