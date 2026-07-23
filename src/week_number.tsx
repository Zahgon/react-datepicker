import { clsx } from "clsx";
import React, { Component, createRef } from "react";

import { KeyType, isSameDay } from "./date_utils";

interface WeekNumberProps {
  weekNumber: number;
  date: Date;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  ariaLabelPrefix?: string;
  selected?: Date | null;
  preSelection?: Date | null;
  showWeekPicker?: boolean;
  showWeekNumber?: boolean;
  disabledKeyboardNavigation?: boolean;
  inline?: boolean;
  shouldFocusDayInline?: boolean;
  handleOnKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  containerRef?: React.RefObject<HTMLDivElement | null>;
  isInputFocused?: boolean;
  isWeekDisabled?: boolean;
}

export default class WeekNumber extends Component<WeekNumberProps> {
  static get defaultProps() {
      throw new Error("STUB");
  }

  componentDidMount(): void {
      throw new Error("STUB");
  }

  componentDidUpdate(prevProps: WeekNumberProps): void {
      throw new Error("STUB");
  }

  weekNumberEl = createRef<HTMLDivElement>();

  handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
      throw new Error("STUB");
  };

  handleOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
      throw new Error("STUB");
  };

  isKeyboardSelected = (): boolean =>
    { throw new Error("STUB"); };

  getTabIndex = (): number =>
    { throw new Error("STUB"); };

  // various cases when we need to apply focus to the preselected week-number
  // focus the week-number on mount/update so that keyboard navigation works while cycling through months with up or down keys (not for prev and next month buttons)
  // prevent focus for these activeElement cases so we don't pull focus from the input as the calendar opens
  handleFocusWeekNumber = (prevProps?: Partial<WeekNumberProps>): void => {
      throw new Error("STUB");
  };

  render(): React.ReactElement {
    const {
      weekNumber,
      isWeekDisabled,
      ariaLabelPrefix = WeekNumber.defaultProps.ariaLabelPrefix,
      onClick,
    } = this.props;

    const weekNumberClasses = {
      "react-datepicker__week-number": true,
      "react-datepicker__week-number--clickable": !!onClick && !isWeekDisabled,
      "react-datepicker__week-number--selected":
        !!onClick && isSameDay(this.props.date, this.props.selected),
    };
    return (
      <div
        ref={this.weekNumberEl}
        className={clsx(weekNumberClasses)}
        aria-label={`${ariaLabelPrefix} ${this.props.weekNumber}`}
        onClick={this.handleClick}
        onKeyDown={this.handleOnKeyDown}
        tabIndex={this.getTabIndex()}
        role="gridcell"
      >
        {weekNumber}
      </div>
    );
  }
}
