import React, { Component } from "react";

import { getYear } from "./date_utils";
import YearDropdownOptions from "./year_dropdown_options";

interface YearDropdownOptionsProps extends React.ComponentPropsWithoutRef<
  typeof YearDropdownOptions
> {}

interface YearDropdownProps extends Omit<
  YearDropdownOptionsProps,
  "onChange" | "onCancel"
> {
  adjustDateOnChange?: boolean;
  dropdownMode: "scroll" | "select";
  onChange: (year: number) => void;
  date: Date;
  onSelect?: (date: Date, event?: React.MouseEvent<HTMLButtonElement>) => void;
  setOpen?: (open: boolean) => void;
}

interface YearDropdownState {
  dropdownVisible: boolean;
}

export default class YearDropdown extends Component<
  YearDropdownProps,
  YearDropdownState
> {
  state: YearDropdownState = {
    dropdownVisible: false,
  };

  renderSelectOptions = (): React.ReactElement[] => {
      throw new Error("STUB");
  };

  onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
      throw new Error("STUB");
  };

  renderSelectMode = (): React.ReactElement => { throw new Error("STUB"); };

  renderReadView = (visible: boolean): React.ReactElement => { throw new Error("STUB"); };

  renderDropdown = (): React.ReactElement => { throw new Error("STUB"); };

  renderScrollMode = (): React.ReactElement[] => {
      throw new Error("STUB");
  };

  onChange = (year: number): void => {
    this.toggleDropdown();
    if (year === this.props.year) return;
    this.props.onChange(year);
  };

  toggleDropdown = (event?: React.MouseEvent<HTMLButtonElement>): void => {
      throw new Error("STUB");
  };

  handleYearChange = (
    date: Date,
    event?: React.MouseEvent<HTMLButtonElement>,
  ): void => {
      throw new Error("STUB");
  };

  onSelect = (
    date: Date,
    event?: React.MouseEvent<HTMLButtonElement>,
  ): void => {
      throw new Error("STUB");
  };

  setOpen = (): void => {
      throw new Error("STUB");
  };

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
        className={`react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--${this.props.dropdownMode}`}
      >
        {renderedDropdown}
      </div>
    );
  }
}
