import * as express from "express";
import catsRouter from "./cats/cats.route";

const app: express.Express = express();

const port: number = 8088;

// logging middleware
app.use((req, res, next) => {
  console.log("middleware");
  next();
});

// json middleware
app.use(express.json());

app.use(catsRouter);

// app.get(
//   "exam/cats/blue",
//   (req: express.Request, res: express.Response, next) => {
//     res.send({ blue: Cat[0] });
//   }
// );

// app.get("/exam", (_: express.Request, res: express.Response) => {
//   // res.send('Hello World!')
//   // res.send({ name: "test", time: new Date(), arr: ["1", 2, "adfaf"] });
//   res.send({ cats: Cat });
// });

// app.get("exam/cats/blue", (_: express.Request, res: express.Response) => {
//   res.send({ blue: Cat[0] });
// });

// 404 middleware
app.use((req, res, next) => {
  console.log("middleware error");
  res.send({ error: 404 });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
