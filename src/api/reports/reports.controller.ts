import { Controller, Get } from '@nestjs/common';

@Controller('reports')
export class ReportsController {
  @Get('/expense')
  getExpenseReport() {
    return 'Dashboard Data';
  }
}
