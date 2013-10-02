// TODO: Remove this file!
var IRIS_DATA = IRIS_HOME + '/fastbit/data';

var development = {
    appAddress: '127.0.0.1',
    appPort: 4747,
    socketHost: '127.0.0.1',
    binDir: IRIS_BIN,
    dataDir: IRIS_DATA,
    env: global.process.env.NODE_ENV || 'development'
};

var production = {
    appAddress: '127.0.0.1',
    appPort: 4747,
    socketHost: '8.8.8.8',
    binDir: '/kb/deployment/bin',
    dataDir: IRIS_DATA,
    env: global.process.env.NODE_ENV || 'development'
};

exports.Config = global.process.env.NODE_ENV === 'production' ? production : development;
