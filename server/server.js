const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/api/thesaurus/:word', async (req, res) => {
 try {
    const response = await axios.get(
      `https://wordsapiv1.p.rapidapi.com/words/${req.params.word}/synonyms`,
      {
        headers: {
          'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
          'X-RapidAPI-Key': '70645a51ffmsh6ca5ef8fe7fe874p172b5fjsn96488e00136a',
        },
      }
    );

    res.json(response.data);
 } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
 }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));