function Min(array,string){
    let min=array[0]
    let indice=null
    for(let i=0;i<array.length;i++){
        if(min>=array[i]){
            min=array[i]
            indice=i
        }
    }
    switch(string){
        case 'index':
            return indice
        case 'value':
            return min
    }    
}
console.log(Min([10,5,4,7],'value'));