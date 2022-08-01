require("dotenv").config()
const express = require("express")
const { ApolloServer, gql } = require("apollo-server-express")

const db = require("./db")

const DB_HOST = process.env.DB_HOST

const notes = [
  { id: "1", content: "This is a note", author: "hyunjin" },
  { id: "2", content: "This is a note", author: "hyunjin" },
  { id: "3", content: "This is a note", author: "hyunjin" },
]

async function start() {
  const app = express()
  const port = process.env.PORT || 4000

  db.connect(DB_HOST)

  // 그래프 QL 스키마 언어로 스키마를 구성
  const typeDefs = gql`
    type Query {
      hello: String
      notes: [Note!]!
      note(id: ID!): Note
    }

    type Mutation {
      newNote(content: String!): Note!
    }

    type Note {
      id: ID
      content: String
      author: String
    }
  `
  // 스키마 필드를 위한 리졸버 함수 제공
  const resolvers = {
    Query: {
      hello: () => "Hello world!",
      notes: () => notes,
      note: (parent, args) => notes.find((note) => note.id === args.id),
    },
    Mutation: {
      newNote: (parent, args) => {
        let noteValue = {
          id: String(notes.length + 1),
          content: args.content,
          author: "Adam Scott",
        }

        notes.push(noteValue)
        return noteValue
      },
    },
  }

  const server = new ApolloServer({ typeDefs, resolvers })

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
