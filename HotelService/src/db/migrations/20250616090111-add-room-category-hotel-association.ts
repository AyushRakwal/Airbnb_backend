import { QueryInterface } from "sequelize";

module.exports = {

  async up(queryInterface: QueryInterface) {
      await queryInterface.addConstraint('room_categories',{
        type: 'foreign key',
        name: 'fk_room_category_hotel_id',
        fields: ['hotel_id'],
        references : {
          table: 'hotels',
          field: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.removeConstraint(
      'room_categories',
      'fk_room_category_hotel_id'
    );
  },
};