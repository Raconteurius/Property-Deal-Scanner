export default function handler(req, res) {
  res.status(200).json({
    results: [
      {
        id: "test_1",
        title: "Easton",
        address: "Easton, Bristol",
        price: 410000,
        score: 100,
        beds: 4,
        condition: "needs-works",
        type: "Terrace",
        uplift: "HMO angle",
        source: "Demo",
        link: "https://www.rightmove.co.uk/",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        summary: "Large terrace with HMO angle.",
        tags: ["HMO", "Refurb"]
      }
    ]
  });
}
