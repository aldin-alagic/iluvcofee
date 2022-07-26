import * as Joi from '@hapi/joi';

export default () => ({
  environment: process.env.NODE_ENV || 'development',
  envFilePath: '.env',
  validationSchema: Joi.object({
    DATABASE_HOST: Joi.required(),
    DATABASE_PORT: Joi.number().required(),
    DATABASE_NAME: Joi.required(),
  }),
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 27017,
    name: process.env.DATABASE_NAME || 'iluvcoffee',
  },
});
