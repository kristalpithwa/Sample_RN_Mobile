This is a new [**React Native**](https://reactnative.dev) project

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Create new project

```bash
npx react-native init {Project_Name}

For example :

1) npx react-native init sample
```

## Step 2: Open project useing IDE

### For Android

```bash
- Open the Android folder of your React-Native project in Android Studio.

Note: Android Studio will automatically download essential components such as Gradle when you open the Android folder of your project.
```

### For iOS

```bash
- Open the iOS folder and open workspace.
```

## Step 3: Install necessary library

Open your React-native project into VSCode, Below are the dependency for this package that you'll need to add to your project. To install, run the following commands:

```bash
# Note: For Navigation.

npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context

# Note: For local storage.
npm i @react-native-async-storage/async-storage

# Note:  For API call
npm i axios

# Note: Support librarys
npm i fbemitter
npm i react-native-gesture-handler
npm i react-native-simple-toast

npm i react-native-reanimated
# Add into babel.config.js file:
plugins: ['react-native-reanimated/plugin']

# Last command:
cd ios && pod install

```

## Step 4: Add basic boilerplate

Now that you have successfully run the app, let's modify it.

1. Add src folder
2. Add App.js file

## Step 5: Add fonts & link

1. Add react-native.config.js File
2. npx react-native-asset

## Step 6: Run project

```bash
npx react-native run-ios
npx react-native run-android
```

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Learn the basic navigation](https://reactnavigation.org/docs/getting-started/) - read the latest official React Native navigation.
