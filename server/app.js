const express = require("express");
const app = express();
const port = 8000;

const transactionController = require("./controller/transaction");
const categoryController = require("./controller/category");

app.use(express.json()); // podpora pro application/json
app.use(express.urlencoded({ extended: true })); // podpora pro application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/transaction", transactionController);
app.use("/category", categoryController);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const bookList = [
//   {
//     id: "50990bd554b89058b4160b29082c23e2",
//     name: "2001 Vesmírná odysea",
//     author: "A.C.Clarke",
//     ISBN: "11-11-11-11",
//   },
//   {
//     id: "f6f8a58979c31aecdd82c98b66b7e04f",
//     name: "Setkání s Ramou",
//     author: "A.C.Clarke",
//     ISBN: "22-22-22-22",
//   },
// ];

// app.post("/book/create", (req, res) => {
//   const body = req.body;

//   const schema = {
//     type: "object",
//     properties: {
//       name: { type: "string" },
//       author: { type: "string" },
//       ISBN: { type: "string" },
//     },
//     required: ["name"],
//     additionalProperties: false,
//   };
//   const validate = ajv.compile(schema);

//   const valid = validate(body);
//   if (!valid) {
//     res.status(400).json({
//       code: "dtoInIsNotValid",
//       message: validate.errors,
//     });
//     return;
//   }

//   const newBook = {
//     id: crypto.randomBytes(16).toString("hex"),
//     ...body,
//   };

//   bookList.push(newBook);

//   res.json(newBook);
// });

// app.get("/book/read", (req, res) => {
//   const query = req.query;
//   const book = bookList.find((item) => item.id === query.id);
//   if (!book) {
//     res.status(404).json({
//       code: "bookNotFound",
//       message: `Book with id: ${query.id} not found`,
//     });
//   } else {
//     res.json(book);
//   }
// });

// app.get("/book/list", (req, res) => {
//   res.json(bookList);
// });

// app.post("/book/update", (req, res) => {
//   const body = req.body;
//   const bookIndex = bookList.findIndex((item) => item.id === body.id);
//   const book = bookList[bookIndex];
//   if (!book) {
//     res.status(404).json({
//       code: "bookNotFound",
//       message: `Book with id: ${body.id} not found`,
//     });
//   } else {
//     bookList[bookIndex] = { ...book, ...body };
//     res.send(bookList[bookIndex]);
//   }
// });

// app.post("/book/delete", (req, res) => {
//   const body = req.body;
//   const bookIndex = bookList.findIndex((item) => item.id === body.id);
//   bookList.splice(bookIndex, 1);
//   res.send({});
// });
