import React from 'react';
import { Heading, Flex } from 'rebass';
import { GlobalStyle } from './style';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import UploadForm from './components/UploadForm';

function App() {
  return (
    <>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <Flex justifyContent="center">
          <Flex
            flexDirection="column"
            alignItems="center"
            width="80vw"
            backgroundColor="primary"
            margin={4}
            py={3}
          >
            <Heading color="text" fontSize={4} pb={3}>
              Image Uploader
            </Heading>
            <UploadForm />
          </Flex>
        </Flex>
      </ThemeProvider>
    </>
  );
}

export default App;
