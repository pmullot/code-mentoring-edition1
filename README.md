# Change Log

1. Moved the AuthService & User Service back to core module. In sharedModule they weren't singletons. --> Explore that
2. changes in AuthService to not overwrite the User value (switchMap --> tap)
3. new Home module + component to service the Home Page
4. new Venues module + services & component skeleton
5. changes to the user routing module + new Venue Component in the user Module

# Preparing the environment

## Creating the Firestore Project

1. Go to `console.firebase.com` and login if necessary
2. create a new project called "**code-mentoring-edition1**".
3. Once inside the project, click on the "Project Overview" button on the top-left
4. click on the "Add App" button, just bellow the name of your project (code-mentoring-edition1).
5. Amongst the icons, choose "Web" (the last one)
6. When asked for it, also call the app "code-mentoring-edition1"
7. check the box for Hosting, and set the url to whatever you wish.
8. click the "Register the App" button and finish the process clicking on "next" and "continue to console"
9. back to the console, in "Project Overview", click on the newly created app icon,below the project name and on the gear icon (settings)
10. Once in the project settings, scroll down to the app settings and from the "Automatic", "CDN", "Config", choose "Config"
11. Copy the snippet and paste in somewhere, we're going to use it later on.

## Creating the Angular Project

if you haven't followed along during last session, those are the steps to take to create the project:

1. open a terminal in the directory you want your project to be located in.
2. run `ng new code-mentoring-edition1 --routing --style sccs`
3. Once the process is done, run `cd code-mentoring-edition1`, then run `code .` to open the project in VSCode.
4. Open VSCode terminal _(View/Terminal)_ and inside it, run `ng add @angular/fire`. It might ask you for authentication & permissions. When asked, choose the _code-mentoring-edition1_ project from the list.
5. run `npm i @types/firebase --save-dev` to install the types for firebase as a development dependency.
6. in the _app_ folder, create the following directories:
   - _core_
   - _shared_
   - _sections_
7. in the _core_ folder, create the following directories:
   - _models_
   - _pipes_
   - _services_
   - _guards_
8. in the _shared_ folder, create a _services_ directory

## Configuring the angular project

1. in the _tsconfig.json_ file, add the the following snippet in the `compilerOptions`:

   ```
    "strictNullChecks": false,
        "paths": {
        "@env": ["src/environments/environment"],
        "@shared/*": ["src/app/shared/*"],
        "@core/*": ["src/app/core/*"],
        "@sections/*": ["src/app/sections/*"]
    },
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    "typeRoots": ["node_modules/@types"],
   ```

2. In the root folder of the project, if it doesn't exist, create a file named _.editorconfig_ (starting with a dot). In that file,

   1. under `[*]`, add the following configs:
      ```
      quote_type = single
      max_line_length = 140
      ```
   2. under `[*.ts]`, add `strictNullCheck = false`

3. in the _tslint.json_ file, change `rules.variable-name` to :
   ```
    "options": [
       "allow-leading-underscore",
       "allow-pascal-case",
       "ban-keywords",
       "check-format",
       "require-const-for-all-caps"
     ]
   ```
4. in the _environment.ts_ file, add the `firebaseConfig` object we got from the firestore console, to the `environment` constant.
5. Also add a variable called `collections` than holds firestore collections names (`venues`,`users`, `checksIn`). Once done, the `environment` constant should look like this:

   ```
       export const environment = {
           production: false,
           firebaseConfig: {
               apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
               authDomain: '??????????',
               projectId: 'code-mentoring-edition1',
               storageBucket: 'code-mentoring-edition1.appspot.com',
               messagingSenderId: 'XXXXXXXXX',
               appId: 'XXXXXXXXXXXXXXXXXXX',
               measurementId: 'XXXXXXXXXXXXXXXXxxx',
           },
           collections: {
               venues: 'venues',
               users: 'users',
               checksIn: 'checksIn',
           },
       };
   ```

6. Repeat the 2 previous points for the _environment.prod.ts_ file

## Starting to code

### Core Module

1. create the core module: `ng g m core`
2. inside _core.module.ts_, define a constant array called `module` and add the necessary modules, like this
   ```
   const modules = [AngularFireAuthModule, AngularFirestoreModule];
   ```
3. in the `imports` array of the decorator `@NgModule` add the following:
   1. `CommonModule`
   2. `...modules`
   3. `AngularFireModule.initializeApp(environment.firebaseConfig)`
4. in the `exports` array, add the following:
   1. `...modules`
5. in the `providers` array, add the following:
   1. `AngularFirestore`
   2. `AuthService`
6. in the `constructor` of the module, add the following line:
   ```
   constructor() {
       firebase.setLogLevel('info');
   }
   ```

#### users service

1. create the service using `ng g s core/services/users`
2. add the `AngularFireStore` provider using dependency injection:
3. add the `UsersService` to the providers of the _core.module.ts_ file

#### auth Service

1. create the service using `ng g s core/services/auth`
2. add the `AngularFireAuth` provider using dependency injection: `constructor(protected _afAuth: AngularFireAuth) {}`
3. add the `AuthService` to the providers of the _core.module.ts_ file
