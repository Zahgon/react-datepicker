import { clsx } from "clsx";
import React, { Component, createRef } from "react";

import {
  KeyType,
  addDays,
  addMonths,
  addQuarters,
  addWeeks,
  formatDate,
  getMonth,
  getMonthInLocale,
  getMonthShortInLocale,
  getQuarter,
  getQuarterShortInLocale,
  getStartOfMonth,
  getStartOfQuarter,
  getStartOfWeek,
  getYear,
  isDayDisabled,
  isDayExcluded,
  isMonthDisabled,
  isMonthInRange,
  isMonthYearDisabled,
  isQuarterDisabled,
  isQuarterInRange,
  isSameMonth,
  isSameQuarter,
  isSpaceKeyDown,
  isValid,
  newDate,
  setMonth,
  setQuarter,
  subMonths,
  subQuarters,
} from "./date_utils";
import Week from "./week";

const FIXED_HEIGHT_STANDARD_WEEK_COUNT = 6;

const MONTH_COLUMNS_LAYOUT = {
  TWO_COLUMNS: "two_columns",
  THREE_COLUMNS: "three_columns",
  FOUR_COLUMNS: "four_columns",
};
const MONTH_COLUMNS = {
  [MONTH_COLUMNS_LAYOUT.TWO_COLUMNS]: {
    grid: [
      [0, 1],
      [2, 3],
      [4, 5],
      [6, 7],
      [8, 9],
      [10, 11],
    ],
    verticalNavigationOffset: 2,
  },
  [MONTH_COLUMNS_LAYOUT.THREE_COLUMNS]: {
    grid: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [9, 10, 11],
    ],
    verticalNavigationOffset: 3,
  },
  [MONTH_COLUMNS_LAYOUT.FOUR_COLUMNS]: {
    grid: [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11],
    ],
    verticalNavigationOffset: 4,
  },
};
const MONTH_NAVIGATION_HORIZONTAL_OFFSET = 1;

function getMonthColumnsLayout(
  showFourColumnMonthYearPicker?: boolean,
  showTwoColumnMonthYearPicker?: boolean,
) {
    throw new Error("STUB");
}

interface WeekProps extends React.ComponentPropsWithoutRef<typeof Week> {}

interface MonthProps extends Omit<
  WeekProps,
  | "ariaLabelPrefix"
  | "chooseDayAriaLabelPrefix"
  | "day"
  | "disabledDayAriaLabelPrefix"
  | "month"
  | "onDayClick"
  | "onDayMouseEnter"
  | "preSelection"
  | "selected"
  | "showWeekNumber"
> {
  monthClassName?: (date: Date) => string;
  onDayClick?: (
    date: Date,
    event:
      | React.MouseEvent<HTMLDivElement>
      | React.KeyboardEvent<HTMLDivElement>,
    orderInDisplay?: number,
  ) => void;
  onDayMouseEnter?: (date: Date) => void;
  onMouseLeave?: VoidFunction;
  setPreSelection?: (date?: Date | null) => void;
  renderMonthContent?: (
    m: number,
    shortMonthText: string,
    fullMonthText: string,
    day: Date,
  ) => React.ReactNode;
  renderQuarterContent?: (q: number, shortQuarter: string) => React.ReactNode;
  handleOnMonthKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  ariaLabelPrefix?: string;
  day: Date;
  startDate?: Date | null;
  endDate?: Date | null;
  orderInDisplay?: number;
  fixedHeight?: boolean;
  peekNextMonth?: boolean;
  preSelection?: Date | null;
  selected?: Date | null;
  showWeekNumbers?: WeekProps["showWeekNumber"];
  showMonthYearPicker?: boolean;
  showFullMonthYearPicker?: boolean;
  showTwoColumnMonthYearPicker?: boolean;
  showFourColumnMonthYearPicker?: boolean;
  showQuarterYearPicker?: boolean;
  weekAriaLabelPrefix?: WeekProps["ariaLabelPrefix"];
  chooseDayAriaLabelPrefix?: WeekProps["chooseDayAriaLabelPrefix"];
  disabledDayAriaLabelPrefix?: WeekProps["disabledDayAriaLabelPrefix"];
  dayNamesHeader?: React.ReactNode;
  monthHeader?: React.ReactNode;
  monthFooter?: React.ReactNode;
}

/**
 * `Month` is a React component that represents a month in a calendar.
 * It accepts a `MonthProps` object as props which provides various configurations and event handlers.
 *
 * @prop dayClassName - Function to determine the class name for a day.
 * @prop monthClassName - Function to determine the class name for a month.
 * @prop filterDate - Function to filter dates.
 * @prop formatWeekNumber - Function to format the week number.
 * @prop onDayClick - Function to handle day click events.
 * @prop onDayMouseEnter - Function to handle mouse enter events on a day.
 * @prop onMouseLeave - Function to handle mouse leave events.
 * @prop onWeekSelect - Function to handle week selection.
 * @prop setPreSelection - Function to set pre-selection.
 * @prop setOpen - Function to set open state.
 * @prop renderDayContents - Function to render day contents.
 * @prop renderMonthContent - Function to render month content.
 * @prop renderQuarterContent - Function to render quarter content.
 * @prop handleOnKeyDown - Function to handle key down events.
 * @prop handleOnMonthKeyDown - Function to handle key down events on a month.
 * @prop ariaLabelPrefix - Aria label prefix.
 * @prop chooseDayAriaLabelPrefix - Aria label prefix for choosing a day.
 * @prop disabledDayAriaLabelPrefix - Aria label prefix for disabled day.
 * @prop disabledKeyboardNavigation - Flag to disable keyboard navigation.
 * @prop day - The day.
 * @prop endDate - The end date.
 * @prop orderInDisplay - The order in display.
 * @prop excludeDates - Dates to exclude.
 * @prop excludeDateIntervals - Date intervals to exclude.
 * @prop fixedHeight - Flag to set fixed height.
 * @prop highlightDates - Dates to highlight.
 * @prop holidays - Holidays.
 * @prop includeDates - Dates to include.
 * @prop includeDateIntervals - Date intervals to include.
 * @prop inline - Flag to set inline.
 * @prop shouldFocusDayInline - Flag to set focus on day inline.
 * @prop locale - The locale.
 * @prop maxDate - The maximum date.
 * @prop minDate - The minimum date.
 * @prop usePointerEvent - Flag to use pointer event.
 * @prop peekNextMonth - Flag to peek next month.
 * @prop preSelection - The pre-selection.
 * @prop selected - The selected date.
 * @prop selectingDate - The selecting date.
 * @prop calendarStartDay - The calendar start day.
 * @prop selectsEnd - Flag to select end.
 * @prop selectsStart - Flag to select start.
 * @prop selectsRange - Flag to select range.
 * @prop selectsDisabledDaysInRange - Flag to select disabled days in range.
 * @prop selectsMultiple - Flag to select multiple.
 * @prop selectedDates - The selected dates.
 * @prop showWeekNumbers - Flag to show week numbers.
 * @prop startDate - The start date.
 * @prop shouldCloseOnSelect - Flag to close on select.
 * @prop showMonthYearPicker - Flag to show month year picker.
 * @prop showFullMonthYearPicker - Flag to show full month year picker.
 * @prop showTwoColumnMonthYearPicker - Flag to show two column month year picker.
 * @prop showFourColumnMonthYearPicker - Flag to show four column month year picker.
 * @prop showQuarterYearPicker - Flag to show quarter year picker.
 * @prop showWeekPicker - Flag to show week picker.
 * @prop isInputFocused - Flag to set input focus.
 * @prop weekAriaLabelPrefix - Aria label prefix for week.
 * @prop containerRef - The container reference.
 * @prop monthShowsDuplicateDaysEnd - Flag to show duplicate days at the end of the month.
 * @prop monthShowsDuplicateDaysStart - Flag to show duplicate days at the start of the month.
 *
 * @example
 * ```tsx
 * function App() {
 *  const handleDayClick = (date) => {
 *     console.log('Day clicked: ', date);
 *   };
 *
 *   const handleDayMouseEnter = (date) => {
 *     console.log('Mouse entered on day: ', date);
 *   };
 *
 *   return (
 *     <div>
 *       <Month
 *         day={new Date()}
 *         endDate={new Date()}
 *         onDayClick={handleDayClick}
 *         onDayMouseEnter={handleDayMouseEnter}
 *         disabledKeyboardNavigation={false}
 *         showWeekNumbers={true}
 *         showMonthYearPicker={false}
 *       />
 *     </div>
 *   );
 * }
 * ```
 */
export default class Month extends Component<MonthProps> {
  MONTH_REFS = [...Array(12)].map(() => { throw new Error("STUB"); });
  QUARTER_REFS = [...Array(4)].map(() => { throw new Error("STUB"); });

  isDisabled = (day: Date) =>
    // Almost all props previously were passed as this.props w/o proper typing with prop-types
    // after the migration to TS i made it explicit
    { throw new Error("STUB"); };

  isExcluded = (day: Date) =>
    // Almost all props previously were passed as this.props w/o proper typing with prop-types
    // after the migration to TS i made it explicit
    { throw new Error("STUB"); };

  handleDayClick = (
    day: Date,
    event:
      | React.MouseEvent<HTMLDivElement>
      | React.KeyboardEvent<HTMLDivElement>,
  ) => {
      throw new Error("STUB");
  };

  handleDayMouseEnter = (day: Date) => {
      throw new Error("STUB");
  };

  handleMouseLeave = () => {
      throw new Error("STUB");
  };

  isRangeStartMonth = (m: number) => {
      throw new Error("STUB");
  };

  isRangeStartQuarter = (q: number) => {
      throw new Error("STUB");
  };

  isRangeEndMonth = (m: number) => {
      throw new Error("STUB");
  };

  isRangeEndQuarter = (q: number) => {
      throw new Error("STUB");
  };

  isInSelectingRangeMonth = (m: number) => {
      throw new Error("STUB");
  };

  isSelectingMonthRangeStart = (m: number) => {
      throw new Error("STUB");
  };

  isSelectingMonthRangeEnd = (m: number) => {
      throw new Error("STUB");
  };

  isInSelectingRangeQuarter = (q: number) => {
      throw new Error("STUB");
  };

  isWeekInMonth = (startOfWeek: Date) => {
      throw new Error("STUB");
  };

  isCurrentMonth = (day: Date, m: number) =>
    { throw new Error("STUB"); };

  isCurrentQuarter = (day: Date, q: number) =>
    { throw new Error("STUB"); };

  isSelectedMonth = (day: Date, m: number, selected: Date) =>
    { throw new Error("STUB"); };

  isSelectMonthInList = (day: Date, m: number, selectedDates: Date[]) =>
    { throw new Error("STUB"); };

  isSelectedQuarter = (day: Date, q: number, selected: Date): boolean =>
    { throw new Error("STUB"); };

  isSelectQuarterInList = (day: Date, q: number, selectedDates: Date[]) =>
    { throw new Error("STUB"); };

  isMonthSelected = () => {
      throw new Error("STUB");
  };

  isQuarterSelected = () => {
      throw new Error("STUB");
  };

  renderWeeks = () => {
      throw new Error("STUB");
  };

  onMonthClick = (
    event:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.KeyboardEvent<HTMLDivElement>,
    m: number,
  ) => {
      throw new Error("STUB");
  };

  onMonthMouseEnter = (m: number) => {
      throw new Error("STUB");
  };

  handleMonthNavigation = (newMonth: number, newDate: Date) => {
      throw new Error("STUB");
  };

  handleKeyboardNavigation = (
    event: React.KeyboardEvent<HTMLDivElement>,
    eventKey: KeyType,
    month: number,
  ) => {
      throw new Error("STUB");
  };

  getVerticalOffset = (monthColumnsLayout: string) => {
      throw new Error("STUB");
  };

  onMonthKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    month: number,
  ) => {
      throw new Error("STUB");
  };

  onQuarterClick = (
    event:
      | React.MouseEvent<HTMLDivElement>
      | React.KeyboardEvent<HTMLDivElement>,
    q: number,
  ) => {
      throw new Error("STUB");
  };

  onQuarterMouseEnter = (q: number) => {
      throw new Error("STUB");
  };

  handleQuarterNavigation = (newQuarter: number, newDate: Date) => {
      throw new Error("STUB");
  };

  onQuarterKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    quarter: number,
  ) => {
      throw new Error("STUB");
  };

  isMonthDisabledForLabelDate = (
    month: number,
  ): {
    isDisabled: boolean;
    labelDate: Date;
  } => {
      throw new Error("STUB");
  };

  isMonthDisabled = (month: number) => {
      throw new Error("STUB");
  };

  getSelection() {
      throw new Error("STUB");
  }

  getMonthClassNames = (m: number) => {
      throw new Error("STUB");
  };

  getTabIndex = (m: number) => {
      throw new Error("STUB");
  };

  getQuarterTabIndex = (q: number) => {
      throw new Error("STUB");
  };

  getAriaLabel = (month: number) => {
      throw new Error("STUB");
  };

  getQuarterClassNames = (q: number) => {
      throw new Error("STUB");
  };

  getMonthContent = (m: number) => {
      throw new Error("STUB");
  };

  getQuarterContent = (q: number) => {
      throw new Error("STUB");
  };

  renderMonths = () => {
      throw new Error("STUB");
  };

  renderQuarters = () => {
      throw new Error("STUB");
  };

  getClassNames = () => {
      throw new Error("STUB");
  };

  render() {
    const {
      showMonthYearPicker,
      showQuarterYearPicker,
      day,
      ariaLabelPrefix = "Month ",
    } = this.props;

    const formattedAriaLabelPrefix = ariaLabelPrefix
      ? ariaLabelPrefix.trim() + " "
      : "";

    // Format aria-label, return empty string if date is invalid
    const formattedAriaLabel = isValid(day)
      ? `${formattedAriaLabelPrefix}${formatDate(day, "MMMM, yyyy", this.props.locale)}`
      : "";

    const shouldUseListboxRole = showMonthYearPicker || showQuarterYearPicker;

    if (shouldUseListboxRole) {
      return (
        <div
          className={this.getClassNames()}
          onMouseLeave={
            !this.props.usePointerEvent ? this.handleMouseLeave : undefined
          }
          onPointerLeave={
            this.props.usePointerEvent ? this.handleMouseLeave : undefined
          }
          aria-label={formattedAriaLabel}
          role="listbox"
        >
          {showMonthYearPicker ? this.renderMonths() : this.renderQuarters()}
        </div>
      );
    }

    // For regular calendar view, use table structure
    return (
      <div role="table">
        {this.props.dayNamesHeader && (
          <div role="rowgroup">{this.props.dayNamesHeader}</div>
        )}
        {this.props.monthHeader && (
          <div role="rowgroup">{this.props.monthHeader}</div>
        )}
        <div
          className={this.getClassNames()}
          onMouseLeave={
            !this.props.usePointerEvent ? this.handleMouseLeave : undefined
          }
          onPointerLeave={
            this.props.usePointerEvent ? this.handleMouseLeave : undefined
          }
          aria-label={formattedAriaLabel}
          role="rowgroup"
        >
          {this.renderWeeks()}
        </div>
        {this.props.monthFooter && (
          <div role="rowgroup">{this.props.monthFooter}</div>
        )}
      </div>
    );
  }
}
