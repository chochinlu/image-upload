import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const ImagePreview = props => {
  return (
    <div>
      {props.file && (
        <img src={URL.createObjectURL(props.file)} alt="pic preview" />
      )}
    </div>
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
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="myImage"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button type="submit">Upload</button>
      </form>
      <ImagePreview file={file} />

      {uploading && <p>Uploading...</p>}
      {err && <p>{err}</p>}
      {result && <p>{result}</p>}
    </>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UploadForm />
      </header>
    </div>
  );
}

export default App;
