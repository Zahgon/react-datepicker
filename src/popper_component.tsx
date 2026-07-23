import { FloatingArrow } from "@floating-ui/react";
import { clsx } from "clsx";
import React, { createElement, useEffect } from "react";

import Portal from "./portal";
import TabLoop from "./tab_loop";
import withFloating from "./with_floating";

import type { FloatingProps } from "./with_floating";
import type { ReactNode } from "react";

interface PortalProps extends Omit<
  React.ComponentPropsWithoutRef<typeof Portal>,
  "children"
> {}
interface TabLoopProps extends Omit<
  React.ComponentPropsWithoutRef<typeof TabLoop>,
  "children"
> {}

interface PopperComponentProps
  extends Omit<PortalProps, "portalId">, TabLoopProps, FloatingProps {
  className?: string;
  wrapperClassName?: string;
  popperComponent: React.ReactNode;
  popperContainer?: React.FC<{ children?: ReactNode | undefined }>;
  targetComponent: React.ReactNode;
  popperOnKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
  showArrow?: boolean;
  portalId?: PortalProps["portalId"];
  popperTargetRef?: React.RefObject<HTMLElement | null>;
  monthHeaderPosition?: "top" | "middle" | "bottom";
}

// Exported for testing purposes
export const PopperComponent: React.FC<PopperComponentProps> = (props) => {
    throw new Error("STUB");
};

export default withFloating<PopperComponentProps>(PopperComponent);
