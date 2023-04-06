import { useState } from "react";

import { Box, Typography, IconButton } from "@mui/material";
import { ChevronLeft, Menu } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import styles from "./TestPage.styles";

import CustomButton from "src/components/custom/customButton/CustomButton";
import CustomDrawer from "src/components/custom/customDrawer/CustomDrawer";
import CustomLinearProgress from "src/components/custom/customLinearProgress/CustomLinearProgress";

import Injection from "src/assets/images/injection.png";
import QuizIcon from "src/assets/images/quiz-icon.png";

const useStyles = makeStyles(styles);

const quizes: string[] = ["Name of the quiz", "Name of the quiz"];

const answers: string[] = [
  "Loerm ipsum dolor sit amet",
  "Loerm ipsum dolor sit amet",
  "Loerm ipsum dolor sit amet",
  "Loerm ipsum dolor sit amet",
];

const Test = () => {
  const [open, setOpen] = useState<boolean>(true);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const classes = useStyles();

  return (
    <Box
      className={clsx(classes.root, {
        [classes.rootDrawerOpen]: open && matches,
      })}
      display={"flex"}
    >
      <CustomDrawer
        className={classes.drawer}
        variant={matches ? "persistent" : "temporary"}
        anchor="left"
        open={open}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
          marginBottom={"8px"}
        >
          <IconButton
            sx={{
              width: "32px",
              height: "32px",
            }}
            onClick={() => setOpen(false)}
          >
            <ChevronLeft />
          </IconButton>

          <Typography
            className={classes.drawerTitle}
            variant="h4"
            component="h4"
          >
            MedReady Injection Training: Flare Protocol
          </Typography>
        </Box>

        <Box
          className={classes.drawerProgressBox}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap="20px"
          marginBottom="8px"
        >
          <CustomLinearProgress
            className={classes.drawerProgressBar}
            value={0}
          />
          <Typography className={classes.drawerProgressBarText}>0/4</Typography>
        </Box>

        <Box marginBottom="20px">
          <img src={Injection} alt="injection" />
        </Box>

        {quizes.map((quiz: string, index: number) => (
          <Box
            key={index}
            className={classes.quizBox}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"start"}
            gap={"8px"}
          >
            <img className="img-fluid" src={QuizIcon} alt="quiz" />
            <Typography className={classes.quizText}>{quiz}</Typography>
          </Box>
        ))}
      </CustomDrawer>

      {!open && (
        <IconButton
          sx={{
            position: "absolute",
            width: "32px",
            height: "32px",
          }}
          onClick={() => setOpen(true)}
        >
          <Menu />
        </IconButton>
      )}

      <Box
        sx={{
          paddingX: matches ? "105px" : "24px",
          paddingY: matches ? "88px" : "40px",
        }}
      >
        <Box sx={{ marginBottom: "30px" }}>
          <Typography className={classes.quizTitle} variant="h2" component="h2">
            Name of the quiz activity
          </Typography>

          <Typography className={classes.quizDescription}>
            Aenean pulvinar elit neque. Mauris sodales pharetra mi quis
            porttitor
          </Typography>
        </Box>

        <Box>
          <Box
            className={classes.progressBarBox}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"start"}
            gap={"20px"}
            marginBottom="20px"
          >
            <CustomLinearProgress value={50} />
            <Typography className={classes.progressBarText}>1 of 2</Typography>
          </Box>

          <Typography className={classes.questionNo} marginBottom="20px">
            Question 1
          </Typography>

          <Typography className={classes.questionText} marginBottom="20px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation?
          </Typography>

          <Box marginBottom="20px">
            {answers.map((answer: string, index: number) => (
              <Box key={index} className={classes.answerBox}>
                <Typography className={classes.answerText}>{answer}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box display={"flex"} justifyContent={"end"}>
          <CustomButton>Submit</CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Test;
