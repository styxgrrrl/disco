```bash
yarn install
yarn storybook
```

Please browse Storybook (http://localhost:9009/) to see and try out the various components. You will be working with the ones in the Profiles folder.

All of the UI has been implemented - you will be integrating API calls (using [`ApiService`](src/utils/ApiService.ts)) into the following two components:

- [`ProfileEdit`](src/components/profiles/ProfileEdit.tsx) - this lets a user edit their profile. You will be integrating an API call to update the backend about the user's DID
- [`ProfilesList`](src/components/profiles/ProfilesList.tsx) - this lists multiple profiles according to their DIDs. You will be integrating an API call to fetch which DIDs to display.

Feel free to use any of the other components in this repo, all of which have Storybook files (`*.stories.tsx`) demonstrating their usage.
