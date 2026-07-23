import React, { Component } from "react";

import {
  getMonthShortInLocale,
  getMonthInLocale,
  type Locale,
} from "./date_utils";
import MonthDropdownOptions from "./month_dropdown_options";

interface MonthDropdownOptionsProps extends React.ComponentPropsWithoutRef<
  typeof MonthDropdownOptions
> {}

interface MonthDropdownProps extends Omit<
  MonthDropdownOptionsProps,
  "monthNames" | "onChange" | "onCancel"
> {
  dropdownMode: "scroll" | "select";
  locale?: Locale;
  onChange: (month: number) => void;
  useShortMonthInDropdown?: boolean;
}

interface MonthDropdownState {
  dropdownVisible: boolean;
}

export default class MonthDropdown extends Component<
  MonthDropdownProps,
  MonthDropdownState
> {
  state: MonthDropdownState = {
    dropdownVisible: false,
  };

  renderSelectOptions = (monthNames: string[]): React.ReactElement[] =>
    { throw new Error("STUB"); };

  renderSelectMode = (monthNames: string[]): React.ReactElement => { throw new Error("STUB"); };

  renderReadView = (
    visible: boolean,
    monthNames: string[],
  ): React.ReactElement => { throw new Error("STUB"); };

  renderDropdown = (monthNames: string[]): React.ReactElement => { throw new Error("STUB"); };

  renderScrollMode = (monthNames: string[]): React.ReactElement[] => {
      throw new Error("STUB");
  };

  onChange = (month: number): void => {
    this.toggleDropdown();
    if (month !== this.props.month) {
      this.props.onChange(month);
    }
  };

  toggleDropdown = (): void =>
    { throw new Error("STUB"); };

  render(): React.ReactElement {
    const monthNames: string[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
      this.props.useShortMonthInDropdown
        ? (m: number): string => { throw new Error("STUB"); }
        : (m: number): string => { throw new Error("STUB"); },
    );

    let renderedDropdown: React.ReactElement | React.ReactElement[];
    switch (this.props.dropdownMode) {
      case "scroll":
        renderedDropdown = this.renderScrollMode(monthNames);
        break;
      case "select":
        renderedDropdown = this.renderSelectMode(monthNames);
        break;
    }

    return (
      <div
        className={`react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--${this.props.dropdownMode}`}
      >
        {renderedDropdown}
      </div>
    );
  }
}
