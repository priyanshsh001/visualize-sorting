function SelectionSort()
{
    //displaying of the complexities
    document.getElementById("worst").innerText="O(N^2)";
    document.getElementById("avg").innerText="Θ(N^2)";
    document.getElementById("best").innerText="Ω(N^2)";
    document.getElementById("name").innerText="Selection-Sort";

    document.getElementById("spwo").innerText="O(1)";

   

    for(var i=0;i<array_size-1;i++)
    {
        update(divs[i],arr[i],"red");

        index_min=i;
// minimum index is taken as red and is compared with every element displayed as yellow
//after comparison element is switched to blue
// this process repeates for every element
        for(var j=i+1;j<array_size;j++)
        {
            update(divs[j],arr[j],"yellow");

            if(arr[j]<arr[index_min])
            {
                if(index_min!=i)
                {
                    update(divs[index_min],arr[index_min],"blue");
                }
                index_min=j;
                update(divs[index_min],arr[index_min],"red");
            }
            else
            {
                update(divs[j],arr[j],"blue");
            }
        }
        
        if(index_min!=i)
        {
            var temp=arr[index_min];
            arr[index_min]=arr[i];
            arr[i]=temp;

            update(divs[index_min],arr[index_min],"red");
            update(divs[i],arr[i],"red");
            update(divs[index_min],arr[index_min],"blue");
        }
        update(divs[i],arr[i],"green");
    }
    //final ans is green
    update(divs[i],arr[i],"green");

  
}