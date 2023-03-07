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
        type: DataTypes.STRING,
        allowNull: false,
      },
      sum: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
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
