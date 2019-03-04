# eryk-web-angular-test
This repository should be added with
`git submodule add https://github.com/dagi12/eryk-web-angular-test.git testing/`

### It's needed by: 
- eryk-web-angular-common
- flota-web-angular-commnon

## t'odos
- remove `-sm=false` on newest Angular 6
- use shallow tests

## Service testing

```TypeScript
  ApiConfigService,
  BaseRequestOptions,
  MockBackend,
  {
    deps: [
      MockBackend,
      BaseRequestOptions
    ],
    provide: AuthHttp,
    useFactory: (mockedBackend: XHRBackend, defaultOptions: BaseRequestOptions) => {
      return new Http(mockedBackend, defaultOptions);
    },
  }
```
