const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const { ApolloServer, gql } = require("apollo-server-express")

const models = require("./models")
const db = require("./db")
const typeDefs = require("./schema")
const resolvers = require("./resolvers")

// console.log(typeDefs)
// const typeDefs = require("./schema")

const DB_HOST = process.env.DB_HOST

async function start() {
  const app = express()
  const port = process.env.PORT || 4000

  db.connect(DB_HOST)

  // 그래프 QL 스키마 언어로 스키마를 구성

  // 스키마 필드를 위한 리졸버 함수 제공

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => {
      return { models }
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
