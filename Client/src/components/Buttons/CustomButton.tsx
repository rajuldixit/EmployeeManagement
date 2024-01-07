import { Button, ButtonProps, Typography, styled } from "@mui/material";
import React, { cloneElement } from "react";
import {
  ButtonCategories,
  IButtonIconPosition,
  IButtonType,
  appColors
} from "utils/constants";

const ColorTextButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: "none"
}));
const ColorOutlinedButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: appColors.primaryActionColor,
  borderColor: appColors.primaryActionColor,
  backgroundColor: appColors.white,
  textTransform: "none",
  "&:hover": {
    color: appColors.primaryActionColor,
    borderColor: appColors.primaryActionColor,
    backgroundColor: appColors.white
  }
}));
const ColorContainedButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: appColors.white,
  backgroundColor: appColors.primaryActionColor,
  "&:hover": {
    backgroundColor: appColors.primaryActionColor
  },
  textTransform: "none",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    height: "36px",
    padding: "6px 10px !important"
  }
}));

const CustomButton: React.FC<IButtonType> = ({
  label,
  buttonType,
  onClick,
  style,
  buttonIcon
}) => {
  return (
    <>
      {(() => {
        switch (buttonType) {
          case ButtonCategories.ContainedButton:
            return (
              <ColorContainedButton
                variant="contained"
                onClick={onClick}
                sx={{
                  //   margin: style.margin,
                  //   background: style.background,
                  //   border: `2px solid ${style.borderColor}`,
                  color: style?.color
                }}
              >
                {buttonIcon &&
                  buttonIcon.position == IButtonIconPosition.LEFT.toString() &&
                  cloneElement(buttonIcon.icon)}
                {label}
                {buttonIcon &&
                  buttonIcon.position == IButtonIconPosition.RIGHT.toString() &&
                  cloneElement(buttonIcon.icon)}
              </ColorContainedButton>
            );

          case ButtonCategories.OutlinedButton:
            return (
              <ColorOutlinedButton
                onClick={onClick}
                variant="outlined"
                sx={{ color: style?.color }}
              >
                {buttonIcon &&
                  buttonIcon.position == IButtonIconPosition.LEFT.toString() &&
                  cloneElement(buttonIcon.icon, {
                    "margin-right": "4px"
                  })}
                {label}
                {buttonIcon &&
                  buttonIcon.position == IButtonIconPosition.RIGHT.toString() &&
                  cloneElement(buttonIcon.icon, {
                    "margin-left": "4px"
                  })}
              </ColorOutlinedButton>
            );
          case ButtonCategories.TextButton:
            return (
              <ColorTextButton
                onClick={onClick}
                variant="text"
                sx={{ color: style?.color }}
              >
                {buttonIcon &&
                  buttonIcon.position == IButtonIconPosition.LEFT.toString() &&
                  cloneElement(buttonIcon.icon, {
                    "margin-right": "4px"
                  })}
                <Typography ml={1} mr={1}>
                  {label}
                </Typography>
                {buttonIcon &&
                  buttonIcon.position == IButtonIconPosition.RIGHT.toString() &&
                  cloneElement(buttonIcon.icon, {
                    "margin-right": "4px"
                  })}
              </ColorTextButton>
            );
        }
      })()}
    </>
  );
};

export default CustomButton;
