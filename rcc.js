###rcc.js

function appifySetCookie(cookieName, cookieValue, nDays) {
    var today = new Date();
    var expire = new Date();
    if (nDays == null || nDays == 0) nDays = 1;
    expire.setTime(today.getTime() + 3600000 * 24 * nDays);
    document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString() + "; path=/";
}
function appifyReadCookie(cookieName) {
    var theCookie = " " + document.cookie;
    var ind = theCookie.indexOf(" " + cookieName + "=");
    if (ind == -1) ind = theCookie.indexOf(";" + cookieName + "=");
    if (ind == -1 || cookieName == "") return "";
    var ind1 = theCookie.indexOf(";", ind + 1);
    if (ind1 == -1) ind1 = theCookie.length;
    return unescape(theCookie.substring(ind + cookieName.length + 2, ind1));
}
function appifyDeleteCookie(cookieName) {
    var today = new Date();
    var expire = new Date() - 30;
    expire.setTime(today.getTime() - 3600000 * 24 * 90);
    document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString();
}
function appifyAcceptCookies(ndays) {
    appifySetCookie("catAccCookies", true, ndays);
    document.getElementById("appify-cookie-bar").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    if (!appifyReadCookie("catAccCookies")) {
        if (document.getElementById("appify_cc_position") != null && document.getElementById("appify_cc_position").value == "0") {
            document.getElementById("appify-cookie-bar").style.top = "0px;";
        } else {
            document.getElementById("appify-cookie-bar").style.top = "";
        }
        document.getElementById("appify-cookie-bar").style.display = "block"
    }
}, true);
