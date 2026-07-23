import { clsx } from "clsx";
import React, { Component, createRef } from "react";

import {
  type DateFilterOptionsWithDisabled,
  addYears,
  getStartOfYear,
  getYear,
  getYearsPeriod,
  isDayDisabled,
  isDayExcluded,
  isSameDay,
  isSameYear,
  isSpaceKeyDown,
  isYearDisabled,
  isYearInRange,
  newDate,
  setYear,
  subYears,
  KeyType,
} from "./date_utils";

const VERTICAL_NAVIGATION_OFFSET = 3;

interface YearProps extends Pick<
  DateFilterOptionsWithDisabled,
  | "minDate"
  | "maxDate"
  | "excludeDates"
  | "includeDates"
  | "filterDate"
  | "disabled"
> {
  clearSelectingDate?: VoidFunction;
  date?: Date;
  disabledKeyboardNavigation?: boolean;
  onDayClick?: (
    date: Date,
    event:
      | React.MouseEvent<HTMLDivElement>
      | React.KeyboardEvent<HTMLDivElement>,
  ) => void;
  preSelection?: Date | null;
  setPreSelection?: (date?: Date | null) => void;
  selectsMultiple?: boolean;
  selectedDates?: Date[];
  selected?: Date | null;
  inline?: boolean;
  usePointerEvent?: boolean;
  onYearMouseEnter: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    year: number,
  ) => void;
  onYearMouseLeave: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    year: number,
  ) => void;
  selectingDate?: Date;
  renderYearContent?: (year: number) => React.ReactNode;
  selectsEnd?: boolean;
  selectsStart?: boolean;
  selectsRange?: boolean;
  startDate?: Date | null;
  endDate?: Date | null;
  yearItemNumber?: number;
  handleOnKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  yearClassName?: (date: Date) => string;
}

/**
 * `Year` is a component that represents a year in a date picker.
 *
 * @class
 * @param {YearProps} props - The properties that define the `Year` component.
 * @property {VoidFunction} [props.clearSelectingDate] - Function to clear the selected date.
 * @property {Date} [props.date] - The currently selected date.
 * @property {boolean} [props.disabledKeyboardNavigation] - If true, keyboard navigation is disabled.
 * @property {Date} [props.endDate] - The end date in a range selection.
 * @property {(date: Date) => void} props.onDayClick - Function to handle day click events.
 * @property {Date} props.preSelection - The date that is currently in focus.
 * @property {(date: Date) => void} props.setPreSelection - Function to set the pre-selected date.
 * @property {{ [key: string]: any }} props.selected - The selected date(s).
 * @property {boolean} props.inline - If true, the date picker is displayed inline.
 * @property {Date} props.maxDate - The maximum selectable date.
 * @property {Date} props.minDate - The minimum selectable date.
 * @property {boolean} props.usePointerEvent - If true, pointer events are used instead of mouse events.
 * @property {(date: Date) => void} props.onYearMouseEnter - Function to handle mouse enter events on a year.
 * @property {(date: Date) => void} props.onYearMouseLeave - Function to handle mouse leave events on a year.
 */
export default class Year extends Component<YearProps> {
  constructor(props: YearProps) {
    super(props);
  }

  YEAR_REFS = [...Array(this.props.yearItemNumber)].map(() =>
    { throw new Error("STUB"); },
  );

  isDisabled = (date: Date) =>
    { throw new Error("STUB"); };

  isExcluded = (date: Date) =>
    { throw new Error("STUB"); };

  selectingDate = () => { throw new Error("STUB"); };

  updateFocusOnPaginate = (refIndex: number) => {
      throw new Error("STUB");
  };

  handleYearClick = (
    day: Date,
    event:
      | React.MouseEvent<HTMLDivElement>
      | React.KeyboardEvent<HTMLDivElement>,
  ) => {
      throw new Error("STUB");
  };

  handleYearNavigation = (newYear: number, newDate: Date) => {
      throw new Error("STUB");
  };

  isSameDay = (y: Date, other: Date) => isSameDay(y, other);

  isCurrentYear = (y: number) => { throw new Error("STUB"); };

  isRangeStart = (y: number) =>
    { throw new Error("STUB"); };

  isRangeEnd = (y: number) =>
    { throw new Error("STUB"); };

  isInRange = (y: number) =>
    { throw new Error("STUB"); };

  isInSelectingRange = (y: number) => {
      throw new Error("STUB");
  };

  isSelectingRangeStart = (y: number) => {
      throw new Error("STUB");
  };

  isSelectingRangeEnd = (y: number) => {
      throw new Error("STUB");
  };

  isKeyboardSelected = (y: number) => {
      throw new Error("STUB");
  };

  isSelectedYear = (year: number) => {
      throw new Error("STUB");
  };

  onYearClick = (
    event:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.KeyboardEvent<HTMLDivElement>,
    y: number,
  ) => {
      throw new Error("STUB");
  };

  onYearKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, y: number) => {
      throw new Error("STUB");
  };

  getYearClassNames = (y: number) => {
      throw new Error("STUB");
  };

  getYearTabIndex = (y: number) => {
      throw new Error("STUB");
  };

  getYearContent = (y: number) => {
      throw new Error("STUB");
  };

  render() {
    const yearsList = [];
    const { date, yearItemNumber, onYearMouseEnter, onYearMouseLeave } =
      this.props;
    if (date === undefined) {
      return null;
    }
    const { startPeriod, endPeriod } = getYearsPeriod(date, yearItemNumber);

    for (let y = startPeriod; y <= endPeriod; y++) {
      yearsList.push(
        <div
          ref={this.YEAR_REFS[y - startPeriod]}
          onClick={(event) => {
              throw new Error("STUB");
          }}
          onKeyDown={(event) => {
              throw new Error("STUB");
          }}
          tabIndex={Number(this.getYearTabIndex(y))}
          className={this.getYearClassNames(y)}
          onMouseEnter={
            !this.props.usePointerEvent
              ? (event) => { throw new Error("STUB"); }
              : undefined
          }
          onPointerEnter={
            this.props.usePointerEvent
              ? (event) => { throw new Error("STUB"); }
              : undefined
          }
          onMouseLeave={
            !this.props.usePointerEvent
              ? (event) => { throw new Error("STUB"); }
              : undefined
          }
          onPointerLeave={
            this.props.usePointerEvent
              ? (event) => { throw new Error("STUB"); }
              : undefined
          }
          key={y}
          aria-current={this.isCurrentYear(y) ? "date" : undefined}
        >
          {this.getYearContent(y)}
        </div>,
      );
    }

    return (
      <div className="react-datepicker__year">
        <div
          className="react-datepicker__year-wrapper"
          onMouseLeave={
            !this.props.usePointerEvent
              ? this.props.clearSelectingDate
              : undefined
          }
          onPointerLeave={
            this.props.usePointerEvent
              ? this.props.clearSelectingDate
              : undefined
          }
        >
          {yearsList}
        </div>
      </div>
    );
  }
}
