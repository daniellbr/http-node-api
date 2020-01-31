var stringUtil = require('../../utils/stringUtil'),
    fs = require('fs')


module.exports = {
    getChartData: function (url = "/api/v1/chart1") {
        let fileName = stringUtil.getFileNameFromUrl(url);
        let fullPath = "chartData/" + fileName;
        let data = fs.readFileSync(fullPath)
        return data.toString();
    },
}