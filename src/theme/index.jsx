import { extendTheme } from "@chakra-ui/react";
import { textTheme } from "./components/Text";
import { tableTheme } from "./components/table";
import { progressTheme } from "./components/progress";
import { checkboxTheme } from "./components/checkbox";
// import { containerTheme } from './components/container';

const theme = extendTheme({
  components: {
    // Container: containerTheme,
    // 컴포넌트(샤크라 사이트에서 지정한 이름) : 각 테마의 마지막 export const 이름
    Text: textTheme,
    Table: tableTheme,
    Progress: progressTheme,
    Checkbox: checkboxTheme,
  },
  styles: {
    global: {
      html: {
        width: "100%",
        height: "100%",
      },
      body: {
        bg: "white",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontWeight: "400",
        color: "#2B3674",
      },
      // styles for the `a`
      a: {
        color: "#2B3674",
        _hover: {
          textDecoration: "none !important",
        },
      },
      li: {
        listStyle: "none",
      },
    },
  },
  space: {
    4: "25px",
  },
  colors: {
    primary: "#4318FF",
    gray_99: "#999",
    secondary_grey_700: "#707EAE",
    Secondary_Grey_600: "#A3AED0",
  },
});

export default theme;
