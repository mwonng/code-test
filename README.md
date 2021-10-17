# Getting Started

### Requirement:

You should have Node and NPM(or yarn) installed.

In the project directory, you can run:

### Run development

```bash
npm start  # or yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Run test

```bash
npm test  # or yarn test
```

### Production

```bash
npm run build  # or yarn build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Assumptions and concern

### Third-party library usage.

I do not use too many thrid-party library, main library is:

1. [styled-components](https://styled-components.com/)
2. [react-simple-star-rating](https://www.npmjs.com/package/react-simple-star-rating)

It could be more to make it eaiser but due to reading doc and time limitation, I am not use it too many in this project, e.g. `react-select` for select.

### Mobile and responsive design

Due to time limitation and there is nothing about mobile design, i did a little responsive desgin for mobile but not too many.

And with no desgin system, so i didn't put much more effort to make a consistant UI system with global variables. In real world, I prefer to choose [Tailwind](https://tailwindcss.com/) or [React Suite](https://rsuitejs.com/) to keep the consistancy.

### Detail and error handle

Due to time limitation, I can't fill and well consider all exceptions and error handling and some detail related issues.
E.g.:

1. error page.
2. UI skeleton for loading
3. Singular and plural when display
4. Different currencies symbol

### UI test and storybook

For my opinion, UI test should better use storybook, functions and busienss logic should be unit tests and some integration test/e2e test([cypress](https://www.cypress.io/)) would be good.

## Hightlight:

1. Lazy load ribbon for remote picture unsplash resource.
   > Ribbon will only show after the image been loaded.
2. Quick responsive layout.
   > Have a basic response layout using flex box
3. Native select component.
   > simple solution on native select control
4. Simulate real world async API response
   > real world won't have response before it loaded.
