import { clsx } from "clsx";
import { differenceInDays } from "date-fns";
import React, { Component, createRef } from "react";

import CalendarContainer from "./calendar_container";
import { ClickOutsideWrapper } from "./click_outside_wrapper";
import {
  newDate,
  setMonth,
  getMonth,
  addMonths,
  subMonths,
  getStartOfWeek,
  getStartOfToday,
  addDays,
  formatDate,
  setYear,
  getYear,
  isBefore,
  addYears,
  subYears,
  isAfter,
  getFormattedWeekdayInLocale,
  getWeekdayShortInLocale,
  getWeekdayMinInLocale,
  isSameDay,
  isSameMonth,
  monthDisabledBefore,
  monthDisabledAfter,
  yearDisabledBefore,
  yearDisabledAfter,
  yearsDisabledAfter,
  yearsDisabledBefore,
  quarterDisabledBefore,
  quarterDisabledAfter,
  getEffectiveMinDate,
  getEffectiveMaxDate,
  addZero,
  isValid,
  getYearsPeriod,
  DEFAULT_YEAR_ITEM_NUMBER,
  getMonthInLocale,
  type Locale,
  getStartOfMonth,
  getEndOfMonth,
  isDayDisabled,
} from "./date_utils";
import InputTime from "./input_time";
import Month from "./month";
import MonthDropdown from "./month_dropdown";
import MonthYearDropdown from "./month_year_dropdown";
import Time from "./time";
import Year from "./year";
import YearDropdown from "./year_dropdown";

import type { ClickOutsideHandler } from "./click_outside_wrapper";
import type { Day } from "date-fns";

interface YearDropdownProps extends React.ComponentPropsWithoutRef<
  typeof YearDropdown
> {}

interface MonthDropdownProps extends React.ComponentPropsWithoutRef<
  typeof MonthDropdown
> {}

interface MonthYearDropdownProps extends React.ComponentPropsWithoutRef<
  typeof MonthYearDropdown
> {}

interface YearProps extends React.ComponentPropsWithoutRef<typeof Year> {}

interface MonthProps extends React.ComponentPropsWithoutRef<typeof Month> {}

interface TimeProps extends React.ComponentPropsWithoutRef<typeof Time> {}

interface InputTimeProps extends React.ComponentPropsWithoutRef<
  typeof InputTime
> {}

const DROPDOWN_FOCUS_CLASSNAMES = [
  "react-datepicker__year-select",
  "react-datepicker__month-select",
  "react-datepicker__month-year-select",
];

export const OUTSIDE_CLICK_IGNORE_CLASS =
  "react-datepicker-ignore-onclickoutside";

const isDropdownSelect = (element: HTMLDivElement) => {
    throw new Error("STUB");
};

export interface ReactDatePickerCustomHeaderProps {
  date: CalendarState["date"];
  customHeaderCount: number;
  monthDate: Date;
  changeMonth: (month: number) => void;
  changeYear: (year: number) => void;
  decreaseMonth: VoidFunction;
  increaseMonth: VoidFunction;
  decreaseYear: VoidFunction;
  increaseYear: VoidFunction;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
  prevYearButtonDisabled: boolean;
  nextYearButtonDisabled: boolean;
  visibleYearsRange?: {
    startYear: number;
    endYear: number;
  };
}

export interface ReactDatePickerCustomDayNameProps {
  day: Date;
  shortName: string;
  fullName: string;
  locale?: Locale;
  customDayNameCount: number;
}

type CalendarProps = React.PropsWithChildren<
  Omit<
    YearDropdownProps,
    "date" | "onChange" | "year" | "minDate" | "maxDate"
  > &
    Omit<MonthDropdownProps, "month" | "onChange"> &
    Omit<MonthYearDropdownProps, "date" | "onChange" | "minDate" | "maxDate"> &
    Omit<
      YearProps,
      | "onDayClick"
      | "selectingDate"
      | "clearSelectingDate"
      | "onYearMouseEnter"
      | "onYearMouseLeave"
      | "minDate"
      | "maxDate"
    > &
    Omit<
      MonthProps,
      | "ariaLabelPrefix"
      | "onChange"
      | "day"
      | "onDayClick"
      | "handleOnKeyDown"
      | "handleOnMonthKeyDown"
      | "onDayMouseEnter"
      | "onMouseLeave"
      | "orderInDisplay"
      | "monthShowsDuplicateDaysEnd"
      | "monthShowsDuplicateDaysStart"
      | "minDate"
      | "maxDate"
    > &
    Omit<TimeProps, "onChange" | "format" | "intervals" | "monthRef"> &
    Omit<InputTimeProps, "date" | "timeString" | "onChange"> & {
      selectsRange?: boolean;
      startDate?: Date | null;
      endDate?: Date | null;
      className?: string;
      container?: React.ElementType;
      showYearPicker?: boolean;
      showMonthYearPicker?: boolean;
      showQuarterYearPicker?: boolean;
      showTimeSelect?: boolean;
      showTimeInput?: boolean;
      showYearDropdown?: boolean;
      showMonthDropdown?: boolean;
      yearItemNumber?: number;
      useWeekdaysShort?: boolean;
      forceShowMonthNavigation?: boolean;
      showDisabledMonthNavigation?: boolean;
      formatWeekDay?: (date: string) => string;
      onDropdownFocus?: (event: React.FocusEvent<HTMLDivElement>) => void;
      calendarStartDay?: Day;
      weekDayClassName?: (date: Date) => string;
      onMonthChange?: (date: Date) => void;
      onYearChange?: (date: Date) => void;
      onDayMouseEnter?: (date: Date) => void;
      onMonthMouseLeave?: VoidFunction;
      weekLabel?: string;
      onClickOutside: ClickOutsideHandler;
      outsideClickIgnoreClass?: string;
      previousMonthButtonLabel?: React.ReactNode;
      previousYearButtonLabel?: React.ReactNode;
      previousMonthAriaLabel?: string;
      previousYearAriaLabel?: string;
      nextMonthButtonLabel?: React.ReactNode;
      nextYearButtonLabel?: React.ReactNode;
      nextMonthAriaLabel?: string;
      nextYearAriaLabel?: string;
      showPreviousMonths?: boolean;
      monthsShown?: number;
      monthSelectedIn?: number;
      onMonthSelectedInChange?: (monthSelectedIn: number) => void;
      onSelect: (
        day: Date,
        event?:
          | React.MouseEvent<HTMLDivElement>
          | React.KeyboardEvent<HTMLDivElement>,
        monthSelectedIn?: number,
      ) => void;
      renderCustomHeader?: (
        props: ReactDatePickerCustomHeaderProps,
      ) => React.ReactElement;
      renderCustomDayName?: (
        props: ReactDatePickerCustomDayNameProps,
      ) => React.ReactNode;
      monthHeaderPosition?: "top" | "middle" | "bottom";
      onYearMouseEnter?: YearProps["onYearMouseEnter"];
      onYearMouseLeave?: YearProps["onYearMouseLeave"];
      monthAriaLabelPrefix?: MonthProps["ariaLabelPrefix"];
      handleOnDayKeyDown?: MonthProps["handleOnKeyDown"];
      handleOnKeyDown?: (
        event:
          | React.KeyboardEvent<HTMLDivElement>
          | React.KeyboardEvent<HTMLLIElement>
          | React.KeyboardEvent<HTMLButtonElement>,
      ) => void;
      onTimeChange?: (time: Date, modifyDateType?: "start" | "end") => void;
      timeFormat?: TimeProps["format"];
      timeIntervals?: TimeProps["intervals"];
    } & (
      | ({
          showMonthYearDropdown: true;
        } & Pick<YearDropdownProps, "maxDate" | "minDate">)
      | ({
          showMonthYearDropdown?: never;
        } & Pick<YearDropdownProps, "maxDate" | "minDate"> &
          Pick<YearProps, "maxDate" | "minDate"> &
          Pick<MonthProps, "maxDate" | "minDate">)
    )
>;

interface CalendarState
  extends Pick<YearProps, "selectingDate">, Pick<MonthProps, "selectingDate"> {
  date: Required<YearProps>["date"];
  monthContainer: TimeProps["monthRef"];
  isRenderAriaLiveMessage: boolean;
}

export default class Calendar extends Component<CalendarProps, CalendarState> {
  static get defaultProps() {
      throw new Error("STUB");
  }

  constructor(props: CalendarProps) {
    super(props);

    this.containerRef = createRef<HTMLDivElement>();

    this.state = {
      date: this.getDateInView(),
      selectingDate: undefined,
      monthContainer: undefined,
      isRenderAriaLiveMessage: false,
    };
  }

  componentDidMount() {
      throw new Error("STUB");
  }

  componentDidUpdate(prevProps: CalendarProps) {
      throw new Error("STUB");
  }

  containerRef: React.RefObject<HTMLDivElement | null>;

  monthContainer: CalendarState["monthContainer"] = undefined;

  assignMonthContainer: void | undefined;

  handleClickOutside = (event: MouseEvent): void => {
      throw new Error("STUB");
  };

  setClickOutsideRef = (): HTMLDivElement | null => {
      throw new Error("STUB");
  };

  handleDropdownFocus = (event: React.FocusEvent<HTMLDivElement>): void => {
      throw new Error("STUB");
  };

  getDateInView = (): Date => {
      throw new Error("STUB");
  };

  increaseMonth = (): void => {
      throw new Error("STUB");
  };

  decreaseMonth = (): void => {
      throw new Error("STUB");
  };

  handleDayClick = (
    day: Date,
    event:
      | React.MouseEvent<HTMLDivElement>
      | React.KeyboardEvent<HTMLDivElement>,
    monthSelectedIn?: number,
  ): void => {
      throw new Error("STUB");
  };

  handleDayMouseEnter = (day: Date): void => {
      throw new Error("STUB");
  };

  handleMonthMouseLeave = (): void => {
      throw new Error("STUB");
  };

  handleYearMouseEnter = (
    event: React.MouseEvent<HTMLDivElement>,
    year: number,
  ): void => {
      throw new Error("STUB");
  };

  handleYearMouseLeave = (
    event: React.MouseEvent<HTMLDivElement>,
    year: number,
  ): void => {
      throw new Error("STUB");
  };

  handleYearChange = (date: Date): void => {
      throw new Error("STUB");
  };

  getEnabledPreSelectionDateForMonth = (date: Date) => {
      throw new Error("STUB");
  };

  handleMonthChange = (date: Date): void => {
      throw new Error("STUB");
  };

  handleCustomMonthChange = (date: Date): void => {
      throw new Error("STUB");
  };

  handleMonthYearChange = (date: Date): void => {
      throw new Error("STUB");
  };

  changeYear = (year: number): void => {
    this.setState(
      ({ date }) => { throw new Error("STUB"); },
      () => { throw new Error("STUB"); },
    );
  };

  changeMonth = (month: number): void => {
    this.setState(
      ({ date }) => { throw new Error("STUB"); },
      () => {
          throw new Error("STUB");
      },
    );
  };

  changeMonthYear = (monthYear: Date): void => {
      throw new Error("STUB");
  };

  header = (
    date: Date = this.state.date,
    customDayNameCount: number = 0,
  ): React.ReactElement[] => {
      throw new Error("STUB");
  };

  formatWeekday = (day: Date, locale?: Locale): string => {
      throw new Error("STUB");
  };

  decreaseYear = (): void => {
      throw new Error("STUB");
  };

  clearSelectingDate = (): void => {
      throw new Error("STUB");
  };

  renderPreviousButton = (): React.ReactElement | void => {
      throw new Error("STUB");
  };

  increaseYear = (): void => {
      throw new Error("STUB");
  };

  renderNextButton = (): React.ReactElement | void => {
      throw new Error("STUB");
  };

  renderCurrentMonth = (date: Date = this.state.date): React.ReactElement => {
      throw new Error("STUB");
  };

  renderYearDropdown = (
    overrideHide: boolean = false,
  ): React.ReactElement | undefined => {
      throw new Error("STUB");
  };

  renderMonthDropdown = (
    overrideHide: boolean = false,
  ): React.ReactElement | undefined => {
      throw new Error("STUB");
  };

  renderMonthYearDropdown = (
    overrideHide: boolean = false,
  ): React.ReactElement | undefined => {
      throw new Error("STUB");
  };

  handleTodayButtonClick = (event: React.MouseEvent<HTMLDivElement>): void => {
      throw new Error("STUB");
  };

  renderTodayButton = (): React.ReactElement | undefined => {
      throw new Error("STUB");
  };

  renderDayNamesHeader = (monthDate: Date, customDayNameCount: number = 0) => { throw new Error("STUB"); };

  renderDefaultHeader = ({ monthDate, i }: { monthDate: Date; i: number }) => {
      throw new Error("STUB");
  };

  renderCustomHeader = (headerArgs: { monthDate: Date; i: number }) => {
      throw new Error("STUB");
  };

  renderYearHeader = ({
    monthDate,
  }: {
    monthDate: Date;
  }): React.ReactElement => {
      throw new Error("STUB");
  };

  renderHeader = ({
    monthDate,
    i = 0,
  }: {
    monthDate: Date;
    i?: number;
  }): React.ReactElement | null => {
      throw new Error("STUB");
  };

  renderMonths = (): React.ReactElement[] | undefined => {
      throw new Error("STUB");
  };

  renderYears = (): React.ReactElement | undefined => {
      throw new Error("STUB");
  };

  renderTimeSection = (): React.ReactElement | undefined => {
      throw new Error("STUB");
  };

  renderInputTimeSection = (): React.ReactElement | undefined => {
      throw new Error("STUB");
  };

  renderAriaLiveRegion = (): React.ReactElement => {
      throw new Error("STUB");
  };

  renderChildren = (): React.ReactElement | undefined => {
      throw new Error("STUB");
  };

  render(): React.ReactElement {
    const Container = this.props.container || CalendarContainer;
    return (
      <ClickOutsideWrapper
        onClickOutside={this.handleClickOutside}
        style={{ display: "contents" }}
        ignoreClass={this.props.outsideClickIgnoreClass}
      >
        <div style={{ display: "contents" }} ref={this.containerRef}>
          <Container
            className={clsx("react-datepicker", this.props.className, {
              "react-datepicker--time-only": this.props.showTimeSelectOnly,
            })}
            showTime={this.props.showTimeSelect || this.props.showTimeInput}
            showTimeSelectOnly={this.props.showTimeSelectOnly}
            inline={this.props.inline}
          >
            {this.renderAriaLiveRegion()}
            {this.props.monthHeaderPosition === "top" &&
              this.renderPreviousButton()}
            {this.props.monthHeaderPosition === "top" &&
              this.renderNextButton()}
            {this.renderMonths()}
            {this.renderYears()}
            {this.renderTodayButton()}
            {this.renderTimeSection()}
            {this.renderInputTimeSection()}
            {this.renderChildren()}
          </Container>
        </div>
      </ClickOutsideWrapper>
    );
  }
}
