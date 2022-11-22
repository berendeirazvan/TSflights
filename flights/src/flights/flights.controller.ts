import { Body, Controller, Delete, Get, Param, Patch, Post, Req, Request } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { Flights } from './flights.entity';
import { Flight } from './flight.model';
import { __param } from 'tslib';
import { identifierName } from '@angular/compiler';




@Controller('flights')
export class FlightsController {

    constructor(private readonly flightService: FlightsService) {}

    //POST
    @Post()
    async create(@Body() flight: Flight): Promise<Flights[]> {
        return this.flightService.create(flight);
    }

    //GET
    @Get()
    findAll(): Promise<Flights[]>{
        return this.flightService.findAll();
    }

    //GET BY ID
    @Get(':id')
    async findOne(@Param() param): Promise<Flight> {
        return this.flightService.findOne(param.id);
    }

    //QUERY
    @Get('query/:orig/:dest')
    async query(@Param('orig') orig, @Param('dest') dest): Promise<Flight> {
        return this.flightService.query(orig, dest);
    }

    //UPDATE
    @Patch(':id/update')
    async update(@Param('id') id: number, @Body() flight: Flight): Promise<Flight> {
        flight.id = id;
        return this.flightService.patch(flight);
    }

    //DELETE
    @Delete(':id/delete')
    async delete(@Param('id') id: number): Promise<any> {
        return this.flightService.delete(id);
    }

    @Get('cities/origins')
    getOrigins(): Promise<any> {
        return this.flightService.getFlightOrigins();
    }

    @Get('cities/destinations')
    getDestinations(): Promise<any> {
        return this.flightService.getFlightDestinations();
    }
}