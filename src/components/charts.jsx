import React from "react";
import CustomChart from "./common/customChart";

const Charts = () => {
  return (
    <div className="m-3">
      <h1 className="mt-4">Charts examples</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">/charts</li>
      </ol>
      <div className="row">
        <div className="col-lg-6">
          <CustomChart />
        </div>
        <div className="col pb-4">
          <div className="card h-100">
            <div className="card-header">
              <h3>Default chart</h3>
            </div>
            <div className="card-body">
              <p className="p-2">
                This chart is rendered by default if you don't pass any
                information via props. The props you can pass are:
                <br />
                <strong>1. title</strong> - the title of the Chart <br />
                <strong>2. type</strong> - types: "line"(By default), "bar",
                "pie", "radar", "doughnut" <br />
                <strong>3. labels</strong> - by default [ "Jan", "Feb", "Mar",
                "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"] <br />
                <strong>4. data </strong> - by default [ 1540, 1820, 2200, 1700,
                1880, 1900, 2500, 2705, 2000, 1650, 2560, 2910, ] <br />
                <strong>5. min</strong> - the minimum scale
                <strong>6. max</strong> - the max scale
                <strong>7. controls</strong> - boolean by default "false"
                <br />
                <br />
                Example:
                <br />
                <strong>{`<CustomChart />`}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <CustomChart
            title="Your title"
            type="pie"
            labels={["1st", "2nd", "3rd", "4th", "5th", "6th", "7th"]}
            data={[100, 110, 120, 130, 140, 150, 160]}
            min={0}
            max={300}
            controls={true}
          />
        </div>
        <div className="col pb-4">
          <div className="card h-100">
            <div className="card-header">
              <h3>Custom chart with controls</h3>
            </div>
            <div className="card-body">
              <p className="p-2">
                This chart is rendered with custom data. The data is passed to
                the component via props
                <br />
                <strong>1. title</strong> - string "Your title" <br />
                <strong>2. type</strong> - "pie" <br />
                <strong>3. labels</strong> - ["1st", "2nd", "3rd", "4th", "5th",
                "6th", "7th"] <br />
                <strong>4. data </strong> - [100, 110, 120, 130, 140, 150, 160]{" "}
                <br />
                <strong>5. min</strong> - 0<strong>6. max</strong> - 200
                <strong>7. controls</strong> - boolean "true"
                <br />
                <br />
                Example:
                <br />
                <strong>{`
                  <CustomChart
                  title="Your title"
                  type="pie"
                  labels={["1st", "2nd", "3rd", "4th", "5th", "6th", "7th"]}
                  data={[100, 110, 120, 130, 140, 150, 160]}
                  min={0}
                  max={300}
                  controls={true}
                />`}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-6">
          <CustomChart type="bar" controls={true} />
        </div>
        <div className="col-xl-6">
          <CustomChart type="radar" controls={true} />
        </div>
      </div>
    </div>
  );
};

export default Charts;
