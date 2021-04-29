const { DataTypes } = require('sequelize')
const sequelize = require('.')

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
module.exports = Book
