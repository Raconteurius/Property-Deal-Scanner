export default function handler(req, res) {
  res.status(200).json({
    results: [
      {
        id: "scan_1",
        title: "Brislington",
        address: "Brislington, Bristol",
        price: 435000,
        score: 99,
        beds: 3,
        condition: "light-refurb",
        type: "Semi-detached",
        uplift: "Refurb opportunity",
        source: "Demo Scan",
        link: "https://www.zoopla.co.uk/",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
        summary: "Refurbishment opportunity surfaced by scan.",
        tags: ["Flip", "Works"]
      }
    ]
  });
}
