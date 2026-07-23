import {
  addDays,
  addHours,
  addMinutes,
  addMonths,
  addQuarters,
  addSeconds,
  addWeeks,
  addYears,
  isEqual as dfIsEqual,
  isSameDay as dfIsSameDay,
  isSameMonth as dfIsSameMonth,
  isSameQuarter as dfIsSameQuarter,
  isSameYear as dfIsSameYear,
  differenceInCalendarDays,
  differenceInCalendarMonths,
  differenceInCalendarQuarters,
  differenceInCalendarYears,
  endOfDay,
  endOfMonth,
  endOfWeek,
  endOfYear,
  format,
  getDate,
  getDay,
  getHours,
  getISOWeek,
  getMinutes,
  getMonth,
  getQuarter,
  getSeconds,
  getTime,
  getYear,
  isAfter,
  isBefore,
  isDate,
  isValid as isValidDate,
  isWithinInterval,
  max,
  min,
  parse,
  parseISO,
  set,
  setHours,
  setMinutes,
  setMonth,
  setQuarter,
  setSeconds,
  setYear,
  startOfDay,
  startOfMonth,
  startOfQuarter,
  startOfWeek,
  startOfYear,
  subDays,
  subMonths,
  subQuarters,
  subWeeks,
  subYears,
  toDate,
} from "date-fns";

import type { Locale as DateFnsLocale, Day } from "date-fns";

// Timezone support types and utilities
// These are dynamically imported when timeZone prop is used
export type TimeZone = string;

interface DateFnsTz {
  toZonedTime: (date: Date | number | string, timeZone: string) => Date;
  fromZonedTime: (date: Date | number | string, timeZone: string) => Date;
  formatInTimeZone: (
    date: Date | number | string,
    timeZone: string,
    formatStr: string,
    options?: { locale?: DateFnsLocale },
  ) => string;
}

// Cache for the date-fns-tz module
let dateFnsTz: DateFnsTz | null = null;
let dateFnsTzLoadAttempted = false;

/**
 * Resets the date-fns-tz module cache. Used for testing.
 * @internal
 */
export function __resetDateFnsTzCache(): void {
    throw new Error("STUB");
}

/**
 * Sets the date-fns-tz module to null to simulate it not being installed. Used for testing.
 * @internal
 */
export function __setDateFnsTzNull(): void {
    throw new Error("STUB");
}

/**
 * Attempts to load date-fns-tz module.
 * Returns null if the module is not installed.
 */
function getDateFnsTz(): DateFnsTz | null {
    throw new Error("STUB");
}

/**
 * Converts a date to the specified timezone.
 * If no timezone is specified or date-fns-tz is not installed, returns the original date.
 *
 * @param date - The date to convert
 * @param timeZone - The IANA timezone identifier (e.g., "America/New_York", "UTC")
 * @returns The date in the specified timezone
 */
export function toZonedTime(date: Date, timeZone?: TimeZone): Date {
    throw new Error("STUB");
}

/**
 * Converts a date from the specified timezone to UTC.
 * If no timezone is specified or date-fns-tz is not installed, returns the original date.
 *
 * @param date - The date in the specified timezone
 * @param timeZone - The IANA timezone identifier (e.g., "America/New_York", "UTC")
 * @returns The date in UTC
 */
export function fromZonedTime(date: Date, timeZone?: TimeZone): Date {
    throw new Error("STUB");
}

/**
 * Formats a date in the specified timezone.
 * If no timezone is specified, uses the standard format function.
 *
 * @param date - The date to format
 * @param formatStr - The format string
 * @param timeZone - The IANA timezone identifier
 * @param locale - The locale object
 * @returns The formatted date string
 */
export function formatInTimeZone(
  date: Date,
  formatStr: string,
  timeZone?: TimeZone,
  locale?: DateFnsLocale,
): string {
    throw new Error("STUB");
}

/**
 * Gets the current date/time in the specified timezone.
 *
 * @param timeZone - The IANA timezone identifier
 * @returns The current date in the specified timezone
 */
export function nowInTimeZone(timeZone?: TimeZone): Date {
    throw new Error("STUB");
}

export type DateNumberType = Day;
interface LocaleObj extends Pick<
  DateFnsLocale,
  "options" | "formatLong" | "localize" | "match"
> {}

export type Locale = string | LocaleObj;

export enum KeyType {
  ArrowUp = "ArrowUp",
  ArrowDown = "ArrowDown",
  ArrowLeft = "ArrowLeft",
  ArrowRight = "ArrowRight",
  PageUp = "PageUp",
  PageDown = "PageDown",
  Home = "Home",
  End = "End",
  Enter = "Enter",
  Space = " ",
  Tab = "Tab",
  Escape = "Escape",
  Backspace = "Backspace",
  X = "x",
}

function getLocaleScope() {
  // Use this cast to avoid messing with users globalThis (like window) and the rest of keys in the globalThis object we don't care about
  const scope = (typeof window !== "undefined"
    ? window
    : globalThis) as unknown as {
    __localeId__?: string;
    __localeData__: Record<string, LocaleObj>;
  };

  return scope;
}

export const DEFAULT_YEAR_ITEM_NUMBER = 12;

// ** Date Constructors **

export function newDate(value?: string | Date | number | null): Date {
  if (value == null) {
    return new Date();
  }

  const d = typeof value === "string" ? parseISO(value) : toDate(value);
  return isValid(d) ? d : new Date();
}

/**
 * Parses a date.
 *
 * @param value - The string representing the Date in a parsable form, e.g., ISO 1861
 * @param dateFormat - The date format.
 * @param locale - The locale.
 * @param strictParsing - The strict parsing flag.
 * @param refDate - The base date to be passed to date-fns parse() function.
 * @returns - The parsed date or null.
 */
export function parseDate(
  value: string,
  dateFormat: string | string[],
  locale: Locale | undefined,
  strictParsing: boolean,
  refDate: Date = newDate(),
): Date | null {
    throw new Error("STUB");
}

/**
 * Parses a partial date string for calendar navigation purposes.
 * Unlike parseDate, this function attempts to extract whatever date
 * information is available (year, month) from a partial input,
 * returning a date suitable for navigating the calendar view.
 *
 * @param value - The date string to parse.
 * @param refDate - The reference date to use for missing components.
 * @returns - A date for navigation or null if no date info could be extracted.
 */
export function parseDateForNavigation(
  value: string,
  refDate: Date = newDate(),
): Date | null {
    throw new Error("STUB");
}

// ** Date "Reflection" **

export { isDate, set };

/**
 * Checks if a given date is a valid Date object.
 * @param date - The date to be checked.
 * @returns A boolean value indicating whether the date is valid.
 */
export function isValid(date: Date): boolean {
  return isValidDate(date);
}

/**
 * Safely returns a valid Date or null.
 * This handles cases where a value might be passed as a string or other
 * invalid type at runtime, even though TypeScript expects a Date.
 * @param date - The value to check (typed as Date but could be anything at runtime)
 * @returns The date if it's a valid Date object, otherwise null
 */
export function safeToDate(date: Date | null | undefined): Date | null {
    throw new Error("STUB");
}

// ** Date Formatting **

/**
 * Formats a date.
 *
 * @param date - The date.
 * @param formatStr - The format string.
 * @param locale - The locale.
 * @returns - The formatted date.
 */
export function formatDate(
  date: Date,
  formatStr: string,
  locale?: Locale,
): string {
  if (locale === "en") {
    return format(date, formatStr, {
      useAdditionalWeekYearTokens: true,
      useAdditionalDayOfYearTokens: true,
    });
  }
  let localeObj = locale ? getLocaleObject(locale) : undefined;
  if (locale && !localeObj) {
    console.warn(
      `A locale object was not found for the provided string ["${locale}"].`,
    );
  }
  localeObj = localeObj || getLocaleObject(getDefaultLocale());
  return format(date, formatStr, {
    locale: localeObj,
    useAdditionalWeekYearTokens: true,
    useAdditionalDayOfYearTokens: true,
  });
}

/**
 * Safely formats a date.
 *
 * @param date - The date.
 * @param options - An object containing the dateFormat, locale, and optional timeZone.
 * @returns - The formatted date or an empty string.
 */
export function safeDateFormat(
  date: Date | null | undefined,
  {
    dateFormat,
    locale,
    timeZone,
  }: { dateFormat: string | string[]; locale?: Locale; timeZone?: TimeZone },
): string {
    throw new Error("STUB");
}

/**
 * Used as a delimiter to separate two dates when formatting a date range
 */
export const DATE_RANGE_SEPARATOR = " - ";

/**
 * Safely formats a date range.
 *
 * @param startDate - The start date.
 * @param endDate - The end date.
 * @param props - The props.
 * @returns - The formatted date range or an empty string.
 */
export function safeDateRangeFormat(
  startDate: Date | null | undefined,
  endDate: Date | null | undefined,
  props: {
    dateFormat: string | string[];
    locale?: Locale;
    rangeSeparator?: string;
    timeZone?: TimeZone;
  },
): string {
    throw new Error("STUB");
}

/**
 * Safely formats multiple dates.
 *
 * @param dates - The dates.
 * @param props - The props.
 * @returns - The formatted dates or an empty string.
 */
export function safeMultipleDatesFormat(
  dates: Date[],
  props: {
    dateFormat: string | string[];
    locale?: Locale;
    timeZone?: TimeZone;
  },
): string {
    throw new Error("STUB");
}
// ** Date Setters **

/**
 * Sets the time for a given date.
 *
 * @param date - The date.
 * @param time - An object containing the hour, minute, and second.
 * @returns - The date with the time set.
 */
export function setTime(
  date: Date,
  { hour = 0, minute = 0, second = 0 },
): Date {
    throw new Error("STUB");
}

export { setHours, setMinutes, setMonth, setQuarter, setYear };

// ** Date Getters **

// getDay Returns day of week, getDate returns day of month
export {
  getDate,
  getDay,
  getHours,
  getMinutes,
  getMonth,
  getQuarter,
  getSeconds,
  getTime,
  getYear,
};

/**
 * Gets the week of the year for a given date.
 *
 * @param date - The date.
 * @returns - The week of the year.
 */
export function getWeek(date: Date): number {
    throw new Error("STUB");
}

/**
 * Gets the day of the week code for a given day.
 *
 * @param day - The day.
 * @param locale - The locale.
 * @returns - The day of the week code.
 */
export function getDayOfWeekCode(day: Date, locale?: Locale): string {
    throw new Error("STUB");
}

// *** Start of ***

/**
 * Gets the start of the day for a given date.
 *
 * @param date - The date.
 * @returns - The start of the day.
 */
export function getStartOfDay(date: Date): Date {
    throw new Error("STUB");
}

/**
 * Gets the start of the week for a given date.
 *
 * @param date - The date.
 * @param locale - The locale.
 * @param calendarStartDay - The day the calendar starts on.
 * @returns - The start of the week.
 */
export function getStartOfWeek(
  date: Date,
  locale?: Locale,
  calendarStartDay?: Day,
): Date {
    throw new Error("STUB");
}

/**
 * Gets the start of the month for a given date.
 *
 * @param date - The date.
 * @returns - The start of the month.
 */
export function getStartOfMonth(date: Date): Date {
    throw new Error("STUB");
}

/**
 * Gets the start of the year for a given date.
 *
 * @param date - The date.
 * @returns - The start of the year.
 */
export function getStartOfYear(date: Date): Date {
    throw new Error("STUB");
}

/**
 * Gets the start of the quarter for a given date.
 *
 * @param date - The date.
 * @returns - The start of the quarter.
 */
export function getStartOfQuarter(date: Date): Date {
    throw new Error("STUB");
}

/**
 * Gets the start of today.
 *
 * @returns - The start of today.
 */
export function getStartOfToday(): Date {
    throw new Error("STUB");
}

// *** End of ***
/**
 * Gets the end of the day for a given date.
 *
 * @param date - The date.
 * @returns - The end of the day.
 */
export function getEndOfDay(date: Date): Date {
    throw new Error("STUB");
}

/**
 * Gets the end of the week for a given date.
 *
 * @param date - The date.
 * @returns - The end of the week.
 */
export function getEndOfWeek(date: Date): Date {
    throw new Error("STUB");
}

/**
 * Gets the end of the month for a given date.
 *
 * @param date - The date.
 * @returns - The end of the month.
 */
export function getEndOfMonth(date: Date): Date {
    throw new Error("STUB");
}

// ** Date Math **

// *** Addition ***

export {
  addDays,
  addMinutes,
  addMonths,
  addQuarters,
  addSeconds,
  addWeeks,
  addYears,
};

// *** Subtraction ***

export { addHours, subDays, subMonths, subQuarters, subWeeks, subYears };

// ** Date Comparison **

export { isAfter, isBefore };

/**
 * Checks if two dates are in the same year.
 *
 * @param date1 - The first date.
 * @param date2 - The second date.
 * @returns - True if the dates are in the same year, false otherwise.
 */
export function isSameYear(date1: Date | null, date2: Date | null): boolean {
    throw new Error("STUB");
}

/**
 * Checks if two dates are in the same month.
 *
 * @param date1 - The first date.
 * @param date2 - The second date.
 * @returns - True if the dates are in the same month, false otherwise.
 */
export function isSameMonth(date1: Date | null, date2?: Date | null): boolean {
    throw new Error("STUB");
}

/**
 * Checks if two dates are in the same quarter.
 *
 * @param date1 - The first date.
 * @param date2 - The second date.
 * @returns - True if the dates are in the same quarter, false otherwise.
 */
export function isSameQuarter(date1: Date | null, date2: Date | null): boolean {
    throw new Error("STUB");
}

/**
 * Checks if two dates are on the same day.
 *
 * @param date1 - The first date.
 * @param date2 - The second date.
 * @returns - True if the dates are on the same day, false otherwise.
 */
export function isSameDay(date1?: Date | null, date2?: Date | null): boolean {
  if (date1 && date2) {
    return dfIsSameDay(date1, date2);
  } else {
    return !date1 && !date2;
  }
}

/**
 * Checks if two dates are equal.
 *
 * @param date1 - The first date.
 * @param date2 - The second date.
 * @returns - True if the dates are equal, false otherwise.
 */
export function isEqual(
  date1: Date | null | undefined,
  date2: Date | null | undefined,
): boolean {
    throw new Error("STUB");
}

/**
 * Checks if a day is within a date range.
 *
 * @param day - The day to check.
 * @param startDate - The start date of the range.
 * @param endDate - The end date of the range.
 * @returns - True if the day is within the range, false otherwise.
 */
export function isDayInRange(
  day: Date,
  startDate: Date,
  endDate: Date,
): boolean {
    throw new Error("STUB");
}

// *** Diffing ***

/**
 * Gets the difference in days between two dates.
 *
 * @param date1 - The first date.
 * @param date2 - The second date.
 * @returns - The difference in days.
 */
export function getDaysDiff(date1: Date, date2: Date): number {
    throw new Error("STUB");
}

// ** Date Localization **

/**
 * Registers a locale.
 *
 * @param localeName - The name of the locale.
 * @param localeData - The data of the locale.
 */

export function registerLocale(
  localeName: string,
  localeData: LocaleObj,
): void {
  const scope = getLocaleScope();

  if (!scope.__localeData__) {
    scope.__localeData__ = {};
  }
  scope.__localeData__[localeName] = localeData;
}

/**
 * Sets the default locale.
 *
 * @param localeName - The name of the locale.
 */
export function setDefaultLocale(localeName?: string): void {
  const scope = getLocaleScope();

  scope.__localeId__ = localeName;
}

/**
 * Gets the default locale.
 *
 * @returns - The default locale.
 */
export function getDefaultLocale(): string | undefined {
  const scope = getLocaleScope();

  return scope.__localeId__;
}

/**
 * Gets the locale object.
 *
 * @param localeSpec - The locale specification.
 * @returns - The locale object.
 */
export function getLocaleObject(localeSpec?: Locale): LocaleObj | undefined {
  if (typeof localeSpec === "string") {
    // Treat it as a locale name registered by registerLocale
    const scope = getLocaleScope();
    // Null was replaced with undefined to avoid type coercion
    return scope.__localeData__ ? scope.__localeData__[localeSpec] : undefined;
  } else {
    // Treat it as a raw date-fns locale object
    return localeSpec;
  }
}

/**
 * Formats the weekday in a given locale.
 *
 * @param date - The date to format.
 * @param formatFunc - The formatting function.
 * @param locale - The locale to use for formatting.
 * @returns - The formatted weekday.
 */
export function getFormattedWeekdayInLocale(
  date: Date,
  formatFunc: (date: string) => string,
  locale?: Locale,
): string {
    throw new Error("STUB");
}

/**
 * Gets the minimum weekday in a given locale.
 *
 * @param date - The date to format.
 * @param locale - The locale to use for formatting.
 * @returns - The minimum weekday.
 */
export function getWeekdayMinInLocale(date: Date, locale?: Locale): string {
    throw new Error("STUB");
}

/**
 * Gets the short weekday in a given locale.
 *
 * @param date - The date to format.
 * @param locale - The locale to use for formatting.
 * @returns - The short weekday.
 */
export function getWeekdayShortInLocale(date: Date, locale?: Locale): string {
    throw new Error("STUB");
}

/**
 * Gets the month in a given locale.
 *
 * @param month - The month to format.
 * @param locale - The locale to use for formatting.
 * @returns - The month.
 */
export function getMonthInLocale(month: number, locale?: Locale): string {
  return formatDate(setMonth(newDate(), month), "LLLL", locale);
}

/**
 * Gets the short month in a given locale.
 *
 * @param month - The month to format.
 * @param locale - The locale to use for formatting.
 * @returns - The short month.
 */
export function getMonthShortInLocale(month: number, locale?: Locale): string {
  return formatDate(setMonth(newDate(), month), "LLL", locale);
}

/**
 * Gets the short quarter in a given locale.
 *
 * @param quarter - The quarter to format.
 * @param locale - The locale to use for formatting.
 * @returns - The short quarter.
 */
export function getQuarterShortInLocale(
  quarter: number,
  locale?: Locale,
): string {
    throw new Error("STUB");
}

// ** Utils for some components **

export interface DateFilterOptions {
  minDate?: Date;
  maxDate?: Date;
  excludeDates?: { date: Date; message?: string }[] | Date[];
  excludeDateIntervals?: { start: Date; end: Date }[];
  includeDates?: Date[];
  includeDateIntervals?: { start: Date; end: Date }[];
  filterDate?: (date: Date) => boolean;
  yearItemNumber?: number;
}

export type DateFilterOptionsWithDisabled = DateFilterOptions & {
  disabled?: boolean;
};

/**
 * Checks if a day is disabled.
 *
 * @param day - The day to check.
 * @param options - The options to consider when checking.
 * @returns - Returns true if the day is disabled, false otherwise.
 */
export function isDayDisabled(
  day: Date,
  {
    minDate,
    maxDate,
    excludeDates,
    excludeDateIntervals,
    includeDates,
    includeDateIntervals,
    filterDate,
    disabled,
  }: DateFilterOptionsWithDisabled = {},
): boolean {
    throw new Error("STUB");
}

/**
 * Checks if a day is excluded.
 *
 * @param day - The day to check.
 * @param options - The options to consider when checking.
 * @returns - Returns true if the day is excluded, false otherwise.
 */
export function isDayExcluded(
  day: Date,
  {
    excludeDates,
    excludeDateIntervals,
  }: Pick<DateFilterOptions, "excludeDates" | "excludeDateIntervals"> = {},
): boolean {
    throw new Error("STUB");
}

export function isMonthDisabled(
  month: Date,
  {
    minDate,
    maxDate,
    excludeDates,
    includeDates,
    filterDate,
  }: Pick<
    DateFilterOptions,
    "minDate" | "maxDate" | "excludeDates" | "includeDates" | "filterDate"
  > = {},
): boolean {
    throw new Error("STUB");
}

export function isMonthInRange(
  startDate: Date,
  endDate: Date,
  m: number,
  day: Date,
): boolean {
    throw new Error("STUB");
}

/**
 * To check if a date's month and year are disabled/excluded
 * @param date Date to check
 * @returns {boolean} true if month and year are disabled/excluded, false otherwise
 */
export function isMonthYearDisabled(
  date: Date,
  {
    minDate,
    maxDate,
    excludeDates,
    includeDates,
  }: Pick<
    DateFilterOptions,
    "minDate" | "maxDate" | "excludeDates" | "includeDates"
  > = {},
): boolean {
    throw new Error("STUB");
}

export function isQuarterDisabled(
  quarter: Date,
  {
    minDate,
    maxDate,
    excludeDates,
    includeDates,
    filterDate,
    disabled,
  }: Pick<
    DateFilterOptionsWithDisabled,
    | "minDate"
    | "maxDate"
    | "excludeDates"
    | "includeDates"
    | "filterDate"
    | "disabled"
  > = {},
): boolean {
    throw new Error("STUB");
}

export function isYearInRange(
  year: number,
  start?: Date | null,
  end?: Date | null,
): boolean {
    throw new Error("STUB");
}

export function isYearDisabled(
  year: number,
  {
    minDate,
    maxDate,
    excludeDates,
    includeDates,
    filterDate,
    disabled,
  }: Pick<
    DateFilterOptionsWithDisabled,
    | "minDate"
    | "maxDate"
    | "excludeDates"
    | "includeDates"
    | "filterDate"
    | "disabled"
  > = {},
): boolean {
    throw new Error("STUB");
}

export function isQuarterInRange(
  startDate: Date,
  endDate: Date,
  q: number,
  day: Date,
): boolean {
    throw new Error("STUB");
}

export function isOutOfBounds(
  day: Date,
  { minDate, maxDate }: Pick<DateFilterOptions, "minDate" | "maxDate"> = {},
): boolean {
    throw new Error("STUB");
}

export function isTimeInList(time: Date, times: Date[]): boolean {
    throw new Error("STUB");
}

export interface TimeFilterOptions {
  minTime?: Date;
  maxTime?: Date;
  excludeTimes?: Date[];
  includeTimes?: Date[];
  filterTime?: (time: Date) => boolean;
}

export function isTimeDisabled(
  time: Date,
  {
    excludeTimes,
    includeTimes,
    filterTime,
  }: Pick<
    TimeFilterOptions,
    "excludeTimes" | "includeTimes" | "filterTime"
  > = {},
): boolean {
    throw new Error("STUB");
}

export function isTimeInDisabledRange(
  time: Date,
  { minTime, maxTime }: Pick<TimeFilterOptions, "minTime" | "maxTime">,
): boolean {
    throw new Error("STUB");
}

export function monthDisabledBefore(
  day: Date,
  {
    minDate,
    includeDates,
  }: Pick<DateFilterOptions, "minDate" | "includeDates"> = {},
): boolean {
    throw new Error("STUB");
}

export function monthDisabledAfter(
  day: Date,
  {
    maxDate,
    includeDates,
  }: Pick<DateFilterOptions, "maxDate" | "includeDates"> = {},
): boolean {
    throw new Error("STUB");
}

export function quarterDisabledBefore(
  date: Date,
  {
    minDate,
    includeDates,
  }: Pick<DateFilterOptions, "minDate" | "includeDates"> = {},
): boolean {
    throw new Error("STUB");
}

export function quarterDisabledAfter(
  date: Date,
  {
    maxDate,
    includeDates,
  }: Pick<DateFilterOptions, "maxDate" | "includeDates"> = {},
): boolean {
    throw new Error("STUB");
}

export function yearDisabledBefore(
  day: Date,
  {
    minDate,
    includeDates,
  }: Pick<DateFilterOptions, "minDate" | "includeDates"> = {},
): boolean {
    throw new Error("STUB");
}

export function yearsDisabledBefore(
  day: Date,
  {
    minDate,
    yearItemNumber = DEFAULT_YEAR_ITEM_NUMBER,
  }: Pick<DateFilterOptions, "minDate" | "yearItemNumber"> = {},
): boolean {
    throw new Error("STUB");
}

export function yearDisabledAfter(
  day: Date,
  {
    maxDate,
    includeDates,
  }: Pick<DateFilterOptions, "maxDate" | "includeDates"> = {},
): boolean {
    throw new Error("STUB");
}

export function yearsDisabledAfter(
  day: Date,
  {
    maxDate,
    yearItemNumber = DEFAULT_YEAR_ITEM_NUMBER,
  }: Pick<DateFilterOptions, "maxDate" | "yearItemNumber"> = {},
): boolean {
    throw new Error("STUB");
}

export function getEffectiveMinDate({
  minDate,
  includeDates,
}: Pick<DateFilterOptions, "minDate" | "includeDates">): Date | undefined {
    throw new Error("STUB");
}

export function getEffectiveMaxDate({
  maxDate,
  includeDates,
}: Pick<DateFilterOptions, "maxDate" | "includeDates">): Date | undefined {
    throw new Error("STUB");
}

export interface HighlightDate {
  [className: string]: Date[];
}

/**
 * Get a map of highlighted dates with their corresponding classes.
 * @param highlightDates The dates to highlight.
 * @param defaultClassName The default class to use for highlighting.
 * @returns A map with dates as keys and arrays of class names as values.
 */
export function getHighLightDaysMap(
  highlightDates: (Date | HighlightDate)[] = [],
  defaultClassName: string = "react-datepicker__day--highlighted",
): Map<string, string[]> {
    throw new Error("STUB");
}

/**
 * Compare the two arrays
 * @param array1 The first array to compare.
 * @param array2 The second array to compare.
 * @returns true, if the passed arrays are equal, false otherwise.
 */
export function arraysAreEqual<T>(array1: T[], array2: T[]): boolean {
    throw new Error("STUB");
}

export interface HolidayItem {
  date: Date;
  holidayName: string;
}

interface ClassNamesObj {
  className: string;
  holidayNames: string[];
}

export type HolidaysMap = Map<string, ClassNamesObj>;

/**
 * Assign the custom class to each date
 * @param holidayDates array of object containing date and name of the holiday
 * @param defaultClassName className to be added.
 * @returns Map containing date as key and array of className and holiday name as value
 */
export function getHolidaysMap(
  holidayDates: HolidayItem[] = [],
  defaultClassName: string = "react-datepicker__day--holidays",
): HolidaysMap {
    throw new Error("STUB");
}

/**
 * Determines the times to inject after a given start of day, current time, and multiplier.
 * @param startOfDay The start of the day.
 * @param currentTime The current time.
 * @param currentMultiplier The current multiplier.
 * @param intervals The intervals.
 * @param injectedTimes The times to potentially inject.
 * @returns An array of times to inject.
 */
export function timesToInjectAfter(
  startOfDay: Date,
  currentTime: Date,
  currentMultiplier: number,
  intervals: number,
  injectedTimes: Date[],
): Date[] {
    throw new Error("STUB");
}

/**
 * Adds a leading zero to a number if it's less than 10.
 * @param i The number to add a leading zero to.
 * @returns The number as a string, with a leading zero if it was less than 10.
 */
export function addZero(i: number): string {
    throw new Error("STUB");
}

/**
 * Gets the start and end years for a period.
 * @param date The date to get the period for.
 * @param yearItemNumber The number of years in the period. Defaults to DEFAULT_YEAR_ITEM_NUMBER.
 * @returns An object with the start and end years for the period.
 */
export function getYearsPeriod(
  date: Date,
  yearItemNumber: number = DEFAULT_YEAR_ITEM_NUMBER,
): { startPeriod: number; endPeriod: number } {
  const endPeriod = Math.ceil(getYear(date) / yearItemNumber) * yearItemNumber;
  const startPeriod = endPeriod - (yearItemNumber - 1);
  return { startPeriod, endPeriod };
}

/**
 * Gets the number of hours in a day.
 * @param d The date to get the number of hours for.
 * @returns The number of hours in the day.
 */
export function getHoursInDay(d: Date): number {
    throw new Error("STUB");
}

/**
 * Returns the start of the minute for the given date
 *
 * NOTE: this function is a DST and timezone-safe analog of `date-fns/startOfMinute`
 * do not make changes unless you know what you're doing
 *
 * See comments on https://github.com/Hacker0x01/react-datepicker/pull/4244
 * for more details
 *
 * @param d date
 * @returns start of the minute
 */
export function startOfMinute(d: Date): Date {
    throw new Error("STUB");
}

/**
 * Returns whether the given dates are in the same minute
 *
 * This function is a DST and timezone-safe analog of `date-fns/isSameMinute`
 *
 * @param d1
 * @param d2
 * @returns
 */
export function isSameMinute(d1: Date, d2: Date): boolean {
    throw new Error("STUB");
}

/**
 * Returns a new datetime object representing the input date with midnight time
 * @param date The date to get the midnight time for
 * @returns A new datetime object representing the input date with midnight time
 */
export function getMidnightDate(date: Date): Date {
    throw new Error("STUB");
}

/**
 * Is the first date before the second one?
 * @param date The date that should be before the other one to return true
 * @param dateToCompare The date to compare with
 * @returns The first date is before the second date
 *
 * Note:
 *  This function considers the mid-night of the given dates for comparison.
 *  It evaluates whether date is before dateToCompare based on their mid-night timestamps.
 */
export function isDateBefore(date: Date, dateToCompare: Date): boolean {
    throw new Error("STUB");
}

/**
 * Checks if the space key was pressed down.
 *
 * @param event - The keyboard event.
 * @returns - Returns true if the space key was pressed down, false otherwise.
 */
export function isSpaceKeyDown(
  event: React.KeyboardEvent<HTMLDivElement>,
): boolean {
  return event.key === KeyType.Space;
}
