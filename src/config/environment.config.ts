import * as _ from 'lodash';
import config from './config.json';

// module variables
const defaultConfig = (<any>config).default;
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = (<any>config)[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);

export default finalConfig;
