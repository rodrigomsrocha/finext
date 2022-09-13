import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: "gray.1000",
        color: "gray.10",
      },
    },
  },
  colors: {
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
