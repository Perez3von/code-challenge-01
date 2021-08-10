
export function doubleNum(arr){
    return arr.map(i => i * 2);
}

export function stringNumbers(arr){
    return arr.map(i => i.toString());
}

export function fixName(arr){

  let a = arr.map(i => i.toLowerCase());
   return a.map((i) => {
    let first_letter = i[0].toUpperCase();
    let part_word = i.slice(1);
    return first_letter + part_word; 
   } );
}

export function namesOnly(arr){
let names = [];
    arr.map((obj) => {
        names.push(obj.name);
        return names;
    })
   return names
}


export function makeStrings(arr){

let sentences = [];

arr.map((obj) => {

    if(obj.age >= 80){
        sentences.push(obj.name + ' can go to The Matrix')
        
    }
    else{
        sentences.push(obj.name + ' is under age!!')
        
    }
    return sentences;
})
return sentences;


}

//Hello Panda

export function readyToPutInTheDOM(arr){
  
let headers = [];

arr.map((obj)=> {
    headers.push(`<h1>${obj.name}</h1><h2>${obj.age}</h2>`)
    return headers;
})

return headers;
}