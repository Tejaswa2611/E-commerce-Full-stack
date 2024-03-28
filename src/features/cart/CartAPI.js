export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    // console.log('API response: ', data)
    resolve({ data });
  });
}