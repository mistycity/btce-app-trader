(function(){var e,r,t,n,s,o;e=require("fs"),r={},Object.keys(process.env).forEach(function(e){var t;return t=process.env[e].toLowerCase(),r[e]="true"===t||"false"===t?"true"===t:process.env[e]}),t="production"!==r.NODE_ENV&&e.existsSync("./build/conf-dev.js")?require("./conf-dev"):{tokenTelegram:"",myChatId:"",exchange:"btc-e",btce:{key:"",secret:""},poloniex:{key:"",secret:""},emailReport:"",emailUser:"",emailPass:"",pairFirst:"ltc",pairTwo:"usd",botLog:!1,logDebug:!1,botTrade:!0,offModulesAutoSettings:r.OFF_MODULES_AUTO_SETTINGS,dangerPriceStop:!1,dynamicSettingsTime:!1,dynamicOffsetOrders:!1,trendDefinition:!1,abruptChangeTrend:!1,bbands:!1,depositLimit:{currency:0,percent:100},countOrders:0,quantityOrdersInBlocks:0,timeCloseOrders:5,offsetOrdersPoints:10,offsetOrdersPercent:0,offsetOrdersExponential:0,offsetFirstOrdersPercent:0,rangeOffset:0,martingaleType:1,sizeOrdersMartingale:0,oneOrdersSell:!1,oneOrdersSellPercent:1,oneOrdersSellOffset:2},(n={versionBot:"0.14.9",botLog:!!r.LOG||t.botLog,logDebug:!!r.LOG_DEBUG||t.logDebug,logTransports:+(r.LOG_TRANSPORTS||0),logPath:r.LOG_PATH,botTrade:t.botTrade}).telegramOff=!!r.TELEGRAM_OFF,n.tokenTelegram=r.TELEGRAM_TOKEN||t.tokenTelegram,n.myChatId=+r.TELEGRAM_ID||t.myChatId,n.exchange=(r.EXCHANGE||t.exchange).toLowerCase(),"btc-e"===n.exchange&&(n.host=r.BTCE_HOST||"btc-e.nz",n.key=r.BTCE_KEY||t.btce.key,n.secret=r.BTCE_SECRET||t.btce.secret),"poloniex"===n.exchange&&(n.poloniexKey=r.POLONIEX_KEY||t.poloniex.key,n.poloniexSecret=r.POLONIEX_SECRET||t.poloniex.secret,n.poloniexFee=r.POLONIEX_FEE||.25,n.poloniexMinOrders=1e-4,n.poloniexDelayApi=r.POLONIEX_DELAY_API||100),s=r.NAME_COIN||t.pairFirst,o=r.NAME_COIN_TWO||t.pairTwo,s="poloniex"===n.exchange?s.toUpperCase():s.toLowerCase(),o="poloniex"===n.exchange?o.toUpperCase():o.toLowerCase(),n.tradeCurrency={name:s,nameTwo:o,pair:[s,o].join("_")},n.timeZone=r.TIME_ZONE||"Asia/Yekaterinburg",n.depositLimit={percent:+(r.DEPOSIT_LIMIT_PERCENT||t.depositLimit.percent),currency:+(r.DEPOSIT_LIMIT_CURRENCY||t.depositLimit.currency)},n.minAvailableBalance=.001,n.notificationPair=r.NOTIFICATION_PAIR||"nmc/usd, ppc/usd, nvc/usd",n.notificationDeviation=+(r.NOTIFICATION_DEVIATION_PERCENT||600),n.countOrders=+(r.COUNT_ORDERS||t.countOrders),n.quantityOrdersInBlocks=+(r.QUANTITY_ORDERS_IN_BLOCKS||t.quantityOrdersInBlocks),n.timeCloseOrders=+(r.TIME_CLOSE_ORDERS||t.timeCloseOrders),n.timeCloseOrdersInactivity=+(r.TIME_CLOSE_ORDERS_INACTIVITY||3*n.timeCloseOrders),n.timeCloseOrdersExtra=1,n.offsetOrdersPoints=+(r.OFFSET_ORDERS_POINTS||t.offsetOrdersPoints),n.offsetOrdersPercent=+(r.OFFSET_ORDERS_PERCENT||t.offsetOrdersPercent),n.offsetOrdersExponential=+(r.OFFSET_ORDERS_EXPONENTIAL||t.offsetOrdersExponential)/100,n.offsetFirstOrdersPercent=+(r.OFFSET_FIRST_ORDERS_PERCENT||t.offsetFirstOrdersPercent),n.rangeOffset=+(r.RANGE_OFFSET||t.rangeOffset),n.sizeOrdersMartingale=+(r.SIZE_ORDERS_MARTINGALE||t.sizeOrdersMartingale),n.martingaleType=+(r.MARTINGALE_TYPE||t.martingaleType),n.timeUpdateAutoSettings=+(r.TIME_UPDATE_AUTO_SETTINGS||2),n.ecoCountCycle=20,n.multiplierOrdersExtra=3,n.stepBreakevenPercent=+(r.STEP_BREAKEVEN_PERCENT||50),n.restartTraderTime=+(r.RESTART_TRADER_TIME||5),n.notificationErrorCount=+(r.NOTIFICATION_ERROR_COUNT||0),n.integrityControlOrders=r.INTEGRITY_CONTROL_ORDERS||"soft",n.bbands=!(!+r.BBANDS&&!t.bbands),n.bbandsDeviation=+(r.BBANDS_DEVIATION||20),n.bbandsInterval=+(r.BBANDS_INTERVAL||1),n.oneOrdersSell=!(!+r.ONE_ORDERS_SELL&&!t.oneOrdersSell),n.oneOrdersSellPercent=+(r.ONE_ORDERS_SELL_PERCENT||t.oneOrdersSellPercent),n.oneOrdersSellOffset=+(r.ONE_ORDERS_SELL_OFFSET||t.oneOrdersSellOffset),t.offModulesAutoSettings?(n.dangerPriceStop=!1,n.dynamicSettingsTime=!1,n.dynamicOffsetOrders=!1,n.trendDefinition=!1,n.abruptChangeTrend=!1):(n.dangerPriceStop=!(!+r.DANGER_PRICE_STOP&&!t.dangerPriceStop),n.dynamicSettingsTime=!(!+r.DYNAMIC_SETTINGS_TIME&&!t.dynamicSettingsTime),n.dynamicOffsetOrders=!(!+r.DYNAMIC_OFFSET_ORDERS&&!t.dynamicOffsetOrders),n.trendDefinition=!(!+r.TREND_DEFINITION&&!t.trendDefinition),n.abruptChangeTrend=!(!+r.ABRUPT_CHANGE_TREND&&!t.abruptChangeTrend)),n.email={reportEmail:r.EMAIL_BUG_REPORT_ADDRESS||t.emailReport,host:r.HOST_SMTP||"smtp.yandex.ru",port:465,secure:!0,auth:{user:r.EMAIL_AUTH_USER||t.emailUser,pass:r.EMAIL_AUTH_PASS||t.emailPass}},n.isEmail=!!n.email.auth.user&&!!n.email.auth.pass&&!!n.email.reportEmail,n.symbol={btc:"฿",usd:"$",eur:"€",rur:"₽",ltc:"L"},module.exports=n}).call(this);