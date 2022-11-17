import { Controller, Get, Req, Request } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { Flights } from './flights.entity';




@Controller('flights')
export class FlightsController {

    constructor(private readonly flightService: FlightsService) {}

    @Get()
    findAll(): Promise<Flights[]>{
        return this.flightService.findAll();
    }
}
