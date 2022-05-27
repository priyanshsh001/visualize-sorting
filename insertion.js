function Insertion(){
    //displaying complexities
        document.getElementById("worst").innerText="O(N^2)";
    document.getElementById("avg").innerText="Θ(N^2)";
    document.getElementById("best").innerText="Ω(N)";
    document.getElementById("name").innerText="Insertion-Sort";
    
    document.getElementById("spwo").innerText="O(1)";
    

    for(var j=0;j<array_size;j++)
    {
        update(divs[j],arr[j],"yellow");
        //initial element is taken as yellow
        // then further two elements are compared with each other then their color are switched to red

        var key= arr[j];
        var i=j-1;
        while(i>=0 && arr[i]>key)
        {
            update(divs[i],arr[i],"red");
            update(divs[i+1],arr[i+1],"red");

            arr[i+1]=arr[i];

            update(divs[i],arr[i],"red");
            update(divs[i+1],arr[i+1],"red");
    //blue indicated the intermidiate completion of the sorting 
            update(divs[i],arr[i],"blue");
            if(i==(j-1))
            {
                update(divs[i+1],arr[i+1],"yellow");
            }
            else
            {
                update(divs[i+1],arr[i+1],"blue");
            }
            i-=1;
        }
        arr[i+1]=key;

        for(var t=0;t<j;t++)
        {
            update(divs[t],arr[t],"green");
            //final ans is with green
        }
    }
    update(divs[j-1],arr[j-1],"green");

}