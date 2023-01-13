const checkPrime = (n) => {
    for(let i=0;i<n/2;i++){
        if(n%i==0){
            return false;
        }
        return true;
    }
}

const checkArmstrong = (n) => {
    let tempN = n
    let sum=0
    while(tempN!=0){
        sum =sum + Math.pow(tempN%10,3)
        tempN = tempN/10;
    }
    if(sum===n){
        console.log('Armstrong')
    }
    else{
        console.log('Not Armstrong')
    }
}

console.log(checkArmstrong(300))
console.log(checkPrime(50))

