var siteName = document.getElementById("siteName");
var siteURL = document.getElementById("siteURL");
var alertName =document.getElementById("alertName");
var alertUrl =document.getElementById("alertUrl");

var webContainer;
if (localStorage.getItem("webList") == null) {

  webContainer = [];
} else {
  
  webContainer = JSON.parse(localStorage.getItem("webList"));
  disblayWebSite();
}

function addWebSite() {

  
  if (validationName() &&validationUrl()) {
    
 
    var webSite = {
      name: siteName.value,
      url: checkUrl(),
    };
    webContainer.push(webSite);
    localStorage.setItem("webList", JSON.stringify(webContainer));
    disblayWebSite();
    clearForm();
  } 
   else {
     console.log("erorr");
  }
}

function disblayWebSite() {
  cortona = "";
  for (i = 0; i < webContainer.length; i++) {
    cortona += `  <tr>
        <td>${webContainer[i].name}</td>
        <td><button class="btn btn-info pr-2"><a href=${webContainer[i].url} style="text-decoration: none" target="_blank">vist</a></button></td>
        <td><button class="btn btn-danger" onclick="deletWebSite(${i})">delet</button></td>              
    </tr> `;
  }

  document.getElementById("tableBody").innerHTML = cortona;
}

function clearForm() {
  siteName.value = "";
  siteURL.value = "";
  alertName.style.display ="none";
  alertUrl.style.display ="none";
}

function deletWebSite(index) {
  webContainer.splice(index, 1);
  disblayWebSite();
  localStorage.setItem("webList", JSON.stringify(webContainer));
  if (webContainer.length == 0) {
    localStorage.removeItem("webList");
  }
}

function validationName() {
 
  if (siteName.value != "") {
    return true;
  } 
  else 
  {
    alertName.style.display ="block";
    return false;
  }
}
function validationUrl() {
  
  if (siteURL.value != "") {
    return true;
  } 
  else 
  {
    alertUrl.style.display ="block";
    return false;
  }
}

function search(trem){
    cortona = "";
    for (i = 0; i < webContainer.length; i++) {
        if(webContainer[i].name.toLowerCase().includes(trem.toLowerCase())){
      cortona += `  <tr>
          <td>${webContainer[i].name}</td>
         
          <td><button class="btn btn-info pr-2"><a href=${webContainer[i].url} style="text-decoration: none" target="_blank">vist</a></button></td>
          <td><button class="btn btn-danger" onclick="deletWebSite(${i})">delet</button></td>              
      </tr> `;
        }
    }
    document.getElementById("tableBody").innerHTML = cortona;
  }

  function checkUrl() {
   
    if(siteURL.value.indexOf("https://")==-1)
    return "http://"+siteURL.value
    else
    return siteURL.value;
  }

function unqUrl() {

    for(let i=0 ;i<=webContainer.length-1; i++){
      if(webContainer[i].url == siteURL.value||webContainer[i].url=="https://"+siteURL.value){
        return false;
      }
      else
      return true;
  }
  }


//http://www.youtube.com/channel/UCEHvaZ336u7TIsUQ2c6SAeQ
//https://www.youtube.com/channel/UCEHvaZ336u7TIsUQ2c6SAeQ  