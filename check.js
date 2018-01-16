function check(num,id){
	var now = document.getElementById(id).src;
	//チェックする処理
	if(now.match(/w/)){
	var other = id.slice(0,-1);//列の統一idを取得(例:r1)
	//とりあえず、全部解除
	document.getElementById(other + "1").src = "mark/w1.png";
	document.getElementById(other + "2").src = "mark/w2.png";
	document.getElementById(other + "3").src = "mark/w3.png";
	document.getElementById(other + "4").src = "mark/w4.png";
	//クリックされた番号を塗る
	var nurl = "mark/b" + num + ".png"
	document.getElementById(id).src = nurl;
	}else
	//チェック解除処理
	{
	var nurl = "mark/w" + num + ".png"
	document.getElementById(id).src = nurl;
	}
}
function length(){
    var text = document.getElementById("wri").value;
    var data = (text+=".").replace(/(\,|\.|:|;|\!|\?|\s)+/g, " ").split(" ").length - 1;
    document.getElementById("len").innerHTML = "現在の単語数:" + data + "語";
}
function leninfo(){
var info = `各級の目標単語数(Suggested length)
1級:200~240語
準1級:120~150語
2級:80~100語
準2級:50~60語
3級:25~35語`;
alert(info);
}
