module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: false,
    },
  },
  'strapi::cors',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  async (ctx, next) => {
    // 👉 forza Strapi a considerare la connessione "sicura"
    ctx.request.secure = true;
    await next();
  },
];
