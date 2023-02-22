module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "cart",
    {
      cart_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      amount: {
        type: DataTypes.DOUBLE,
      },
    },
    { underscored: true }
  );
};
