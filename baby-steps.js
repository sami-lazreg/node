let a=process.argv
let sum =0

for(let i=2 ;i<a.length;i++){
sum+= parseInt(a[i])
}
console.log(sum)
