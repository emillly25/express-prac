//모듈
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//라우팅
const homeRouter = require("./src/routes/home");

//앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`)); //정적 경로 설정

//bodyParser사용하기
app.use(bodyParser.json());
//url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우
// 제대로 인식되지 않는 문제를 해결하기 위해 사용
app.use(bodyParser.urlencoded({ extended: true }));

//app.use는 미들웨어를 등록하는 메소드
app.use("/", homeRouter);

module.exports = app;
