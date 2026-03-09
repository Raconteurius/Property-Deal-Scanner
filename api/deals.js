const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "data", "deals.json");
    const raw = fs.readFileSync(filePath, "utf8");
    const deals = JSON.parse(raw);

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(deals);
  } catch (error) {
    res.status(500).json({
      error: "Failed to load deals dataset",
      detail: error.message
    });
  }
};
