const mongoose = require("mongoose")

module.exports = {
  connect: (DB_HOST) => {
    // mongoose.set("useNuewUrlParser", true)
    mongoose.connect(DB_HOST)

    mongoose.connection.on("error", (err) => {
      console.error(err)
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running"
      )

      process.exit()
    })
  },
  close: () => {
    mongoose.connection.close()
  },
}
