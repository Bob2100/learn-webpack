const { response } = require('express');
const express = require('express');

const app = express();

app.get('/api/info', (request, response) => {
  response.json({
    code: 0,
    data: {
      title: 'app',
      message: '你好'
    }
  });
});

app.listen(9000);