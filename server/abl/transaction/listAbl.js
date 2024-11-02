const transactionDao = require("../../dao/transaction-dao.js");
const categoryDao = require("../../dao/category-dao.js");

async function ListAbl(req, res) {
  try {
    const transactionList = transactionDao.list();

    // get category map
    const categoryMap = categoryDao.getCategoryMap();

    // add category to each transaction
    transactionList.forEach((transaction) => {
      transaction.category = categoryMap[transaction.categoryId];
    });

    // return properly filled dtoOut
    res.json(transactionList);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = ListAbl;
