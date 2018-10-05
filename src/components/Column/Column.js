import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import media from '../../util/media'

const width = base => {
  if (base === 'hidden') {
    return 'display: none;'
  } else {
    return `
      display: flex;
      flex: 0 1 ${(base / 12) * 100}%;
      max-width: ${(base / 12) * 100}%;
    `
  }
}

const ColumnBase = styled.div`
  box-sizing: border-box;
  display: flex;
  position: relative;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
  flex: 1 1 auto;
  max-width: 100%;
`

const ReversedColumn = styled(ColumnBase)`
  ${({ reversed }) => reversed && 'flex-direction: column-reverse;'}
`

const FixedColumn = styled(ReversedColumn)`
  ${({ fixed }) => fixed && 'flex: 0 0 auto;'}
`

const NoPaddingColumn = styled(FixedColumn)`
${({ noPadding }) => noPadding && `padding-left: 0; padding-right: 0;`}
`

const XSColumn = styled(NoPaddingColumn)`
  ${({ xs }) => xs && width(xs)}
`
const SMColumn = styled(XSColumn)`
  ${({ sm }) => sm && media.mobileLandscape`${width(sm)}`}
`
const MDColumn = styled(SMColumn)`
  ${({ md }) => md && media.tablet`${width(md)}`}
`
const LGColumn = styled(MDColumn)`
  ${({ lg }) => lg && media.desktop`${width(lg)}`}
`
const XLGColumn = styled(LGColumn)`
  ${({ xlg }) => xlg && media.desktopLarge`${width(xlg)}`}
`

const Column = props => {
  const { children, ...rest } = props

  return (
    <XLGColumn {...rest}>
      {children}
    </XLGColumn>
  )
}

Column.propTypes = {
  reversed: PropTypes.bool,
  noPadding: PropTypes.bool,
  fixed: PropTypes.bool,
  xs: PropTypes.oneOf(['hidden', 'auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  sm: PropTypes.oneOf(['hidden', 'auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  md: PropTypes.oneOf(['hidden', 'auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  lg: PropTypes.oneOf(['hidden', 'auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xlg: PropTypes.oneOf(['hidden', 'auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
}

export default Column
