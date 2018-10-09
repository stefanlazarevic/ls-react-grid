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

const wrapPropMap = {
  wrap: 'wrap',
  none: 'nowrap',
  reversed: 'wrap-reverse'
}

const BaseRowStyle = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`

const WrapRow = styled(BaseRowStyle)`
  ${({ wrapped }) => wrapped && wrapPropMap[wrapped] && `flex-wrap: ${wrapPropMap[wrapped]};`}
`

const ReversedRow = styled(WrapRow)`
  ${({ reversed }) => reversed && `flex-direction: row-reverse;`}
`

const StyledRow = styled(ReversedRow)`
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
  reversed: PropTypes.bool,
  wrapped: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['wrap', 'none', 'reversed'])
  ]),
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
