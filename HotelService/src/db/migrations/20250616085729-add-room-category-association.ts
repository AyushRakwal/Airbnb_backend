import { QueryInterface } from "sequelize";

module.exports = {
  async up(queryInterface : QueryInterface){
      await queryInterface.addConstraint('rooms', {
        type: 'foreign key',
        name: 'fk_room_category_id',
        fields: ['room_category_id'],
        references : {
          table: 'room_categories',
          field: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
  },

  async down(queryInterface : QueryInterface){
    await queryInterface.removeConstraint(
      'rooms',
      'fk_room_category_id'
    );
  },
};