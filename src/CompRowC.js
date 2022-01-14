import CompTd from "./CompTd";
import "./Main.css";
export default function CompRowC(props) {
  let arr = [];
  let start = props.start;
  let noPass = props.noPass;
  return (
    <tr>
      <CompTd
        value={start + 6 <= noPass ? start + 6 : null}
        className="aisle"
      />
      <CompTd value={start <= noPass ? start : null} className="middle" />
      <CompTd
        value={start + 2 <= noPass ? start + 2 : null}
        className="window"
      />
    </tr>
  );
}
