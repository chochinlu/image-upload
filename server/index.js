const express = require('express');
const path = require('path');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');

const IMAGE_DIR = './public/uploads';
!fs.existsSync(IMAGE_DIR) && fs.mkdirSync(IMAGE_DIR);

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
  // console.log('Request file ---', req.file);
  res.status(200).send('Uploaded: ' + req.file.filename);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
