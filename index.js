const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { exec } = require('child_process');

app.use(express.static('public'))
app.use(bodyParser.text());

app.get('/', (req, res) => {
    res.send('Index Page');
});
app.post('/saveFilter', (req, res) => {
    runPuppeteer(req.body)
    res.send({data: 'Executing..'});
});
app.listen(3000, () => console.log('App listening on port 3000!'));

function runPuppeteer(args) {
  console.log(args);
  const params = args.split('&').join(' ');
  exec('npm run RunPuppeteer --' + params, (err, stdout) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }
    console.log(stdout);
  });
}