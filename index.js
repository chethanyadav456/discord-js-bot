const ApexBot = require('./src/structures/ApexClient');

const client = new ApexBot();

client.connect()

module.exports = client;
