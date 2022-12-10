function callAwsLambdaFunction(formName, method, apiEndpoint) {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-full-width",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "4000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    const form = document.querySelector(`form[data-form="${formName}"]`)
    const formData = new FormData(form);
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
        .then((result) => {
            console.log(result)
            toastr["success"]("Success")
            form.reset();
        })
        .catch((error) => {
            console.log(error)
            toastr["error"]("There was an error sending the request", "Error")
        });

}
