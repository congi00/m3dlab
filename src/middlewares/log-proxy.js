module.exports = (config, { strapi }) => {
    return async (ctx, next) => {
      // Mostra informazioni sulla connessione e sugli header
      const proto = ctx.request.headers['x-forwarded-proto'];
      const host = ctx.request.headers['x-forwarded-host'];
      const ip = ctx.request.headers['x-forwarded-for'];
  
      strapi.log.info(`[DEBUG PROXY] Proto: ${proto} | Host: ${host} | IP: ${ip}`);
      strapi.log.info(`[DEBUG PROXY] Secure: ${ctx.secure} | Protocol: ${ctx.protocol}`);
  
      await next();
    };
  };