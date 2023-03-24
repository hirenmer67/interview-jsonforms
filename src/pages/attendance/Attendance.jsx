import { WarningOutlined, SettingOutlined } from "@ant-design/icons";
import TimerCom from "./TimerCom";
import { Row, Col, Select, Input } from "antd";
import Steper from "./Steper";
import { useState } from "react";

const Attendance = () => {
  const [state, setState] = useState({
    "Branch Code": null,
    Brand: null,
    "Sales Type": null,
    "Product Type": null,
  });
  const [isErrorIn, setIsErrorIn] = useState([]);

  const setStateFn = (name, val) => {
    if (isErrorIn.includes(name)) {
      setIsErrorIn((prev) => prev.filter((val) => val !== name));
    }
    setState((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = () => {
    const isErrorArr = Object.keys(state).filter((key) => !state[key]);
    if (isErrorArr.length > 0) return setIsErrorIn(isErrorArr);
    console.log(state);
  };

  return (
    <div>
      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            <span
              style={{
                background: "rgb(238 103 103)",
                color: "white",
                fontWeight: "bold",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "12px",
                marginBottom: "-2px",
                cursor: "pointer",
              }}
            >
              3
            </span>
            <WarningOutlined
              style={{ color: "red", fontSize: "1.2rem", cursor: "pointer" }}
            />
          </span>
          <span
            style={{
              fontSize: "1rem",
              background: "#3087d3",
              color: "white",
              fontWeight: "bold",
              padding: "1px 3px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            <SettingOutlined />
          </span>
        </div>
        <Steper />
      </section>

      <hr style={{ opacity: "0.5" }} />

      <TimerCom />

      <section>
        <h3 style={{ textAlign: "center", color: "#da2222" }}>
          Enter Clock In Information
        </h3>
        <Row gutter={30}>
          <Col span={12}>
            <label>
              <b>Branch Code</b>
            </label>
            <Select
              placeholder="Branch Code"
              style={{ width: "100%" }}
              value={state["Branch Code"]}
              onChange={(val) => setStateFn("Branch Code", val)}
              options={[
                { value: "A4f65T", label: "A4f65T" },
                { value: "CGBRD", label: "CGBRD" },
                { value: "BBR654", label: "BBR654" },
              ]}
            />
          </Col>
          <br />
          <br />
          <br />
          <Col span={12}>
            <label>
              <b>Branch:</b>
            </label>
            <Input placeholder="store name" disabled={true} />
          </Col>
          {[
            {
              label: "Brand",
              placeholder: "Select...",
              isRequired: true,
              options: [
                { value: "siscol", label: "siscol" },
                { value: "filopi", label: "filopi" },
                { value: "chlaso", label: "chlaso" },
              ],
            },
            {
              label: "Sales Type",
              placeholder: "Select...",
              isRequired: true,
              options: [
                { value: "retail", label: "retail" },
                { value: "whole-sale", label: "whole-sale" },
              ],
            },
            {
              label: "Product Type",
              placeholder: "Select...",
              isRequired: true,
              options: [
                { value: "cargo", label: "cargo" },
                { value: "aviation", label: "aviation" },
              ],
            },
          ].map((el, ind) => (
            <Col key={ind} span={24} style={{ margin: "0.5rem 0 0.51rem 0" }}>
              <label>
                <b>
                  {el.label}
                  <sup style={{ color: "red" }}>*</sup>
                </b>
              </label>
              <Select
                placeholder={el.placeholder}
                style={{
                  width: "100%",
                  border: isErrorIn.includes(el.label) && "1px solid red",
                  borderRadius: "7px",
                }}
                value={state[el.label]}
                onChange={(val) => setStateFn(el.label, val)}
                options={el.options}
              />
            </Col>
          ))}
        </Row>
      </section>
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
};

export default Attendance;
