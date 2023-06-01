define("model/currency.model", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("model/money.dto", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("service/exchange.service", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExchangeService = void 0;
    var ExchangeService = /** @class */ (function () {
        function ExchangeService() {
        }
        ExchangeService.prototype.exchange = function (money) {
            return {
                price: money.price * 2,
                currency: "CZK"
            };
        };
        return ExchangeService;
    }());
    exports.ExchangeService = ExchangeService;
});
define("script", ["require", "exports", "service/exchange.service"], function (require, exports, exchange_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var exchangeService = new exchange_service_1.ExchangeService();
    var moneyDto = exchangeService.exchange({ price: 20, currency: "EUR" });
    console.log(moneyDto);
});
