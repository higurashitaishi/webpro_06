"use strict";
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

let ramenitiran = [
  { id:1, moyori:"新習志野駅", name:"町田商店　新習志野駅前店", choice:"MAXラーメン"},
  { id:2, moyori:"葭川公園駅", name:"杉田家　千葉駅前店", choice:"チャーシューメン並"},
  { id:3, moyori:"JR千葉", name:"蒙古タンメン中本　千葉店", choice:"蒙古タンメン"},
  { id:4, moyori:"蘇我駅", name:"野良裏家", choice:"チャーシューメン"},
  { id:5, moyori:"JR千葉駅", name:"中華蕎麦とみ田", choice:"濃厚豚骨魚介つけ麺"},
  { id:6, moyori:"柏駅", name:"王道家　柏店", choice:"チャーシューメン"},
];

app.get("/ramen", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('ramen', {data: ramenitiran} );
});

// Create
app.get("/ramen/create", (req, res) => {
  res.redirect('/public/ramen_new.html');
});

// Read
app.get("/ramen/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = ramenitiran[ number ];
  res.render('ramen_detail', {id: number, data: detail} );
});

// Delete
app.get("/ramen/confirm_delete/:number", (req, res) => {
  // 削除の確認画面を表示する
  const number = req.params.number;
  const detail = ramenitiran[number];
  res.render('ramen_delete', {id: number, data: detail});
});

// Delete
app.get("/ramen/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  ramenitiran.splice( req.params.number, 1 );
  res.redirect('/ramen' );
});

// Create
app.post("/ramen", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = ramenitiran.length + 1;
  const moyori = req.body.moyori;
  const name = req.body.name;
  const choice = req.body.choice;
  ramenitiran.push( { id: id, moyori: moyori, name: name, choice: choice } );
  console.log( ramenitiran );
  res.render('ramen', {data: ramenitiran} );
});

// Edit
app.get("/ramen/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = ramenitiran[ number ];
  res.render('ramen_edit', {id: number, data: detail} );
});

// Update
app.post("/ramen/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  ramenitiran[req.params.number].moyori = req.body.moyori;
  ramenitiran[req.params.number].name = req.body.name;
  ramenitiran[req.params.number].choice = req.body.choice;
  console.log( ramenitiran );
  res.redirect('/ramen' );
});

let baseballitiran = [
  { id:1, team:"日本ハムファイターズ", position:"内野手", num:"21", name:"清宮幸太郎"},
  { id:2, team:"日本ハムファイターズ", position:"投手", num:"17", name:"伊藤大海"},
  { id:3, team:"日本ハムファイターズ", position:"投手", num:"16", name:"達孝太"},
  { id:4, team:"日本ハムファイターズ", position:"投手", num:"48", name:"齋藤友貴哉"},
  { id:5, team:"日本ハムファイターズ", position:"外野手", num:"61", name:"今川優馬"},
  { id:6, team:"日本ハムファイターズ", position:"外野手", num:"66", name:"万波中正"},
];

app.get("/baseball", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('baseball', {data: baseballitiran} );
});

// Create
app.get("/baseball/create", (req, res) => {
  res.redirect('/public/baseball_new.html');
});

// Read
app.get("/baseball/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = baseballitiran[ number ];
  res.render('baseball_detail', {id: number, data: detail} );
});

// Delete
app.get("/baseball/confirm_delete/:number", (req, res) => {
  // 削除の確認画面を表示する
  const number = req.params.number;
  const detail = baseballitiran[number];
  res.render('baseball_delete', {id: number, data: detail});
});

// Delete
app.get("/baseball/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  baseballitiran.splice( req.params.number, 1 );
  res.redirect('/baseball' );
});

// Create
app.post("/baseball", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = baseballitiran.length + 1;
  const team = req.body.team;
  const position = req.body.position;
  const num = req.body.num;
   const name = req.body.name;
  baseballitiran.push( { id: id, team: team, position: position, num: num, name: name } );
  console.log( baseballitiran );
  res.render('baseball', {data: baseballitiran} );
});

// Edit
app.get("/baseball/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = ramenitiran[ number ];
  res.render('baseball_edit', {id: number, data: detail} );
});

// Update
app.post("/baseball/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  baseballitiran[req.params.number].team = req.body.team;
  baseballitiran[req.params.number].position = req.body.position;
  baseballitiran[req.params.number].num = req.body.num;
  baseballitiran[req.params.number].name = req.body.name;
  console.log( baseballitiran );
  res.redirect('/baseball' );
});

let onsenitiran = [
  { id:1, place:"静岡県", name:"熱海温泉", degree:"約42度"},
  { id:2, place:"栃木県", name:"鬼怒川温泉", degree:"約41度"},
  { id:3, place:"岐阜県", name:"下呂温泉", degree:"約46度"},
  { id:4, place:"群馬県", name:"草津温泉", degree:"約43度"},
  { id:5, place:"愛媛県", name:"道後温泉", degree:"約42度"},
  { id:6, place:"大分県", name:"別府温泉", degree:"約45度"},
];

app.get("/onsen", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('onsen', {data: onsenitiran} );
});

// Create
app.get("/onsen/create", (req, res) => {
  res.redirect('/public/onsen_new.html');
});

// Read
app.get("/onsen/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = onsenitiran[ number ];
  res.render('onsen_detail', {id: number, data: detail} );
});

// Delete
app.get("/onsen/confirm_delete/:number", (req, res) => {
  // 削除の確認画面を表示する
  const number = req.params.number;
  const detail = ramenitiran[number];
  res.render('onsen_delete', {id: number, data: detail});
});

// Delete
app.get("/onsen/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  onsenitiran.splice( req.params.number, 1 );
  res.redirect('/onsen' );
});

// Create
app.post("/onsen", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = onsenitiran.length + 1;
  const place = req.body.place;
  const name = req.body.name;
  const degree = req.body.degree;
  onsenitiran.push( { id: id, place: place, name: name, degree: degree } );
  console.log( onsenitiran );
  res.render('onsen', {data: onsenitiran} );
});

// Edit
app.get("/onsen/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = onsenitiran[ number ];
  res.render('onsen_edit', {id: number, data: detail} );
});

// Update
app.post("/onsen/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  onsenitiran[req.params.number].place = req.body.place;
  onsenitiran[req.params.number].name = req.body.name;
  onsenitiran[req.params.number].degree = req.body.degree;
  console.log( onsenitiran );
  res.redirect('/onsen' );
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


let station2 = [
  { id:1, code:"JE01", name:"東京駅", change:"総武本線，中央線，etc", passengers:403831, distance:0 },
  { id:2, code:"JE02", name:"八丁堀駅", change:"日比谷線", passengers:31071, distance:1.2 },
  { id:3, code:"JE05", name:"新木場駅", change:"有楽町線，りんかい線", passengers:67206, distance:7.4 },
  { id:4, code:"JE07", name:"舞浜駅", change:"舞浜リゾートライン", passengers:76156,distance:12.7 },
  { id:5, code:"JE12", name:"新習志野駅", change:"", passengers:11655, distance:28.3 },
  { id:6, code:"JE17", name:"千葉みなと駅", change:"千葉都市モノレール", passengers:16602, distance:39.0 },
  { id:7, code:"JE18", name:"蘇我駅", change:"内房線，外房線", passengers:31328, distance:43.0 },
];

app.get("/keiyo2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('keiyo2', {data: station2} );
});

// Create
app.get("/keiyo2/create", (req, res) => {
  res.redirect('/public/keiyo2_new.html');
});

// Read
app.get("/keiyo2/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = station2[ number ];
  res.render('keiyo2_detail', {id: number, data: detail} );
});

// Delete
app.get("/keiyo2/confirm_delete/:number", (req, res) => {
  // 削除の確認画面を表示する
  const number = req.params.number;
  const detail = station2[number];
  res.render('keiyo2_delete', {id: number, data: detail});
});

// Delete
app.get("/keiyo2/delete/:number", (req, res) => {
  // 本来は削除の確認ページを表示する
  // 本来は削除する番号が存在するか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  station2.splice( req.params.number, 1 );
  res.redirect('/keiyo2' );
});

// Create
app.post("/keiyo2", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const id = station2.length + 1;
  const code = req.body.code;
  const name = req.body.name;
  const change = req.body.change;
  const passengers = req.body.passengers;
  const distance = req.body.distance;
  station2.push( { id: id, code: code, name: name, change: change, passengers: passengers, distance: distance } );
  console.log( station2 );
  res.render('keiyo2', {data: station2} );
});

// Edit
app.get("/keiyo2/edit/:number", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  const number = req.params.number;
  const detail = station2[ number ];
  res.render('keiyo2_edit', {id: number, data: detail} );
});

// Update
app.post("/keiyo2/update/:number", (req, res) => {
  // 本来は変更する番号が存在するか，各項目が正しいか厳重にチェックする
  // 本来ならここにDBとのやり取りが入る
  station2[req.params.number].code = req.body.code;
  station2[req.params.number].name = req.body.name;
  station2[req.params.number].change = req.body.change;
  station2[req.params.number].passengers = req.body.passengers;
  station2[req.params.number].distance = req.body.distance;
  console.log( station2 );
  res.redirect('/keiyo2' );
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
