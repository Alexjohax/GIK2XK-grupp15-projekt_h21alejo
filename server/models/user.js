module.exports = (sequelize, DataTypes) => {
  return sequelize.define("user", {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [2, 50],
      },
    },
    last_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [2, 50],
      },
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [8, 120],
      },
    },
  });
};
