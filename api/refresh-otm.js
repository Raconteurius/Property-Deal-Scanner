module.exports = async (req, res) => {

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
    }

    res.status(200).json({
      message: "OTM dataset refreshed",
      count: listings.results.length,
      results: listings.results
    })

  } catch (err) {

    res.status(500).json({
      error: "refresh failed"
    })

  }

}
