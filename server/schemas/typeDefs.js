const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}
type Book {
    bookId: ID
    authors: [String]
    description: String
    link: String
    image: String
    title: String
}
input BookData {
    bookId: ID
    authors: [String]
    description: String
    link: String
    image: String
    title: String

}
type Auth {
    token: ID
    user: User
}
type Query {
    me: User
}
type Mutation {
    login(email: String, password: String): Auth
    addUser(username: String, email: String, password: String): Auth
    saveBook(bookData: BookData): User
    removeBook(bookId: ID): User
}
`;

module.exports = typeDefs;