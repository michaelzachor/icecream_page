 function clickPos(event)
    {
        x=event.screenX;
        y=event.screenY;
        
        document.getElementById("glasses").style.left=x-100+"px";
        document.getElementById("glasses").style.top=y-130+"px";
    }