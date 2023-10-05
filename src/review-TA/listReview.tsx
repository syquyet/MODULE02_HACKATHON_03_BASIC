import {useEffect, useState } from "react";
import IReview from "./type";

interface Props {
  data: IReview[];
  onAddReview: Function;
  onDeleteReview: Function;
}

export default function ListReview(props: Props) {
  const [valueInput, setValueInput] = useState<string>("");
 

  return (
    <>
      {props.data &&
        props.data.map((reveiw, index) => (
          <div className="content">
            <p className="reveiw-content">{reveiw.content}</p>
            <div className="footer-content">
              <p>{reveiw.date}</p>
              <button onClick={()=>props.onDeleteReview(index)}>DELETE</button>
            </div>
          </div>
        ))}
      <div className="content">
        {" "}
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          defaultValue={""}
          placeholder="type"
          maxLength={200}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setValueInput(e.target.value)
          }
        />
        <div className="footer-content">
          <p>{200-valueInput.length}left</p>
          <button onClick={() => props.onAddReview(valueInput)}>PUBLISH</button>
        </div>
      </div>
    </>
  );
}
