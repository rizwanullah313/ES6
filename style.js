
document.getElementById("mainh").innerHTML = "Learn ES6";

// // var a = "Test1";
// // let b = "test2";

// // console.log(a);
// // console.log(b);

// function testVar(){
//  var a = 30;
//  if(true){
//      var a = 50;
//      console.log(a);
//  }
//  console.log(a);
// }

// function testLet(){
//     let a = 30;
//     if(true){
//         let a = 50;
//         console.log(a);
//     }
//     console.log(a);
// }

//  //testVar();
//  //testLet();


// //  for(var i=0; i<10; i++)
// //  {
// //     console.log(i);
// //  }
//    // console.log(i);
 

// //    for(let i=0; i<10; i++)
// //    {
// //       console.log(i);
// //    }
// //       console.log(i);  


// // const colors = [];
// // colors.push('blue');
// // colors.push('green');

// // //colors = "yellow";

// // console.log(colors);




////////////////////// Classesss //////////////

// class User {
//     // constructor
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }


//     static countUsers()
//     {
//     console.log("There are 50 Users");
//     }


//     // Method
//     register(){
//         console.log(this.username + ' is now registered');
//     }
// }

// let riz = new User('Rizwan','Rizwanulahtiger313@gmail.com','12345');
// let har = new User('Haris','haris@gmail.com','5588774');

// riz.register();
// har.register();

// User.countUsers();

// class Member extends User{
//     constructor(username, email, password, memeberPackage)
//     {
//         super(username, email, password);
//         this.package = memeberPackage;
//     }

//     getPackage()
//     {
//         console.log(this.username+" is Subscribed to the "+this.package+" Package");
//     }
// }

// let mike = new Member('mike','mike@gmail.com','1234','standard');

// mike.getPackage();
// mike.register();


////////////////////////////////////// Template Literals ///////////////////////////

// let template = '<h1>Hello</h1><p>This is a simple Template of Javascript</p>';

// function makeUppercase(word)
// {
//     return word.toUpperCase();
// }

// let name = "Rizwan";
// let template = `
// <h1>${makeUppercase('Hello')}, ${name}</h1>
// <p>This is a simple Template of Javascript</p>`;

// document.getElementById("temp").innerHTML = template;



///////////////////////////// New Strings & Number Methods ///////////////////////

// let theString = "Hello I'm Rizwan And I love Javascript and All other prgramming Languages";

// console.log(theString);
// console.log(theString.startsWith('Hello'));
// console.log(theString.endsWith("Languages"));
// console.log(theString.includes("other"));

//Hex
//console.log(0xFF);
//Binary
//console.log(0b101011);
//Octal
//console.log(0o543);

// console.log(Number.isFinite(3));
// console.log(Number.isNaN(2));
// console.log(Number.isInteger(33.8));



////////////////////// default Paramters & Spread operator //////////////////////

// function greet($greeting)
// {
//     console.log($greeting);
// }

// function greet($greeting = "PAk")
// {
//     console.log($greeting);
// }

// greet();
// greet("Hello");
// greet();


// let args1 = [1,2,3];
// let args2 = [4,5,6];
// function test(){
//     console.log(args1+','+args2);
// }

//test.apply(null, args);
//test();
//test(...args);
// test(...args1,...args2);



////////////////// Set, Map, Weakset and WeakMap ////////////////////////////

//  let myArray = [11,22,33,44,55];
//  let mySet = new Set(myArray);

//  console.log(myArray);
//  mySet.add('100');
//  mySet.add({a: 1, b: 2});
//  mySet.delete(22);
//  mySet.clear();
//  mySet.add("200");
//  console.log(mySet);
//  console.log(mySet.size);


//  mySet.forEach(function(val)
//  {
//  console.log(val);
//  });


//  let myMap = new Map([['a1','Hello'],['b2','GoodBye']]);
//  myMap.set('c3','Food');
//  myMap.delete('a1');
//  console.log(myMap);
//  console.log(myMap.size);



//  let carweakSet = new WeakSet();

//  let car1 = {
//  make: 'Honda',
//  model: 'Civic'
//  }

//  carweakSet.add(car1);

//  let car2 = {
//     make: 'Toyota',
//     model: 'Camry'
//  }

//  carweakSet.add(car2);
//  carweakSet.delete(car1);
//  console.log(carweakSet);


//  let carweakMap = new WeakMap();

//  let key1 = {
//     id: 1
//   }
//  let car1 = {
//     marke: 'Honda',
//     model: 'Civic'
//  }



// let key2 = {
//     id: 2
// }
// let car2 = {
//     marke: 'Toyota',
//     model: 'Camry'
// }


// carweakMap.set(key1,car1);
// carweakMap.set(key2,car2);
// carweakMap.delete(key1);
// console.log(carweakMap);



//////////////////////////////// Arrow Function ///////////////

// function Prefixer(prefix)
// {
//     this.prefix = prefix;
// }

// Prefixer.prototype.profixArray = function(arr)
// {
//     return arr.map((x) =>
//     {
//         console.log(this.prefix + x);
//     });

    
    // let that = this;
    // return arr.map(function(x)
    // {
    //     console.log(that.prefix + x);
    // });
 //}

/// let pre = new Prefixer('Hello ');
/// pre.profixArray(['Rizwan','Shaan']);

/*
let add = function(a,b)
{
    let sum = a+b;
    console.log(sum);
    return false;
}
*/

// let add = (a,b) =>
// {
//     let sum = a+b;
//     console.log(sum);
//     return false;
// }
//  add(2,23);


///////////////////////// Promise ////////////////////////

//var myPromise = Promise.resolve('foo');
//myPromise.then((res)=>console.log(res));


/*
var myPromise = new Promise(function(resolve,reject)
{
   setTimeout(()=>resolve(4),2000);
});

myPromise.then((res)=>{
    res +=6;
    console.log(res);
});
*/


/*
function getData(method, url)
{
    return new Promise(function(resolve, reject)
    {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function()
        {
            if(this.status >= 200 && this.status <300)
            {
                resolve(xhr.response);
            }
            else{
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function(){
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

getData('GET','https://jsonplaceholder.typicode.com/todos').then(function(data)
{
   //console.log(data);

   let todos = JSON.parse(data);
   let output = '';
   for(let todo of todos)
   {
       output += `
       <li>
       <h3>${todo.title}</h3>
       <p>Completed: ${todo.completed}</p>
       </li>
       `;
   }

   document.getElementById("temp1").innerHTML = output;

}).catch(function(err)
{
    console.log(err);
});

*/



