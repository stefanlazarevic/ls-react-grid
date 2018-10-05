import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import media from '../../util/media'

const width = base => `
  flex: 0 1 ${(base / 12) * 100}%;
  max-width: ${(base / 12) * 100}%;
`

const ColumnBase = styled.div`
  box-sizing: border-box;
  position: relative;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
  flex: 1 1 auto;
  max-width: 100%;
`

const DisplayColumn = styled(ColumnBase)`
  display: ${({ xs }) => xs === 'hidden' ? 'none' : 'flex'}
`

const ReversedColumn = styled(DisplayColumn)`
  ${({ reversed }) => reversed && 'flex-direction: column-reverse;'}
`

const FixedColumn = styled(ReversedColumn)`
  ${({ fixed }) => fixed && 'flex: 0 0 auto;'}
`

const NoGutterColumn = styled(FixedColumn)`
  ${({ noGutter }) => noGutter && `padding-left: 0; padding-right: 0;`}
`

const XSColumn = styled(NoGutterColumn)`
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
  noGutter: PropTypes.bool,
  fixed: PropTypes.bool,
  xs: PropTypes.oneOf(['hidden', 'auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  sm: PropTypes.oneOf(['hidden', 'auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  md: PropTypes.oneOf(['hidden', 'auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  lg: PropTypes.oneOf(['hidden', 'auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xlg: PropTypes.oneOf(['hidden', 'auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  offset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  xlgOoffset: PropTypes.number
}

export default Column
