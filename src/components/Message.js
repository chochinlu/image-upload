import React from 'react';
import { Text } from 'rebass';

const Message = props => {
  return (
    <Text
      fontSize={1}
      fontWeight="bold"
      mt={1}
      py={2}
      px={2}
      bg="text"
      color="accent"
    >
      {props.children}
    </Text>
  );
};

export default Message;
