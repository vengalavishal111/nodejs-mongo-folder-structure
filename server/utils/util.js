

function Util() {

    this.getCurrentUTCTime = function (format) {
        date = new Date()
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        current_datetime = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds
        return current_datetime
    }

}


module.exports = Util;