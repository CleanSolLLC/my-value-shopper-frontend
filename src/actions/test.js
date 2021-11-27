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