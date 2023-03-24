import { Popover, Steps } from "antd";

const Steper = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <Steps
        current={1}
        progressDot={(dot, { status, index }) => (
          <Popover
            content={
              <span>
                step {index} status: {status}
              </span>
            }
          >
            {dot}
          </Popover>
        )}
        items={[
          {
            title: "Share Location",
          },
          {
            title: "Clock In",
          },
          {
            title: "Working On",
          },
          {
            title: "Clock Out",
          },
        ]}
      />
    </div>
  );
};

export default Steper;
