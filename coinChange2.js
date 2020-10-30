let coins = [1, 5, 10, 25, 50, 100, 200];
coins.reverse();

const change = (total, coins) => {
   let change = total;
   let giveChange = [];

   while (change > 0) {
      for (let i = 0; i < coins.length + 1; i++) {
         if (change >= coins[i]) {
            change -= coins[i];
            giveChange.push(coins[i]);
            i--;
         }
      }
   }

   return giveChange;
};

console.log(change(1000, coins));
