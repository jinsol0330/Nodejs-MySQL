var mysql      = require('mysql');
//mysql이라는 모듈을 사용하겠다
var connection = mysql.createConnection({
    //mysql이라는 변수에 담겨있는 모듈과 관련된 어떤 객체가 들어가있음
  host     : 'localhost',
  user     : 'nodejs',
  password : '111111',
  port     :  3307,
  database : 'opentutorials_2'
  //내가 설정한 정보에 맞게 변경
});
 
connection.connect();
//접속
 
connection.query('SELECT * FROM topic', function (error, results, fields) {
  //sql문을 첫 번째 인자로 주고 두 번째 인자로 콜백함수를 줌
  //첫 번째 인자 sql이 데이터베이스 서버에게 전송돼서 실행이 끝나면,
  //두 번째 인자인 콜백함수가 호출됨
  if (error) {
    console.log(error);
  }
    console.log(results);
});
 
connection.end();