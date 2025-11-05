module.exports = (config, { strapi }) => {
    return async (ctx, next) => {
      // ✅ forza la richiesta a essere considerata sicura
      ctx.request.secure = true;
      await next();
    };
  };
  