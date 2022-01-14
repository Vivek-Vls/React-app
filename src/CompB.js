import CompRowB from "./CompRowB";
import "./Comps.css";
export default function CompB(props) {
  let noPass = props.noPass;
  let start = 2;
  let n = noPass % 10 === 0 ? noPass / 10 : noPass / 10 + 1;
  let arr = [n];
  for (let i = 0; i < n; i++) {
    arr[i] = <CompRowB start={start} noPass={noPass} />;
    start += 10;
  }
  return (
    <div className="mcomp">
      <div className="compdiv">
        <h4>Column B</h4>
      </div>
      {n > 0 ? (
        <table className="table">
          <tbody>{arr}</tbody>
        </table>
      ) : null}
    </div>
  );
}
