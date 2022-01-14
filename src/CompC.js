import CompRowC from "./CompRowC";
import "./Comps.css";
export default function CompC(props) {
  let noPass = props.noPass;
  let start = 4;
  let n = noPass % 10 === 0 ? noPass / 10 : noPass / 10 + 1;
  let arr = [n];
  for (let i = 0; i < n; i++) {
    arr[i] = <CompRowC start={start} noPass={noPass} />;
    start += 10;
  }
  return (
    <div className="rcomp">
      <div className="compdiv">
        <h4>Column C</h4>
      </div>
      {n > 0 ? (
        <table className="table">
          <tbody>{arr}</tbody>
        </table>
      ) : null}
    </div>
  );
}
