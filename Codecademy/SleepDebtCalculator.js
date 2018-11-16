function getSleepHours(day){
  switch(day){
    case 'monday':
      return 8
    case 'tuesday':
      return 7
    case 'wednesday':
      return 4
    case 'thursday':
      return 7
    case 'friday':
      return 9
    case 'saturday':
      return 8
    case 'sunday':
      return 9
  }
}
console.log(getSleepHours('wednesday'))

function getActualSleepHours(){ 
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
}
console.log(getActualSleepHours())

function getIdealSleepHours(){
  let idealHours = 7
  return idealHours * 7
}
function calculateSleepDebt(){
  const actualSleepHours = getActualSleepHours()
  const idealSleepHours = getIdealSleepHours()
  if(actualSleepHours === idealSleepHours){
    console.log("perfect sleep")
  }else if(actualSleepHours > idealSleepHours){
    console.log("more sleep than needed by " + (actualSleepHours - idealSleepHours))
  }else{
    console.log("get more rest to " + (idealSleepHours-actualSleepHours))
  }
}
calculateSleepDebt()
