import React from 'react';
import { Heading, Flex, Card } from 'rebass';
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
          <Card
            borderRadius={8}
            boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
            mt={2}
            width={[1, 1, '50%']}
          >
            <Flex
              flexDirection="column"
              alignItems="center"
              backgroundColor="primary"
              p={5}
              width="100%"
            >
              <Heading color="text" fontSize={2} pb={1}>
                Image Uploader
              </Heading>
              <UploadForm />
            </Flex>
          </Card>
        </Flex>
      </ThemeProvider>
    </>
  );
}

export default App;
