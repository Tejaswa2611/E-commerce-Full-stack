export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    // console.log('API response: ', data)
    resolve({ data });
  });
}

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email;
    const password = loginInfo.password;
    const response = await fetch("http://localhost:8080/users?email=" + email);
    const data = await response.json();
    // console.log("fetched data checkUser:", data);
    if (data.length) {
      if (data[0].password === password) {
        resolve({ data: data[0] });
      } else {
        reject({ message: "Invalid credentials" });
      }
    } else {
      reject({ message: "Invalid credentials" });
    }
  });
}

// BELOW CODE IS IN USER API
// export function updateUser(update) {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8080/users/"+ update.id, {
//       method: "PATCH",
//       body: JSON.stringify(update),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const data = await response.json();
//     resolve({ data });
//   });     
// }
