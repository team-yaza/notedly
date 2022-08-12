const faker = require("faker")
const bcrypt = require("bcrypt")

const gravatar = require("../utils/gravatar")

const seedUsers = async () => {
  console.log("Seeding users...")

  let users = []

  for (let i = 0; i < 10; i++) {
    let user = {
      usrename: faker.internet.userName(),
      password: await bcrypt.hash("password", 10),
      email: faker.internet.email(),
    }

    user.avatar = gravatar(user.email)
    users.push(user)

    return users
  }
}

module.exports = seedUsers
