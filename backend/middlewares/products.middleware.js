// Models
const { Product } = require('../models/product.model');

const { AppError } = require('../util/appError');
const { catchAsync } = require('../util/catchAsync');

exports.productExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const product = await Product.findOne({ where: { status: 'active', id } });

  if (!product) {
    return next(new AppError(404, 'No product found'));
  }

  req.product = product;

  next();
});

exports.productOwner = catchAsync(async (req, res, next) => {
  const { currentUser, product } = req;
  if (product.userId !== currentUser.id) {
    return next(new AppError(403, 'You are not the owner of this product'));
  }
  next();
});
