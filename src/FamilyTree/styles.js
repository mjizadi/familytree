const lineColor = "blue";
const lineThickness = 5;
const descendantLength = 50;

export const horizontalLine = {
  width: descendantLength,
  height: lineThickness,
  backgroundColor: lineColor
};

export const descendantLine = {
  width: descendantLength,
  height: lineThickness,
  backgroundColor: lineColor

};

export const nonDescendantLine = Object.assign(
  {},
  descendantLine,
  {
    backgroundColor: "transparent"
  }
);

export const verticalLineContainer = {
  alignItems: "stretch",
  width: lineThickness,
  display: "flex",
  flexFlow: "column"
};

export const visibleVerticalLine = {
  backgroundColor: lineColor,
  flexGrow: 1,
  width: lineThickness,
};

export const hiddenVerticalLine = Object.assign(
  {},
  visibleVerticalLine,
  {
    backgroundColor: "transparent"
  }
);

export const verticalSeparator = {
  backgroundColor: lineColor,
  height: lineThickness,
  width: lineThickness
};

export const childrenList = {
  display: "flex"
};

export const personBox = {
  width: 200,
  height: 50,
  maxHeight: 50,
  overflowY: "hidden",

  maxWidth: 200,
  overflowX: "scroll",

  display: "flex",
  alignItems: "center"

};

export const personCard = {
  width: 190,
  height: 40,
  margin: "auto",

  borderStyle: "solid",
  borderColor: "deepskyblue",
  borderWidth: 1,
  borderRadius: 5,

  display: "flex",
  alignItems: "center"
};

export const hasMargin = {
  marginRight: 10,
};

export const coupleBox = {
  width: 200,

  display: "flex",

  flexDirection: "column",
  flexWrap: "nowrap"
};

export const tree = {
  display: "flex",
  alignItems: "center"
};

export const jsonInput = {
  direction: "ltr"
};