const path = require('path');

module.exports = ({env}) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),       // PostgreSQL host
      port: env.int('DATABASE_PORT', 5432),          // Default PostgreSQL port
      database: env('DATABASE_NAME', 'postgres'),    // Use 'postgres' database
      user: env('DATABASE_USERNAME', 'postgres'),    // PostgreSQL user
      password: env('DATABASE_PASSWORD', 'postgres'),// PostgreSQL password
      ssl: env.bool('DATABASE_SSL', false) && {      // SSL configuration
        rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
      },
      schema: env('DATABASE_SCHEMA', 'public'),      // Default schema for PostgreSQL
    },
    pool: {
      min: env.int('DATABASE_POOL_MIN', 2),
      max: env.int('DATABASE_POOL_MAX', 10),
    },
    acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
  },
});
