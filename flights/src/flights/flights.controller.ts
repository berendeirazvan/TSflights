import { Body, Controller, Get, Post, Req, Request } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { Flights } from './flights.entity';
import { Flight } from './flight.model';




@Controller('flights')
export class FlightsController {

    constructor(private readonly flightService: FlightsService) {}

    @Post()
    async create(@Body() flight: Flight): Promise<Flights[]> {
        return this.flightService.create(flight);
    }

    @Get()
    findAll(): Promise<Flights[]>{
        return this.flightService.findAll();
    }

}
