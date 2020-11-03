import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionsDTO {
  transactions: Transaction[];
  balance: Balance;
}

class GetFullBalanceService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): TransactionsDTO {
    return {
      transactions: this.transactionsRepository.all(),
      balance: this.transactionsRepository.getBalance(),
    };
  }
}

export default GetFullBalanceService;
