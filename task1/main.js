// getting the two vectors
let x1 = parseInt(prompt('x value for the first vector'));
let y1 = parseInt(prompt('y value for the first vector'));

let x2 = parseInt(prompt('x value for the second vector'));
let y2 = parseInt(prompt('x value for the second vector'));


// creating the function 

function dot_product(x1,x2,y1,y2){
    return x1*x2 + y1*y2
}

if (dot_product(x1,x2,y1,y2) === 0 ){
    console.log('the two vectors are orthogonal')
}
else {
    console.log("the two vectors are not orthogonal")
}