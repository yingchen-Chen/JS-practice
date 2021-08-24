console.log(100)

// && (and)兩邊都是true,結果才是true
// || (or)兩邊只要有一邊是true 就果就是true
//比較運算值都是從左往右比較
// let condition = false || true 答案false
// ! 前面加一個驚嘆號 > true變false false>true

// let condition =! false

//三個=意思是;比較等號兩邊是否為相同的, !==是否不相同
// let scoreA = 100
// let scroeB = 99
// let condition = scoreA === scroeB

// if (scoreA > scroeB) {
//     console.log('A考得比較高')
// } else {
//     console.log('B考得比較高')
// }

//漏斗式
// let score = 80
// if (score === 100) {
//     console.log('好棒棒')
// } else if (score===70){
//     console.log('再加油')
// } else if (score===60){
//     console.log('下次小心點')
// } else {
//     console.log('去補修!')
// }

// switch case
let key = 999
 switch (key) {
    case 100:
         console.log('考了100分')
         break;
    case 200:
        console.log('考了200分')
        break;
    default:
        console.log('沒去考試')
        break;            
 }