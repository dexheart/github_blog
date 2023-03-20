import styled from 'styled-components'

export const IssueInfoContainer = styled.div`
  width: 54rem;
  height: 10.5rem;

  /* Base/Profile */

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;

  .linkContainer {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
  }
`
export const BaseLinkBox = styled.div`
  > a {
    /* Components/Link */

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 160%;
    /* or 19px */

    text-transform: uppercase;

    /* Brand/Blue */

    color: ${(props) => props.theme.blue};

    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-decoration: none;
  }
`
export const IssueTitle = styled.div`
  margin-top: 1.25rem;
  height: 2rem;

  > h4 {
    height: 2rem;

    /* Title/Title L */

    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
    /* or 31px */

    /* Base/Title */

    color: ${(props) => props.theme['base-title']};
  }

  > h4::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`

export const GeneralInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 0.5rem;
`
export const OneOfInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > img {
    width: 1.125rem;
    height: 1.125rem;
  }

  > span {
    /* Text/Text M */

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    /* identical to box height, or 26px */

    /* Base/Span */

    color: ${(props) => props.theme['base-span']};
  }
`
export const IssueContent = styled.div`
  padding: 2.5rem 2rem;

  .markdown {
    white-space: pre-wrap;
    line-height: 1.6;
    hyphens: auto;
    text-align: justify;

    /* Text/Text M */

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    /* or 26px */

    /* Base/Text */

    color: ${(props) => props.theme['base-text']};

    img {
      max-width: 100%;
    }

    ul {
      list-style-position: inside;
    }

    a {
      color: $Brand;
    }

    pre {
      padding: 1rem;
      background-color: ${(props) => props.theme['base-post']};
      code {
        font-size: 0.875rem;
      }
    }
  }
`
