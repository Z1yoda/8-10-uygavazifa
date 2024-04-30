import "./index.css";
import React, { useState } from "react";
import leftArrow from "../../assets/leftarrow.svg";
import rightArrow from "../../assets/rightarrow.svg";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox, SelectChangeEvent, MenuItem, Select } from "@mui/material";
import { green } from "@mui/material/colors";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import KetmaKetlik from "../KetmaKetlik";

const YangiLoyiha = () => {
  const [hour, sethour] = React.useState("");
  const [timeChild, _] = useState([
  { id: "00", time: "00:00" },
    { id: "01", time: "01:00" },
    { id: "02", time: "02:00" },
    { id: "03", time: "03:00" },
    { id: "04", time: "04:00" },
    { id: "05", time: "05:00" },
    { id: "06", time: "06:00" },
    { id: "07", time: "07:00" },
    { id: "08", time: "08:00" },
    { id: "09", time: "09:00" },
    { id: "10", time: "10:00" },
    { id: "11", time: "11:00" },
    { id: "12", time: "12:00" },
    { id: "13", time: "13:00" },
    { id: "14", time: "14:00" },
    { id: "15", time: "15:00" },
    { id: "16", time: "16:00" },
    { id: "17", time: "17:00" },
    { id: "18", time: "18:00" },
    { id: "19", time: "19:00" },
    { id: "20", time: "20:00" },
    { id: "21", time: "21:00" },
    { id: "22", time: "22:00" },
    { id: "23", time: "23:00" },
    
  ]);
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const[isMessage, setIsMessage] = useState(true)

  
  const handleChange = (event: SelectChangeEvent) => {
    sethour(event.target.value as string);
  };

  const handleStartEnd = (id: string) => {
    if (!start) {
      setStart(id)
    } else if (!end) {
      setEnd(id)
    }
  }

  const handleMessageActive = () => {
    if (isMessage) {
      setIsMessage(false)
    } else {
      setIsMessage(true)
    }
  }

  return (
    <div className="containerr">
      <div className="product-wrapper">
        <div className="shadoww">
          <div className="ortga-davom">
            <img src={leftArrow} alt="" />
            <h1>Yangi loyiha ochish</h1>
            <div className="buttons">
              <button className="button1">Ortga</button>
              <button className="button2">
                Davom etish{" "}
                <span>
                  <img src={rightArrow} alt="" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="input-wrap">
            <label htmlFor="fullWidth">Loyiha Nomi</label>
            <TextField
              sx={{ height: "48px" }}
              fullWidth
              placeholder="Loyiha nomi..."
              id="fullWidth"
            />
          </div>
          <div className="inputs">
            <div className="input-wrap" style={{ width: "48%" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: green[400],
                      "&.Mui-checked": {
                        color: green[400],
                      },
                    }}
                  />
                }
                label="Qancha vaqtda habar yuboriladi?"
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  sx={{ padding: "0", width: "652px" }}
                  components={[
                    "TimePicker",
                    "MobileTimePicker",
                    "DesktopTimePicker",
                    "StaticTimePicker",
                  ]}
                >
                  <DemoItem>
                    <DesktopTimePicker
                      defaultValue={dayjs("2022-04-17T15:30")}
                    />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className="input-wrap" style={{ width: "48%" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: green[400],
                      "&.Mui-checked": {
                        color: green[400],
                      },
                    }}
                  />
                }
                label="Qancha vaqtda habar yuboriladi?"
              />
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={hour}
                style={{ width: "642px" }}
                onChange={handleChange}
                placeholder="O'sha zahoti"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </div>
          </div>
          <div className="input-wrap">
            <FormControlLabel
              control={
                <Checkbox
                  onClick={handleMessageActive}
                  sx={{
                    color: green[400],
                    "&.Mui-checked": {
                      color: green[400],
                    },
                  }}
                />
              }
              label="Habar yuborilmaydigan vaqt?"
            />
            <div style={isMessage? {display:"none"}: {display: "block" , zIndex: "2"}}>
               <div className="timeline">
              {
                timeChild && timeChild.map((time) => {
                  return (
                      <div  style={ end && start&& end > time.id  && time.id>= start? {backgroundColor: "rgba(255, 0, 0, 0.3)"} :{} } onClick={()=>handleStartEnd(time.id)} key={time.id} className="time-child">
                <p style={start=== time.id || end === time.id? {width: "20px", height:"20px", backgroundColor: "rgb(255, 0, 0)", borderRadius: "50%", color: "rgb(255, 0, 0)", top:"3px", left:"-6px"} : {}}>.</p>
                <span>{time.time}</span>
              </div>
                  )
                })
              }
            </div>
           </div>
          </div>
        </div>
        <KetmaKetlik></KetmaKetlik>
      </div>
    </div>
  );
};

export default YangiLoyiha;
