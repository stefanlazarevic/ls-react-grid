import styled from 'styled-components';

export const Section = styled.section`
  padding: 2rem 0;
  [data-container] {
    height: 200px;
    background: #f5f5f5;
    border: 1px solid #eee;
    [data-box] {
      margin-bottom: 0;
    }
  }
  &:nth-child(odd) {
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    background-color: #f5f5f5;
    [data-container] {
      background: #fff;
    }
  }
`

export const SectionTitle = styled.h2`
  text-transform: uppercase;
  color: #444;
  opacity: 0.9;
`
