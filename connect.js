const firebird = require('node-firebird');

class FirebirdConnector {
    constructor(options) {
        this.options = options;
    }

    async connect() {
        return new Promise((resolve, reject) => {
            firebird.attach(this.options, (err, db) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(db);
                }
            });
        });
    }

    async query(sql) {
        try {
            const db = await this.connect();

            return new Promise((resolve, reject) => {
                db.query(sql, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }

                    // Importante: feche a conexão após a consulta
                    db.detach();
                });
            });
        } catch (error) {
            throw error;
        }
    }
}



module.exports = FirebirdConnector;
