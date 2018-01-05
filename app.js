const casual = require("casual");

const sentence = casual.sentence;
 
// Generate random city name
const city = casual.city;
 
// Define custom generator
casual.define('point', function() {
    return {
        x: Math.random(),
        y: Math.random()
    };
});
// Generate random point
const point = casual.point;

// Address
 
// console.log(casual.country)             // 'United Kingdom'
// console.log(casual.city )                // 'New Ortiz chester'
// //console.log(casual.zip(digits = {5, 9}))// '26995-7979' (if no digits specified then random selection between ZIP and ZIP+4)
// console.log(casual.street )              // 'Jadyn Islands'
// console.log(casual.address  )            // '6390 Tremblay Pines Suite 784'
// console.log(casual.address1 )            // '8417 Veda Circles'
// console.log(casual.address2  )           // 'Suite 648'
// console.log(casual.state   )             // 'Michigan'
// console.log(casual.state_abbr )          // 'CO'
// console.log(casual.latitude  )           // 90.0610
// console.log(casual.longitude )           // 180.0778
// console.log(casual.building_number)      // 2413
 
// Text
console.log(casual.password)
// console.log(casual.sentence )              // 'Laborum eius porro consequatur.'
// console.log(casual.sentences(n = 3))       // 'Dolorum fuga nobis sit natus consequatur. Laboriosam sapiente. Natus quos ut.'
// console.log(casual.title )                 // 'Systematic nobis'
// console.log(casual.text )                  // 'Nemo tempore natus non accusamus eos placeat nesciunt. et fugit ut odio nisi dolore non ... (long text)'
// console.log(casual.description )           // 'Vel et rerum nostrum quia. Dolorum fuga nobis sit natus consequatur.'
// console.log(casual.short_description )     // 'Qui iste similique iusto.'
// console.log(casual.string    )             // 'saepe quia molestias voluptates et'
// console.log(casual.word  )                 // 'voluptatem'
// console.log(casual.words(n = 7)   )        // 'sed quis ut beatae id adipisci aut'
// console.log(casual.array_of_words(n = 7))  // [ 'voluptas', 'atque', 'vitae', 'vel', 'dolor', 'saepe', 'ut' ]
// console.log(casual.letter  )               // 'k'
 
// Internet
// console.log(casual.ip   )        // '21.44.122.149'
// console.log(casual.domain )      // 'darrion.us'
// console.log(casual.url    )      // 'germaine.net'
// console.log(casual.email  )      // 'Josue.Hessel@claire.us'
// console.log(casual.user_agent )  // 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:34.0) Gecko/20100101 Firefox/34.0'
 
// Person
 
// console.log(casual.name  )          // 'Alberto'
// console.log(casual.username )       // 'Darryl'
// console.log(casual.first_name )     // 'Derek'
// console.log(casual.last_name )     // 'Considine'
// console.log(casual.full_name  )     // 'Kadin Torphy'
// console.log(casual.password  )      // '(205)580-1350Schumm'
// console.log(casual.name_prefix )    // 'Miss'
// console.log(casual.name_suffix )    // 'Jr.'
// console.log(casual.company_name )   // 'Cole, Wuckert and Strosin'
// console.log(casual.company_suffix ) // 'Inc'
// console.log(casual.catch_phrase )   // 'Synchronised optimal concept'
// console.log(casual.phone       )    // '982-790-2592'
 
// Numbers
 
// console.log(casual.random  )                          // 0.7171590146608651 (core generator)
// console.log(casual.integer(from = -1000, to = 1000))  // 632
// console.log(casual.double(from = -1000, to = 1000))   // -234.12987444
// console.log(casual.array_of_digits(n = 7)   )         // [ 4, 8, 3, 1, 7, 6, 6 ]
// console.log(casual.array_of_integers(n = 7) )         // [ -105, -7, -532, -596, -430, -957, -234 ]
// console.log(casual.array_of_doubles(n = 7)  )         // [ -866.3755785673857, -166.62194719538093, ...]
// console.log(casual.coin_flip          )               // true
 
// Date
 
// console.log(casual.unix_time    )                // 659897901
// console.log(casual.moment     )                  // moment.js object see http://momentjs.com/docs/
// console.log(casual.date(format = 'YYYY-MM-DD') ) // '2001-07-06' (see available formatters http://momentjs.com/docs/#/parsing/string-format/)
// console.log(casual.time(format = 'HH:mm:ss') )   // '03:08:02' (see available formatters http://momentjs.com/docs/#/parsing/string-format/)
// console.log(casual.century        )              // 'IV'
// console.log(casual.am_pm      )                  // 'am'
// console.log(casual.day_of_year   )               // 323
// console.log(casual.day_of_month   )              // 9
// console.log(casual.day_of_week  )                // 4
// console.log(casual.month_number  )               // 9
// console.log(casual.month_name   )                // 'March'
// console.log(casual.year        )                 // 1990
// console.log(casual.timezone    )                 // 'America/Miquelon'
 
// Payments
 
// console.log(casual.card_type   )         // 'American Express'
// console.log(casual.card_number())  // '4716506247152101' (if no vendor specified then random)
// console.log(casual.card_exp   )          // '03/04'
// console.log(casual.card_data  )          // { type: 'MasterCard', number: '5307558778577046', exp: '04/88', holder_name: 'Jaron Gibson' }
 
// Misc
 
// console.log(casual.country_code )   // 'ES'
// console.log(casual.language_code )  // 'ru'
// console.log(casual.locale      )    // 'hi_IN'
// console.log(casual.currency  )      // { symbol: 'R', name: 'South African Rand', symbol_native: 'R', decimal_digits: 2, rounding: 0, code: 'ZAR', name_plural: 'South African rand' }		
// console.log(casual.currency_code )  // 'TRY'
// console.log(casual.currency_symbol )// 'TL'
// casual.currency_name   // Turkish Lira
// casual.mime_type       // 'audio/mpeg'
// casual.file_extension  // 'rtf'
// casual.boolean         // true
// casual.uuid            // '2f4dc6ba-bd25-4e66-b369-43a13e0cf150'
 
// Colors
 
casual.color_name       // 'DarkOliveGreen'
casual.safe_color_name  // 'maroon'
casual.rgb_hex          // '#2e4e1f'
casual.rgb_array        // [ 194, 193, 166 ]
console.log(city,"\r\n",sentence,"\r\n",JSON.stringify(point));