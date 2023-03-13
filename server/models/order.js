module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "order",
    {
      ordernummer: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      items: {
        type: DataTypes.STRING(1500),
        allowNull: false,
      },
      sum: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    { underscored: true }
  );
};
