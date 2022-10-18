import styled from 'styled-components'

export const Container = styled.span`
  padding: 8px 16px;
  background-color: ${({ theme, color }) =>
    color == 'bg-2' ? theme.COLORS.TAG_BG_2 : theme.COLORS.TAG_BG};

  font-size: 12px;
  border-radius: 8px;
  margin-right: 8px;
`
