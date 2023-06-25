import { createEnvironment } from 'omni-context-rn';

const ENV = createEnvironment({
  development: {
    reqresInBaseUrl: 'https://dev-ib-api.omni.com.br/api',
  },
  homologation: {
    reqresInBaseUrl: 'https://hmg-ib-api.omni.com.br/api',
  },
  production: {
    reqresInBaseUrl: 'https://ib-api.omni.com.br/stage-api',
  },
});

export default ENV;
