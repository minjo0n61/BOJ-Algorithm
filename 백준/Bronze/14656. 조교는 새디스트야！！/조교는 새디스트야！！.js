const fs=require('fs')
ip=fs.readFileSync(0).toString().split('\n')
n=parseInt(ip[0])
count=0
v=ip[1].split(' ').map(Number)
for(i=0;i<n;i++){
    a=parseInt(v[i])
    if(a!=i+1) count++
}
console.log(count)