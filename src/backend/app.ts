import express from 'express';

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  res.send('Hello from the Server side <3');
});

app.listen(PORT, () => {
  console.log(`Server running successfully at http://localhost:${PORT}`);
});
