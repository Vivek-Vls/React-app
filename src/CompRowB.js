import CompTd from "./CompTd";
import "./Main.css";
export default function CompRowB(props) {
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
        value={start + 1 <= noPass ? start + 1 : null}
        className="middle"
      />
      <CompTd
        value={start + 7 <= noPass ? start + 7 : null}
        className="aisle"
      />
    </tr>
  );
}
