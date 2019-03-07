let card = new Array(100).fill(-1);
for (let i = 2; i < 100; i++) {
  let j = i - 1;
  while (j < 100) {
    card[j] = card[j] * -1;
    j = j + i;
  }
}

for (let i = 0; i < 100; i++) {
  if (card[i] == -1) {
    console.log(i + 1 + ',');
  }
}
