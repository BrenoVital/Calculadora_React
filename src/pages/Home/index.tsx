import { Box, Button, TextField, Typography } from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";
import PageContainer from "../../shared/components/PageContainer";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("0");
  const [operand, setOperand] = useState(0);
  const [operator, setOperator] = useState("");

  const handleNumberClick = (number: any) => {
    setValue((prevValue) => {
      return prevValue === "0" ? String(number) : prevValue + String(number);
    });
  };

  const handleOperatorClick = (op: any) => {
    if (operator !== "") {
      handleEqualsClick();
    }
    setOperand(parseFloat(value));
    setOperator(op);
    setValue("0");
  };

  const handleEqualsClick = () => {
    const currentValue = parseFloat(value);
    let result = operand;

    switch (operator) {
      case "+":
        result += currentValue;
        break;
      case "-":
        result -= currentValue;
        break;
      case "*":
        result *= currentValue;
        break;
      case "/":
        if (currentValue !== 0) {
          result /= currentValue;
        } else {
          alert("Cannot divide by zero!");
          return;
        }
        break;
      default:
        break;
    }

    setOperand(result);
    setOperator("");
    setValue(result.toString());
  };

  const handleBackspaceClick = () => {
    setValue((prevValue) => {
      return prevValue.length === 1 ? "0" : prevValue.slice(0, -1);
    });
  };

  return (
    <PageContainer>
      <Typography variant="h4" align="center" m={1}>
        Calculadora Vital
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 1,
          width: "300px",
          height: "350px",
          margin: "0 auto",
          boxShadow: "0px 0px 15px 22px rgba(0,0,0,0.1)",
          borderRadius: "10px",
        }}
      >
        <Box>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={value}
            disabled
            style={{ width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            gap: 1,
            margin: "5px auto",
          }}
        >
          {["+", "-", "*", "/"].map((operation) => (
            <Button
              key={operation}
              variant="contained"
              size="small"
              onClick={() => handleOperatorClick(operation)}
              style={{ backgroundColor: "#ccc", color: "#000" }}
            >
              {operation}
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            width: "300px",
            height: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((number) => (
            <Button
              key={number}
              style={{
                width: "30px",
                height: "30px",
                fontSize: "20px",
                color: "#000",
                fontWeight: "bold",
              }}
              onClick={() => handleNumberClick(number)}
            >
              {number}
            </Button>
          ))}
          <Box>
            <Button
              style={{
                width: "30px",
                height: "30px",
                fontSize: "20px",
                color: "#000",
              }}
              onClick={handleEqualsClick}
            >
              =
            </Button>
          </Box>
          <Box>
            <Button onClick={handleBackspaceClick} style={{ color: "#000" }}>
              <BackspaceIcon />
            </Button>
          </Box>
        </Box>
      </Box>
    </PageContainer>
  );
}
