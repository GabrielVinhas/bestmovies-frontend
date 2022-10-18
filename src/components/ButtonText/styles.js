import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 16px;

  display: flex;
  align-items: center;
  gap: 8px;
`
