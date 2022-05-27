function Merge()
{// displaying the complexities 
    document.getElementById("worst").innerText="O(N log N)";
    document.getElementById("avg").innerText="Θ(N log N)";
    document.getElementById("best").innerText="Ω(N log N)";
    document.getElementById("name").innerText="Merge-Sort";
   
    document.getElementById("spwo").innerText="O(N)";
    merge_partition(0,array_size-1);

}

function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;
// every comparison is shown with red color
    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=arr[q++];
            update(divs[q-1],arr[q-1],"red");
           
            
        }
        else if(q>end)
        {
            Arr[k++]=arr[p++];
            update(divs[p-1],arr[p-1],"red");
            
           
        }
        else if(arr[p]<arr[q])
        {
            Arr[k++]=arr[p++];
            update(divs[p-1],arr[p-1],"red");
          
            
        }
        else
        {
            Arr[k++]=arr[q++];
            update(divs[q-1],arr[q-1],"red");
           
           
        }
    }

    for(var t=0;t<k;t++)
    {
        arr[start++]=Arr[t];
        update(divs[start-1],arr[start-1],"green");
        // green indicates the completionn of sorting of the partitions
        
    }
}

async function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        update(divs[mid],arr[mid],"yellow");
       // mid  color will be turnes to yellow  
       

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}
