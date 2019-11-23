let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    alert("Hellow from Promise");
    resolve("Promise resolved");
  }, 1000);
});

promise
  .then(result => {
    console.log(result);
    return "Go to the next promise";
  })
  .then(result => {
    alert(result);
    console.log(result);
  })

  .catch(err => {
    alert(err);
  })

  .finally(() => {
    alert("Finaly here");
  });
