import styled from 'styled-components'

export const Container = styled.button`
  padding: 32px 32px 40px;
  width: 100%;
  border: none;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};

  display: flex;
  flex-direction: column;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
    margin-bottom: 8px;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_PARAGRAPH};
    font-size: 16px;
    text-align: justify;
    max-height: 40px;
    overflow: hidden;
  }

  > footer {
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: 30px;
  }
`
