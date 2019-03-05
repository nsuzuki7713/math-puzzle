// 並んでいる数字の各桁の間に四則演算の演算子を入れて計算することにします。
// ※演算子を入れない場所があっても構いませんが、最低でも１つは入れるものとする。
// 今回は出来上がった四季を計算した結果、「元の数の桁を逆から並べた数字」と同じになるものを考える
// 351→3 * 51 = 153
// 621→6 * 21 = 126
// 886→8 * 86 = 688
// 問題）
// 1000〜9999のうち、上記の条件を満たす数を求める

const arithmetic = ['', '+', '-', '*', '/'];
const arithmetic_len = arithmetic.length;
let calc_str = '';

for (let num = 1000; num < 10000; num++) {
  let sNum = String(num);
  for (i = 0; i < arithmetic_len; i++) {
    for (j = 0; j < arithmetic_len; j++) {
      for (k = 0; k < arithmetic_len; k++) {
        let calc = sNum.charAt(3) + arithmetic[i] + sNum.charAt(2) + arithmetic[j] + sNum.charAt(1) + arithmetic[k] + sNum.charAt(0);
        if (calc.length > 4) {
          if (num == eval(calc)) {
            console.log(calc + " = " + num);
          }
        }
      }
    }
  }
}
