import { Body, Controller, Get, Param, Post, Req, Request } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { Flights } from './flights.entity';
import { Flight } from './flight.model';
import { __param } from 'tslib';




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

    @Get(':id')
    async findOne(@Param() param): Promise<Flight> {
        return this.flightService.findOne(param.id);
    }
}
