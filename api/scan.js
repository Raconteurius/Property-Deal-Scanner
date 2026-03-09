module.exports = (req, res) => {
  const demoDeals = [
    {
      title: "Redfield probate refurbishment",
      area: "Bristol",
      microLocation: "Redfield",
      postcode: "BS5",
      askingPrice: 365000,
      estimatedValueNow: 415000,
      estimatedValuePostWorks: 520000,
      localBenchmarkPsf: 410,
      pricePerSqft: 305,
      beds: 4,
      sqft: 1290,
      refurbCost: 60000,
      annualRent: 32400,
      dom: 87,
      priceDrop: true,
      strategyHint: "flip",
      image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1200&q=80",
      link: "https://example.com/listing/redfield-probate-refurbishment",
      source: "Rightmove"
    },
    {
      title: "Southville undervalued terrace",
      area: "Bristol",
      microLocation: "Southville",
      postcode: "BS3",
      askingPrice: 420000,
      estimatedValueNow: 470000,
      estimatedValuePostWorks: 540000,
      localBenchmarkPsf: 465,
      pricePerSqft: 338,
      beds: 3,
      sqft: 1240,
      refurbCost: 40000,
      annualRent: 27600,
      dom: 52,
      priceDrop: false,
      strategyHint: "flip",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      link: "https://example.com/listing/southville-undervalued-terrace",
      source: "Zoopla"
    },
    {
      title: "Horfield multi-let conversion angle",
      area: "Bristol",
      microLocation: "Horfield",
      postcode: "BS7",
      askingPrice: 495000,
      estimatedValueNow: 535000,
      estimatedValuePostWorks: 645000,
      localBenchmarkPsf: 428,
      pricePerSqft: 348,
      beds: 6,
      sqft: 1422,
      refurbCost: 65000,
      annualRent: 45600,
      dom: 101,
      priceDrop: true,
      strategyHint: "hmo",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      link: "https://example.com/listing/horfield-multilet-angle",
      source: "Rightmove"
    }
  ];

  res.status(200).json({
    scanned: demoDeals.length,
    deals: demoDeals
  });
};
