import logger from "../config/logger.config";
import Hotel from "../db/models/hotel";
import { NotFoundError } from "../utils/errors/app.error";
import BaseRepositoy from "./base.repository";


export class HotelRepository extends BaseRepositoy<Hotel>{
    constructor(){
        super(Hotel);
    }

    async findAll(){
        const hotels = await this.model.findAll({
            where: {
                deletedAt: null
            }
        });

        if(!hotels || hotels.length === 0) {
            logger.error(`No hotels found`);
            throw new NotFoundError(`No hotels found`);
        }

        logger.info(`Hotels found: ${hotels.length}`);
        return hotels;
    }

    async findById(id: number) {
        const hotel = await this.model.findByPk(id);

        if(!hotel || hotel.deletedAt) {
            logger.error(`Hotel with id ${id} not found`);
            throw new NotFoundError(`Hotel with id ${id} not found`);
        }

        logger.info(`Hotel found: ${hotel.id}`);
        return hotel;
    }
    
    async softDelete(id: number) {
        const hotel = await this.model.findByPk(id);

        if(!hotel) {
            logger.error(`Hotel with id ${id} not found for deletion`);
            throw new NotFoundError(`Hotel with id ${id} not found for deletion`);
        }

        hotel.deletedAt = new Date();
        await hotel.save();
        logger.info(`Hotel with id ${id} soft deleted successfully`);
        return true;
    }

}

