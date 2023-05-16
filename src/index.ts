import { createYoga } from 'graphql-yoga';
import { createServer } from 'http';
import { schema } from './schema';


function main() {
    const port = Number(process.env.API_PORT) || 4000;
    console.log(schema)
    const yoga = createYoga({schema});
    const server = createServer(yoga);
    server.listen(port, () => {
        console.log(`Server is running on ${port}`)
    });
};

main();