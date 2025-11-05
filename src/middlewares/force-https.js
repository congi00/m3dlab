'use strict';

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    // Forza la richiesta a essere considerata HTTPS
    ctx.request.secure = true;

    // Se serve, puoi anche impostare l'header X-Forwarded-Proto
    if (!ctx.request.header['x-forwarded-proto']) {
      ctx.request.header['x-forwarded-proto'] = 'https';
    }

    await next();
  };
};
