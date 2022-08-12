const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const { ApolloServer, gql } = require("apollo-server-express")
const jwt = require("jsonwebtoken")
const helmet = require("helmet")
const cors = require("cors")
const depthLimit = require("graphql-depth-limit")
const { createComplexityLimitRule } = require("graphql-validation-complexity")

const models = require("./models")
const db = require("./db")
const typeDefs = require("./schema")
const resolvers = require("./resolvers")

const DB_HOST = process.env.DB_HOST

async function start() {
  const app = express()
  const port = process.env.PORT || 4000

  if (process.env.NODE_ENV === "production") {
    app.use(helmet())
  }

  app.use(cors())

  db.connect(DB_HOST)

  // 그래프 QL 스키마 언어로 스키마를 구성

  // 스키마 필드를 위한 리졸버 함수 제공

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    validationRules: [depthLimit(5), createComplexityLimitRule(1000)], // 쿼리의 복잡도 제한
    context: ({ req }) => {
      const token = req.headers.authorization
      const user = getUser(token)

      return { models, user }
    },
  })

  await server.start()
  // 아폴로 그래프QL 미들웨어를 적용하고 경로를 /api로 설정
  server.applyMiddleware({ app, path: "/api" })

  app.listen({ port }, () =>
    console.log(
      `🚀 GraphQL Server ready at http://localhost:${port}${server.graphqlPath}`
    )
  )
}

start()

const getUser = (token) => {
  if (token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
      throw new Error("Session invalid")
    }
  }
}
