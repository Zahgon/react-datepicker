import { clsx } from "clsx";
import React, { Component } from "react";

import { ClickOutsideWrapper } from "./click_outside_wrapper";
import {
  addMonths,
  addYears,
  subYears,
  formatDate,
  getStartOfMonth,
  newDate,
  isAfter,
  isSameMonth,
  isSameYear,
  getTime,
  type Locale,
} from "./date_utils";

// Default range: 5 years before and after current date
const DEFAULT_YEAR_RANGE = 5;

function generateMonthYears(
  minDate: Date | undefined,
  maxDate: Date | undefined,
  currentDate: Date,
): Date[] {
    throw new Error("STUB");
}

interface MonthYearDropdownOptionsProps {
  minDate?: Date;
  maxDate?: Date;
  onCancel: VoidFunction;
  onChange: (monthYear: number) => void;
  scrollableMonthYearDropdown?: boolean;
  date: Date;
  dateFormat: string;
  locale?: Locale;
}

interface MonthYearDropdownOptionsState {
  monthYearsList: Date[];
}

export default class MonthYearDropdownOptions extends Component<
  MonthYearDropdownOptionsProps,
  MonthYearDropdownOptionsState
> {
  constructor(props: MonthYearDropdownOptionsProps) {
    super(props);

    this.state = {
      monthYearsList: generateMonthYears(
        this.props.minDate,
        this.props.maxDate,
        this.props.date,
      ),
    };
  }

  renderOptions = (): React.ReactElement[] => {
      throw new Error("STUB");
  };

  onChange = (monthYear: number): void => this.props.onChange(monthYear);

  handleClickOutside = (): void => {
      throw new Error("STUB");
  };

  render(): React.ReactElement {
    const dropdownClass = clsx({
      "react-datepicker__month-year-dropdown": true,
      "react-datepicker__month-year-dropdown--scrollable":
        this.props.scrollableMonthYearDropdown,
    });

    return (
      <ClickOutsideWrapper
        className={dropdownClass}
        onClickOutside={this.handleClickOutside}
      >
        {this.renderOptions()}
      </ClickOutsideWrapper>
    );
  }
}
