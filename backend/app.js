const express = require('express');

const { globalErrorHandler } = require('./controllers/error.controller');
const { sequelize } = require('./util/database');
const { initModels } = require('./util/initModels');
const { usersRouter } = require('./routes/users.routes');
const { productsRouter } = require('./routes/products.routes');
const { cartRouter } = require('./routes/cart.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/cart', cartRouter);

app.use(globalErrorHandler);
module.exports = { app };

sequelize
  .authenticate()
  .then(() => console.log('Database authenticated'))
  .catch((err) => console.log(err));

initModels();

sequelize
  .sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.log(err));

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Express app running on port: ${PORT}`);
  });