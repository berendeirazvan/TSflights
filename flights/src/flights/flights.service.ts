import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

  async create(flight: Flight): Promise<any> {
    return await this.flightRepository.save(flight);
  }

  async query(orig: string, dest: string): Promise<any> {
    return await this.flightRepository.find({where: {origin: orig, destination: dest}});
  }

  async patch(flight: Flight): Promise<any> {
    return await this.flightRepository.update(flight.id, flight);
  }

  async delete(id: number): Promise<any> {
    return await this.flightRepository.delete(id);
  }

  async getFlightOrigins(): Promise<any> {
    return this.flightRepository.query('SELECT DISTINCT origin FROM flights');
  }

  async getFlightDestinations(): Promise<any> {
    return this.flightRepository.query('SELECT DISTINCT destination FROM flights');
  }
}