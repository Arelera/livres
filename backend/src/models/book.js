const { DataTypes } = require('sequelize')
const sequelize = require('.')
const Bookmark = require('./bookmark')

const Book = sequelize.define(
  'Book',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    isbn: {
      type: DataTypes.INTEGER({ precision: 13 }),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT({ scale: 2 }),
      allowNull: false,
    },
    image: {
      type: DataTypes,
    },
  },
  {
    tableName: 'books',
    timestamps: false,
  }
)
Book.hasOne(Bookmark, { foreignKey: 'book_id', onDelete: 'CASCADE' })
Bookmark.belongsTo(Book, { foreignKey: 'book_id' })

module.exports = Book
