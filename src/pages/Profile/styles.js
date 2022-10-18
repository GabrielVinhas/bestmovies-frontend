import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
    width: 100%;
    height: 144px;

    display: flex;
    align-items: center;
    padding-left: 144px;

    a {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 16px;

      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`
export const Form = styled.form`
  max-width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  > div:nth-child(4) {
    margin-top: 16px;
  }
`

export const Avatar = styled.div`
  margin-top: -100px;
  margin-bottom: 64px;
  height: 186px;
  width: 186px;
  display: flex;
  position: relative;

  > img {
    height: 186px;
    width: 186px;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    bottom: 7px;
    right: 7px;

    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }

    input {
      display: none;
    }

    cursor: pointer;
  }
`
