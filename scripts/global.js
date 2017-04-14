window.onload=function FreshTime(){
       showTime()
}
function showTime(){
var endtime=new Date("2017/6/15,12:00:00");//结束时间
        var nowtime = new Date();//当前时间
        var lefttime=parseInt((endtime.getTime()-nowtime.getTime())/1000); 
        d=parseInt(lefttime/(24*60*60));
        h=parseInt(lefttime/(60*60)%24);
        m=parseInt(lefttime/60%60);
        s=parseInt(lefttime%60);
       
        document.getElementById("LeftTime").innerHTML=d+"天"+h+"小时"+m+"分"+s+"秒";
        setTimeout(showTime,500);
}
