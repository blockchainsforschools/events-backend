'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Posts.associate = function(models) {
    // associations can be defined here
  };
  return Posts;
};