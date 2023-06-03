import { MoneyDto } from '../model/money.dto';

export class ExchangeService {

  public exchange(money: MoneyDto): MoneyDto {
    return {
      price: money.price * 2,
      currency: 'CZK',
    };
  }

}
