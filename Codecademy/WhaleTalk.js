let input = 'this is my phrase'
const vowels = ['a', 'e', 'i', 'o', 'u']
let resultArray = []
for(let i = 0; i < input.length; i++){
  for(let = j = 0; j < vowels.length; j++){
    if(input[i].toLowerCase() === vowels[j].toLowerCase()){
      resultArray.push(input[i])
      if(input[i] === 'e' || input[i] === 'u'){
        resultArray.push(input[i])
      }
    }
  }
}
console.log(resultArray.join('').toUpperCase())
