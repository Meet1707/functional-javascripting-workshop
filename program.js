
//2
// function myFun(demo,num){
//    function demo(){
//     return myFun(demo,num);
//     }
// }
// module.exports = myFun;

//3
// function doubleAll(numbers) {
//     // SOLUTION GOES HERE
//     var result = [];
//     numbers.map(num =>{
//         result.push(num*2);
//     })
//     return result;
//   }

//   module.exports = doubleAll;

//4
// function getShortMessages(messages){
//    var res = [];
//     messages.filter((msg)=>{
//      if(msg.message.length < 50){
//        res.push(msg.message);
//      }
//    });
//    return res;
// }

// module.exports = getShortMessages;


//5
// function checkUsersValid(goodUsers) {
//     return function allUsersValid(submittedUsers) {
//         return submittedUsers.every((submittedUser)=>{
//             return goodUsers.some((goodUser)=>{
//                 return goodUser.id === submittedUser.id;
//             })
//         })
//     };
//   }
  
// module.exports = checkUsersValid;

// 6
// function countWords(inputWords) {
     
//     var aa= inputWords.reduce((cc,i)=>{
//          cc[i] = ++cc[i] || 1;
//          return cc;  
//     },{})
//     return aa ;
// }
  
// module.exports = countWords;


// function myFun(arr, fn, initial) {
//     // SOLUTION GOES HERE
//       function fn(){

//      }
//   }
  
// module.exports = reduce;


//7
// function duckCount(obj) {
//     // SOLUTION GOES HERE
//   }
  
//   module.exports = duckCount;

// function Sp(target, method) {
 
//   }
  
//   module.exports = Sp;

//async loop
// function loadUsers(userIds, load, done) {
//     var users = []
//     for (var i = 0; i < userIds.length; i++) {
//       users.push(load(userIds[i]))
//     }
//     console.log(users);
//     return users;
//   }
  
//   module.exports = loadUsers;

//block event

function repeat(operation, num) {
    // modify this so it can be interrupted
    
    //else{
     operation(()=>{
        repeat(operation, num--);
    })
   
  }
  
  module.exports = repeat;
