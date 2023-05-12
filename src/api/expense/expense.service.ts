import { Injectable } from '@nestjs/common';

@Injectable()
export class ExpenseService {
  getHello(): string {
    return 'Hello World!';
  }
  getExpenseById(): string {
    return 'Expense by id';
  }
}
