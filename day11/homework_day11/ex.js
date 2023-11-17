// // Bài 1
// function math1() {
//     let n = prompt("nhap n")
//     let x=0
//     for (let i = 1; i <= n;i++) {
//         x += Math.pow(i,3)
//     }
//     return x; 
// }
// console.log(math1())
// // Bài 2
// function math2() {
//     let n = prompt("nhap n")
//     let x=0
//     for (let i = 1; i <= n;i++) {
//         x += 1/i
//     }
//     return x; 
// }
// console.log(math2())
// // Bài 3
// function math3() {
//     let n = prompt("nhap n")
//     let x=0
//     for (let i = 1; i <= n;i++) {
//         x += 1/(2*i)
//     }
//     return x; 
// }
// console.log(math3())
// // Bài 4
// function math4() {
//     let n = prompt("nhap n")
//     let x=0
//     for (let i = 1; i <= n;i++) {
//         x += 1/(2*i-1)
//     }
//     return x; 
// }
// console.log(math4())
// // Bài 5
// function math5() {
//     let n = prompt("nhap n")
//     let sum = 0, x=1
//     for (let i = 1; i <= n;i++) {
//         if(n%i==0) {
//             sum+=i
//             x*=i
//         }
//     }
//     console.log(`Tổng là: ${sum}`)
//     console.log(`Tích là: ${x}`) 
// }
// math5()
// //Bài 6
// function math6() {
//     let n = prompt("nhap n")
//     let x=1
//     for (let i = 1; i <= n;i++) {
//             x*=i
//         }
    
//     console.log(`Giai thừa ${n}!: ${x}`)
// }
// math6()
// // Bài 7
// function math7() {
//     let n = prompt('nhap so phan tu n:')
//     let arrNumber = [],evenNumbers = [],oddNumbers= []
//     for (let i = 0 ; i <n ; i++) {
//         let k = prompt(`nhap arr[${i}] = `)
//         arrNumber.push(k)
//     }
//     for (let j of arrNumber) {
//         if (j%2 == 0) evenNumbers.push(j)
//         else oddNumbers.push(j)
//     }
//     console.log(`evenNumber = ${evenNumbers}`)
//     console.log(`oddNumbers =  ${oddNumbers}`) 
// }
// math7()
// // bài 8
// function math8() {
//     let x = 0,i=1
//     while (i*3<1000) {
//         x+=i*3;
//         if (i*5<1000) x+=i*5
//         i++
//     }
//     console.log(x)
// }
// math8()
// // Bài 9
// function math9() {
//     let n = prompt('nhap so phan tu n:')
//     let sum = 0,arr = []
//     for (let i = 0 ; i <n ; i++) {
//         let k = prompt(`nhap arr[${i}] = `)
//         arr.push(k)
//     }
//     let length = arr.length
//     for (let j = 0 ; j <length ; j++) {
//         sum+= +arr[j]
//     }
//     console.log(sum)
// }
// math9()
// // Bài 10
// function math10() {
//     let n = prompt('nhap so phan tu n:')
//     let arr = []
//     for (let i = 0 ; i <n ; i++) {
//         let k = prompt(`nhap arr[${i}] = `)
//         arr.push(k)
//     }
//     let length = arr.length,max = arr[0]
//     for (let j = 1 ; j <length ; j++) {
//         if (max < arr[j]) max = arr[j]
//     }
//     console.log(max)
// }
// math10()
// // Bài 11
// function math11() {
//     let n = prompt('nhâp số sản phẩm n:')
//     let arr = [],sum=0
//     for (let i = 0 ; i <n ; i++) {
//                 arr.push({})
// }
//     for (let j of arr) {
//         let name = prompt('nhập tên sản phẩm')
//         let code = prompt('nhập mã sản phẩm')
//         let color = prompt("nhập màu")
//         let count = prompt('nhập số lượng sản phẩm')
//         j['name'] = name
//         j['code'] = code
//         j[color] = count
//         sum+=+count
//     }
//     console.log(`số lượng sản phẩm trong kho là: ${sum}`)
// }
// math11()
// // Bài 12 
// function math12() {
//     let n = prompt('nhâp số học sinh:')
//     let arr = [], max = 0,maxName = ''
//     for (let i = 0 ; i <n ; i++) {
//                 arr.push({})
//     }
//     for(let j of arr) {
//         let name = prompt('nhập tên học sinh')
//         let score = prompt('nhập điểm học sinh')
//         j['name'] = name
//         j['score'] = score
//         if (max==0 || max < +score) {
//             max = score
//             maxName = name
//         }
//     }
//     console.log(`học sinh có điểm cao nhất là ${max} \ntên là: ${maxName}`)
// }
// math12()