const { DataTypes } = require('sequelize')
const sequelize = require('.')

const Bookmark = sequelize.define(
  'bookmark',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    created_at: {
      type: DataTypes.DATE,
    },
  },
  { tableName: 'bookmarks', timestamps: false }
)

module.exports = Bookmark
