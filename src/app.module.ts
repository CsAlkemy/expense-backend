import { Module } from '@nestjs/common';
import { ExpenseModule } from './api/expense/expense.module';
import { ReportsModule } from './api/reports/reports.module';

const collectionModules = [ExpenseModule, ReportsModule];

@Module({
  imports: [...collectionModules],
})
export class AppModule {}
