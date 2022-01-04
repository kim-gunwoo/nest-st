## a-app

### Exception Filter

```js
// http custom
throw new HttpException(Message, HttpStatus);
throw new HttpException({ success: false, message: 'api error' }, 401);
throw new NotFoundException('a');
throw new HttpException({ message: 'test', error: 'err' }, 404);

import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const error = exception.getResponse() as
      | string
      | { error: string; ststusCode: number; message: string | string[] };

    if (typeof error === 'string') {
      response.status(status).json({
        success: false,
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        error,
      });
    } else {
      response.status(status).json({
        success: false,
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        ...error,
      });
    }
  }
}

app.useGlobalFilters(new HttpExceptionFilter());
```

### Pipe

> 클라이언트 요청에서 들어오는 데이터 유효성 검사 및 변환을 수행하여 서버가 원하는 데이터를 업을수 있도록 도와주는 클래스
>
> 파이프는 단방향 통신을 위한 용도로 사용됩니다. 하나의 파이프는 이전 파이프에서 전달된 결과를 입력 값으로 받아 또 다른 결과 값을 내놓습니다. NestJS에서의 파이프는 클라이언트 요청에서 들어오는 데이터를 유효성 검사 및 변환을 수행하여 서버가 원하는 데이터를 얻을 수 있도록 도와주는 역할을 합니다.

```js
@Get(':id')
getOneCat(@Param('id', ParseIntPipe) id: number) {
  console.log(id, typeof id); // id , number id가 넘버타입이 아닐경우 에러 발생
  return;
}
// pipe 여러개 연결
@Get(':id')
getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) id: number) {
  console.log(id, typeof id);
  return;
}
```

## Interceptor

## lifecycle

> https://docs.nestjs.kr/faq/request-lifecycle
