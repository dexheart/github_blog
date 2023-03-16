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
    border-radius: 8px;
  }
`
export const MainInfoProfile = styled.div`
  width: 40rem;

  > h2 {
    margin-top: 0.5rem;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  .bio {
    height: 4.25rem;
    margin-top: 0.5rem;

    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;

    span {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 160%;

      color: ${(props) => props.theme['base-text']};
    }
  }

  .bio::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  .wrapper {
    display: flex;
    justify-content: space-between;

    .github {
      a {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 0.25rem;

        margin-top: -0.5rem;
        text-decoration: none;
        cursor: pointer;

        > span {
          font-family: 'Nunito';
          font-style: normal;
          font-weight: 700;
          font-size: 0.75rem;
          line-height: 160%;

          text-transform: uppercase;

          color: ${(props) => props.theme.blue};
        }
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
export const FormContainer = styled.div`
  width: 54rem;

  .publishInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4.5rem 0 0.75rem;

    h3 {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 160%;

      color: ${(props) => props.theme['base-subtitle']};
    }

    > span {
      /* Text/Text S */

      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 160%;

      text-align: right;

      color: ${(props) => props.theme['base-span']};
    }
  }

  .formSearch {
    input {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0.75rem 1rem;
      gap: 0.5rem;

      width: 54rem;
      height: 3.125rem;

      /* Base/Input */

      background: ${(props) => props.theme['base-input']};

      /* Base/Border */

      border: 1px solid ${(props) => props.theme['base-border']};
      border-radius: 6px;

      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const PublishContainer = styled.div`
  margin-top: 3rem;

  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

export const OneOfPublishBox = styled.div`
  width: 26rem;
  height: 16.25rem;

  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;

  .titleBox {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    > span {
      /* Text/Text S */

      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 160%;
      /* or 22px */

      /* Base/Span */

      color: ${(props) => props.theme['base-span']};
    }

    > h4 {
      width: 13rem;
      height: 4rem;

      -ms-overflow-style: none; /* for Internet Explorer, Edge */
      scrollbar-width: none; /* for Firefox */
      overflow-y: scroll;

      font-family: 'Nunito';
      font-style: normal;
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 160%;
      /* or 32px */

      /* Base/Title */

      color: ${(props) => props.theme['base-title']};
    }

    > h4::-webkit-scrollbar {
      display: none; /* for Chrome, Safari, and Opera */
    }
  }

  .textBox {
    height: 7rem;
    width: 22rem;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;
  }
  .textBox::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`
