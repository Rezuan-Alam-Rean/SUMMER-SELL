let total = 0;

function handleClickCards(target){


    const detailsContainer = document.getElementById("details");


    const itemName = target.parentNode.childNodes[3].innerText ;
    const li = document.createElement("li");
    li.innerText = itemName;
    detailsContainer.appendChild(li);

    const prize =  target.parentNode.childNodes[5].innerText.split(" ")[0];

    total = parseInt(total) + parseInt(prize);
  
      document.getElementById("total").innerText = total;

   
    // console.log(total);

//   document.getElementById("total").innerText = total;

    // console.log(target.parentNode.childNodes[6].innerText);

    // console.log(target.parentNode.childNodes[5].innerText.split(" ")[0]);
    
    
    

    

}