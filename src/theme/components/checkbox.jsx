import { checkboxAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";
import { runIfFn } from "../utils/run-if-fn";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const $size = cssVar("checkbox-size");

const baseStyleControl = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    w: $size.reference,
    h: $size.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "gray_99",
    bg: "white",
    margin: 0,

    _checked: {
      bg: "primary",
      borderColor: "primary",
      color: "white",

      _hover: {
        bg: "primary",
        borderColor: mode(`${c}.600`, `${c}.300`)(props),
      },

      _disabled: {
        borderColor: "gray_99",
        bg: "gray_99",
        color: "gray_99",
      },
    },

    _indeterminate: {
      bg: mode(`${c}.500`, `${c}.200`)(props),
      borderColor: mode(`${c}.500`, `${c}.200`)(props),
      color: mode("white", "gray.900")(props),
    },

    _disabled: {
      bg: mode("gray.100", "whiteAlpha.100")(props),
      borderColor: mode("gray.100", "transparent")(props),
    },

    _focusVisible: {
      boxShadow: "outline",
    },

    _invalid: {
      borderColor: mode("red.500", "red.300")(props),
    },
  };
});

const baseStyleContainer = defineStyle({
  _disabled: { cursor: "not-allowed" },
});

const baseStyleLabel = defineStyle({
  userSelect: "none",
  _disabled: { opacity: 0.4 },
});

const baseStyleIcon = defineStyle({
  transitionProperty: "transform",
  transitionDuration: "normal",
});

const baseStyle = definePartsStyle((props) => ({
  icon: baseStyleIcon,
  container: baseStyleContainer,
  control: runIfFn(baseStyleControl, props),
  label: baseStyleLabel,
}));

const sizes = {
  sm: definePartsStyle({
    control: { [$size.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" },
  }),
  md: definePartsStyle({
    control: { [$size.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" },
  }),
  lg: definePartsStyle({
    control: { [$size.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" },
  }),
};

export const checkboxTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "md",
    colorScheme: "blue",
  },
});
