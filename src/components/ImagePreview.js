import React from 'react';
import { Flex, Image } from 'rebass';
import styled from 'styled-components/macro';

const ImagePreview = props => {
  return (
    <Flex width={1} justifyContent="center" mb={props.file ? 1 : 0}>
      {props.file && (
        <Image
          src={URL.createObjectURL(props.file)}
          alt="pic preview"
          width={1}
          display="inline-block"
          css={`
            max-width: 800px;
          `}
        />
      )}
    </Flex>
  );
};

export default ImagePreview;
