import Fastify from 'fastify';
import userRoutes from './routes/user.routes.js';

const app = Fastify({
    logger: true,
});

app.register(userRoutes, {
    prefix: '/users',
});

export default app;
