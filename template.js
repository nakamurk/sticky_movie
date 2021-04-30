const http = require('http');
const url = require('url');
const fs = require('fs');
const ejs = require('ejs');
 
const video_tmpl = fs.readFileSync('./template.ejs','utf-8');
const error_tmpl = fs.readFileSync('./error.ejs','utf-8');

http.createServer(function (req, res) {
  const queryObject = url.parse(req.url,true).query;
  console.log(queryObject);

  const data = ejs.render(video_tmpl, {
    VIDEO_ID : queryObject.video_id
  });

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end('<hr><centor>Copyright © 2021 nakamurk</centor>');

}).listen(8080);
console.log('startServer');

