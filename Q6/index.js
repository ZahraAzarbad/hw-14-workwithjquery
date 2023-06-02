const url ='https://6474eff27de100807b1bf8be.mockapi.io/auth/users';

  let ajaxReq = $.ajax(url, {
    dataType: 'json',
    timeout: 500
});

ajaxReq.success(function (data, status, jqXhr) {
console.log(data);
})

ajaxReq.error(function (jqXhr, textStatus, errorMessage) {
console.log(errorMessage);
})
