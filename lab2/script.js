const clickBtn = document.getElementById('clbtn')
clickBtn.onclick = () => colorStar()
const stars=document.getElementsByClassName('star');
function colorStar(){
    for(var i=0;i<5;i++){
        stars[i].style.color='black';
    }
    var ratingValue = document.getElementById("rating").value;
    for(var j=0;j<ratingValue;j++){
        stars[j].style.color='yellow';
    }
}