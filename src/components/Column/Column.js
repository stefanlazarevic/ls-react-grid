import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import media from '../../util/media'

const width = base => `
  flex: ${base === 'auto' ? '1 1 auto' : `0 1 ${(base / 12) * 100}%`}
  max-width: ${base === 'auto' ? 100 : (base / 12) * 100}%
`

const ColumnBase = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0 1 100%;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
`

const ReversedColumn = styled(ColumnBase)`
  ${({ reversed }) => reversed && 'flex-direction: column-reverse;'}
`

const FixedColumn = styled(ReversedColumn)`
  ${({ fixed }) => fixed && 'flex: 0 0 auto;'}
`

const NoGutterColumn = styled(FixedColumn)`
  ${({ noGutter }) => noGutter && `padding-left: 0; padding-right: 0;`}
`

const MediaColumn = styled(NoGutterColumn)`
  ${({ xs }) => xs && width(xs)}
  ${({ sm }) => sm && media.mobileLandscape`${width(sm)}`}
  ${({ md }) => md && media.tablet`${width(md)}`}
  ${({ lg }) => lg && media.desktop`${width(lg)}`}
  ${({ xlg }) => xlg && media.desktopLarge`${width(xlg)}`}
`

const Column = props => {
  const { children, ...rest } = props

  return (
    <MediaColumn {...rest}>
      {children}
    </MediaColumn>
  )
}

Column.propTypes = {
  reversed: PropTypes.bool,
  noGutter: PropTypes.bool,
  fixed: PropTypes.bool,
  xs: PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  sm: PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  md: PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  lg: PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xlg: PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  width: PropTypes.number,
  offset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  xlgOoffset: PropTypes.number
}

export default Column
