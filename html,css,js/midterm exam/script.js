function getUserInput() {
  return {
    email: document.getElementById("floatingInput").value,
    name: document.getElementById("floatingName").value,
    phone: document.getElementById("floatingPhoneNumber").value,
    address: document.getElementById("floatingaddress").value,
    gender: document.querySelector("select").options[document.querySelector("select").selectedIndex].text,
  };
}




function addRow(event) {
    event.preventDefault(); 
  
    const { email, name, phone, address, gender } = getUserInput();

  
    const table = document.querySelector("table tbody");
    const row = document.createElement("tr");
  
    const emailtd = document.createElement("td");
    emailtd.textContent = email;
  
    const nametd = document.createElement("td");
    nametd.textContent = name;
  
    const phonetd = document.createElement("td");
    phonetd.textContent = phone;
  
    const gendertd = document.createElement("td");
    gendertd.textContent = gender;
  
    const adresstd = document.createElement("td");
    adresstd.textContent = address;
  
    row.appendChild(emailtd);
    row.appendChild(nametd);
    row.appendChild(phonetd);
    row.appendChild(gendertd);
    row.appendChild(adresstd);
  
    table.appendChild(row);
  
  };
  

  function addCard() {

    
    const { email, name, phone, address, gender } = getUserInput();

    const cardContainer = document.getElementById("cardContainer");
    
    const card = document.createElement("div");
    card.className = "card m-3";
    card.style.width = "18rem";

    const ul = document.createElement("ul");
    const emailli = document.createElement("li");
    emailli.textContent = "email : "+email;
  
    const nameli = document.createElement("li");
    nameli.textContent ="mane : "+ name;
  
    const phoneli = document.createElement("li");
    phoneli.textContent = "phone : "+phone;
  
    const genderli = document.createElement("li");
    genderli.textContent = "gender : "+ gender;
  
    const adressli = document.createElement("li");
    adressli.textContent = "address : "+ address;

    ul.appendChild(emailli);
    ul.appendChild(nameli); 
    ul.appendChild(phoneli);
    ul.appendChild(genderli);
    ul.appendChild(adressli);
    card.appendChild(ul);
    cardContainer.appendChild(card);

  }

  function showUser(event){
    form=document.getElementById("form");
    if(form.checkValidity() === true){
    addRow(event);
    addCard();
    document.querySelector("form").reset();
  }
  else{
    const inputs = document.querySelectorAll("form input, form select");
    inputs.forEach(input => {
      if (!input.checkValidity()) {
        input.style.border = "2px solid red";
      } else {
        input.style.border = ""; 
      }
    });
    alert("Please fill all the fields correctly.");
  }
}