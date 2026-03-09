const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "data", "deals.json");
    const raw = fs.readFileSync(filePath, "utf8");
    const listings = JSON.parse(raw);

    res.status(200).json({
      results: listings
    });
  } catch (err) {
    res.status(500).json({
      error: "Failed to load deals dataset"
    });
  }
};
