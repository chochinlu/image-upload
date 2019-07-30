import React from 'react';
import { Text } from 'rebass';

const Message = props => {
  return (
    <Text
      fontSize={1}
      fontWeight="bold"
      mt={2}
      py={3}
      px={2}
      bg="text"
      color="accent"
    >
      {props.children}
    </Text>
  );
};

export default Message;
