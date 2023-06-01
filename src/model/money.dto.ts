import { CurrencyCode } from "./currency.model";

export interface MoneyDto {
    price: number;
    currency: CurrencyCode
}
