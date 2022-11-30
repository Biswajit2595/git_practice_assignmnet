let str="Madam"
let rev=""
for(let a=str.length-1;a>=0;a--){
    rev+=str[a]
}
if(str===rev){
    console.log(str,"is a palindrome")
}else{
    console.log(str, "is not a palindrome")
}