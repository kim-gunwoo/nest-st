
  
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## nest

```
## moduls 생성
$ nest g module boards

## controller 생성
## --no-spec 테스트 코드 생성하지 않음
$ nest g controller boards --no-spec 

## service 생성
# nest g service boards --no-spec

```

```js
import { Controller } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  boardsService: BoardsService;

  constructor(boardsService: BoardsService) {
    this.boardsService = boardsService;
  }
}

## 접근제한자를 통해 아래와 같이 간단하게 표현할 수 있음
import { Controller } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}
}
 
```