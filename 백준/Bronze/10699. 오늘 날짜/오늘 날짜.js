const date = new Date().toISOString().
  replace(/T/, ' ').      
  replace(/\..+/, '')    

const answer = date.split(' ')[0];
console.log(answer);