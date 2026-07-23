import React, { Component } from "react";

import {
  addMonths,
  addYears,
  subYears,
  formatDate,
  getStartOfMonth,
  isAfter,
  isSameMonth,
  isSameYear,
  newDate,
  getTime,
  type Locale,
} from "./date_utils";

import MonthYearDropdownOptions from "./month_year_dropdown_options";

// Default range: 5 years before and after current date
const DEFAULT_YEAR_RANGE = 5;

interface MonthYearDropdownOptionsProps extends React.ComponentPropsWithoutRef<
  typeof MonthYearDropdownOptions
> {}

interface MonthYearDropdownProps extends Omit<
  MonthYearDropdownOptionsProps,
  "onChange" | "onCancel"
> {
  dropdownMode: "scroll" | "select";
  onChange: (monthYear: Date) => void;
  locale?: Locale;
}

interface MonthYearDropdownState {
  dropdownVisible: boolean;
}

export default class MonthYearDropdown extends Component<
  MonthYearDropdownProps,
  MonthYearDropdownState
> {
  state: MonthYearDropdownState = {
    dropdownVisible: false,
  };

  renderSelectOptions = (): React.ReactElement[] => {
      throw new Error("STUB");
  };

  onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
      throw new Error("STUB");
  };

  renderSelectMode = (): React.ReactElement => { throw new Error("STUB"); };

  renderReadView = (visible: boolean): React.ReactElement => {
      throw new Error("STUB");
  };

  renderDropdown = (): React.ReactElement => { throw new Error("STUB"); };

  renderScrollMode = (): React.ReactElement[] => {
      throw new Error("STUB");
  };

  onChange = (monthYearPoint: number): void => {
    this.toggleDropdown();

    const changedDate = newDate(monthYearPoint);

    if (
      isSameYear(this.props.date, changedDate) &&
      isSameMonth(this.props.date, changedDate)
    ) {
      return;
    }

    this.props.onChange(changedDate);
  };

  toggleDropdown = (): void =>
    { throw new Error("STUB"); };

  render(): React.ReactElement {
    let renderedDropdown;
    switch (this.props.dropdownMode) {
      case "scroll":
        renderedDropdown = this.renderScrollMode();
        break;
      case "select":
        renderedDropdown = this.renderSelectMode();
        break;
    }

    return (
      <div
        className={`react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--${this.props.dropdownMode}`}
      >
        {renderedDropdown}
      </div>
    );
  }
}
