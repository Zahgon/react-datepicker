import React, { useCallback, useEffect, useRef } from "react";

export type ClickOutsideHandler = (event: MouseEvent) => void;

interface ClickOutsideWrapperProps {
  onClickOutside: ClickOutsideHandler;
  className?: string;
  children: React.ReactNode;
  containerRef?: React.RefObject<HTMLDivElement | null>;
  style?: React.CSSProperties;
  ignoreClass?: string;
}

const useDetectClickOutside = (
  onClickOutside: ClickOutsideHandler,
  ignoreClass?: string,
) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const onClickOutsideRef = useRef(onClickOutside);
  useEffect(() => {
      throw new Error("STUB");
  }, [onClickOutside]);
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
          throw new Error("STUB");
      },
    [ignoreClass],
  );
  useEffect(() => {
      throw new Error("STUB");
  }, [handleClickOutside]);
  return ref;
};

export const ClickOutsideWrapper: React.FC<ClickOutsideWrapperProps> = ({
  children,
  onClickOutside,
  className,
  containerRef,
  style,
  ignoreClass,
}) => {
    throw new Error("STUB");
};
