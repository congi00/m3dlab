// config/server.js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://m3dlab-production.up.railway.app'),
  proxy: true,       // importantissimo per capire X-Forwarded-Proto
  trustProxy: true,  // aiuta Strapi a fidarsi del proxy

  app: {
    keys: env.array('APP_KEYS'),
  },

  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    url: '/admin',
    serveAdminPanel: true,
    // forza i cookie admin a non richiedere HTTPS a livello container
    cookies: {
      secure: false,
      sameSite: 'lax',
    }
  },
});
