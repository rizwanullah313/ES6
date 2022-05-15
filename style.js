
// var a = "Test1";
// let b = "test2";

// console.log(a);
// console.log(b);

function testVar(){
 var a = 30;
 if(true){
     var a = 50;
     console.log(a);
 }
 console.log(a);
}

function testLet(){
    let a = 30;
    if(true){
        let a = 50;
        console.log(a);
    }
    console.log(a);
}

 //testVar();
 //testLet();


//  for(var i=0; i<10; i++)
//  {
//     console.log(i);
//  }
   // console.log(i);
 

//    for(let i=0; i<10; i++)
//    {
//       console.log(i);
//    }
//       console.log(i);  


const colors = [];
colors.push('blue');
colors.push('green');

//colors = "yellow";

console.log(colors);