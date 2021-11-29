function test() {
  fetch("http://localhost:3001/api/v1/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      user: {
        username: "sylviawoods",
        password: "whatscooking",
        email: "test email"
      },
    }),
  })
    .then((r) => r.json())
    .then(console.log);
}

test();

function test2() {
  const token = localStorage.getItem("jwt");
  fetch("http://localhost:3000/api/v1/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(resp => resp.json())
  .then(data => console.log(data))
}