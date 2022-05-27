function Bubble()
{
    //we are adding the time and space complexitis of the sorting algo
    document.getElementById("worst").innerText="O(N^2)";
    document.getElementById("avg").innerText="Θ(N^2)";
    document.getElementById("best").innerText="Ω(N)";
    document.getElementById("name").innerText="Bubble-Sort";
    document.getElementById("spwo").innerText="O(1)";

    
// we have the classical bubble sort algo here with visualization of colors
    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        { //new element will be having yellow color
            update(divs[j],arr[j],"yellow");

            if(arr[j]>arr[j+1])
            { // two elements will be having red colors while comparison
                update(divs[j],arr[j], "red");
                update(divs[j+1],arr[j+1], "red");

                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;

                update(divs[j],arr[j], "red");
                update(divs[j+1],arr[j+1], "red");
            }
            // after comparison we will turn the value to blue
            update(divs[j],arr[j], "blue");
        }
        //green indicates that the largest element is now at the end
        update(divs[j],arr[j], "green");
    }
    update(divs[0],arr[0], "green");

    
}
