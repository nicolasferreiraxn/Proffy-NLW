import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController'
import SubjectController from './controllers/SubjectController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionsController();
const subjectControllers = new SubjectController();

routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.post('/connections', connectionsControllers.create);
routes.get('/connections', connectionsControllers.index);

routes.get('/subjects', subjectControllers.index);

export default routes;


// Corpo: request.body -> const { name, age } = request.body

// Route Params: request.params -> const { id } = request.params;

// Query Params: Paginação ex: ?page=2&sort=name;
// console.log(request.query)