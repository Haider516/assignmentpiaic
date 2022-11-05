
//Find index number with value
let arr1 = [11, 15, 17, 18, 19];
var b = prompt("enter the value");
for (let a=0;a<arr1.length;a++)
{
    if(arr1[a]===b)
    {
        console.log("The Enered value is found at index: " +a);
        break;
    }
    else{
        continue;
    }
}