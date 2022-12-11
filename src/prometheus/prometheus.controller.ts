import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrometheusService } from './prometheus.service';
import { CreatePrometheusDto } from './dto/create-prometheus.dto';
import { UpdatePrometheusDto } from './dto/update-prometheus.dto';

@Controller('prometheus')
export class PrometheusController {
  constructor(private readonly prometheusService: PrometheusService) {}

  @Post()
  create(@Body() createPrometheusDto: CreatePrometheusDto) {
    return this.prometheusService.create(createPrometheusDto);
  }

  @Get()
  findAll() {
    return this.prometheusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prometheusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrometheusDto: UpdatePrometheusDto) {
    return this.prometheusService.update(+id, updatePrometheusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prometheusService.remove(+id);
  }
}
