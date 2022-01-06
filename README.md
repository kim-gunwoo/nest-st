### 공식 문서 정리

- node 공식 문서 : https://nodejs.org/en/docs/

- vscode : https://code.visualstudio.com/

- http 프로토콜 자료 1 : https://developer.mozilla.org/ko/docs/Web/HTTP

- http 프로토콜 자료 2 : https://developers.google.com/web/fundamentals/performance/http2

- Rest API 공식 문서 : https://docs.microsoft.com/ko-kr/azure/architecture/best-practices/api-design

- JSON과 Javascript의 차이 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON

- tsconfig 옵션 : https://www.staging-typescript.org/tsconfig

- mongoDB docs : https://docs.mongodb.com/manual/tutorial/getting-started

- nestjs 공식 문서 : https://docs.nestjs.com/

- nestjs 공식 문서 한국어 번역 : https://docs.nestjs.kr/

- 파이프 필터 패턴 : https://docs.microsoft.com/en-us/azure/architecture/patterns/pipes-and-filters

### 참고

- https://github.com/amamov/teaching-nestjs-a-to-z

```
++ 20.08.30

mongoose 버전 6.0 이상부터는 useFindAndModify, useCreateIndex 옵션을 설정안해주셔도 됩니다!

https://mongoosejs.com/docs/migrating_to_6.html#no-more-deprecation-warning-options

---

mongoose 설정 옵션 정리

공식문서에서 확인하기 - 1

공식문서에서 확인하기 - 2

- useNewUrlParser : true

    - mongodb url을 읽을 수 있도록 설정합니다. 설정하지 않으면 다음과 같은 경고가 뜹니다. DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.

- useUnifiedTopology : true

- 최신 mongodb 드라이버 엔진을 사용하도록 설정합니다. (안정적인 연결을 유지할 수 없는 경우를 제외하고 이 옵션을 true로 설정해야 합니다.)
```
