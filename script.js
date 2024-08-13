function getDate(){
    let Dte=document.getElementById("dte").value;
    let Time=document.getElementById("tm").value;
    let month = Dte.slice(5, 7).toString();
    let year = Dte.slice(0, 4);
    let day = Dte.slice(8, 10)
    let mn="";
    if(month=="01"){
        mn="Jan"
        console.log("January")
    }
    else if(month=="02"){
        mn="Feb"
    }
    else if(month=="03"){
        mn="Mar"
    }
    else if(month=="04"){
        mn="Apr"
    }
    else if(month=="05"){
        mn="May"
    }
    else if(month=="06"){
        mn="Jun"
    }
    else if(month=="07"){
        mn="Jul"
    }
    else if(month=="08"){
        mn="Aug"
    }
    else if(month=="09"){
        mn="Sept"
    }
    else if(month=="10"){
        mn="Oct"
    }
    else if(month=="11"){
        mn="Nov"
    }
    else if(month=="12"){
        mn="Dec"
    }
    return last=(`${mn} ${day}, ${year} ${Time}`);
    
};

let m=setInterval(()=>{
    let present = new Date().getTime();
    let end=new Date(last).getTime();
    let diff=(end-present)/1000;
    let days=Math.floor(diff/86400);
    let hours=Math.floor(diff%86400/3600);
    let minutes=Math.floor(diff%3600/60);
    let seconds=Math.floor(diff%60);
    let a=document.getElementById("data")
    let list=data.querySelectorAll("input")
    list[0].value=days;
    list[1].value=hours;
    list[2].value=minutes;
    list[3].value=seconds;
    if (diff< 0) {
        clearInterval(m);
        document.getElementById("data").innerHTML = `<h1>EXPIRED</h1>`;
      }
},1000)