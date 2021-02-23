 

 confirm("Are You Age Between 18 And 80");
var userName = prompt("Please Enter Your Name ");
var age = prompt("Please Enter Your Age ");
if(age>=18 && age <=80)
{
    var movieName = prompt("What Movie You want To Watch");
var FavColor = prompt("Enter Your Favorite Color");
var element = document.getElementById('col').style.color = FavColor;
var el = document.getElementById('col');
el.innerText=("My Name Is : " + userName + "\n" +"My Age Is : " + age +"\n" +" Move Name :  "+ movieName);
}
else 
{
    alert("You Not Allowed To Enter This Page");
}

    
 


