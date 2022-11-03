const sequelize = require( 'sequelize' );
const { config } = require( './config' );
const chalk = require( 'chalk' );

class connection {
    constructor() {
        this.dbName = config.DB_NAME;
        this.dbUser = config.DB_USER;
        this.dialect = config.DIALECT;
        this.password = config.PASSWORD;
        this.maxPool = config.maxPool;
        this.minPool = config.minPool;



    }
}