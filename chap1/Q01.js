// 問題: 10進数と2進数、8進数のいずれで表現しても回分数となる数のうち、
// 10進数の10以上で最小の値を求めてください。
// 例）9(10進数) = 1001(2進数) = 11(8進数)

const minPalindromicNumber = () => {
  for (let i = 10; i < 10000; i++) {
    // console.log(i)
    // console.log(String(i).split("").reverse().join(""))
    // console.log(i.toString(2))
    // console.log(String(i.toString(2)).split("").reverse().join(""))
    // console.log(i.toString(8))
    // console.log(String(i.toString(8)).split("").reverse().join(""))
    if ( i == String(i).split("").reverse().join("") &&
       i.toString(2) == String(i.toString(2)).split("").reverse().join("") &&
       i.toString(8) == String(i.toString(8)).split("").reverse().join("")
    ) {
      console.log(i);
      return;
    }
  }
};

minPalindromicNumber();