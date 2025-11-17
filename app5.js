const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

let ramen = [
  { id:1, code:"習志野市", name:"町田商店　新習志野駅前店"},
  { id:2, code:"千葉市", name:"杉田家　千葉駅前店"},
  { id:3, code:"千葉市", name:"蒙古タンメン中本　千葉店"},
  { id:4, code:"千葉市", name:"野良裏家"},
  { id:5, code:"松戸市", name:"中華蕎麦とみ田"},
  { id:6, code:"柏市", name:"王道家　柏店"},
];

app.get("/ramen_add", (req, res) => {
  let id = req.query.id;
  let code = req.query.code;
  let name = req.query.name;
  let newdata = { id: id, code: code, name: name };
  ramen.push( newdata );
  res.render('db3', { data: ramen });
});

let station = [
  { id:1, code:"JE01", name:"東京駅"},
  { id:2, code:"JE07", name:"舞浜駅"},
  { id:3, code:"JE12", name:"新習志野駅"},
  { id:4, code:"JE13", name:"幕張豊砂駅"},
  { id:5, code:"JE14", name:"海浜幕張駅"},
  { id:6, code:"JE05", name:"新浦安駅"},
];

app.get("/keiyo", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('db1', { data: station });
});

app.get("/keiyo_add", (req, res) => {
  let id = req.query.id;
  let code = req.query.code;
  let name = req.query.name;
  let newdata = { id: id, code: code, name: name };
  station.push( newdata );
  res.render('db2', { data: station });
});


app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/omikuji1", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';

  res.send( '今日の運勢は' + luck + 'です' );
});

app.get("/omikuji2", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';

  res.render( 'omikuji2', {result:luck} );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  let judgement = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';
  if ((hand === 'パー' && cpu === 'グー')||
      (hand === 'チョキ' && cpu === 'パー')||
      (hand === 'グー' && cpu === 'チョキ')
    ){
      judgement = '勝ち';
      win += 1;
      total += 1;
  }
  else if(hand === cpu){
    judgement = 'あいこ';
  }
  else {
    judgement = '負け';
    total += 1;
  }
  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});

app.get("/jankenradio", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  let judgement = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';
  if ((hand === 'パー' && cpu === 'グー')||
      (hand === 'チョキ' && cpu === 'パー')||
      (hand === 'グー' && cpu === 'チョキ')
    ){
      judgement = '勝ち';
      win += 1;
      total += 1;
  }
  else if(hand === cpu){
    judgement = 'あいこ';
  }
  else {
    judgement = '負け';
    total += 1;
  }
  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'jankenradio', display );
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
