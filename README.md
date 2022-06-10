# React Native Template

## Installation

Setup [react native](https://reactnative.dev/docs/environment-setup) to run the project.

Run the following commands

```bash
yarn install
```

or

```bash
npm install
```


## Run Android

```bash
yarn run android
```

## Run Ios

```bash
cd ios
pod install
```

```bash
cd ..
yarn run ios
```

## Folder Structure

- `src`: This folder is the main container of all the code inside your application.
  - `api`: Contains the base network logic.
  - `common`: Contains utils, types, generic components, etc.
  - `entity`: Contains the business logic of your application.
  - `services`: Contains the network connection per resource(auth, user, etc).
  - `features`: Folder that contains all your app features(Splash, Login, Home, etc).
  - `navigation`: Contains the navigators(Stack, Tab, etc).
  - `store`: Contains the redux store and slices per features/resources.
  - `theme`: All the styling concerns related to the application.
  - `container`: Inversion of control(IoC) container for the application.