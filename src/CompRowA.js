import CompTd from "./CompTd";
import "./Main.css";
export default function CompRowA(props) {
  let arr = [];
  let start = props.start;
  let noPass = props.noPass;
  return (
    <tr>
      <CompTd
        value={start + 4 <= noPass ? start + 4 : null}
        className="window"
      />
      <CompTd value={start <= noPass ? start : null} className="middle" />
      <CompTd
        value={start + 6 <= noPass ? start + 6 : null}
        className="aisle"
      />
    </tr>
  );
}
