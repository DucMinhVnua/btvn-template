const express = require('express');
const app = express();
const port = 300;

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', function (req, res) {
  res.render('index', {
    users: [
      {id: 1, name: 'minh'},
      {id: 2, name: 'hanh'}
    ]
  });
})

app.get("/todos", function(req, res) {
  return res.render('todos', {
    lists: [
      'Đi chợ', 'Nấu cơm', 'Rửa bát', 'Học Code trên CoderX'
    ]
  }
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
