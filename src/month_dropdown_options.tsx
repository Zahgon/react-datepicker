import React, { Component } from "react";

import { ClickOutsideWrapper } from "./click_outside_wrapper";

interface MonthDropdownOptionsProps {
  onCancel: VoidFunction;
  onChange: (month: number) => void;
  month: number;
  monthNames: string[];
}

export default class MonthDropdownOptions extends Component<MonthDropdownOptionsProps> {
  monthOptionButtonsRef: Record<number, HTMLDivElement | null> = {};

  isSelectedMonth = (i: number): boolean => { throw new Error("STUB"); };

  handleOptionKeyDown = (i: number, e: React.KeyboardEvent): void => {
      throw new Error("STUB");
  };

  renderOptions = (): React.ReactElement[] => {
      throw new Error("STUB");
  };

  onChange = (month: number): void => this.props.onChange(month);

  handleClickOutside = (): void => { throw new Error("STUB"); };

  render(): React.ReactElement {
    return (
      <ClickOutsideWrapper
        className="react-datepicker__month-dropdown"
        onClickOutside={this.handleClickOutside}
      >
        {this.renderOptions()}
      </ClickOutsideWrapper>
    );
  }
}
