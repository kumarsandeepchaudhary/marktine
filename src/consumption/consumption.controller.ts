import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { ConsumptionService } from './consumption.service';
import { CreateConsumptionDto } from './dto/create-consumption.dto';
import { UpdateConsumptionDto } from './dto/update-consumption.dto';

@Controller('consumption')
export class ConsumptionController {
  constructor(private readonly consumptionService: ConsumptionService) {}

  @Get()
  findAll(@Req() req: Request) {
    console.log(process.env.BASE_URL);
    return this.consumptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consumptionService.findOne(+id);
  }

  @Get(':id/:moduleId')
  getConsumption(@Req() req, @Param('id') id: string, @Param('moduleId') moduleId: string){
    return this.consumptionService.getConsumption(req.headers, id, moduleId);
  }
}
