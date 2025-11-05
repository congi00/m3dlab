'use strict';

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    // Se la richiesta non è HTTPS e l'app è in produzione, forza il redirect
    if (ctx.protocol !== 'https' && process.env.NODE_ENV === 'production') {
      const httpsUrl = `https://${ctx.host}${ctx.url}`;
      ctx.redirect(httpsUrl);
      return;
    }

    await next();
  };
};
