function paresEimpares(value1,value2,string){
    let pares = [];
    let impares = []
    for(let i=0;i<=value1;i++){
        if(i%2 === 0){
            pares.push(i)
        }else if((i%1===0)&&(i%i===0)){
            impares.push(i)
        }
    }
    for(let i=0;i<pares.length;i++){
        if(pares[i]%value2 === 0){
            pares[i]=string
        }
    }
    for(let i=0;i<impares.length;i++){
        if(impares[i]%value2 === 0){
            impares[i]=string
        }
    }
    
  
    
    return ('Pares: '+pares+' | '+' Impares: '+impares)
}

console.log(paresEimpares(15,3,'lauty'))