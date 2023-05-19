function req(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(xhttp.readyState==4 && xhttp.status==200){
            var data=JSON.parse(this.responseText);
            var row=""
            for (var i=0; i<data.length; i++) {
               row +=`<tr><td>  ${data[i].id} </td><td>  ${data[i].title}  </td>` ;
              if (data[i].completed==true)
                   { row +=`<td>  <input type="checkbox" checked disabled></td></tr>` }
              else  
              { row +=`<td>  <input type="checkbox" onclick="checkboxes()"></td></tr>` }
            }
            document.getElementById("htxt").innerHTML=row;
          }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}

function checkboxes(){
  let promise=new Promise((resolve,reject)=>{
    var inputElems = document.getElementsByTagName("input");
    count = 0;
    for (var i=0; i<inputElems.length; i++) {
    if (inputElems[i].type === "checkbox" && inputElems[i].checked === true && inputElems[i].disabled ===false){
        count++;
    }
  }
  if(count ==5){
    resolve()
  }
  })

  promise.then((val)=>{
    alert("Congrats. 5 Tasks have been Successfully Completed");
  })
}