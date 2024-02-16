import { LiaExchangeAltSolid } from "react-icons/lia";
import "./Swap.css";

const Swap = () => {

  return (
    <>
      <section className="--flex-center --dir-column">
        <h1>Swap Token</h1>


        <form>
          <div>
            <label>From</label>
            <input type="text" />
            <p>Token</p>
          </div>
          <div>
            <span>
              <LiaExchangeAltSolid size={30} />
            </span>
          </div>
          <div>
            <label>To</label>
            <input type="text" />
            <select>
              <option value="&nbsp">&nbsp;</option>
              <option value="USDT">USDT</option>
              <option value="USDC">USDC</option>
            </select>
          </div>

          <button className="--btn-block --btn">Initialize Swap</button>

        </form>
      </section>
    </>
  );
};

export default Swap;
