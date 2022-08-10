
function SumArray(array,num){
    let valores=[]
    let ultimo=array[array.length-1]
    let estado=false
    for (let i=0;i<array.length;i++){
      for (let z=1;z<array.length;z++) {
        if(array[i]+array[z]===num){
          valores.push('i: '+array[i]+' z: '+array[z])
          if(array[z] === ultimo){
            estado=false
          }else{
            estado=(array[i]+array[z] === num)
          }
        }
      }
    }
    console.log(valores)
    console.log(estado)
  }
  console.log(SumArray([2,4,6,8],14))