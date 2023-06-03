import { ExchangeService } from './service/exchange.service';

const exchangeService = new ExchangeService();

const moneyDto = exchangeService.exchange({ price: 40, currency: 'EUR' });

console.log(moneyDto);

