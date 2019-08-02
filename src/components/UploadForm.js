import React, { useState } from 'react';
import axios from 'axios';
import { Flex, Box, Button, Text } from 'rebass';
import { FileInput, Label } from '../style';
import styled from 'styled-components/macro';
import ImagePreview from './ImagePreview';
import Message from './Message';
import { Upload } from 'styled-icons/boxicons-regular/Upload';

const UploadForm = props => {
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(null);
  const [result, setResult] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = e => {
    e.preventDefault();
    // console.log(e.target.files[0]);
    if (result) {
      setResult(null);
    }
    setFile(e.target.files[0]);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('myImage', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };

    try {
      setUploading(true);
      const result = await axios.post(
        'http://localhost:4000/upload',
        formData,
        config
      );
      // console.log({ result });
      setResult(result.data);
    } catch (error) {
      console.log(error);
      setErr(error.message);
    } finally {
      setUploading(false);
    }
  };

  const buttonAvaliable = () => file && !result;

  return (
    <Box pt={5} pb={3} width={1}>
      <form onSubmit={handleSubmit}>
        <FileInput
          type="file"
          name="myImage"
          id="myImage"
          accept="image/*"
          onChange={handleFileChange}
        />

        <Label
          fontSize={file ? 1 : 2}
          py={3}
          mb={3}
          htmlFor="myImage"
          border="2px solid"
          borderColor="text"
          width={1}
          display="inline-block"
          textAlign="center"
        >
          <Text ml={1}>{file ? file.name : 'Choose a file...'}</Text>
        </Label>

        <ImagePreview file={file} />
        <Button
          type="submit"
          bg={buttonAvaliable() ? 'accent' : 'primary'}
          color={buttonAvaliable() ? 'text' : 'divider'}
          borderRadius={0}
          my={2}
          fontSize={2}
          width="100%"
          border="2px solid"
          borderColor={buttonAvaliable() ? 'text' : 'divider'}
          disabled={!file || result}
          css={
            file &&
            `
            cursor: pointer;
            &:active {
              position:relative;
              top:1px;
            }
          `
          }
        >
          <Flex justifyContent="center" textAlign="center">
            <Upload size="4rem" />
            <Text ml={1}> Upload</Text>
          </Flex>
        </Button>
      </form>
      {/* <Message>Uploading...</Message> */}
      {uploading && <Message>Uploading...</Message>}
      {err && <Message>{err}</Message>}
      {result && <Message>{result}</Message>}
    </Box>
  );
};

export default UploadForm;
