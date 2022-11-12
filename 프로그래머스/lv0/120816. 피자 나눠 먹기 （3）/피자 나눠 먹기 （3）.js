function solution(slice, n) {
    let pizzaNum = 1;
    while(true){
        if((pizzaNum*slice)/n >= 1){
            break;
        }
        pizzaNum++;
    }
    return pizzaNum;
}