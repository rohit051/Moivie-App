/*server configuration*/
const serverConfig = {
	port:3000,
	hostname: 'localhost'     //localhost ip is 127.0.0.1
}

/*logger configuration*/
const loggerConfig = {
	appenders: {
		console: {
			type: 'console'
		},
		keepLogs: {
			type: 'file',
			filename: 'logs/keep.log'
		}
	},
	categories: {
		default: { appenders: ['console', 'keepLogs'], level: 'trace' }
	}
};

module.exports = {
	serverConfig,
	loggerConfig
}