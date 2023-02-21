module.exports = (sequelize, DataTypes) => {
  return sequelize.define("product", {
    item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [5, 50],
        notNull: {
          msg: "Title must have 5-50 characters.",
        },
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 500],
        notNull: {
          msg: "Please enter a description, 1-500 characters.",
        },
      },
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [10, 200],
      },
    },
  });
};
