function printDate() {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
  }
  
  var intervalID = setInterval(printDate, 1000);