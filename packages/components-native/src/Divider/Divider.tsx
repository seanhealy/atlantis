import React from "react";
import { View } from "react-native";
import { styles } from "./Divider.style";

interface DividerProps {
  /**
   * The weight of the divider.
   *
   * @default "base"
   */
  readonly size?: keyof typeof styles;
}

export function Divider({ size = "base" }: DividerProps): JSX.Element {
  const style = [
    styles.base,
    size === "large" && styles.large,
    size === "largest" && styles.largest,
  ];
  return <View testID="Divider" style={style} />;
}
