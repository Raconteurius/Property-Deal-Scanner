module.exports = async (req, res) => {

  try {

    const listings = {
      results: [
        {
      id: "otm_live_1",
      title: "Bedminster terrace",
      address: "Bedminster, Bristol",
      price: 395000,
      estimatedValue: 460000,
      refurbCost: 35000,
      beds: 3,
      type: "Terrace",
      daysOnMarket: 42,
      priceDrop: true,

      source: "OnTheMarket",
      link: "https://www.onthemarket.com/",
      image: "https://images.unsplash.com/photo-1560184897-ae75f418493e",

      tags: ["Flip", "Works"],

      scores: {
        bmv: 88,
        flip: 92,
        hmo: 55,
        master: 86
      },

      summary: "Strong refurb opportunity with margin"
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
