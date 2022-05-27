function Quick()
{
 // showing complexities
    document.getElementById("worst").innerText="O(N^2)";
    document.getElementById("avg").innerText="Θ(N log N)";
    document.getElementById("best").innerText="Ω(N log N)";
    document.getElementById("name").innerText="Quick-Sort";

    document.getElementById("spwo").innerText="O(log N)";
  

    quick_sort(0,array_size-1);

   
}

 function quick_partition (start, end)
{
    var i = start + 1;
    var piv = arr[start] ;
    // pivot element is displayed with yellow
    update(divs[start],arr[start],"yellow");
    
    divs[start].style.background="yellow";
   
        for(var j =start + 1; j <= end ; j++ )
        {
          
            if (arr[ j ] < piv)
            {
            //every  jth element will be in yellow  and ith in red
            //after that both will be in red and then swap take place now color will be blue after completion of the swapping
                update(divs[j],arr[j],"yellow");
            
                divs[j].style.background="yellow";
            
                update(divs[i],arr[i],"red");
            
                divs[i].style.background="red";
            
                update(divs[j],arr[j],"red");
            
                divs[j].style.background="red";
            

                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;

                update(divs[i],arr[i],"red");
                
                divs[i].style.background="red";
                
                update(divs[j],arr[j],"red");
                
                divs[j].style.background="red";
                
                update(divs[i],arr[i],"blue");
                
                divs[i].style.background="blue";
                
                update(divs[j],arr[j],"blue");
                
                divs[j].style.background="blue";
                

                i += 1;
            }
    }
    update(divs[start],arr[start],"red");
 
    divs[start].style.background="red";
   
   update(divs[i-1],arr[i-1],"red");
  
   divs[i-1].style.background="red";
   

    var temp=arr[start];
    arr[start]=arr[i-1];
    arr[i-1]=temp;
 
    update(divs[start],arr[start],"red");
  
    update(divs[i-1],arr[i-1],"red");
    
    
    for(var t=start;t<=i;t++)
    {
        update(divs[t],arr[t],"green");
     //sorted elements will be in green color
 
       
    }

    return i-1;
}

function quick_sort (start, end )
{
    if( start < end )
    {
        
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);
        quick_sort (piv_pos +1, end) ;
    }
 }

