
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

class User {
    // constructor
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }


    static countUsers()
    {
    console.log("There are 50 Users");
    }


    // Method
    register(){
        console.log(this.username + ' is now registered');
    }
}

// let riz = new User('Rizwan','Rizwanulahtiger313@gmail.com','12345');
// let har = new User('Haris','haris@gmail.com','5588774');

// riz.register();
// har.register();

User.countUsers();

class Member extends User{
    constructor(username, email, password, memeberPackage)
    {
        super(username, email, password);
        this.package = memeberPackage;
    }

    getPackage()
    {
        console.log(this.username+" is Subscribed to the "+this.package+" Package");
    }
}

let mike = new Member('mike','mike@gmail.com','1234','standard');

mike.getPackage();
mike.register();