import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/login', controller.user.login);
  router.get('/currentUser', controller.user.currentUser);
  router.get('/logout', controller.user.logout);
};
