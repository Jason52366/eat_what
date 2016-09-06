// ("店名", "特徵1, 特徵2, ...", 溜狗TF)
var tag_list = ["快餐", "大份量", "免費飲料", "免費湯"];

var lunch_list = 
[
	["海賊食堂", true, "海賊食堂區", "炒飯, 大份量, 免費飲料"],
	["韓客御廚韓式料理", false, "海賊食堂區", "韓式, 拌飯, 火鍋, 大份量, 免費飲料"],
	["彩椒廚房", false, "阿英區", "素食, 義大利麵, 免費飲料"],
	["阿英魯肉飯", false, "阿英區", "魯肉飯, 雞腿飯, 快餐, 免費飲料"],
	["春花微笑", true, "阿英那條巷子走到溫州街", "快餐, 飲料"],

	["麥子磨麵", true, "溫州公園那邊", "義大利麵, 免費飲料"],
	["葉記麵店", true, "溫州公園那邊", "魯肉飯, 小吃"],
	["滿腹食堂", true, "溫州公園那邊", "火鍋, 咖哩飯, 烏龍麵, 免費飲料"],
	["滇味小館", true, "溫州公園那邊", "雲南, 泰式, 咖哩飯, 免費飲料"],
	["鳳城燒臘", false, "溫州公園那邊", "港式, 燒臘, 炒飯, 快餐, 大份量, 重口味, 免費飲料"],
	["大葉麵館", true, "溫州公園那邊", "湯麵", false],
	["蠶居", true, "溫州公園那邊", "快餐, 大份量, 免費飲料, 免費湯"],

	["名家牛肉麵", true, "台電大樓旁邊", "牛肉麵, 湯餃"],
	["清真泰皇餐廳", true, "台電大樓旁邊", "泰式"],
	["擱再來經濟海產小吃", true, "台電大樓旁邊", "炒飯, 熱炒"],


	["醉紅小飯廳", true, "小飯廳那邊", "免費飲料"],
	["七里亭", false, "小飯廳那邊", "快餐, 雞腿飯, 免費飲料"],
	["豪香熱炒", false, "小飯廳那邊", "快餐, 雞腿飯, 免費飲料"],
	["興隆手工涼麵", true, "小飯廳那邊", "涼麵, 臭豆腐"],
	["嚴記麵食", false, "小飯廳那邊", "小吃"],
	["上賀麵食", false, "小飯廳那邊", "快餐, 免費湯, 免費飲料"],
	["八方雲集", true, "小飯廳那邊", "鍋貼"],

	["發現義大利麵", true, "羅斯福路上", "義大利麵"],
	["銀咖哩", true, "羅斯福路上", "咖哩飯"],

	["台大牛莊", false, "牛莊公園區", "快餐, 滷肉飯, 免費飲料, 免費湯"],
	["越南銀座", true, "牛莊公園區", "越式, 快餐, 雞腿飯, 河粉, 免費湯"],
	["罌粟花泰式料理", true, "牛莊公園區", "泰式, 快餐, 免費飲料"],
	["母女的店泰式簡餐", true, "牛莊公園區", "泰式, 快餐"],
	["帕米爾新疆餐廳", true, "牛莊公園區", "新疆"],
	["大福利排骨大王", null, "牛莊公園區", "快餐, 脂肪"],

	["藍家割包", null, "藍家割包巷", "割包, 四神湯, 小吃"],
	["金雞園", true, "藍家割包巷", "快餐"],
	["阿正祖傳老湯頭", null, "藍家割包巷", "滷肉飯, 蝦仁焿, 小吃"],
	["店長米粉湯", null, "藍家割包巷", "滷肉飯, 米粉湯"],
	["劉記川味牛肉麵", null, "藍家割包巷", "牛肉麵"],
	["頑固拉麵鐵板燒", null, "藍家割包巷", "拉麵, 牛排, 鐵板燒"],

	["四季香廚", null, "汀州路上", "快餐, 牛肉麵"],
	["我家涼麵", null, "汀州路上", "涼麵"],
	["阿姨小吃", true, "汀州路上", "小吃, 免費飲料"],

	["韓天閣", true, "鴉片粉圓旁", "韓式, 火鍋, 小菜, 免費飲料"],
];

var idx_list = [];
var lotter_id_array = ["#lottery_top1", "#lottery_top2", "#eat_me", "#lottery_bottom1", "#lottery_bottom2"];


$(document).ready(function()
{
	init_lottery();

	$("#get_eat").click(function(event) 
	{
		loop_things(30);
	});
});

function loop_things(loop_times)
{
	var wait_time = 50;
	if (loop_times < 10)
	{
 		wait_time = 100 + 10*(10 - loop_times);
	}
	else if(loop_times < 5)
	{
		wait_time = 150 + 30*(5 - loop_times);
	}
	else if(loop_times == 1)
	{
		wait_time = 500;
	}
	if (loop_times > 1)
	{
		var idx = get_random_idx();
		idx_list.shift();
		idx_list.push(idx);
		setTimeout(function() { 
			refresh_lottery_box();
			loop_things(loop_times-1);
    	}, wait_time); 
	}
	else
	{
		refresh_eat_info();
	}
}


function get_random_idx()
{
	return Math.floor(Math.random() * lunch_list.length);
}


function init_lottery()
{
	for (var i = 0; i < 5; i++)
	{
		var idx = get_random_idx();
		idx_list.push(idx);
		var eat = lunch_list[idx];
		$(lotter_id_array[i]).text(eat[0]);
	}
	refresh_eat_info();
}

function refresh_lottery_box()
{
	for (var i = 0; i < 5; i++)
	{
		var idx = idx_list[i];
		var eat = lunch_list[idx];
		$(lotter_id_array[i]).text(eat[0]);
	}
}

function refresh_eat_info()
{
	var idx = idx_list[2];
	var eat = lunch_list[idx];
	$("#eat_name span").text(eat[0]);
	$("#eat_where span").text(eat[2]);
	$("#eat_features span").text(eat[3]);
}


function saveTextAsFile(fineName, fileContent)
{      
    var textToWrite = fileContent;
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var fileNameToSaveAs = fineName;

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "My Hidden Link";
    
    window.URL = window.URL || window.webkitURL;
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}

