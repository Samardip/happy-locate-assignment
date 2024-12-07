import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const ScrollableTabs = styled(Box)(({ theme }) => ({
  display: "flex",
  overflowX: "auto",
  overflowY: "hidden",
  scrollbarWidth: "thin",
  padding: "0px",
  "&::-webkit-scrollbar": {
    height: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "10px",
  },
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
    fontSize:'12px !important',
  "& .MuiTabs-indicator": {
    display: "none",
  },
  // [theme.breakpoints.up("md")]: {
    "& .MuiTabs-scrollButtons": {
      display: "none",
    },
  // },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontSize: "12px !important",
  minWidth: "auto",
  padding: "0px 10px 0px 0px",
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  "&.Mui-selected": {
    color: "rgba(43, 128, 255, 1)", // Highlight color
    fontWeight: "bold",
    fontSize: "14px !important",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-8px", // Positioning the circle below the tab
      left: "50%",
      transform: "translateX(-50%)",
      width: "8px",
      height: "8px",
      backgroundColor: "rgba(43, 128, 255, 1)", // Circle color
      borderRadius: "50%",
    },
  },
}));

const HorizontalScrollBar = ({ tabs = [] }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <ScrollableTabs>
      <StyledTabs
        value={selectedTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable responsive tabs"
      >
        {tabs.map((tab, index) => (
          <StyledTab
            key={index}
            label={
              <Box display="flex" justifyContent="center" gap={'4px'} alignItems="center" height={'20px'} >
                <Typography className={`${selectedTab==index?'font-extrabold !text-[14px]':'!text-[12px]'}`}>{tab.label}</Typography>
                <Typography variant="caption" className={`flex justify-center items-center h-[20px] w-[20px] rounded-full bg-white ${selectedTab==index?'font-extrabold !text-[14px]':'!text-[12px]'}`}>
                  {tab.text}
                </Typography>
              </Box>
            }
            {...tab.props}
          />
        ))}
      </StyledTabs>
    </ScrollableTabs>
  );
};

export default HorizontalScrollBar;
