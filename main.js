let str = `
010-123-4567
the@ggg.com
The one.
fox dd
https:://localhost:1111
http:://localhost:1234
ddd
동해물과_백두산이 마르고 닳도록
`

// console.log(
//     str.match(/\bf\w{1,}\b/g)
// )

//f로 시작하는 단어 찾기

console.log(
    str.match(/(?<=@).{1,}/g)
)