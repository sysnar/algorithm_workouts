const board = [[0,0,0,0,0],
               [0,0,1,0,3],
               [0,2,5,0,1],
               [4,2,4,4,2],
               [3,5,1,3,1]];
const moves = [1,5,3,5,1,2,1,4];

// function solution(board, moves) {
//   bucket = [];
//   answer = [];
//   for (move of moves) {
//     for (let i = 0; i < board.length; i++) {
//       if (board[i][move - 1] > 0) {
//         bucket.push(board[i][move - 1])
//         board[i][move - 1] = 0;
//         if (bucket[bucket.length-1] == bucket[bucket.length-2]) {
//           answer += bucket[bucket.length - 1];
//           console.log(answer);
//           bucket.splice(bucket.length -2);
//           // console.log(bucket);
//         }
//         break;
//       }
//     }
//   }
//   return parseInt(answer) * 2;
// }
// function solution(board, moves) { 
//   var answer = 0;
//   let list = board.map((v) => v.slice());
//   let stack = [];
//   for (let i = 0; i < moves.length; i++) {
//     let n = moves[i] - 1;
//     for (let j = 0; j < list.length; j++) {
//       if (list[j][n] !== 0) {
//         if (stack[stack.length - 1] === list[j][n]) { 
//           answer += 2; 
//           stack.pop(); 
//         }
//         else { 
//           stack.push(list[j][n]); 
//         }
//         list[j][n] = 0; 
//         break; } 
//       } 
//     } 
//     return answer; 
//   }

function solution(board, moves) {

    var count =0;
    var stack = [];

    for(var i=0;i<moves.length;i++){
        var now = moves[i]-1
        for(var j=0;j<board.length;j++){
            if(board[j][now]!=0){
                if(stack[stack.length-1]===board[j][now]){
                    stack.pop();
                    count+=2;
                }
                else{
                    stack.push(board[j][now])
                }
                board[j][now] = 0;
                break;
            }
        }
    }
    console.log(stack)
    return count
}

console.log(solution(board, moves));