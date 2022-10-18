import styled from 'styled-components'
import backgroundImg from '../../assets/background.jpg'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 150px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
    line-height: 63px;
  }

  @media (max-width: 600px) {
    padding: 0 20px;
    margin: 0 auto;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > h2 {
    font-size: 24px;
    margin-block: 48px;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    text-align: center;
    margin-top: 42px;
  }
`
export const Background = styled.div`
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  flex: 1;

  @media (max-width: 600px) {
    flex: 0;
  }
`
