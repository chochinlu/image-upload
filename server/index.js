const express = require('express');
const path = require('path');
const multer = require('multer');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 4000;

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, `IMAGE-${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({
  storage
}).single('myImage');

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/upload', upload, (req, res, next) => {
  console.log('Request file ---', req.file);
  res.send(req.file);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
