//获取系统时间
var newDate = '';
getLangDate();
//值小于10时，在前面补0
function dateFilter(date){
    if(date < 10){return "0"+date;}
    return date;
}

function getLangDate(){
    var dateObj = new Date(); //表示当前系统时间的Date对象
    var year = dateObj.getFullYear(); //当前系统时间的完整年份值
    var month = dateObj.getMonth()+1; //当前系统时间的月份值
    var date = dateObj.getDate(); //当前系统时间的月份中的日
    var day = dateObj.getDay(); //当前系统时间中的星期值
    var weeks = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    var weeks_en = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var week = weeks[day]; //根据星期值，从数组中获取对应的星期字符串
    var week_en = weeks_en[day]; //根据星期值，从数组中获取对应的星期字符串
    var hour = dateObj.getHours(); //当前系统时间的小时值
    var minute = dateObj.getMinutes(); //当前系统时间的分钟值
    var second = dateObj.getSeconds(); //当前系统时间的秒钟值
    var timeValue = "" +((hour >= 12) ? (hour >= 18) ? "晚上" : "下午" : "上午" ); //当前时间属于上午、晚上还是下午
    var timeValue_en = "" +((hour >= 12) ? (hour >= 18) ? "evening" : "afternoon" : "morning" ); //当前时间属于上午、晚上还是下午
    newDate = dateFilter(year)+"/"+dateFilter(month)+"/"+dateFilter(date)+"/ "+" "+dateFilter(hour)+":"+dateFilter(minute)+":"+dateFilter(second);
    var lang = window.localStorage.getItem("lang");
    if (lang == "en") {
        document.getElementById("nowTime").innerHTML = "Good " + timeValue_en + "! Welcome to the PTE Core Practise website. Current time is: "+newDate+"　"+week_en;
    } else {
        document.getElementById("nowTime").innerHTML = timeValue+"好！ 欢迎使用 PTE Core 练习网站。当前时间为： "+newDate+"　"+week;
    }
    setTimeout("getLangDate()",1000);
}

layui.use(['form','element','layer','jquery'],function(){
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : top.layer,
        element = layui.element;
        $ = layui.jquery;
    $(".panel a").hover(function(){
        $(this).find(".layui-anim").addClass("layui-anim-scaleSpring");
    },function(){
        $(this).find(".layui-anim").removeClass("layui-anim-scaleSpring");
    })
    $(".panel a").click(function(){
        parent.addTab($(this));
    })
})
