const records = [
    { year: "2014", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2013", result: "L"},
  ]

function superbowlWin(record){
  const win= record.find(el=> el.result=== "W");
  if (win === undefined){
    return undefined;
    }
    else{
    return win.year;
    }
}
  

