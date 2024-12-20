const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);

const transactionDao = require("../../dao/transaction-dao.js");
const categoryDao = require("../../dao/category-dao.js");

const schema = {
  type: "object",
  properties: {
    id: { type: "string", minLength: 32, maxLength: 32 },
    counterparty: { type: "string" },
    amount: { type: "number" },
    date: { type: "string", format: "date-time" },
    note: { type: "string" },
    categoryId: { type: "string" },
  },
  required: ["id"],
  additionalProperties: false,
};

async function UpdateAbl(req, res) {
  try {
    let transaction = req.body;

    // validate input
    const valid = ajv.validate(schema, transaction);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "dtoIn is not valid",
        validationError: ajv.errors,
      });
      return;
    }

    // validate date
    if (new Date(transaction.date) >= new Date()) {
      res.status(400).json({
        code: "invalidDate",
        message: `date must be current day or a day in the past`,
        validationError: ajv.errors,
      });
      return;
    }

    // update transaction in database
    const updatedTransaction = transactionDao.update(transaction);

    // check if categoryId exists
    const category = categoryDao.get(updatedTransaction.categoryId);
    if (!category) {
      res.status(400).json({
        code: "categoryDoesNotExist",
        message: `Category with id ${updatedTransaction.categoryId} does not exist`,
        validationError: ajv.errors,
      });
      return;
    }

    if (!updatedTransaction) {
      res.status(404).json({
        code: "transactionNotFound",
        message: `Transaction ${transaction.id} not found`,
      });
      return;
    }

    // return properly filled dtoOut
    updatedTransaction.category = category;
    res.json(updatedTransaction);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = UpdateAbl;
