const authMiddleware = require('../middlewares/auth.middleware');
const authRoutes = require('./auth.routes');
const conversationsRoutes = require('./conversations.routes');

const routerApi = (app) => {
  app.use('/api/v1/auth', authRoutes)
  app.use('/api/v1/conversations',authMiddleware, conversationsRoutes)
}

module.exports = routerApi;