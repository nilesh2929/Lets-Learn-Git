function add(...sum){
    let summ = 0;
    for(let i of sum){
      summ =   summ + i;
    }
    console.log( summ)
}
add(3,5)