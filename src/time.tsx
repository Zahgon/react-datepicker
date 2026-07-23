import React, { Component } from "react";

import {
  getHours,
  getMinutes,
  newDate,
  getStartOfDay,
  addMinutes,
  formatDate,
  isTimeInDisabledRange,
  isTimeDisabled,
  timesToInjectAfter,
  getHoursInDay,
  isSameMinute,
  getSeconds,
  safeToDate,
  type Locale,
  type TimeFilterOptions,
  KeyType,
} from "./date_utils";

interface TimeProps extends Pick<
  TimeFilterOptions,
  "minTime" | "maxTime" | "excludeTimes" | "includeTimes" | "filterTime"
> {
  format?: string;
  intervals?: number;
  selected?: Date | null;
  openToDate?: Date;
  onChange?: (time: Date) => void;
  timeClassName?: (time: Date) => string;
  todayButton?: React.ReactNode;
  monthRef?: HTMLDivElement;
  timeCaption?: string;
  injectTimes?: Date[];
  handleOnKeyDown?: React.KeyboardEventHandler<HTMLLIElement>;
  locale?: Locale;
  showTimeSelectOnly?: boolean;
  showTimeCaption?: boolean;
}

interface TimeState {
  height: number | null;
}

export default class Time extends Component<TimeProps, TimeState> {
  static get defaultProps() {
      throw new Error("STUB");
  }

  static calcCenterPosition = (
    listHeight: number,
    centerLiRef: HTMLLIElement,
  ): number => {
      throw new Error("STUB");
  };

  private resizeObserver?: ResizeObserver;
  state: TimeState = {
    height: null,
  };

  componentDidMount(): void {
      throw new Error("STUB");
  }

  componentWillUnmount(): void {
      throw new Error("STUB");
  }

  private header?: HTMLDivElement;

  private list?: HTMLUListElement;

  private centerLi?: HTMLLIElement;

  private observeDatePickerHeightChanges(): void {
      throw new Error("STUB");
  }

  private updateContainerHeight(): void {
      throw new Error("STUB");
  }

  scrollToTheSelectedTime = (): void => {
      throw new Error("STUB");
  };

  handleClick = (time: Date): void => {
      throw new Error("STUB");
  };

  isSelectedTime = (time: Date) => {
      throw new Error("STUB");
  };

  isDisabledTime = (time: Date): boolean | undefined =>
    { throw new Error("STUB"); };

  liClasses = (time: Date): string => {
      throw new Error("STUB");
  };

  handleOnKeyDown = (
    event: React.KeyboardEvent<HTMLLIElement>,
    time: Date,
  ): void => {
      throw new Error("STUB");
  };

  renderTimes = (): React.ReactElement[] => {
      throw new Error("STUB");
  };

  renderTimeCaption = (): React.ReactElement => {
      throw new Error("STUB");
  };

  render() {
    const { height } = this.state;

    return (
      <div
        className={`react-datepicker__time-container ${
          (this.props.todayButton ?? Time.defaultProps.todayButton)
            ? "react-datepicker__time-container--with-today-button"
            : ""
        }`}
      >
        {this.renderTimeCaption()}
        <div className="react-datepicker__time">
          <div className="react-datepicker__time-box">
            <ul
              className="react-datepicker__time-list"
              ref={(list: HTMLUListElement) => {
                  throw new Error("STUB");
              }}
              style={height ? { height } : {}}
              role="listbox"
              aria-label={this.props.timeCaption}
            >
              {this.renderTimes()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
