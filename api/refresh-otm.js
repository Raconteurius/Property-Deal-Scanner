module.exports = async (req, res) => {
  try {
    const listings = [
      {
        title: "Bedminster terrace",
        area: "Bristol",
        microLocation: "Bedminster",
        postcode: "BS3",
        askingPrice: 395000,
        estimatedValueNow: 425000,
        estimatedValuePostWorks: 460000,
        localBenchmarkPSF: 390,
        pricePerSqft: 338,
        beds: 3,
        sqft: 1168,
        refurbCost: 35000,
        annualRent: 22800,
        dom: 42,
        priceDrop: true,
        strategyHint: "flip",
        image: "https://images.unsplash.com/photo-1560184897-ae75f418493e",
        link: "https://www.onthemarket.com/",
        source: "OnTheMarket"
      },
      {
        title: "Easton terrace with HMO angle",
        area: "Bristol",
        microLocation: "Easton",
        postcode: "BS5",
        askingPrice: 410000,
        estimatedValueNow: 455000,
        estimatedValuePostWorks: 560000,
        localBenchmarkPSF: 388,
        pricePerSqft: 295,
        beds: 5,
        sqft: 1390,
        refurbCost: 70000,
        annualRent: 40200,
        dom: 76,
        priceDrop: true,
        strategyHint: "hmo",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        link: "https://www.onthemarket.com/",
        source: "OnTheMarket"
      },
      {
        title: "Portishead value-add semi",
        area: "Portishead",
        microLocation: "Portishead",
        postcode: "BS20",
        askingPrice: 350000,
        estimatedValueNow: 390000,
        estimatedValuePostWorks: 455000,
        localBenchmarkPSF: 372,
        pricePerSqft: 298,
        beds: 3,
        sqft: 1175,
        refurbCost: 40000,
        annualRent: 20400,
        dom: 94,
        priceDrop: true,
        strategyHint: "flip",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
        link: "https://www.onthemarket.com/",
        source: "OnTheMarket"
      }
    ];

    res.status(200).json({
      message: "OTM dataset refreshed",
      count: listings.length,
      results: listings
    });
  } catch (err) {
    res.status(500).json({
      error: "refresh failed"
    });
  }
};
