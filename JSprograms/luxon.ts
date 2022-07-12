/* Luxon Quokka Playground
https://moment.github.io/luxon/api-docs/index.html
*/

import { DateTime, Info } from 'luxon'

// Luxon would not parse this string without '' to escape characters
const str = 'Published on June 28th, 2022'
DateTime.fromFormatExplain(str, "'Published on 'MMMM dd'th', yyyy")

Info.features() //=> 	{"relative":true}
DateTime.now() //=> 	[ DateTime 2022-06-30T14:23:14.797-04:00 ]
DateTime.now().toUnixInteger() //=> 	1656613394
DateTime.now().toJSDate() //=> 	[ Date Thu Jun 30 2022 14:23:14 GMT-0400 (Eastern Daylight Saving Time) ]
DateTime.utc().toISO() //=> 	"2022-06-30T18:23:14.805Z"
DateTime.utc(2017, 5, 15, 17, 36) //=> 	[ DateTime 2017-05-15T17:36:00.000Z ]
DateTime.utc(2017, 5, 15, 17, 36).toLocal() //=> 	[ DateTime 2017-05-15T13:36:00.000-04:00 ]
DateTime.local(2017, 5, 15, 17, 36) //=> 	[ DateTime 2017-05-15T17:36:00.000-04:00 ]
DateTime.local(2017, 5, 15, 17, 36).toUTC() //=> 	[ DateTime 2017-05-15T21:36:00.000Z ]
DateTime.now().toObject() //=> 	{"year":2022,"month":6,"day":30,"hour":14,"minute":23,"second":14,"millisecond":806}
DateTime.fromObject({ year: 2017, month: 5, day: 15, hour: 17, minute: 36 }) //=> 	[ DateTime 2017-05-15T17:36:00.000-04:00 ]
DateTime.fromObject(
  { year: 2017, month: 5, day: 15, hour: 17, minute: 36 },
  { zone: 'America/New_York' },
) //=> 	[ DateTime 2017-05-15T17:36:00.000-04:00 ]
DateTime.fromObject(
  { year: 2017, month: 5, day: 15, hour: 17, minute: 36 },
  { zone: 'Asia/Singapore' },
) //=> 	[ DateTime 2017-05-15T17:36:00.000+08:00 ]
DateTime.now().setZone('America/New_York') //=> 	[ DateTime 2022-06-30T14:23:14.810-04:00 ]
DateTime.now().setZone('America/New_York').startOf('day') //=> 	[ DateTime 2022-06-30T00:00:00.000-04:00 ]
DateTime.now().plus({ minutes: 15, seconds: 8 }) //=> 	[ DateTime 2022-06-30T14:38:22.810-04:00 ]
DateTime.now().plus({ days: 6 }) //=> 	[ DateTime 2022-07-06T14:23:14.810-04:00 ]
DateTime.now().minus({ days: 6 }) //=> 	[ DateTime 2022-06-24T14:23:14.810-04:00 ]
DateTime.now().diff(DateTime.local(1982, 5, 25)).milliseconds //=> 	1265466194811
DateTime.now().diff(DateTime.local(1982, 5, 25), 'days').days //=> 	14646.599476979167
DateTime.now().diff(DateTime.local(1982, 5, 25), ['days', 'hours']) //=> 	[ Duration {"days":14646,"hours":14.3874475} ]
DateTime.now().toLocaleString() //=> 	"2022-06-30"
DateTime.now().setLocale('zh').toLocaleString() //=> 	"2022/6/30"
DateTime.now().toLocaleString(DateTime.DATE_MED) //=> 	"Jun 30, 2022"
DateTime.now().setLocale('zh').toLocaleString(DateTime.DATE_MED) //=> 	"2022年6月30日"
DateTime.now().setLocale('fr').toLocaleString(DateTime.DATE_FULL) //=> 	"30 juin 2022"
DateTime.fromISO('2017-05-15') //=> 	[ DateTime 2017-05-15T00:00:00.000-04:00 ]
DateTime.fromISO('2017-05-15T17:36') //=> 	[ DateTime 2017-05-15T17:36:00.000-04:00 ]
DateTime.fromISO('2017-W33-4') //=> 	[ DateTime 2017-08-17T00:00:00.000-04:00 ]
DateTime.fromISO('2017-W33-4T04:45:32.343') //=> 	[ DateTime 2017-08-17T04:45:32.343-04:00 ]
DateTime.fromFormat('12-16-2017', 'MM-dd-yyyy') //=> 	[ DateTime 2017-12-16T00:00:00.000-05:00 ]
DateTime.now().toFormat('MM-dd-yyyy') //=> 	"06-30-2022"
DateTime.now().toFormat('MMMM dd, yyyy') //=> 	"June 30, 2022"
DateTime.now().setLocale('fr').toFormat('MMMM dd, yyyy') //=> 	"juin 30, 2022"
DateTime.fromFormat('May 25, 1982', 'MMMM dd, yyyy') //=> 	[ DateTime 1982-05-25T00:00:00.000-04:00 ]
DateTime.fromFormat('may 25, 1982', 'MMMM dd, yyyy', { locale: 'fr' }) //=> 	[ DateTime 1982-05-25T00:00:00.000-04:00 ]
DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> 	"next month"
DateTime.now().plus({ days: -1 }).toRelativeCalendar() //=> 	"yesterday"
DateTime.now().plus({ months: 1 }).toRelativeCalendar() //=> 	"next month"
DateTime.now().setLocale('fr').plus({ days: 1 }).toRelativeCalendar() //=> 	"le mois prochain"
DateTime.now().setLocale('fr').plus({ days: -1 }).toRelativeCalendar() //=> 	"hier"
DateTime.now().setLocale('fr').plus({ months: 1 }).toRelativeCalendar() //=> 	"le mois prochain"
