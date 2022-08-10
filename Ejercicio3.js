
function medio(string) {
    
    const p=string.length;
    if(p%2==0){
        return (string.slice(l/2-1, l/2+1))
    }else{
        return (string.slice((l/2), l/2+1))
    }
}
console.log(medio('Hola'))

