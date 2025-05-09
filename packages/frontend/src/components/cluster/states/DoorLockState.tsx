import {
  type DoorLockClusterState,
  DoorLockStatus,
} from "@home-assistant-matter-hub/common";
import LockedIcon from "@mui/icons-material/Lock";
import UnlockedIcon from "@mui/icons-material/LockOpen";
import type { SvgIcon, Theme } from "@mui/material";
import { useCallback, useMemo } from "react";

export interface DoorLockStateProps {
  state: DoorLockClusterState;
}

export const DoorLockState = (props: DoorLockStateProps) => {
  const isOpen = props.state.lockState !== DoorLockStatus.locked;
  const Icon: typeof SvgIcon = useMemo(
    () => (isOpen ? UnlockedIcon : LockedIcon),
    [isOpen],
  );
  const color = useCallback(
    (t: Theme) => (isOpen ? t.palette.primary.main : t.palette.grey.A400),
    [isOpen],
  );
  return <Icon fontSize="medium" sx={{ color }} />;
};
