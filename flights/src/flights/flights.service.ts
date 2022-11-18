import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Entity, Repository } from 'typeorm';
import { Flights } from './flights.entity';
import { Flight } from './flight.model';

@Injectable()
export class FlightsService {

  constructor(
    @InjectRepository(Flights)
    private readonly flightRepository: Repository<Flights>,
  ) {}

  async findAll(): Promise<Flights[]> {
    return this.flightRepository.find();
  }

  async findOne(id: number): Promise<any> {
    return await this.flightRepository.find({where: {id: id}});
  }

  async create(flight: Flight): Promise<any>{
    return await this.flightRepository.save(flight);
  }
}