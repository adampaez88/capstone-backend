// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgresql:///posts'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
};
