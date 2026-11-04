import type { FastifyPluginAsync } from 'fastify';

const userRoutes: FastifyPluginAsync = async (app) => {
    app.get('/', async (request, reply) => {
        return {
            users: [],
        };
    });

    app.get<{ Params: { id: string } }>('/:id', async (request, reply) => {
        const { id } = request.params;
        return {
            id,
            name: '홍길동',
        };
    });
    app.post('/', async (request, reply) => {
        return {
            message: 'User created',
        };
    });
};

export default userRoutes;
