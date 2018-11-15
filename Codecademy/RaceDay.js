let raceNumber = Math.floor(Math.random() * 1000);
var registeredEarly = false
var runnerAge = 18
if(runnerAge > 18 && registeredEarly){
  raceNumber+=1000
}
if(runnerAge > 18 && registeredEarly){
  console.log(`Number ${raceNumber} will race at 9:30AM.`)
}else if(runnerAge > 18 && !registeredEarly){
  console.log(`Number ${raceNumber} will race at 11:00AM.`)
}else if(runnerAge < 18){
  console.log(`Number ${raceNumber} will race at 12:30PM.`)
}else{
  console.log(`Number ${raceNumber} please see registration desk.`)
}
