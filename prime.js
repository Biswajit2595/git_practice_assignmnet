let num=17;
let factor=0
for(let a=1;a<num;a++){
    if(num%2===0){
        factor++
    }
}
if(factor===2){
    console.log(num," is a prime no")
}else{
    console.log(num,"is not a prime no")
}