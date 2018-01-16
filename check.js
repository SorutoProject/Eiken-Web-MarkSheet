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