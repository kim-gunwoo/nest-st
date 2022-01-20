### 공식 문서 정리

- node 공식 문서 : https://nodejs.org/en/docs/

- vscode : https://code.visualstudio.com/

- MVC 패턴 : https://developer.mozilla.org/ko/docs/Glossary/MVC

- http 프로토콜 자료 1 : https://developer.mozilla.org/ko/docs/Web/HTTP

- http 프로토콜 자료 2 : https://developers.google.com/web/fundamentals/performance/http2

- Rest API 공식 문서 : https://docs.microsoft.com/ko-kr/azure/architecture/best-practices/api-design

- JSON과 Javascript의 차이 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON

- tsconfig 옵션 : https://www.staging-typescript.org/tsconfig

- mongoDB docs : https://docs.mongodb.com/manual/tutorial/getting-started

- nestjs 공식 문서 : https://docs.nestjs.com/

- nestjs 공식 문서 한국어 번역 : https://docs.nestjs.kr/

- 파이프 필터 패턴 : https://docs.microsoft.com/en-us/azure/architecture/patterns/pipes-and-filters

- aws s3 공식 문서 : https://docs.aws.amazon.com/ko_kr/AmazonS3/latest/userguide/Welcome.html

- admin-bro 공식 문서 : https://adminbro.com/tutorial-customizing-resources.html

- 깃허브 링크 : https://github.com/amamov/nestjs-mongoose-admin

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

### 배포

```
1. Pm2 설치 https://github.com/Unitech/pm2
    - npm i pm2 -g // 안되면 sudo npm i pm2 -g
    - pm2 list
    - package.json 수정, .env MODE=‘prod’로 수정, PORT=80으로 수정
    - npm run start:debug
    - npm run build
    - npm run start:prod
    - pm2 list
    - pm2 kill

2. github에 코드 올리기
    - https://github.com/amamov/gits
    - .env는 .gitignore에 추가해서 올리기
    - dist만 따로 빼서

3. VPS : 가상 사설 서버 구축
    - AWS Lightsail 사용
    - 인스턴스 생성
    - ssh를 사용하여 연결
    - sudo apt-get update
    - sudo apt-get -y upgrade
    - sudo apt-get install build-essential
    - sudo apt-get install curl
    - curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash --
    - sudo apt-get install -y nodejs
    - sudo apt-get install git
    - sudo apt-get install vim
    - touch .gitconfig
    - git config --global user.name kim-gunwoo
    - git config --global user.email kgunu93@gmail.com
    - git config --global --list
    - git clone <프로젝트>
    - cd <프로젝트>
    - npm i
    - sudo npm i -g @nestjs/cli
    - sudo npm i -g pm2
    - vi .env (환경변수 붙여 넣기)
    - sudo npm run start:prod

4. 고정 퍼블릭 주소 할당받기

5. 배포 성공!!!
```

### 참고

- https://github.com/amamov/teaching-nestjs-a-to-z

- aws 권한 코드 https://aws.amazon.com/ko/premiumsupport/knowledge-center/read-access-objects-s3-bucket/
