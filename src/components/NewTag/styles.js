import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.NEW_TAG};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : 'none'};

  > input {
    background-color: transparent;
    border: none;
    padding: 16px;
    font-size: 16px;

    height: 56px;
    width: 180px;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > button {
    background: none;
    border: none;
    padding-right: 16px;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
  }
`
