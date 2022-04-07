const promise = new Promise(function (resolve, reject) {
    const x = "Goa";
    const y = "Goa";
    if (x == y) {
        resolve();

    }
    else {
        reject();
    }

})

promise.then(function () {
    console.log("You are going to Goa");
})
    .catch(function () {
        console.log("You are not going to Goa");
    })