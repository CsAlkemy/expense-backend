import { Controller, Get } from '@nestjs/common';
@Controller('expense')
export class ExpenseController {
  @Get()
  getAllExpense() {
    return 'All Expenses (income and expense both)';
  }
  @Get(':type')
  getExpenseByType() {
    return [];
  }
}
