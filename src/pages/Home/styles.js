import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  > header {
    padding: 0 123px;
    width: 100%;
    height: 116px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 64px;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};

  > h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
    order: -1;
  }

  @media (max-width: 880px) {
    padding: 0 40px;
    flex-wrap: wrap;
    gap: 0;
  }


  grid-area: header;
  }

  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    'header'
    'content';

  > section {
    grid-area: content;
    padding: 50px 123px 0;

    overflow: auto;

    div:first-child {
      display: flex;
      justify-content: space-between;

      h1 {
        font-size: 32px;
        font-weight: 400;
      }
    }

    > main {
      width: 100%;
      height: 470px;
      margin-top: 37px;
      overflow-y: auto;

      display: flex;
      flex-direction: column;
      gap: 24px;

      @media (max-width: 880px) {
        height: max-content;
      }
    }

    @media (max-width: 880px) {
    padding: 50px 40px 0;
  }
  }
`

export const ButtonAdd = styled(Link)`
  font-size: 16px;
  padding: 13px 32px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.GRAY_500};

  display: flex;
  align-items: center;
  gap: 8px;

  > svg {
    font-size: 20px;
  }
`

export const Profile = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  > div {
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    strong {
      font-size: 14px;
      line-height: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  @media (max-width: 880px) {
    order: -1;
  }
`
export const Avatar = styled(Link)`
  > img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }
`
export const Logout = styled.button`
  background: none;
  border: none;
  width: fit-content;
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  font-size: 14px;
`