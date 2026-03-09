module.exports = (req, res) => {
  res.status(200).json({
    results: [
      {
        id: "deal_1",
        title: "Easton",
        address: "Easton, Bristol",
        price: 410000,
        score: 100,
        beds: 4,
        condition: "needs-works",
        type: "Terrace",
        uplift: "HMO angle",
        source: "Rightmove",
        link: "https://www.rightmove.co.uk/",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        summary: "Large terrace with HMO angle",
        tags: ["HMO", "Refurb"]
      },
      {
        id: "deal_2",
        title: "Brislington",
        address: "Brislington, Bristol",
        price: 435000,
        score: 99,
        beds: 3,
        condition: "light-refurb",
        type: "Semi-detached",
        uplift: "Refurb opportunity",
        source: "Zoopla",
        link: "https://www.zoopla.co.uk/",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
        summary: "Brislington refurbishment opportunity",
        tags: ["Flip", "Works"]
      },
      {
        id: "deal_3",
        title: "Portishead",
        address: "Portishead, Bristol fringe",
        price: 350000,
        score: 98,
        beds: 3,
        condition: "value-add",
        type: "Semi-detached",
        uplift: "BTL opportunity",
        source: "OnTheMarket",
        link: "https://www.onthemarket.com/",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
        summary: "Portishead value-add semi",
        tags: ["BTL", "Value-add"]
      }
    ]
  });
};
