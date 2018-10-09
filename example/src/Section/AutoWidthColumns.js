import React from 'react'
import { Section, SectionTitle } from '../components/Section'
import { Container, Row, Column } from 'ls-react-grid'
import { Box } from '../components/Box'
import styled from 'styled-components'

export default props => (
    <Section>
        <Container>
            <Row>
                <Column>
                    <SectionTitle>Auto Width</SectionTitle>
                </Column>
            </Row>
            <Row>
                <Column xs="auto">
                    <Box />
                </Column>
                <Column xs="auto">
                    <Box />
                </Column>
            </Row>
            <Row>
                <Column xs="auto">
                    <Box />
                </Column>
                <Column xs="auto">
                    <Box />
                </Column>
                <Column xs="auto">
                    <Box />
                </Column>
            </Row>
        </Container>
    </Section>
);
