const fs = require("fs")
const path = require("path")

module.exports = (req,res) => {

  const filePath = path.join(process.cwd(),"data","otm-listings.json")

  try{

    const data = fs.readFileSync(filePath,"utf8")
    const json = JSON.parse(data)

    res.status(200).json(json)

  } catch(err){

    res.status(500).json({
      error:"Failed to load listings"
    })

  }

}
