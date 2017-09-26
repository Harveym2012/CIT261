function loop(countBy, countTimes){
     for(int i = 0, i < countTimes, i++){
       countTotal += countBy;
     }
     document.getElementById("countTotal").innerHTML = countTotal;
}
