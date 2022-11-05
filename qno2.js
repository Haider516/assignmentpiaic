
var list = [12, 3, 5, 6, 7];

Array.prototype.addtwo = function () {
    for(let x=0; x < this.length; x++)
    {
        this[x]+=2;
    }
}

Array.prototype.Subtwo = function () {
    for(let x=0; x < this.length; x++)
    {
        this[x]-=2;
    }
}

list.addtwo();

    for(let x=0; x<list.length;x++)
    {
        console.log( list[x]);
    }

    console.log( "\n");
list.Subtwo();
for(let x=0; x<list.length;x++)
{
    console.log( list[x]);
}