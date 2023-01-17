function puzzle(n) {
    A = 1
    B = 1
    C = 1
    D = 1
    X = 0
        for (let index = 0; index < n; index++) {
            X = D + 2 * C + 3 * B + 4 * A
            A = B
            B = C
            C = D
            D = X
        }
    return D % 10000000000

}

// console.log(puzzle(10))

// console.log(puzzle(100))
const valor = Math.pow(2022, 100)
console.log("el resultado es",puzzle(valor))


// ====== Output ======

// 30520

// 720820623

// ???