import React, { type HTMLAttributes } from "react";

export interface CalendarContainerProps extends React.PropsWithChildren<
  HTMLAttributes<HTMLDivElement>
> {
  showTimeSelectOnly?: boolean;
  showTime?: boolean;
  inline?: boolean;
}

const CalendarContainer: React.FC<CalendarContainerProps> = function ({
  showTimeSelectOnly = false,
  showTime = false,
  className,
  children,
  inline,
}: CalendarContainerProps) {
    throw new Error("STUB");
};

export default CalendarContainer;
