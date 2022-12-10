function callAwsLambdaFunction(formName, method, apiEndpoint) {
    const formData = new FormData(document.querySelector(`form[data-form="${formName}"]`));
    const data = JSON.stringify(Object.fromEntries(formData.entries()));

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: method,
        headers: myHeaders,
        body: data,
        redirect: 'follow'
    };

    fetch(`https://api.mazevo.church/${apiEndpoint}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
