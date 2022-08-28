
function Confirm(){
    var name=document.getElementById("cashholder-name").value
    var number=document.getElementById("card-number").value
    var MM=document.getElementById("MM").value
    var YY=document.getElementById("YY").value
    var CVC=document.getElementById("CVC").value
    
    if(name!==""&&number!==""&&MM!==""&&YY!==""&&CVC!==""){
        document.getElementById("conf").style.display="flex";
        document.getElementById("conf").style.flexDirection="Column";
        document.getElementById("for").style.display="none";
    } 
}

function Continue(){
    document.getElementById("conf").style.display="none";
    document.getElementById("for").style.display="flex";
}