const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';

const path = require('path');
const url = require('url');

// PROTOCOL
let protocol = 'http';

// Clustering
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

// Multi-process to utilize all CPU cores.
if (!dev && cluster.isMaster) {
	console.log(`Node cluster master ${process.pid} is running`);

	console.log(`CPUs found: ${numCPUs}`);
	// Fork workers.
	for (let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	console.log(`Active processes:`);

	cluster.on('exit', (worker, code, signal) => {
		console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
	});

} else {
	const nextApp = next({ dir: '.', dev });
	const nextHandler = nextApp.getRequestHandler();

	nextApp.prepare()
		.then(() => {

			const server = express();

			// Static files
			// https://github.com/zeit/next.js/tree/4.2.3#user-content-static-file-serving-eg-images
			server.use('/static', express.static(path.join(__dirname, 'static'), {
				maxAge: dev ? '0' : '365d'
			}));

			// ENABLE CORS
			server.use((req, res, next) => {
				res.header("Access-Control-Allow-Origin", "*");
				res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
				next();
			});

			// APIs / Routes
			require('./route/numberToEnglishWords.route.js')(server);

			server.get('/', (req, res) => {
				const actualPage = '/';
				nextApp.render(req, res, actualPage)
			})

			// Default catch-all renders Next app
			server.get('*', (req, res) => {
				// res.set({
				//   'Cache-Control': 'public, max-age=3600'
				// });
				const parsedUrl = url.parse(req.url, true);
				nextHandler(req, res, parsedUrl);
			});

			const port = process.env.NODE_PORT || 3000;

			server.listen(port, (err) => {
				if (err) throw err;
				console.log(`Listening on ${protocol}://localhost:${port}`)
			});
		});
}
