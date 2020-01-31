module.exports = {
    getFileNameFromUrl: function (url = "") {
        return url.replace("/api/v1/", "") + ".json"       
    }
}