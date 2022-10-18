import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 56px;
  margin-top: 16px;

  border: none;
  border-radius: 10px;

  color: ${({ theme }) => theme.COLORS.GRAY_500};
  background-color: ${({ theme }) => theme.COLORS.PINK};

  font-size: 16px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`
