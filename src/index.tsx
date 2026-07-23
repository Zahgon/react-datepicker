import { clsx } from "clsx";
import React, { Component, cloneElement } from "react";

import Calendar, { OUTSIDE_CLICK_IGNORE_CLASS } from "./calendar";
import CalendarIcon from "./calendar_icon";
import {
  newDate,
  isDate,
  isBefore,
  isAfter,
  isEqual,
  setTime,
  isValid,
  getSeconds,
  getMinutes,
  getHours,
  addDays,
  addMinutes,
  addMonths,
  addWeeks,
  subDays,
  subMonths,
  subWeeks,
  addYears,
  subYears,
  isDayDisabled,
  isDayInRange,
  getEffectiveMinDate,
  getEffectiveMaxDate,
  parseDate,
  parseDateForNavigation,
  formatDate,
  safeDateFormat,
  safeDateRangeFormat,
  getHighLightDaysMap,
  getYear,
  getMonth,
  getStartOfWeek,
  getEndOfWeek,
  registerLocale,
  setDefaultLocale,
  getDefaultLocale,
  DEFAULT_YEAR_ITEM_NUMBER,
  isSameDay,
  isMonthDisabled,
  isYearDisabled,
  safeMultipleDatesFormat,
  getHolidaysMap,
  isDateBefore,
  getStartOfDay,
  getEndOfDay,
  isSameMinute,
  toZonedTime,
  fromZonedTime,
  safeToDate,
  type HighlightDate,
  type HolidayItem,
  type TimeZone,
  KeyType,
  DATE_RANGE_SEPARATOR,
} from "./date_utils";
import PopperComponent from "./popper_component";
import Portal from "./portal";
import TabLoop from "./tab_loop";

import type { ClickOutsideHandler } from "./click_outside_wrapper";

export { default as CalendarContainer } from "./calendar_container";

export { registerLocale, setDefaultLocale, getDefaultLocale };

export {
  ReactDatePickerCustomHeaderProps,
  ReactDatePickerCustomDayNameProps,
} from "./calendar";

// Compares dates year+month combinations
function hasPreSelectionChanged(
  date1?: Date | null,
  date2?: Date | null,
): boolean {
    throw new Error("STUB");
}

/**
 * General datepicker component.
 */
const INPUT_ERR_1 = "Date input not valid.";

interface Holiday {
  date: string;
  holidayName: string;
}

type CalendarProps = React.ComponentPropsWithoutRef<typeof Calendar>;

interface CalendarIconProps extends React.ComponentPropsWithoutRef<
  typeof CalendarIcon
> {}

interface PortalProps extends React.ComponentPropsWithoutRef<typeof Portal> {}

interface PopperComponentProps extends React.ComponentPropsWithoutRef<
  typeof PopperComponent
> {}

// see https://github.com/microsoft/TypeScript/issues/31501
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type OmitUnion<T, K extends keyof any> = T extends any ? Omit<T, K> : never;
export type DatePickerProps = OmitUnion<
  CalendarProps,
  | "setOpen"
  | "dateFormat"
  | "preSelection"
  | "onSelect"
  | "onClickOutside"
  | "highlightDates"
  | "holidays"
  | "shouldFocusDayInline"
  | "monthSelectedIn"
  | "onDropdownFocus"
  | "onTimeChange"
  | "className"
  | "container"
  | "handleOnKeyDown"
  | "handleOnDayKeyDown"
  | "isInputFocused"
  | "setPreSelection"
  | "selectsRange"
  | "selectsMultiple"
  | "dropdownMode"
> &
  Partial<Pick<CalendarIconProps, "icon">> &
  OmitUnion<PortalProps, "children" | "portalId"> &
  OmitUnion<
    PopperComponentProps,
    | "className"
    | "hidePopper"
    | "targetComponent"
    | "popperComponent"
    | "popperOnKeyDown"
    | "showArrow"
  > & {
    dateFormatCalendar?: CalendarProps["dateFormat"];
    calendarClassName?: CalendarProps["className"];
    calendarContainer?: CalendarProps["container"];
    dropdownMode?: CalendarProps["dropdownMode"];
    onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
    popperClassName?: PopperComponentProps["className"];
    showPopperArrow?: PopperComponentProps["showArrow"];
    popperTargetRef?: React.RefObject<HTMLElement | null>;
    open?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    startOpen?: boolean;
    onFocus?: React.FocusEventHandler<HTMLElement>;
    onBlur?: React.FocusEventHandler<HTMLElement>;
    onClickOutside?: ClickOutsideHandler;
    onInputClick?: VoidFunction;
    preventOpenOnFocus?: boolean;
    closeOnScroll?: boolean | ((event: Event) => boolean);
    isClearable?: boolean;
    clearButtonTitle?: string;
    clearButtonClassName?: string;
    ariaLabelClose?: string;
    className?: string;
    customInput?: Parameters<typeof cloneElement>[0];
    dateFormat?: string | string[];
    showDateSelect?: boolean;
    highlightDates?: (Date | HighlightDate)[];
    onCalendarOpen?: VoidFunction;
    onCalendarClose?: VoidFunction;
    strictParsing?: boolean;
    swapRange?: boolean;
    onInputError?: (error: { code: 1; msg: string }) => void;
    allowSameDay?: boolean;
    withPortal?: boolean;
    focusSelectedMonth?: boolean;
    showIcon?: boolean;
    calendarIconClassname?: never;
    calendarIconClassName?: string;
    toggleCalendarOnIconClick?: boolean;
    holidays?: Holiday[];
    startDate?: Date | null;
    endDate?: Date | null;
    selected?: Date | null;
    /**
     * The IANA timezone identifier (e.g., "America/New_York", "UTC", "Europe/London").
     * When set, the datepicker will display dates/times in this timezone and
     * the onChange callback will return dates adjusted to this timezone.
     *
     * Requires the optional peer dependency `date-fns-tz` to be installed:
     * ```
     * npm install date-fns-tz
     * ```
     *
     * @example
     * ```tsx
     * <DatePicker
     *   timeZone="America/New_York"
     *   selected={selectedDate}
     *   onChange={(date) => setSelectedDate(date)}
     * />
     * ```
     */
    timeZone?: TimeZone;
    value?: string;
    customInputRef?: string;
    id?: string;
    name?: string;
    form?: string;
    autoFocus?: boolean;
    placeholderText?: string;
    autoComplete?: string;
    title?: string;
    required?: boolean;
    tabIndex?: number;
    ariaDescribedBy?: string;
    ariaInvalid?: string;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    ariaRequired?: string;
    "aria-describedby"?: string;
    "aria-invalid"?: string;
    "aria-label"?: string;
    "aria-labelledby"?: string;
    "aria-required"?: string;
    rangeSeparator?: string;
    onChangeRaw?: (
      event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
      selectionMeta?: {
        date: Date;
        formattedDate: string;
      },
    ) => void;
    onSelect?: (
      date: Date | null,
      event?:
        | React.MouseEvent<HTMLElement, MouseEvent>
        | React.KeyboardEvent<HTMLElement>,
    ) => void;
  } & (
    | {
        selectsRange?: false | undefined;
        selectsMultiple?: false | undefined;
        formatMultipleDates?: never;
        onChange?: (
          date: Date | null,
          event?:
            | React.MouseEvent<HTMLElement>
            | React.KeyboardEvent<HTMLElement>,
        ) => void;
      }
    | {
        selectsRange: true;
        selectsMultiple?: false | undefined;
        formatMultipleDates?: never;
        onChange?: (
          date: [Date | null, Date | null],
          event?:
            | React.MouseEvent<HTMLElement>
            | React.KeyboardEvent<HTMLElement>,
        ) => void;
      }
    | {
        selectsRange?: false | undefined;
        selectsMultiple: true;
        formatMultipleDates?: (
          dates: Date[],
          formatDate: (date: Date) => string,
        ) => string;
        onChange?: (
          dates: Date[] | null,
          event?:
            | React.MouseEvent<HTMLElement>
            | React.KeyboardEvent<HTMLElement>,
        ) => void;
      }
  );

// Internal types for onChange handlers - used for type assertions within the component
type OnChangeSingle = (
  date: Date | null,
  event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
) => void;

type OnChangeRange = (
  date: [Date | null, Date | null],
  event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
) => void;

type OnChangeMultiple = (
  dates: Date[] | null,
  event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
) => void;

interface DatePickerState {
  open: boolean;
  wasHidden: boolean;
  lastPreSelectChange?:
    | typeof PRESELECT_CHANGE_VIA_INPUT
    | typeof PRESELECT_CHANGE_VIA_NAVIGATE;
  inputValue: string | null;
  preventFocus: boolean;
  preSelection?: CalendarProps["preSelection"];
  shouldFocusDayInline?: CalendarProps["shouldFocusDayInline"];
  monthSelectedIn?: CalendarProps["monthSelectedIn"];
  focused?: CalendarProps["isInputFocused"];
  highlightDates: Required<CalendarProps>["highlightDates"];
  isRenderAriaLiveMessage?: boolean;
}

export class DatePicker extends Component<DatePickerProps, DatePickerState> {
  static get defaultProps() {
      throw new Error("STUB");
  }

  constructor(props: DatePickerProps) {
    super(props);
    this.state = this.calcInitialState();
    this.preventFocusTimeout = undefined;
  }

  componentDidMount(): void {
      throw new Error("STUB");
  }

  componentDidUpdate(
    prevProps: DatePickerProps,
    prevState: DatePickerState,
  ): void {
      throw new Error("STUB");
  }

  componentWillUnmount(): void {
      throw new Error("STUB");
  }

  preventFocusTimeout: ReturnType<typeof setTimeout> | undefined;

  inputFocusTimeout: ReturnType<typeof setTimeout> | undefined;

  calendar: Calendar | null = null;

  input: HTMLElement | null = null;

  getPreSelection = (): Date => {
      throw new Error("STUB");
  };

  // Convert the date from string format to standard Date format
  // Uses parseDate with ISO format to parse as local time, preventing
  // dates from shifting in timezones west of UTC. See issue #6105.
  modifyHolidays = () =>
    { throw new Error("STUB"); };

  calcInitialState = (): DatePickerState => {
      throw new Error("STUB");
  };

  getInputValue = (): string => {
      throw new Error("STUB");
  };

  resetHiddenStatus = (): void => {
      throw new Error("STUB");
  };

  setHiddenStatus = (): void => {
      throw new Error("STUB");
  };

  setHiddenStateOnVisibilityHidden = (): void => {
      throw new Error("STUB");
  };

  clearPreventFocusTimeout = () => {
      throw new Error("STUB");
  };

  setFocus = () => {
      throw new Error("STUB");
  };

  setBlur = () => {
      throw new Error("STUB");
  };

  deferBlur = () => {
      throw new Error("STUB");
  };

  setOpen = (open: boolean, skipSetBlur: boolean = false): void => {
      throw new Error("STUB");
  };
  inputOk = (): boolean => { throw new Error("STUB"); };

  isCalendarOpen = () =>
    { throw new Error("STUB"); };

  handleFocus = (event: React.FocusEvent<HTMLElement>): void => {
      throw new Error("STUB");
  };

  sendFocusBackToInput = (): void => {
      throw new Error("STUB");
  };

  cancelFocusInput = () => {
      throw new Error("STUB");
  };

  deferFocusInput = () => {
      throw new Error("STUB");
  };

  handleDropdownFocus = () => {
      throw new Error("STUB");
  };

  resetInputValue = () => {
      throw new Error("STUB");
  };

  handleBlur = (event: React.FocusEvent<HTMLElement>) => {
      throw new Error("STUB");
  };

  handleCalendarClickOutside = (event: MouseEvent) => {
      throw new Error("STUB");
  };

  // handleChange is called when user types in the textbox
  handleChange = (
    ...allArgs: Parameters<Required<DatePickerProps>["onChangeRaw"]>
  ) => {
      throw new Error("STUB");
  };

  handleSelect = (
    date: Date,
    event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
    monthSelectedIn?: number,
  ) => {
      throw new Error("STUB");
  };

  // setSelected is called either from handleChange (user typed date into textbox and it was parsed) or handleSelect (user selected date from calendar using mouse or keyboard)
  setSelected = (
    date: Date | null,
    event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
    keepInput?: boolean,
    monthSelectedIn?: number,
  ) => {
      throw new Error("STUB");
  };

  // When checking preSelection via min/maxDate, times need to be manipulated via getStartOfDay/getEndOfDay
  setPreSelection = (date?: Date | null): void => {
      throw new Error("STUB");
  };

  toggleCalendar = (): void => {
      throw new Error("STUB");
  };

  handleTimeChange = (time: Date, modifyDateType?: "start" | "end"): void => {
      throw new Error("STUB");
  };

  onInputClick = (): void => {
      throw new Error("STUB");
  };

  handleTimeOnlyArrowKey = (eventKey: string): void => {
      throw new Error("STUB");
  };

  handleTimeOnlyEnterKey = (event: React.KeyboardEvent<HTMLElement>): void => {
      throw new Error("STUB");
  };

  scrollToTimeOption = (time: Date): void => {
      throw new Error("STUB");
  };

  onInputKeyDown = (event: React.KeyboardEvent<HTMLElement>): void => {
      throw new Error("STUB");
  };

  onPortalKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
      throw new Error("STUB");
  };

  // keyDown events passed down to day.jsx
  onDayKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      throw new Error("STUB");
  };

  // handle generic key down events in the popper that do not adjust or select dates
  // ex: while focusing prev and next month buttons
  onPopperKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
      throw new Error("STUB");
  };

  onClearClick = (event?: React.MouseEvent<HTMLButtonElement>): void => {
      throw new Error("STUB");
  };

  clear = () => {
      throw new Error("STUB");
  };

  onScroll = (event: Event): void => {
      throw new Error("STUB");
  };

  handleMonthSelectedInChange = (monthSelectedIn: number): void => {
      throw new Error("STUB");
  };

  renderCalendar = () => {
      throw new Error("STUB");
  };

  renderAriaLiveRegion = () => {
      throw new Error("STUB");
  };

  renderDateInput = () => {
      throw new Error("STUB");
  };

  renderClearButton = (): React.ReactElement | null => {
      throw new Error("STUB");
  };

  renderInputContainer(): React.ReactElement {
    const {
      showIcon,
      icon,
      calendarIconClassname,
      calendarIconClassName,
      toggleCalendarOnIconClick,
    } = this.props;
    const { open } = this.state;

    if (calendarIconClassname) {
      console.warn(
        `calendarIconClassname props is deprecated. should use calendarIconClassName props.`,
      );
    }

    return (
      <div
        className={`react-datepicker__input-container${
          showIcon ? " react-datepicker__view-calendar-icon" : ""
        }`}
      >
        {showIcon && (
          <CalendarIcon
            icon={icon}
            className={clsx(
              calendarIconClassName,
              !calendarIconClassName && calendarIconClassname,
              open && "react-datepicker-ignore-onclickoutside",
            )}
            {...(toggleCalendarOnIconClick
              ? {
                  onClick: this.toggleCalendar,
                }
              : null)}
          />
        )}
        {this.state.isRenderAriaLiveMessage && this.renderAriaLiveRegion()}
        {this.renderDateInput()}
        {this.renderClearButton()}
      </div>
    );
  }

  render(): React.ReactElement | null {
    const calendar = this.renderCalendar();

    if (this.props.inline) return calendar;

    if (this.props.withPortal) {
      let portalContainer = this.state.open ? (
        <TabLoop enableTabLoop={this.props.enableTabLoop}>
          <div
            className="react-datepicker__portal"
            tabIndex={-1}
            onKeyDown={this.onPortalKeyDown}
          >
            {calendar}
          </div>
        </TabLoop>
      ) : null;

      if (this.state.open && this.props.portalId) {
        portalContainer = (
          <Portal portalId={this.props.portalId} {...this.props}>
            {portalContainer}
          </Portal>
        );
      }

      return (
        <>
          {this.renderInputContainer()}
          {portalContainer}
        </>
      );
    }

    return (
      <PopperComponent
        {...this.props}
        className={this.props.popperClassName}
        hidePopper={!this.isCalendarOpen()}
        targetComponent={this.renderInputContainer()}
        popperComponent={calendar}
        popperOnKeyDown={this.onPopperKeyDown}
        showArrow={this.props.showPopperArrow}
        monthHeaderPosition={this.props.monthHeaderPosition}
      />
    );
  }
}

const PRESELECT_CHANGE_VIA_INPUT = "input";
const PRESELECT_CHANGE_VIA_NAVIGATE = "navigate";
export default DatePicker;
