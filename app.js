const handleSubmit = (event) => {
  event.preventDefault()
  let name = document.getElementById("name").value
  let surname = document.getElementById("surname").value
  let date = document.getElementById("date").value
  let phone = document.getElementById("phone").value
  let email = document.getElementById("email").value

  let shirtColor = document.getElementById("shirtColor").value
  let textColor = document.getElementById("textColor").value
  let shirtText = document.getElementById("shirtText").value
  let shirtAmount = document.getElementById("shirtAmount").value
  let size = document.getElementById("size").value

  let adress = document.getElementById("adress").value
  let fullName = document.getElementById("fullName").value
  let expirationDate = document.getElementById("expirationDate").value
  let cardNumber = document.getElementById("cardNum").value
  let cvv = document.getElementById("cvv").value

  document.getElementById("nameInput").innerHTML = name
  document.getElementById("surnameInput").innerHTML = surname
  document.getElementById("dateOfBirthInput").innerHTML = date
  document.getElementById("nameInput").innerHTML = name
  document.getElementById("emailInput").innerHTML = email
  document.getElementById("phoneInput").innerHTML = phone

  document.getElementById("tshirtColorInput").innerHTML = shirtColor
  document.getElementById("textColorInput").innerHTML = textColor
  document.getElementById("textInput").innerHTML = shirtText
  document.getElementById("amountInput").innerHTML = shirtAmount
  if ((size = 1)) {
    document.getElementById("sizeInput").innerHTML = "Small"
  } else if ((size = 2)) {
    document.getElementById("sizeInput").innerHTML = "Medium"
  } else {
    document.getElementById("sizeInput").innerHTML = "Large"
  }

  document.getElementById("adressInput").innerHTML = adress
  document.getElementById("fullNameInput").innerHTML = fullName
  document.getElementById("expirationDateInput").innerHTML = expirationDate
  document.getElementById("cardNumberInput").innerHTML = cardNumber
  document.getElementById("cvvInput").innerHTML = cvv
}
