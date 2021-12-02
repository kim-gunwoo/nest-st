
  
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

## Pipe 모듈 설치
$ npm i class-validator class-transformer
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

```js
// body 전체를 받는 방식
// body 를 통해 body로 오는 모든 데이터를 받아올수 있음
@Post('/')
createBoard(
  @Body() body,
): Board {
  console.log(body);
  return this.boardsService.createBoard(title, description);
}

// body 의 세부항목별로 받는 방식
// body 안의 세부항목별로 따로 받아올수 있음
@Post('/')
createBoard(
  @Body('title') title: string,
  @Body('description') description: string,
): Board {
  console.log(title, description);
  return this.boardsService.createBoard(title, description);
}

// dto 를 통한 방식
export class CreateBoardDto {
  title: string;
  description: string;
}
// dto 가 위와 같을 경우 아래와 같이 작성할 수 있다. (이때는 service 도 해당 dto로 받아오도록 해야한다.)
@Post('/')
createBoard(@Body() createBoardDto: CreateBoardDto): Board {
  return this.boardsService.createBoard(createBoardDto);
}  
```

```js
// Param 은 path 파라미터 값을 가져올수 있음
@Get('/:id')
getBoard(@Param('id') id: string): Board {
  return this.boardsService.getBoardById(id);
}

// 여러개의 파라미터값을 가져올 경우 아래와 같이 가져올 수 있음
@Get('/:id/:test')
getBoard(@Param() params): Board {
  const { id, test } = params;
  return this.boardsService.getBoardById(id);
}
```

```js
// /?id=123&test=456
// Query 은 쿼리 스트링 값을 가져올수 있음
@Get('/')
getBoard(@Query('id') id: string) {
  console.log(id) // 123
}

// 여러개의 파라미터값을 가져올 경우 아래와 같이 가져올 수 있음
@Get('/')
getBoard(@Query() querys) {
  const { id, test } = querys;
  console.log(querys, id, test); // {id : 123, test: 345}, 123, 456
}
```

```js
// Handler-level Pipes
@Post('/')
@UsePipes(ValidationPipe)
createBoard(@Body() createBoardDto: CreateBoardDto): Board {
  return this.boardsService.createBoard(createBoardDto);
}

// Parameter-level Pipes
@Patch('/:id/status')
updateBoardStatus(
  @Param('id') id: string,
  @Body('status', BoardStatusValidationPipe) status: BoardStatus,
): Board {
  return this.boardsService.updateBoardStatus(id, status);
}
```