import CompRowA from "./CompRowA";
import "./Comps.css";
export default function CompA(props) {
  let noPass = props.noPass;
  let start = 1;
  let n = noPass % 10 === 0 ? noPass / 10 : noPass / 10 + 1;
  let arr = [n];
  for (let i = 0; i < n; i++) {
    arr[i] = <CompRowA start={start} noPass={noPass} />;
    start += 10;
  }
  return (
    <div className="lcomp">
      <div className="compdiv">
        <h4>Column A</h4>
      </div>
      {n > 0 ? (
        <table className="table">
          <tbody>{arr}</tbody>
        </table>
      ) : null}
    </div>
  );
}
