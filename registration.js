let t1 = document.getElementById("tou-form");
const t2 = () => {
  let t3 = localStorage.getItem("tou-ent");
  if(t3){
    t3 = JSON.parse(t3);
  }else{
    t3 = [];
  }
  return t3;
};

let t4 = t2();
const t5 = () =>{
  const t6 = t2();
  const t7 = t6.map((entry) => {

      const nametou = `<td class='border px-4 py-2'>${entry.name}</td>`;
      const emailtou = `<td class='border px-4 py-2'>${entry.email}</td>`;
      const passwordtou = `<td class='border px-4 py-2'>${entry.password}</td>`;
      const dobtou = `<td class='border px-4 py-2'>${entry.dob}</td>`;
      const acceptTermstou = `<td class='border px-4 py-2'>${entry.acceptedTermsAndConditions}</td>`;
      const rowtou = `<tr>${nametou} ${emailtou} ${passwordtou} ${dobtou} ${acceptTermstou}</tr>`;
      return rowtou;
    }).join("\n");
    const table = `<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">Dob</th>
    <th class="px-4 py-2">Accepted terms?</th>
    </tr>${t7} </table>`;
    let details = document.getElementById("tou-ent");
    details.innerHTML = table;
}
const t8 = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptedTermsAndConditions = document.getElementById("acceptTerms").checked;
  const entry = {
      name,
      email,
      password,
      dob,
      acceptedTermsAndConditions,
  };
  t4.push(entry);
  localStorage.setItem("tou-ent", JSON.stringify(t4));
  t5();
}
t1.addEventListener("submit", t8);
t5();
//----------------------------------------------------------DATE VALIDATION-----------------------------------------


  function ganval2() 
  {   let element = document.getElementById("dob");
      const dob = document.getElementById("dob").value;
      let tou1 = new Date(dob);
      var todaydate = new Date();
      var age = parseInt(todaydate.getFullYear()) - parseInt(tou1.getFullYear());
      if (todaydate.getMonth() < tou1.getMonth() || (todaydate.getMonth() === tou1.getMonth() && todaydate.getDate() < tou1.getDate()))
       age--;
      if (!(age > 18 && age < 55)) 
      {
           element.setCustomValidity("age must be in between 18 and 55");
           element.reportValidity();
      } 
      else{
      element.setCustomValidity("");
      }
}
!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Registration</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="styles.css">
  </head>

  <body>
    
    <div class="containtou">
         <h1 class="text-3xl text-center font-bold leading-tight">Registration Form</h1><br>
        <form id="tou-form">
          <div class="row">
            <div class="tou-25">
              <label for="name">Name</label>
            </div>
            <div class="tou-75">
              <input required type="text" id="name" name="name"
              style="margin-left: 20px"
              placeholder="Enter Full name"/><br /><br />
            </div>
            <div class="tou-25">
              <label for="email">Email</label>
            </div>
            <div class="tou-75">
              <input required type="email" id="email" name="email" 
              style="margin-left: 20px"
              placeholder="Enter Email"/><br /><br />
            </div>
            <div class="tou-25">     
              <label for="password">Password</label>
            </div>
            <div class="tou-75">
              <input required type="password" id="password" name="password"
              style="margin-left: 20px"
              placeholder="Enter Password"/><br /><br />
            </div>
            <div class="tou-25"> 
              <label for="dob">Date of Birth</label>
            </div>
            <div required class="tou-75">
              <input required type="date" id="dob" name="dob"
              style="margin-left: 20px" /><br /><br />
            </div><br />
            <div style="text-align: left;"> 
             <label for="acceptTerms">Accept Terms & Conditions</label>
              <input type="checkbox" id="acceptTerms" name="acceptTerms"
              style="margin-left:5px"/><br /><br />
            </div>
              <button type="submit" id="submit" style="margin-left:125px;  background-color: #4070f4; color: white; padding: 12px 60px;
              border: none;
              border-radius: 4px;
              cursor: pointer;" onclick="ganval2()">Submit</button>
          </div>
        </form>
      </div>
    
      <div class="containx">
                <h2 class="text-3xl text-center font-bold leading-tight"> Entries</h2><br />
                <div class="divide-y divide-gray-300/50" id="tou-ent"></div>
      </div>
    <script src="local.js"></script>containtou{
    max-width: 300px;
    margin:35px;
    padding:35px 20px;
    border-radius: 10px;
    width:fit-content;
    background-color: rgb(255, 255, 255);
}
.containx{
  max-width: 700px;
  margin:30px;
  padding:35px 20px;
  border-radius: 10px;
  width:fit-content;
  background-color: rgb(255, 255, 255);
}
  body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #6070f4;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  .tou-25 {
    float: left;
    width: 15%;
    margin-top: 8px;
    
  }
  
  .tou-75 {
    float: left;
    width: 75%;
    margin-top: 8px;
  }
button {
   
  
}
input{
    border-radius: 8px;
    border: none;
    border-style: outset;
    padding: 35px;
   
    
}
label{
    font-size: large;
}
input#name:invalid:focus{
    border: 4px solid yellow;
  }
  input#email:invalid:focus{
    border: 4px solid yellow;
  }
  input#password:invalid:focus{
    border: 4px solid yellow;
  }
  input#acceptTerms:invalid:focus{
    border: 4px solid yellow;
  }
  input#dob:invalid:focus{
    border: 4px solid yellow;
  }
  </body>
</html>
