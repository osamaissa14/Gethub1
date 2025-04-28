import bodyParser from 'body-parser';
import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render("index.ejs");
});

app.get('/about', async (req, res) => {
    try {
        const response = await axios.get('https://api.wheretheiss.at/v1/satellites/25544');
        res.render('about.ejs', { data: response.data });
    } catch (error) {
        console.error('Error fetching data from API:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
