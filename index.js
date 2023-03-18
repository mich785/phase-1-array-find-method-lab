const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]
  
  function superbowlWin(record){
    if(record.result === "w"){
      return record.year ==="2015"
    }
    else {
      return undefined
    }
  }

  let yearOfWin = record.find(superbowlWin);

  

