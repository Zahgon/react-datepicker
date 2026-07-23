import { clsx } from "clsx";
import React, { Component, createRef } from "react";

import {
  getDay,
  getMonth,
  getDate,
  newDate,
  isSameDay,
  isDayDisabled,
  isDayExcluded,
  isDayInRange,
  isEqual,
  isBefore,
  isAfter,
  getDayOfWeekCode,
  getStartOfWeek,
  formatDate,
  type DateFilterOptionsWithDisabled,
  type DateNumberType,
  type Locale,
  type HolidaysMap,
  KeyType,
} from "./date_utils";

interface DayProps extends Pick<
  DateFilterOptionsWithDisabled,
  | "minDate"
  | "maxDate"
  | "excludeDates"
  | "excludeDateIntervals"
  | "includeDateIntervals"
  | "includeDates"
  | "filterDate"
  | "disabled"
> {
  ariaLabelPrefixWhenEnabled?: string;
  ariaLabelPrefixWhenDisabled?: string;
  disabledKeyboardNavigation?: boolean;
  day: Date;
  dayClassName?: (date: Date) => string;
  highlightDates?: Map<string, string[]>;
  holidays?: HolidaysMap;
  inline?: boolean;
  shouldFocusDayInline?: boolean;
  month: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  handleOnKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  usePointerEvent?: boolean;
  preSelection?: Date | null;
  selected?: Date | null;
  selectingDate?: Date;
  selectsEnd?: boolean;
  selectsStart?: boolean;
  selectsRange?: boolean;
  showWeekPicker?: boolean;
  showWeekNumber?: boolean;
  selectsDisabledDaysInRange?: boolean;
  selectsMultiple?: boolean;
  selectedDates?: Date[];
  startDate?: Date | null;
  endDate?: Date | null;
  renderDayContents?: (day: number, date: Date) => React.ReactNode;
  containerRef?: React.RefObject<HTMLDivElement | null>;
  calendarStartDay?: DateNumberType;
  locale?: Locale;
  monthShowsDuplicateDaysEnd?: boolean;
  monthShowsDuplicateDaysStart?: boolean;
  swapRange?: boolean;
}

/**
 * `Day` is a React component that represents a single day in a date picker.
 * It handles the rendering and interaction of a day.
 *
 * @prop ariaLabelPrefixWhenEnabled - Aria label prefix when the day is enabled.
 * @prop ariaLabelPrefixWhenDisabled - Aria label prefix when the day is disabled.
 * @prop disabledKeyboardNavigation - Whether keyboard navigation is disabled.
 * @prop day - The day to be displayed.
 * @prop dayClassName - Function to customize the CSS class of the day.
 * @prop endDate - The end date in a range.
 * @prop highlightDates - Map of dates to be highlighted.
 * @prop holidays - Map of holiday dates.
 * @prop inline - Whether the date picker is inline.
 * @prop shouldFocusDayInline - Whether the day should be focused when date picker is inline.
 * @prop month - The month the day belongs to.
 * @prop onClick - Click event handler.
 * @prop onMouseEnter - Mouse enter event handler.
 * @prop handleOnKeyDown - Key down event handler.
 * @prop usePointerEvent - Whether to use pointer events.
 * @prop preSelection - The date that is currently selected.
 * @prop selected - The selected date.
 * @prop selectingDate - The date currently being selected.
 * @prop selectsEnd - Whether the day can be the end date in a range.
 * @prop selectsStart - Whether the day can be the start date in a range.
 * @prop selectsRange - Whether the day can be in a range.
 * @prop showWeekPicker - Whether to show week picker.
 * @prop showWeekNumber - Whether to show week numbers.
 * @prop selectsDisabledDaysInRange - Whether to select disabled days in a range.
 * @prop selectsMultiple - Whether to allow multiple date selection.
 * @prop selectedDates - Array of selected dates.
 * @prop startDate - The start date in a range.
 * @prop renderDayContents - Function to customize the rendering of the day's contents.
 * @prop containerRef - Ref for the container.
 * @prop excludeDates - Array of dates to be excluded.
 * @prop calendarStartDay - The start day of the week.
 * @prop locale - The locale object.
 * @prop monthShowsDuplicateDaysEnd - Whether to show duplicate days at the end of the month.
 * @prop monthShowsDuplicateDaysStart - Whether to show duplicate days at the start of the month.
 * @prop includeDates - Array of dates to be included.
 * @prop includeDateIntervals - Array of date intervals to be included.
 * @prop minDate - The minimum date that can be selected.
 * @prop maxDate - The maximum date that can be selected.
 *
 * @example
 * ```tsx
 * import React from 'react';
 * import Day from './day';
 *
 * function MyComponent() {
 *   const handleDayClick = (event) => {
 *     console.log('Day clicked', event);
 *   };
 *
 *   const handleDayMouseEnter = (event) => {
 *     console.log('Mouse entered day', event);
 *   };
 *
 *   const renderDayContents = (date) => {
 *     return <div>{date.getDate()}</div>;
 *   };
 *
 *   return (
 *     <Day
 *       day={new Date()}
 *       onClick={handleDayClick}
 *       onMouseEnter={handleDayMouseEnter}
 *       renderDayContents={renderDayContents}
 *     />
 *   );
 * }
 *
 * export default MyComponent;
 * ```
 */
export default class Day extends Component<DayProps> {
  componentDidMount() {
      throw new Error("STUB");
  }

  componentDidUpdate() {
      throw new Error("STUB");
  }

  dayEl = createRef<HTMLDivElement>();

  handleClick: DayProps["onClick"] = (event) => {
      throw new Error("STUB");
  };

  handleMouseEnter: DayProps["onMouseEnter"] = (event) => {
      throw new Error("STUB");
  };

  handleOnKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
      throw new Error("STUB");
  };

  isSameDay = (other: Date | null | undefined) =>
    isSameDay(this.props.day, other);

  isKeyboardSelected = () => {
      throw new Error("STUB");
  };

  isDisabled = (day = this.props.day) =>
    // Almost all props previously were passed as this.props w/o proper typing with prop-types
    // after the migration to TS i made it explicit
    { throw new Error("STUB"); };

  isExcluded = () =>
    // Almost all props previously were passed as this.props w/o proper typing with prop-types
    // after the migration to TS i made it explicit
    { throw new Error("STUB"); };

  isStartOfWeek = () =>
    { throw new Error("STUB"); };

  isSameWeek = (other?: Date | null) =>
    { throw new Error("STUB"); };

  isSameDayOrWeek = (other?: Date | null) =>
    { throw new Error("STUB"); };

  getHighLightedClass = () => {
      throw new Error("STUB");
  };

  // Function to return the array containing className associated to the date
  getHolidaysClass = () => {
      throw new Error("STUB");
  };

  isInRange = () => {
      throw new Error("STUB");
  };

  isInSelectingRange = () => {
      throw new Error("STUB");
  };

  isSelectingRangeStart = () => {
      throw new Error("STUB");
  };

  isSelectingRangeEnd = () => {
      throw new Error("STUB");
  };

  isRangeStart = () => {
      throw new Error("STUB");
  };

  isRangeEnd = () => {
      throw new Error("STUB");
  };

  isWeekend = () => {
      throw new Error("STUB");
  };

  isAfterMonth = () => {
      throw new Error("STUB");
  };

  isBeforeMonth = () => {
      throw new Error("STUB");
  };

  isCurrentDay = () => { throw new Error("STUB"); };

  isSelected = () => {
      throw new Error("STUB");
  };

  getClassNames = (date: Date) => {
      throw new Error("STUB");
  };

  getAriaLabel = () => {
      throw new Error("STUB");
  };

  // A function to return the holiday's name as title's content
  getTitle = () => {
      throw new Error("STUB");
  };

  getTabIndex = () => {
      throw new Error("STUB");
  };

  // various cases when we need to apply focus to the preselected day
  // focus the day on mount/update so that keyboard navigation works while cycling through months with up or down keys (not for prev and next month buttons)
  // prevent focus for these activeElement cases so we don't pull focus from the input as the calendar opens
  handleFocusDay = () => {
      throw new Error("STUB");
  };

  private shouldFocusDay() {
      throw new Error("STUB");
  }

  // the activeElement is in the container, and it is another instance of Day
  private isDayActiveElement() {
      throw new Error("STUB");
  }

  private isDuplicateDay() {
      throw new Error("STUB");
  }

  renderDayContents = () => {
      throw new Error("STUB");
  };

  render = () => (
    // TODO: Use <option> instead of the "option" role to ensure accessibility across all devices.
    <div
      ref={this.dayEl}
      className={this.getClassNames(this.props.day)}
      onKeyDown={this.handleOnKeyDown}
      onClick={this.handleClick}
      onMouseEnter={
        !this.props.usePointerEvent ? this.handleMouseEnter : undefined
      }
      onPointerEnter={
        this.props.usePointerEvent ? this.handleMouseEnter : undefined
      }
      tabIndex={this.getTabIndex()}
      aria-label={this.getAriaLabel()}
      role="gridcell"
      title={this.getTitle()}
      aria-disabled={this.isDisabled()}
      aria-current={this.isCurrentDay() ? "date" : undefined}
      aria-selected={this.isSelected() || this.isInRange()}
    >
      {this.renderDayContents()}
      {this.getTitle() !== "" && (
        <span className="overlay">{this.getTitle()}</span>
      )}
    </div>
  );
}
