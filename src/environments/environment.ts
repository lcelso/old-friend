// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDKh9_62F0P4ZInigQtZ2SLNFryECawRG4',
    authDomain: 'crud-poc-c42af.firebaseapp.com',
    databaseURL: 'https://crud-poc-c42af.firebaseio.com',
    projectId: 'crud-poc-c42af',
    storageBucket: 'crud-poc-c42af.appspot.com',
    messagingSenderId: '296399531050'
  }
};
