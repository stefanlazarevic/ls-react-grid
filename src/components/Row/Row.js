
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const justifyPropMap = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  even: 'space-evenly'
}

const alignPropMap = {
  top: 'flex-start',
  middle: 'center',
  bottom: 'flex-end',
  stretch: 'flex-stretch'
}

const BaseRowStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`

const StyledRow = styled(BaseRowStyle)`
  ${({ reversed }) => reversed && `flex-direction: row-reverse;`}
  ${({ justify }) => justify && `justify-content: ${justifyPropMap[justify]};`}
  ${({ align }) => align && `align-items: ${alignPropMap[align]};`}
`

const Row = props => {
  const { children, ...rest } = props

  return (
    <StyledRow {...rest}>
      {children}
    </StyledRow>
  )
}

Row.propTypes = {
  reverse: PropTypes.bool,
  justify: PropTypes.oneOf([
    'start',
    'center',
    'end',
    'between',
    'around',
    'even'
  ]),
  align: PropTypes.oneOf(['top', 'middle', 'bottom', 'stretch'])
}

export default Row
