/* jshint indent: 2 */

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes){
  return sequelize.define('privateMessages', {
    idMessage: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    messageType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idUserSender: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    idUserReceiver: 
    type: DataTypes.INTEGER(10),
    allowNull: false,
    references: {
      model: 'user',
      key: 'id'
    },
    messageStatus: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
    },
    messages: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date: {

    }
  },{
    tableName: 'privateMessages',
    freezeTableName: true,
    timestamps: true
  })
}