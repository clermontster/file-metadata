const express = require('express');
const app = express();
const multer = require('multer');
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
const bodyparser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index.html');
});


app.post('/metadata', upload.single('file'), (req, res) => {
	const size = {
		size: req.file.size,
	};
	res.write(JSON.stringify(size));
	res.end();
});

app.listen(port, () => console.log(`App running on port ${port}`));