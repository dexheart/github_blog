import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 54rem;
  height: 13.25rem;
  padding: 2rem;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  gap: 2rem;
`
export const ImageContainer = styled.div`
  > img {
    height: 9.25rem;
    width: 9.25rem;
  }
`
export const MainInfoProfile = styled.div`
  > h2 {
    margin-top: 0.5rem;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  .description {
    height: 4.25rem;
    margin-top: 0.5rem;

    span {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 160%;

      color: ${(props) => props.theme['base-text']};
    }
  }

  .wrapper {
    display: flex;
    justify-content: space-between;

    .github {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px;
      gap: 0.25rem;

      margin-top: -0.5rem;

      span {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 160%;

        text-transform: uppercase;

        color: ${(props) => props.theme.blue};
      }
    }

    img {
      height: 0.75rem;
      width: 0.75rem;
    }
  }
`
export const OtherInfo = styled.div`
  margin-top: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 1.5rem;

  img {
    height: 1.125rem;
    width: 1.125rem;
  }

  span {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;

    color: ${(props) => props.theme['base-subtitle']};
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 0.5rem;
  }
`
