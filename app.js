function genraterandomcolor()
{
    return '#'+ Math.floor(Math.random()*16777215).toString(16);
}
function changebackgroundcolor()
{
     let colorbg=document.getElementById('coloroverlay');
     colorbg.style.backgroundColor=genraterandomcolor();
}

function changetextbg()
{
     let changetext=document.getElementById('textbg');
     if(changetext.innerHTML=="ON THE FLOOR BABY")
     changetext.innerHTML="HIT IT HARD BABY";
     else if(changetext.innerHTML=="HIT IT HARD BABY")
     changetext.innerHTML="ROCK THE PARTY BABY";
     else if(changetext.innerHTML=="ROCK THE PARTY BABY")
     changetext.innerHTML="ON THE FLOOR BABY";
}

function checkbg()
{
    genraterandomcolor();
    changebackgroundcolor();
    changetextbg();
}

setInterval(checkbg,500);