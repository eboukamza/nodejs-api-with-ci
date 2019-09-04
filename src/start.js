const app = require('./server.js');

const port = process.env.port || 9000;

app.listen(port, () => console.log(`Express server started in ${app.get('env')} on http://localhost:${port}`));
