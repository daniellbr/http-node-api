let http = require('http'),
    chartController = require('./controllers/v1/chartController')

let app = http.createServer(function (req, res) {
    res.setHeader("Content-Type", "application/json");

    try {
        let data = chartController.getChartData(req.url);
        return res.end(data);
    } catch (error) {
        res.statusCode = error.code === "ENOENT" ? 404 : 500;
        res.end(JSON.stringify({ error: true, errorMessage: error.message }));
    }

    // outra forma para rotear o retorno em caso de erro
    // switch (req.url) {
    //     case "/api/v1/chart1":
    //         res.end(JSON.stringify({ error: false, data: "chart1 ok" }));
    //         break;
    //     case "/api/v1/chart2":
    //         res.end(JSON.stringify({ error: false, data: "chart 2 ok" }));
    //         break;
    //     default:
    //         res.statusCode = 404;
    //         break;
    // }
});

app.listen(3000);