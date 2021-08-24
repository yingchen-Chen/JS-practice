//For迴圈
// let a = 10
// a = a + 20
// console.log('a', a)
// //i++ => i = i + 1
// for(let i = 0; i < 10; i++) {
//     console.log('i:', i)
// }
//0 1 2 ->class的index
let classA = [100, 70, 59]
classA.push(40)
// console.log(classA[0])
// console.log(classA[1])
// console.log(classA[2])
// console.log(classA[3])
// for(let i = 0; i < classA.length; i++) {
//     console.log('i:', classA[i])
// }

for(let i = 0; i < classA.length; i++) {
    if (i === 2) {
        classA[i] = 999
    }
}
console.log('classA', classA)

const posts = [
    {
      name: '布魯斯'
      desc: '貼文一'
    }, 
    {
     name: '布魯斯2號',
     desc: '貼文二'
    },
    
]
//while迴圈