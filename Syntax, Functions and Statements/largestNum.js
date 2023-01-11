function LargestNumber(a, b, c){
    const nums=[a,b,c];
    nums.sort((a,b)=>a-b);
    console.log(`The largest number is ${nums[0]}.`);
}
LargestNumber(7,5,39);
