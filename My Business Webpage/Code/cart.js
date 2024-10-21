document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cartItems")
  const cartTotal = document.getElementById("cart-total")

  const cartItems =
    JSON.parse(localStorage.getItem("cartItems")) || []
  let total = 0

  cartItemsContainer.innerHTML = ""

  cartItems.forEach((item, index) => {
    const itemElement = document.createElement("div")
    itemElement.classList.add("cart-item")
    itemElement.innerHTML = `
        <h4>${item.name}</h4>
        <p>$${item.price.toFixed(2)}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      `
    cartItemsContainer.appendChild(itemElement)

    total += item.price
  })

  cartTotal.textContent = total.toFixed(2)
})

function removeFromCart(index) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || []

  cartItems.splice(index, 1)

  localStorage.setItem("cartItems", JSON.stringify(cartItems))

  location.reload()
}
