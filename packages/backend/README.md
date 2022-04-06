```bash
$ yarn install
$ yarn start
```

This server is based on [Ts.ED framework](https://tsed.io).

Begin by reading through [`DidController`](src/controllers/DidController.ts) and [`DidService`](src/services/DidService.ts) in order to understand the API.

Example API calls:

- http://localhost:8083/v1/did/getProfileViaDid/did:3:kjzl6cwe1jw1466t7qwr0yk4jscjqhy4y7iq7z3om5hyx7dd6xc71yr751vwunw
- http://localhost:8083/v1/did/getAllProfiles

There are two stubbed out API endpoints in [`DidController`](src/controllers/DidController.ts): `registerDid` and `getAllProfiles`. You will be implementing these endpoints using the [`DidService`](src/services/DidService.ts) ORM and the [`getProfileFromCeramic`](src/common/ceramic-util.ts) helper.

You can look at other endpoints in `DidController` to see example calls that use `DidService` and `getProfileFromCeramic`.
