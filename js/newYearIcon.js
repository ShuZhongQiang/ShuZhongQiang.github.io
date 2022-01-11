function icon() {
    var newYearIcon = document.getElementsByClassName('new_year_icon');
    if(!window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        for (let newYearIconElement of newYearIcon) {
            newYearIconElement.style.display = ""
        }
    }
}
icon();
