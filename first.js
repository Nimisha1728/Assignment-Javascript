// Q1:Check prime or not in array......................
var myArray=[];
var i, x,n,flag=true;
function prime()
{
    x=document.getElementById("txt1").value;
    myArray.push(x);
    console.log(myArray);
    n=myArray[0];
   if(n==1)
   {
       flag=false;
   }
    for (var i = 2; i <= n - 1; i++) 
    if (n % i == 0) { 
        flag = false; 
        break; 
    } 
      

  if (flag == true) 
  {
    
    document.getElementById("output1").innerHTML=n+ " is a Prime Number";
  }
  else
  {
   
    document.getElementById("output1").innerHTML=n+ " is Not a Prime Number";
  }

}

//Q2:Most frequent item of an array..........
var itmArray=[];
var item,count=0,cnt=0,elem;

function freqElem()
{
    item=document.getElementById("txt2").value;
    itmArray.push(item);
   console.log(itmArray);
    for(var i=0;i<itmArray.length;i++)
    {
        for(var j=i;j<itmArray.length;j++)
        {
          if(itmArray[i]==itmArray[j])
          {
           count++;
          }
        
        if(cnt<count)
        {
           cnt=count;
           elem=itmArray[i];
       }
    }
     count=0;
    }

 
 document.getElementById("output2").innerHTML=elem +" "+"appears"+" "+ cnt+" times";
}

//Q3:Swap the case of characters ...................
var newStr="";
var str;
function swapCase()
{
  str=document.getElementById("txt3").value;
  for(var i=0;i<str.length;i++)
  {
   
      if(str[i]==str[i].toLowerCase())
      {
          newStr+=str[i].toUpperCase();
      }
      else{
          newStr+=str[i].toLowerCase();
      }
  }
  //console.log(newStr);
  document.getElementById("output3").innerHTML=newStr;
}

//Q4:Sum of squares of the elements of an array............

var arrElem,sum=0;
var myArrayElem=[];

function sumSquare()
{
   arrElem=document.getElementById("txt4").value;
   myArrayElem.push(arrElem);
   console.log(myArrayElem);
  
   sum=myArrayElem.reduce((out,val)=>{return out+(val*val);},0);
   console.log(sum);
   document.getElementById("output4").innerHTML="Sum of squares of array is"+" "+sum;
}

//Q5: Check Odd or Even.......................

function oddEven()
{
  
  
  for(i=0;i<=15;i++)
  {
    if(i==0)
    {
      console.log(i+" even");
      document.getElementById("output5").innerHTML+=i+" is"+" Even"+'<br>';
     
    }
    else if(i%2==0)
    {
      console.log(i+" Even");
      document.getElementById("output5").innerHTML+=i+" is"+" Even"+"<br>";
     
    }
    else
    {
    console.log(i+" odd");
    document.getElementById("output5").innerHTML+=i+" is"+" Odd"+"<br>";
   
    }
  }
}

//Q6: Truncate a String.....................
  
 var out;
function truncStr(str,len)
{
  var str=document.getElementById("txt6").value;
  var len=document.getElementById("txt6n").value;
  if(str.length>len)
  {
    out= str.slice(0,len);
    console.log(out);
    document.getElementById("output6").innerHTML="Truncated string : "+out;
  }
  else
  {
    console.log(str);
    document.getElementById("output6").innerHTML=str;
  }

}

//Q7: Find large................

function findLarge()
{
  var first=document.getElementById("first").value;
  var second=document.getElementById("second").value;
  if(first>second)
  {
   
    console.log(first);
    document.getElementById("output7").innerHTML="Larger integer is "+first;
  }
  else
  {
    document.getElementById("output7").innerHTML="Larger integer is "+second;
    console.log(second);
  }
}

//Q8: Arrange array in alphabetical order.............

function arrange()
{
  var x,output="";
  var str=document.getElementById("txt8").value;
  var strArray=str.split(",");
  console.log(strArray);
  out=strArray.sort();
  console.log(out);
  for(x in strArray)
  {
     output+=strArray[x]+"<br>";
  }
  document.getElementById("output8").innerHTML=output;
}

//Q9: Print the letters.............
var output="";
function print()
{
  var str='javascript'.split('');
  for(let[index,value] of str.entries())
  {
    for(var i=0;i<=index;i++)
    {
      output+=str[i];
     
    }
      output+="<br>";
     
  }
  
  document.getElementById("output9").innerHTML=output;
}

//Q10: Pattern using nested for loop...........
var pattern="";
function printStar()
{
  for(let i=0;i<=5;i++)
  {
    for(let j=0;j<=i;j++)
    {
      pattern+="*\t";
     
    }
    
    pattern+="<br>";
   
  }
 
  document.getElementById("output10").innerHTML=pattern;
  
}



