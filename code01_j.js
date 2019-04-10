function textTipeValue() {

  var x_inputvalue = 0;
  var y_inputvalue = 0;
  var x_inputvalue2 = 0;
  var y_inputvalue2 = 0;
  var x_inputvalue3 = 0;
  var y_inputvalue3 = 0;

  //Xのinqutを取得
  const textvalue_x = document.querySelectorAll("#word_idnumber_x input");

  var inputid_x1 = 0;
  var inputid_x2 = 0;
  var inputid_x3 = 0;

  //取得したinput X を1つずつ抜き出す
  textvalue_x.forEach(function (id_x) {
    //textbox_xy1の抜き出し
    if (id_x.id == "textbox_xy1") {
      inputid_x1 = id_x;
    }

    //textbox_xy2の抜き出し
    if (id_x.id == "textbox_xy2") {
      inputid_x2 = id_x;
    }

    //textbox_xy3の抜き出し
    if (id_x.id == "textbox_xy3") {
      inputid_x3 = id_x;
    }

  });

  //Yのinqutを取得
  const textvalue_y = document.querySelectorAll("#word_idnumber_y input");

  var inputid_y1 = 0;
  var inputid_y2 = 0;
  var inputid_y3 = 0;

  //取得したinput Y を1つずつ抜き出す
  textvalue_y.forEach(function (id_y) {
    //textbox_xy1の抜き出し
    if (id_y.id == "textbox_xy1") {
      inputid_y1 = id_y;
    }

    //textbox_xy2の抜き出し
    if (id_y.id == "textbox_xy2") {
      inputid_y2 = id_y;
    }

    //textbox_xy3の抜き出し
    if (id_y.id == "textbox_xy3") {
      inputid_y3 = id_y;
    }
  });

  //D3.jsの図を挿入する
  //数値の挿入

  const width = 300;
  const height = 200;

  // kkkkessss
  d3.select("#textanswer").selectAll("svg").remove();

  //表示する場所を設定する。
  const svg = d3.select("#textanswer").append("svg")
    .attr("width", width)
    .attr("height", height);

  const padding = 40;

  //数値に変換 X 1
  const textvalue_number_x = parseInt(inputid_x1.value);
  //中身の値のチェック
  //数値に変換 X 2
  const textvalue_number_x2 = parseInt(inputid_x2.value);
  //中身の値のチェック
  //数値に変換 X 3
  const textvalue_number_x3 = parseInt(inputid_x3.value);
  //中身の値のチェック

  //数値に変換 Y1
  const textvalue_number_y = parseInt(inputid_y1.value);
  //中身の値のチェック
  //数値に変換 Y2
  const textvalue_number_y2 = parseInt(inputid_y2.value);
  //中身の値のチェック
  //数値に変換 Y3
  const textvalue_number_y3 = parseInt(inputid_y3.value);
  //中身の値のチェック

  //数値だった場合alertを返す。それ以外は何もしない。X

  var xScale = null;
  //var xScale2 = null;
  //var xScale3 = null;

  var yScale = null;
  //var yScale2 = null;
  //var yScale3 = null;

  if (Number.isNaN(textvalue_number_x) == false) {
    //分かりやすいようにNumberxを取り出す。
    x_inputvalue = textvalue_number_x;
  }
  if (Number.isNaN(textvalue_number_x2) == false) {
    //分かりやすいようにNumberx2を取り出す。
    x_inputvalue2 = textvalue_number_x2;
  }
  if (Number.isNaN(textvalue_number_x3) == false) {
    //分かりやすいようにNumberx3を取り出す。
    x_inputvalue3 = textvalue_number_x3;
  }

  //X座標の数値を取り出す。
  xScale = d3.scaleLinear()
    .domain([0, d3.max([x_inputvalue, 100], function (d) {
      return d;
    })])
    .range([padding, width - padding]);



  //座標のメモリの設定準備　X
  let axisx = d3.axisBottom(xScale);

  //座標のメモリ作成と定義　X
  svg.append("g")
    .attr("transform", "translate(" + 0 + "," + (height - padding) + ")")
    .call(axisx);


  //数値だった場合alertを返す。それ以外は何もしない。
  if (Number.isNaN(textvalue_number_y) == false) {
    //分かりやすいようにNumberを取り出す。
    y_inputvalue = textvalue_number_y;
  }

  //数値だった場合alertを返すy_2。それ以外は何もしない。
  if (Number.isNaN(textvalue_number_y2) == false) {
    //分かりやすいようにNumberを取り出す。
    y_inputvalue2 = textvalue_number_y2;
  }

  //数値だった場合alertを返すy_3。それ以外は何もしない。
  if (Number.isNaN(textvalue_number_y3) == false) {
    //分かりやすいようにNumberを取り出す。
    y_inputvalue3 = textvalue_number_y3;
  }



  //Y座標の数値を取り出す。
  //メモリを表示するための準備 Y
  yScale = d3.scaleLinear()
    .domain([0, d3.max([y_inputvalue, 100], function (d) {
      return d;
    })])
    .range([height - padding, padding]);

  //座業メモリの設定準備　Y
  let axisy = d3.axisLeft(yScale);

  //座標のメモリ作成と定義　Y
  svg.append("g")
    .attr("transform", "translate(" + padding + "," + 0 + ")")
    .call(axisy);

  //●（数値）を合わせる為の座標の設定１２３
  let value_xy = [{
      "x1": x_inputvalue,
      "y1": y_inputvalue,
    },
    {
      "x1": x_inputvalue2,
      "y1": y_inputvalue2,
    },
    {
      "x1": x_inputvalue3,
      "y1": y_inputvalue3,
    }
  ];
  //座標を●で表示する。設定部分
  svg.append("g")
    .selectAll("circle")
    .data(value_xy)
    .enter()
    .append("circle")
    .attr("cx", function (d) {
      return xScale(d['x1']);
    })
    .attr("cy", function (d) {
      return yScale(d['y1']);
    })
    .attr("r", 3)
    .attr("fill", "SkyBlue");

};



//テキストを読み込んだときに呼ばれる関数
function textOnlode() {
  //テキストを打ちこむためにキーが入力されたら起動する
  document.addEventListener("keyup", textTipeValue);
}
//Windowがlodeした時に起動する
window.addEventListener("load", textOnlode);