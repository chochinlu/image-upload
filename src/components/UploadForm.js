import React, { useState } from 'react';
import axios from 'axios';
import { Box, Flex, Button, Image } from 'rebass';
import { FileInput, Label, MyButton } from '../style';
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

const UploadForm = props => {
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(null);
  const [result, setResult] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = e => {
    e.preventDefault();
    // console.log(e.target.files[0]);
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

  return (
    <Box py={5} width={1}>
      <form onSubmit={handleSubmit}>
        <FileInput
          type="file"
          name="myImage"
          id="myImage"
          accept="image/*"
          onChange={handleFileChange}
        />

        <Label
          fontSize={2}
          py={3}
          mb={3}
          htmlFor="myImage"
          border="2px solid"
          borderColor="text"
          width={1}
          display="block"
          textAlign="center"
        >
          {file ? file.name : 'Choose a file...'}
        </Label>
        <ImagePreview file={file} />
        <Button
          type="submit"
          bg={file ? 'accent' : 'primary'}
          color={file ? 'text' : 'divider'}
          borderRadius={0}
          my={2}
          fontSize={2}
          width="100%"
          border="2px solid"
          borderColor={file ? 'text' : 'divider'}
          disabled={!file}
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
          Upload
        </Button>
      </form>
      {uploading && <p>Uploading...</p>}
      {err && <p>{err}</p>}
      {result && <p>{result}</p>}
    </Box>
  );
};

export default UploadForm;
