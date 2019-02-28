import styled from "styled-components"

import mediaQuery from "../../utils/mediaQuery"

export const FooterContainer = styled.footer`
  background-color: ${props => props.theme.darkGray};
  padding: 5vh 5vw;
  color: ${props => props.theme.white};
  a {
    color: ${props => props.theme.lightBlue};
    :hover {
      color: ${props => props.theme.orange};
    }
  }
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-areas:
    "copyright"
    "source"
    "poweredBy";
  grid-gap: 4vh 6vw;
  ${mediaQuery.minPhone} {
    grid-template-areas:
      "copyright source"
      "poweredBy poweredBy";
  }
  ${mediaQuery.minTablet} {
    grid-template-areas: "copyright source poweredBy";
  }
`

export const PoweredBy = styled.div`
  grid-area: poweredBy;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1em;
  a {
    height: 1.5em;
    width: 1.5em;
  }
`
