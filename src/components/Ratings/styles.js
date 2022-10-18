import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  > span {
    color: ${({ theme }) => theme.COLORS.PINK};

    svg {
      width: 20px;
      height: 20px;
    }
  }
`
