// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDlHWtqmpHY8wHRI3Ds58oNb6l_yg63n8E',
    authDomain: 'code-mentoring-edition1.firebaseapp.com',
    projectId: 'code-mentoring-edition1',
    storageBucket: 'code-mentoring-edition1.appspot.com',
    messagingSenderId: '521748620768',
    appId: '1:521748620768:web:f5c29a463ce62255a87785',
    measurementId: 'G-M0W7VV3HLF',
  },
  collections: {
    venues: 'venues',
    users: 'users',
    checksIn: 'checksIn',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
