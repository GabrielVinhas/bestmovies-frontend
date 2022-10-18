import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    padding: 40px 123px;
    grid-area: content;
    overflow-y: auto;

    > a {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 16px;

      display: flex;
      align-items: center;
      gap: 8px;

      margin-bottom: 25px;
    }

    .input-values {
      display: flex;
      gap: 40px;
    }

    .tags {
      width: 100%;
      padding: 16px;
      display: flex;
      align-items: center;
      gap: 24px;
      flex-wrap: wrap;

      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      border-radius: 8px;
    }
  }
`

export const Form = styled.form`
  width: 100%;
  height: fit-content;
  overflow-y: auto;
  padding-inline: 10px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  > header {
    h1 {
      margin-top: 24px;
      font-size: 36px;
      font-weight: 500;
    }

  }

  .buttons {
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;
    margin-top: -16px;
    margin-bottom: 5px;
  }
`
export const RemoveMovie = styled.button`
  margin-top: 16px;
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 10px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 16px;
`
