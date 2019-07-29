# Spongebob

#### Built on Reactron

- A MacOS desktop app that accepts articles in markdown & generates static react files.
- These static react files are then deployed to an AWS S3 bucket using Travis CI.

## Available Scripts

> yarn build

Builds your project using webpack and babel, into app folder.

> yarn package

"yarn build" && uses electron-builder to build .dmg for your app.

> yarn electron

Use this in dev to view your app using electron. Need to build your app first.

> yarn dev

Your development server for react. Opens your react app in a browser, where you can work on the user interface.
