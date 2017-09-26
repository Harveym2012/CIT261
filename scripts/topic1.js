function loop(){
     var countTimes = document.getElementById('countTimes').value;
     var countBy = document.getElementById('countBy').value;
     for(int i = 0, i < countTimes, i++){
       countTotal += countBy;
     }
     document.getElementById("countTotal").innerHTML = countTotal;
}
