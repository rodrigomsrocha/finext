import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: "gray.1000",
        color: "gray.10",
      },
      table: {
        width: "100%",
        borderCollapse: "separate",
        borderSpacing: "0 10px",
        fontSize: "0.875rem",
        overflow: "scroll",
      },
      thead: {
        textAlign: "left",
        color: "gray.300",
        th: {
          padding: "0.625rem 1.25rem",
          fontWeight: "normal",
        },
      },
      "td:first-child": { borderLeftRadius: "5px" },
      "td:last-child": { borderRightRadius: "5px" },
      td: {
        background: "gray.900",
        padding: "0.75rem 1.25rem",
        color: "gray.200",
      },
      "td.title": {
        color: "gray.10",
      },
      "td.gain": {
        color: "utils.green.300",
      },
      "td.loss": {
        color: "utils.red.300",
      },
    },
  },
  colors: {
    utils: {
      green: {
        100: "#e3ffde",
        300: "#8DCC83",
        500: "#15510a",
      },
      red: {
        100: "#ffe0de",
        300: "#BB7772",
        500: "#6e2723",
      },
    },
    pink: {
      50: "#FFB9B9",
      100: "#FF9CA6",
      200: "#FF8498",
      300: "#F67086",
      400: "#ED5E76",
      500: "#D74866",
      600: "#C93655",
      700: "#B92645",
      800: "#A91B39",
      900: "#7C0922",
      1000: "#690117",
    },
    gray: {
      10: "#f5f5f5",
      25: "#F0F0F0",
      50: "#CCCCCC",
      100: "#B8B8B8",
      200: "#A3A3A3",
      300: "#8F8F8F",
      400: "#7A7A7A",
      500: "#666666",
      600: "#525252",
      700: "#3D3D3D",
      900: "#292929",
      1000: "#141414",
    },
  },
});
