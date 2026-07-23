import { clsx } from "clsx";
import React, { Component, createRef } from "react";

import { ClickOutsideWrapper } from "./click_outside_wrapper";
import { getYear } from "./date_utils";

function generateYears(
  year: number,
  noOfYear: number,
  minDate?: Date,
  maxDate?: Date,
): number[] {
    throw new Error("STUB");
}

interface YearDropdownOptionsProps {
  minDate?: Date;
  maxDate?: Date;
  onChange: (year: number) => void;
  onCancel: VoidFunction;
  scrollableYearDropdown?: boolean;
  year: number;
  yearDropdownItemNumber?: number;
}

interface YearDropdownOptionsState {
  yearsList: number[];
}

export default class YearDropdownOptions extends Component<
  YearDropdownOptionsProps,
  YearDropdownOptionsState
> {
  constructor(props: YearDropdownOptionsProps) {
      throw new Error("STUB");
  }

  componentDidMount(): void {
      throw new Error("STUB");
  }

  dropdownRef: React.RefObject<HTMLDivElement | null>;
  yearOptionButtonsRef: Record<number, HTMLDivElement | null> = {};

  handleOptionKeyDown = (year: number, e: React.KeyboardEvent): void => {
      throw new Error("STUB");
  };

  renderOptions = (): React.ReactElement[] => {
      throw new Error("STUB");
  };

  onChange = (year: number): void => {
    this.props.onChange(year);
  };

  handleClickOutside = (): void => {
      throw new Error("STUB");
  };

  shiftYears = (amount: number): void => {
      throw new Error("STUB");
  };

  incrementYears = (): void => {
      throw new Error("STUB");
  };

  decrementYears = (): void => {
      throw new Error("STUB");
  };

  render() {
    const dropdownClass = clsx({
      "react-datepicker__year-dropdown": true,
      "react-datepicker__year-dropdown--scrollable":
        this.props.scrollableYearDropdown,
    });

    return (
      <ClickOutsideWrapper
        className={dropdownClass}
        containerRef={this.dropdownRef}
        onClickOutside={this.handleClickOutside}
      >
        {this.renderOptions()}
      </ClickOutsideWrapper>
    );
  }
}
