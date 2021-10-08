import { EggPlugin } from 'egg';

const plugin: EggPlugin = {};

plugin.sequelize = {
  enable: true,
  package: 'egg-sequelize-ts',
};

plugin.redis = {
  enable: true,
  package: 'egg-redis',
};

export default plugin;
