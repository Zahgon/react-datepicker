import { clsx } from "clsx";
import React, { Component } from "react";

import {
  addDays,
  getWeek,
  getStartOfWeek,
  isSameDay,
  isDayDisabled,
} from "./date_utils";
import Day from "./day";
import WeekNumber from "./week_number";

interface DayProps extends React.ComponentPropsWithoutRef<typeof Day> {}

interface WeekNumberProps extends React.ComponentPropsWithoutRef<
  typeof WeekNumber
> {}

interface WeekProps
  extends
    Omit<
      DayProps,
      | "ariaLabelPrefixWhenEnabled"
      | "ariaLabelPrefixWhenDisabled"
      | "day"
      | "onClick"
      | "onMouseEnter"
    >,
    Omit<WeekNumberProps, "weekNumber" | "date" | "onClick"> {
  day: Date;
  chooseDayAriaLabelPrefix?: DayProps["ariaLabelPrefixWhenEnabled"];
  disabledDayAriaLabelPrefix?: DayProps["ariaLabelPrefixWhenDisabled"];
  onDayClick?: (day: Date, event: React.MouseEvent<HTMLDivElement>) => void;
  onDayMouseEnter?: (day: Date) => void;
  shouldCloseOnSelect?: boolean;
  setOpen?: (open: boolean) => void;
  formatWeekNumber?: (date: Date) => number;
  onWeekSelect?: (
    day: Date,
    weekNumber: number,
    event: React.MouseEvent<HTMLDivElement>,
  ) => void;
  weekClassName?: (date: Date) => string;
}

export default class Week extends Component<WeekProps> {
  static get defaultProps() {
      throw new Error("STUB");
  }

  isDisabled = (day: Date): boolean =>
    { throw new Error("STUB"); };

  handleDayClick = (
    day: Date,
    event: React.MouseEvent<HTMLDivElement>,
  ): void => {
      throw new Error("STUB");
  };

  handleDayMouseEnter = (day: Date): void => {
      throw new Error("STUB");
  };

  handleWeekClick = (
    day: Date,
    weekNumber: number,
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
      throw new Error("STUB");
  };

  formatWeekNumber = (date: Date): number => {
      throw new Error("STUB");
  };

  isWeekDisabled = (): boolean => {
      throw new Error("STUB");
  };

  renderDays = () => {
      throw new Error("STUB");
  };

  startOfWeek = (): Date =>
    { throw new Error("STUB"); };

  isKeyboardSelected = (): boolean =>
    { throw new Error("STUB"); };

  render(): React.ReactElement {
    const weekNumberClasses = {
      "react-datepicker__week": true,
      "react-datepicker__week--selected": isSameDay(
        this.startOfWeek(),
        this.props.selected,
      ),
      "react-datepicker__week--keyboard-selected": this.isKeyboardSelected(),
    };
    const customWeekClassName = this.props.weekClassName
      ? this.props.weekClassName(this.startOfWeek())
      : undefined;
    return (
      <div className={clsx(weekNumberClasses, customWeekClassName)} role="row">
        {this.renderDays()}
      </div>
    );
  }
}
