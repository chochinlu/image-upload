import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import {
  fontSize,
  border,
  borderColor,
  space,
  width,
  display,
  textAlign
} from 'styled-system';

export const GlobalStyle = createGlobalStyle`
  *,*::before, *::after {
    margin:0;
    padding: 0;
    box-sizing: inherit;
    outline: none;
  }

  html {
    font-family: "Lato", sans-serif;
    font-size: 62.5%;
    font-weight: 400;
    line-height: 1.5;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.darkPrimary};
    color: ${props => props.theme.colors.text};
  }
`;

export const FileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const Label = styled.label(
  {
    cursor: 'pointer',
    '&:hover': {
      'font-weight': 'bold'
    }
  },
  fontSize,
  border,
  borderColor,
  space,
  width,
  display,
  textAlign
);
