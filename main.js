// Homework2 A

function findYoungestPerson(users) {
    if (users.length === 0) {
      return null;
    }
  
    let youngest = users[0];
  
    for (let i = 1; i < users.length; i++) {
      if (users[i].age < youngest.age) {
        youngest = users[i]; 
      }
    }
  
    return youngest.name;
  }
  
  const users = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
  ];
  
  const youngestName = findYoungestPerson(users);
  console.log(youngestName); 
  

//   Homework2 B

function cloneUser(user) {
    return { ...user };
  }
  
  const originalUser = { name: 'Temo', age: 25 };
  const clonedUser = cloneUser(originalUser);
  
  console.log(clonedUser);
 

// Homework2 C

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function playGame() {
    let rollsA = 0;
    let rollsB = 0;
  
    while (true) {
      rollsA++;
      if (rollDice() === 3) {
        console.log("Customer A wins after", rollsA, "rolls.");
        break;
      }
  
      rollsB++;
      if (rollDice() === 3) {
        console.log("Customer B wins after", rollsB, "rolls.");
        break;
      }
    }
  }
  
  playGame();
  

// // console.log(user.name, user.lastName, user.userName)
// // user.move()

// // let A = 30
// // let B = A

// // A = 45



// // const A = {
// //     name : 'James',
// //     lastName : 'Bond',
// //     userName : '007',
// // }

// // const B = A

// // A.name = 'Beka'

// // console.log(A)
// // console.log(B)

// // const arr = ['Beka', 'Zaza', 'Gulo', 'Enveri']

// // const A = {
// //     name : 'James',
// //     lastName : 'Bond',
// //     userName : '007',
// // }


// // // console.log(arr.length)
// // // console.log(arr[0])

// // // for(const name of arr){
// // //     console.log( name)
// // // }
// // for( const f in A){
// //     console.log(A[f])
// // }




// // function randomNumber(){
// //     return parseInt(Math.random() * 10) + 1
// // }

// // let result = randomNumber()

// // while(result !== 9){
// //     result = randomNumber()
// //     console.log(result)
// // }

// // do{
// //     result = randomNumber()
// //     console.log(result)
// // }while(result !== 9)
// // const arr = ['Beka', 'Zaza', 'Gulo', 'Enveri']

// // // arr.forEach(function(element, index){
// // //     console.log(index + ' ' + 'is equal' + ' ' + element )
// // // })

// // const restMap = arr.map(function(element, index) {
// //    return index + ' ' + 'is equal' + ' ' + element 
// // })

// // console.log(restMap)

// const array = [ 3, 6, 8, 1, 4, 3, 7, 1, 3 ]
// const restFilter = array.filter(function(element){
//     return element > 6
// })

// console.log(array)
// console.log(restFilter)