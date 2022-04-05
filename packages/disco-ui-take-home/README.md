# Disco Full-Stack Take-Home Exercise

## Introduction

This exercise will be to implement APIs that help aggregate profile data saved to Ceramic (a decentralized storage network), and to integrate these APIs into frontend components.

We hope you can spend roughly 2 hours on this exercise. Please do not spend more! If you end up needing more time, please stop working and document any extra work you would do to complete it. An incomplete or stubbed-out submission is okay; the only requirement is that everything runs without error.

We are looking for a submission that is clear, readable, maintainable, and performant.

Why a take-home assignment? We want something that reflects how engineers work in practice, without the pressure of live coding, and with the freedom to look things up, take a break, or rewrite parts.

## Requirements

- @TODO/tobek
- This repo was built and tested with Node v16.14.0 and Yarn v1.22.18
- The [MetaMask extension](https://metamask.io/download/) installed and set up

Please let us know if there are any technical issues with the assignment (e.g. build or environment issues).

## This Repo

Please fork this repo, and then to begin simply run:

```bash
yarn install
yarn start
# in a separate terminal:
yarn storybook
```

This will run both the backend server and Storybook for frontend components. Both will live reload on code changes.

### Frontend

Please browse Storybook to see and try out the various components. You will be working with the ones in the Profiles folder.

All of the UI has been implemented - you will be integrating API calls into the following two components:

- [`ProfileEdit`](src/components/profiles/ProfileEdit.tsx) - this lets a user edit their profile. You will be integrating an API call to update the backend about the user's DID
- [`ProfilesList`](src/components/profiles/ProfilesList.tsx) - this lists multiple profiles according to their DIDs. You will be integrating an API call to fetch which DIDs to display.
- Feel free to use any of the other components in this repo, all of which have Storybook files (`*.stories.tsx`) demonstrating their usage

### Backend

@TODO

## Instructions

**@TODO/tobek the rest of this readme is from the UI take-home**

The goal of this exercise is to implement an "issue credential" flow using pre-built components, and also create a success component for that flow.

### Issue Credential flow

Please implement the [`IssueCredentialFlow`](src/components/credentials/IssueCredentialFlow.tsx) component guideing the user through 3 steps:

1. **Edit** - in which the user fills out the [`IssueCredentialForm`](src/components/credentials/IssueCredentialForm.tsx)
2. **Review** - in which the user sees the [`Credential`](src/components/credentials/Credential.tsx) component showing a preview of their credential before issuing it
3. **Success** - in which the user sees a success message using the [`Success`](src/components/Success.tsx) component and values in the `recipient` prop passed to `IssueCredentialFlow`

The [`IssueCredentialFlow`](src/components/credentials/IssueCredentialFlow.tsx) component currently has a stub version of step #1, with some comments marked with `@NOTE` about components and helpers you will be using.

### Success component

Step #3 should involve the reusable [`Success`](src/components/Success.tsx) component that you may architect as you see fit, and that might include props such as `headerText`, `onClose()`, etc.

Please consider how you might make the Success step more exciting for the user, and, if you have time, implement any design ideas you have. Again, the wireframes above are just representative of what you might do.

## Submission

Please fork this repo, commit your implementation, and email us a link at careers@disco.xyz. Feel free to include any notes for us about assumptions or decisions you made, and we also welcome any feedback about this exercise!

## Notes

- Your result need not be pixel perfect at all - concept and functionality are what matters
- We are using Material UI. Feel free to use any of their [components](https://mui.com/components/), simply add the component to the `"@mui/material"` import at the top of the file.
  - MUI components can be styled using the `sx` prop with camelCased CSS properties - search "sx" in [`Credential.tsx`](src/components/credentials/Credential.tsx) for examples
  - They can alternately be styled using `"@mui/material/styles"` - see [`DiscoBox.tsx`](src/components/DiscoBox.tsx) for an example
- Feel free to tweak any components as needed or create new ones, but it is possible to complete the assignment with only code in [`IssueCredentialFlow.tsx`](src/components/credentials/IssueCredentialFlow.tsx) and [`Success.tsx`](src/components/Success.tsx)
- The codebase is in TypeScript, which should be perfectly readable even without any experience in TS. You are welcome however to write your code in JS. To do so, please check out the `javascript` branch of this repo, in which you will find JSX versions of the components you will be editing (`IssueCredentialFlow.jsx` and `Success.jsx`)
- Feel free to ask any clarifying questions about the assignment. However, you have total leeway in how you wish to implement this, and can make arbitrary decisions and assumptions. If you do, note them down and let us know!
