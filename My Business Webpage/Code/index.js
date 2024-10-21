function validateuserlogin(event) {
  event.preventDefault()
  const name = document.getElementById("Username").value
  console.log(name)
  const email = document.getElementById("email").value
  console.log(email)
  const password = document.getElementById("password").value

  const correctEmail = "king@gmail.com"
  console.log(correctEmail)
  const correctPassword = "123456789"

  if (!email || !password) {
    alert("Both email and password are required!")
    return false
  }

  if (password.length < 8) {
    alert("Must be atleast 8 characters!")
    return false
  }

  if (email === correctEmail && password === correctPassword) {
    window.location.href = "/Code/Product.html"
  } else {
    alert("Invalid email or password")
    return false
  }
}

function addtocart(price, name) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
  const newItem = { name, price }
  cartItems.push(newItem)

  // Save th updated cart items back to localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems))

  // display a message or update the UI
  alert(`${name} added to cart!`)
}
