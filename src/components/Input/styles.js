import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  margin-bottom: 8px;
  border-radius: 10px;
  padding-left: 16px;

  display: flex;
  align-items: center;
  gap: 16px;

  > input {
    width: 100%;
    height: 56px;
    background: transparent;
    border: none;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
