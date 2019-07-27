import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const UploadForm = props => {
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(null);

  const handleFileChange = e => {
    e.preventDefault();
    console.log(e.target.files[0]);
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
      const result = await axios.post(
        'http://localhost:4000/upload',
        formData,
        config
      );
      console.log({ result });
    } catch (error) {
      console.log(error);
      setErr(error.message);
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
      {file && file.name}
      {err && <p>{err}</p>}
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
