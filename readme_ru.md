# BTC-E Bot Trader

[![Dependency Status](https://david-dm.org/steeply/btce-app-trader.svg)](https://david-dm.org/steeply/btce-app-trader)

Это приложение работает на стороне сервера и управляется через Telegram. 
Построено с использованием:

* _JavaScript_;
* _Btce-deal_;
* _poloniex-api-node_;
* _Telegram_;
* _Ta-lib_;
* _nodejs_.

## Установка

1. Установите [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) если у вас он не установлен. Откройте консоль и введите ваш e-mail и никнейм:
```
$ git config --global user.name "Your Name"
$ git config --global user.email "yourname@example.com"
```
 
2. Установите [node.js](https://nodejs.org/en/) или используйте хостинг ([heroku](https://signup.heroku.com/login), [pivotal](https://account.run.pivotal.io/z/uaa/sign-up), etc.).
3. На своем компьютере создайте любую папку (например `btce-app-trader`) и сохраните туда данный репозиторий.
4. Перейдите в папку и установите пакеты зависимостей командой `npm i` (только если будите запускать на локальном компьютере).
```
$ cd D:\btce-app-trader   (Если папка находится в корне диска D)
$ git clone https://github.com/steeply/btce-app-trader.git
$ npm i
```

5. Далее описание только если вы решили использовать хостинг [heroku](https://signup.heroku.com/login) и скачали репозиторий через `Download zip`.

Скачайте [heroku CLI](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up) и установите его.

Откройте консоль и **перейдите в ней в папку с ботом** и выполняйте следующие команды:

Выполните команду: **_heroku login_** и введите свой e-mail и пароль под которым вы зарегистрировались на Heroku (_Во время ввода пароля символы не отображаются_).

Дальше:
```
$ git init
$ git add . 
$ git commit -m "first commit"
$ heroku create
$ git push heroku master
$ heroku ps:scale web=0
```

5.1. В приложении на heroku зайдите в Settings -> Reveal Config Vars (вводим параметры приложения из документации (ключи от биржи и телеграма, настройки и стратегию)).
Или можно сделать через консоль:

```
$ heroku config:set PARAM=VALUE  - установить параметр
$ heroku config:unset PARAM      - удалить параметр
$ heroku config                  - показать все установленные параметры
```

5.2. Чтобы включить бота, в разделе Resources -> **WORKER** - Включить. 
Или консольная команда:
```
heroku ps:scale worker=1        - включить
heroku ps:scale worker=0        - выключить
```

5.3. Чтобы **обновить бота** на heroku на новую версию, скачайте новое приложение с текущего репозитория в свою папку, **где распологается прошлая версия бота** и замените в ней файлы.

Дальше выполните команды:
```
$ git add . 
$ git commit -m "update bot"
$ git push heroku master
```

При необходимости обновите параметры конфигурации (см. п. 5.1)



## Настройка

### Telegram. Создание бота.

Если используете опцию **TELEGRAM_OFF**, тогда в этом пункте нет необходимости.

[@BotFather](https://core.telegram.org/bots#6-botfather)

Напишите команду **/newbot**, чтобы создать нового робота. BotFather спросит у вас имя нового бота и предложит придумать username.
Имя (name) будет отображаться в контактах и чатах.
**Username** — короткое имя на латинице, которое используется для упоминаний бота и в ссылках на профиль в telegram.me. Username должен состоять из букв латинского алфавита, подчёркиваний и цифр и быть длиной от 5 до 32 символов. Также имя пользователя обязательно должно заканчиваться на «bot», например: «trade_bot» или «TradeBot».
Ключ (**токен**) это набор символов вида `110201543:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw`, который нужен, чтобы получать и отправлять сообщения с помощью Bot API.

### Параметры переменного окружения:

#### Обязательные параметры

##### Для биржи BTC-E

 Option | Description
----------------|----------------------
**BTCE_KEY**         | API key
**BTCE_SECRET**      | API secret
BTCE_HOST            | Адрес биржи Btc-e

##### Для биржи POLONIEX

 Option | Description
----------------|----------------------
**POLONIEX_KEY**         | API key
**POLONIEX_SECRET**      | API secret
POLONIEX_FEE             | Комиссия на сделки биржи POLONIEX (default: 0.25)
POLONIEX_DELAY_API       | Задержка при выполнении запросов к api в миллисекундах (default: 100)


 Option | Description
----------------|----------------------
**NAME_COIN**             | Торговая валюта (Например: ltc)
**NAME_COIN_TWO**         | Торговая валюта (Например: usd)
EXCHANGE                  | Выбор биржи **btc-e** или **poloniex** (default: btc-e)
TELEGRAM_TOKEN            | Ваш токен для Telegram
TELEGRAM_ID               | ID вашего пользователя в telegram
TELEGRAM_OFF              | Отключить Telegram. (default: false)

> TELEGRAM_ID будет получен при первом **запуске торгового скрипта.** Для его получения напишите telegram боту любое сообщение.

По умолчанию бот запустится на дефолтных настройках. Вы можете их изменить используя следующие параметры.

#### Используемые настройки

 Option | Description
----------------|----------------------
TIME_UPDATE_AUTO_SETTINGS           | Время обновления авто параметров (в минутах) (default: 2)
DEPOSIT_LIMIT_PERCENT               | Процент использования депозита (default: 100)
DEPOSIT_LIMIT_CURRENCY              | Размер использования депозита в валюте (default: false)
NOTIFICATION_PAIR                   | Пары для уведомления о скачках курса (Например: btc/usd, ltc/usd или **all/all** для всех пар)
NOTIFICATION_DEVIATION_PERCENT      | Насколько процентов должен увеличиться спред чтобы сработало уведомление (default: 600)
COUNT_ORDERS                        | Количество ордеров. Сколько всего будет установлено. (default: рассчитывается на основе размера депозита)
QUANTITY_ORDERS_IN_BLOCKS           | Количество ордеров в блоке. Сколько ордеров будет одномоментно на рынке. (default: false)
TIME_CLOSE_ORDERS                   | Время закрытия неиспользованных ордеров (в минутах) (default: 5)
TIME_CLOSE_ORDERS_INACTIVITY        | Время закрытия ордеров при бездействии (в минутах) (default: 15)
STEP_BREAKEVEN_PERCENT              | Процент отступа от безубытка между bid и ask (default: 50)
SIZE_ORDERS_MARTINGALE              | Размер ордеров по Мартингейл (для Экспоненты - проценты, для Линейного - абсолютное число) (default: false)
MARTINGALE_TYPE                     | Тип Мартингейла (1 - экспоненциальный, 2 - линейный) (default: 1)

##### Смещение ордеров

Варианты возможных отступов ордеров. Выберите один из предложенных.

 Option | Description
----------------|----------------------
OFFSET_ORDERS_POINTS                | Отступ между ордерами в пунктах  (default: 10)
OFFSET_ORDERS_PERCENT               | Отступ между ордерами в процентах (default: false)
OFFSET_ORDERS_EXPONENTIAL           | Отступ между ордерами по экспоненте в % (default: false)
RANGE_OFFSET                        | Диапазон смещения ордеров (default: false)
OFFSET_FIRST_ORDERS_PERCENT         | Отступ первого ордера в процентах (default: false)

> Параметр **OFFSET_FIRST_ORDERS_PERCENT** можно использовать совместно с любым из выбранных вариантов.
> Чтобы установить первый ордер по рынку, используйте OFFSET_FIRST_ORDERS_PERCENT=0.00001

#### Модули автоконфигурации

 Option | Description
----------------|----------------------
DANGER_PRICE_STOP                   | Остановка бота при большом скачке цены (default: false)
DYNAMIC_SETTINGS_TIME               | Динамическое время обновления авто параметров (default: false)
DYNAMIC_OFFSET_ORDERS               | Динамическое распределение ордеров (default: false)
TREND_DEFINITION                    | Определение тренда (Эксперементально) (default: false)
ABRUPT_CHANGE_TREND                 | Быстрый разворот тренда (Эксперементально) (default: false)
OFF_MODULES_AUTO_SETTINGS           | Отключение всех модулей авто настройки (default: false)

> Опция **OFF_MODULES_AUTO_SETTINGS** контролирует DANGER_PRICE_STOP, DYNAMIC_SETTINGS_TIME, DYNAMIC_OFFSET_ORDERS, TREND_DEFINITION, ABRUPT_CHANGE_TREND

##### Стратегия "Линии Боллинджера"

 Option | Description
----------------|----------------------
BBANDS                              | Линии Боллинджера (Трендовая стратегия) (default: false)
BBANDS_DEVIATION                    | Отклонение (default: 20)
BBANDS_INTERVAL                     | Таймфрейм (в минутах) (default: 1)


##### Стратегия "One Sell a lot Buy"

 Option | Description
----------------|----------------------
ONE_ORDERS_SELL                     | Стратегия "One Sell a lot Buy" (default: false)
ONE_ORDERS_SELL_PERCENT             | Задает процент желаемой прибыли (default: 1)
ONE_ORDERS_SELL_OFFSET              | Разница между ценой LastPrice и первым ордером buy в стеке ордеров в %. Будет подтягивать ордера вверх, если это значение будет превышено. (default: 2)
INTEGRITY_CONTROL_ORDERS            | Контроль целостности ордеров (soft - мягкий, hard - жесткий) (default: soft)

> Если параметр **INTEGRITY_CONTROL_ORDERS** в режиме `hard`, то sell ордер будет установлен только если объемы установленных и исполненных  buy ордеров будут совпадать (если ни один ордер не потеряется).

> **При запуске Стратегии "One Sell a lot Buy" начальное состояние баланса основной валюты в паре игнорируется!**

> Все стратегии взаимоисключающие. Если ни одна стратегия не выбрана используется стратегия "Скальпер"

#### Дополнительные опции

 Option | Description
----------------|----------------------
EMAIL_BUG_REPORT_ADDRESS    | Email адрес для уведомлениях о падениях и ошибках сети
HOST_SMTP                   | Адрес почтового сервера (default: smtp.yandex.ru)
EMAIL_AUTH_USER             | Логин авторизации на почтовом сервере
EMAIL_AUTH_PASS             | Пароль почтового сервера
TIME_ZONE                   | Временная зона (Например: Europe/Moscow) [Database Time Zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
LOG                         | Вывод лога расчета авто параметров (default: false)
LOG_DEBUG                   | Вывод дебаг лога (default: false)
LOG_TRANSPORTS              | Куда писать лог (0 - консоль, 1 - файл, 2 - консоль и файл) (default: 0)
LOG_PATH                    | Пользовательский путь до директории с логом (default: false)
RESTART_TRADER_TIME         | Через сколько секунд перезапрашивать данные после сетевых ошибок (default: 5)
NOTIFICATION_ERROR_COUNT    | Количество ошибок за 5 минут для уведомления через telegram (default: false)

> Опция **TELEGRAM_OFF** отключает возможность использовать Telegram в боте. Всё управление и все уведомления посылаемые через Telegram будут так же отключены!

> Опция **NODE_ENV=production** включает:
 1. уведомление о старте бота в Telegram.
 2. уведомления об ошибках на E-mail.
 3. запрещает использовать conf-dev.js.

## Запуск
 
#### На хостинге
Смотрите инструкцию к хостингу.

#### На локальном компьютере

```
$ npm start
```
или
```
TELEGRAM_TOKEN=110201543:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw TELEGRAM_ID=12345678 node ./build/server
```

Для Windows

```
SET TELEGRAM_TOKEN=110201543:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw 
SET TELEGRAM_ID=12345678
npm start
```


Для запуска панели управления в Telegram, отправьте сообщение:
```
/start
```

Дополнительные команды:
```
/info - список всех команд
```

## Donate

```
BTC: 1GGbq5xkk9YUUy4QTqsUhNnc9T1n3sQ9Fo
LTC: LPRESTPTNMUT8rVpdvd8cJxqrnGDW7Va8N
```