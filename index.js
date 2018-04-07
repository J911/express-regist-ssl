const https = require('https');
const fs = require('fs');

class express_regist_ssl {
    constructor(_key, _cert, _port = 443) {
        this.key = fs.readFileSync(_key);
        this.cert = fs.readFileSync(_cert);
        this.port = _port;
    }

    createServer(_app, callback = null) {
        https.createServer({
            key: this.key,
            cert: this.cert
        }, _app).listen(this.port, callback);
    }
}

module.exports = express_regist_ssl;