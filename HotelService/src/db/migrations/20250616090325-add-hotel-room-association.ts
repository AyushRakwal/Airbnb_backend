import { QueryInterface } from "sequelize";

module.exports = {
  async up(queryInterface : QueryInterface) {
    await queryInterface.addConstraint('rooms', {
      type: 'foreign key',
      name: 'fk_room_hotel_id',
      fields: ['hotel_id'],
      references : {
        table: 'hotels',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  async down(queryInterface : QueryInterface) {
    await queryInterface.removeConstraint(
      'rooms',
      'fk_room_hotel_id',
    );
  },
}