 

var result =  confirm("Are You Ready to watch ?");

if(result ==true)
{
var movieName = prompt("Enter your email to create or restart your membership.");

var netCost = prompt("Choose the plan that's right for you\n 1 Year for 100$ or 2 years for 250$ enter cost that's you want ")

alert(costTax( netCost*.14));
 }
else 

{

    var el = document.getElementById('col');
    el.innerText=('Unfortunately, visit us soon')
}

    
 


function costTax (cost)
{

    var tax = cost*0.16;
     var totalPrice = tax+cost;
return totalPrice;
}