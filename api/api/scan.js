export default async function handler(req, res) {

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
      priceDrop: true
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
      priceDrop: false
    }
  ]

  res.status(200).json({
    scanned: demoDeals.length,
    deals: demoDeals
  })

}
