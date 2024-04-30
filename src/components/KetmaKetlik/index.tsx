import { SyntheticEvent, useState } from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import "./index.css";
import phonebg from "../../assets/phonebg.svg";

interface LangType {
  id: string;
  value: string;
}


const KetmaKetlik = () => {
  const [form, setForm] = useState("cursive");
  const [id, setId] = useState<string>("uz");
  const [phoneValue, setPhoneValue] = useState("");
  const [langs] = useState<LangType[]>([
    { id: "uz", value: "O'zbek" },
    { id: "ru", value: "Русский" },
    { id: "en", value: "English" },
  ]);

  const handleChange = (event: SelectChangeEvent) => {
    setForm(event.target.value as string);
  };

  const handleChangeLang = (langId: string) => {
    setId(langId);
  };

 
  
  const handleAmount = (e: SyntheticEvent) => {
    const target = e.target as HTMLTextAreaElement;
    setPhoneValue(target.value);
  };


  return (
    <div className="containerr">
      <div className="ketmaketlik">
        <div className="left">
          <div>
            <h2>Habarning ko'rinishi</h2>
            <label htmlFor="demo-simple-select">Shablon</label>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={form}
              style={{ width: "762px" }}
              onChange={handleChange}
              placeholder="Shablon"
            >
              <MenuItem value='cursive'>cursive</MenuItem>
              <MenuItem value='fantasy'>fantasy</MenuItem>
              <MenuItem value='monospace'>monospace</MenuItem>
              <MenuItem value='revert'>revert</MenuItem>
              <MenuItem value='serif'>serif</MenuItem>
            </Select>
          </div>
          <div className="habar-shablon">
            <h2>Habar</h2>
            <span  style={{cursor:"pointer"}}>Shablon holatida saqlash</span>
          </div>
          <div className="tillar">
            <div className="til-turi">
              {langs.map((lang) => (
                <div
                  key={lang.id}
                  onClick={() => handleChangeLang(lang.id)}
                  className="til"
                  style={
                    id === lang.id
                      ? { backgroundColor: "white", color: "rgb(0, 98, 255)" }
                      : {}
                  }
                >
                  {lang.value}
                </div>
              ))}
            </div>
            <div className="habar-matni">
              <textarea
                onChange={handleAmount}
                placeholder={
                  id === "uz"
                    ? "Habar matni..."
                    : id === "en"
                    ? "Message text..."
                    : "Текст сообщения..."
                }
                name="text"
                id="text"
                cols={30}
                rows={10}
                style={form ? {fontFamily:`${form}`}: {fontFamily:'cursive'}}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="phone">
            <img src={phonebg} alt="phone bg" />
          </div>
          <textarea
            value={
              phoneValue
                ? phoneValue
                : id === "uz"
                ? "Habar matni..."
                : id === "en"
                ? "Message text..."
                : "Текст сообщения..."
            }
            className="copiedText"
            disabled
            style={
              phoneValue.length > 134 && form ? { height: "110px", fontFamily:`${form}` } : { height: "90px", fontFamily:`${form}` }
            }
            rows={3}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default KetmaKetlik;
