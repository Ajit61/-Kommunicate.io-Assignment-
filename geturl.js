function getUrlParameterValue(url, parameter) {
    //Todo: complete this code
const urlparams = new URLSearchParams(url);
const res = urlParams.get(parameter);
console.log(res);
    }
    