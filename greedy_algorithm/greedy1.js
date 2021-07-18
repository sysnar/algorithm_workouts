let coin_list = [1, 100, 500, 50];

function min_coin_count(value, coin_list) {
  let total_coin_count = 0;
  let details = [];
  let coin_num = 0;
  coin_list.sort((a, b) => b-a);

  for (const coin of coin_list) {
    coin_num = parseInt(value / coin);
    total_coin_count += coin_num;
    value -= coin_num * coin;
    details.push([coin, coin_num]);
  }
  return total_coin_count, details;
}

console.log(min_coin_count(4720, coin_list));