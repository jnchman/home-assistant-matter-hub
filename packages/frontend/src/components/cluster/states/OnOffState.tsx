import type { OnOffClusterState } from "@home-assistant-matter-hub/common";
import OffIcon from "@mui/icons-material/ToggleOff";
import OnIcon from "@mui/icons-material/ToggleOn";
import type { SvgIcon, Theme } from "@mui/material";
import { useCallback, useMemo } from "react";

export interface OnOffStateProps {
  state: OnOffClusterState;
}

export const OnOffState = (props: OnOffStateProps) => {
  const isOn = !!props.state.onOff;
  const Icon: typeof SvgIcon = useMemo(() => (isOn ? OnIcon : OffIcon), [isOn]);
  const color = useCallback(
    (t: Theme) => (isOn ? t.palette.primary.main : t.palette.grey.A400),
    [isOn],
  );
  return <Icon fontSize="large" sx={{ color }} />;
};
