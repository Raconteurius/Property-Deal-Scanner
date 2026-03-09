const fs = require("fs");
const path = require("path");

module.exports = async (req, res) => {
  const filePath = path.join(process.cwd(), "data", "otm-listings.json");

  try {
    const listings = {
      results: [
        {
          id: "otm_live_1",
          title: "Bedminster terrace",
          address: "Bedminster, Bristol",
          price: 395000,
          beds: 3,
          type: "Terrace",
          source: "OnTheMarket",
          link: "https://www.onthemarket.com/",
          image: "https://images.unsplash.com/photo-1560184897-ae75f418493e",
          summary: "Refurb opportunity with good margin",
          tags: ["Flip", "Works"],
          score: 95
        }
      ]
    };

    fs.writeFileSync(filePath, JSON.stringify(listings, null, 2));

    res.status(200).json({
      message: "OTM dataset refreshed",
      count: listings.results.length
    });
  } catch (err) {
    res.status(500).json({
      error: "refresh failed"
    });
  }
};
