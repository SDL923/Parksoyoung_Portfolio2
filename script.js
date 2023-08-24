var express = require('express');
var app = express();
var fs = require('fs');

// set the view engine to ejs
app.set('view engine', 'ejs');

//css 파일 적용
app.use(express.static('style'))


/** 
원래 이미지를 불려오려면 아래와같이 일일이 router 설정을 해줘야한다.
app.get('/img1_2', function(req, res) { // 대표 사진 보내기
  fs.readFile('./image/img1_2.jpg', function(err,data){
    res.writeHead(200, {'Context-Type':'text/html'});
    res.end(data);
  })
});

node.js의 웹프레임워크인 Express는 각종 이미지 파일이나 js, css 파일들을 추가할때마다 
해당 파일을 불러오기 위하여 router 설정을 하나하나 일일이 하지 않고, 불러올 수 있도록 간단하게 설정할 수 있다. 
이를 정적파일 세팅이라고 한다. 아래가 정적파일 세팅이다.
app.use(express.static('image')) -> image파일 정적 세팅 
https://ninjaggobugi.tistory.com/12 
**/
//image 파일 불러오기
app.use(express.static('image'))


// index page
app.get('/', function(req, res) {
    res.render('main');
});
  






app.listen(8080);
console.log('Server is listening on port 8080');
