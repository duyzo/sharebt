function print1(n) {
    let a = '* ',b=''
    for (let i = 1; i <= n; i++) {
        b+=a;
        console.log(b)
    }
}

function print2(n) {
    let a = '* ',b='',c = ' '
    for (let i = 1; i <= n; i++) {
        let d=''
        for (let j = n-i; j>0;j--) {
            d+=c;
        }
        b+=a;
        console.log(d+b)
    }
}
print1(5)
print2(5)
function copy(x,n) {
    let string = x
    for (let i = 1; i < n;i++) {
        string+='-'+x;
    }
    console.log(string)
}

copy('hello',8)

let numbers = [1,2,3,4,5,6,7,8]
let sum =0
numbers.forEach((x,index,arr) => {
    sum+= x
});
console.log(sum)

let objects = [
    {
        name: 'Nguyen Van A',
        age: 18
    },
    {
        name: 'Le Van C',
        age: 22
    }
]
objects.forEach((object) => {
    console.log(object)
    for (let j in object) {
        console.log(object[j])
    }
})

function giaiThua(n) {
    let x =1
    if (n<0) {
        console.log('không xác định')
        return -1;
    }
    if (n== 0 || n == 1) return 1;
    for (let i = 2 ; i <=n;i++) {
        x*=i
    }
    return x
}
console.log(giaiThua(-5))