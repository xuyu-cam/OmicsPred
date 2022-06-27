import react from "react";

import Htext from "./components/Htext";
import LinkIcon from "@mui/icons-material/Link";

const Sumary = (props) => {
  return (
    <div className="min-h-fit w-full ">
      
      <div className="w-auto h-full block ">
        {props.data.map((e , index) => {
          return (
            <div key={index} className="min-h-auto block">
              <div className="  py-2 block">
                <h1
                  key={props.data.title}
                  className="text-gray-600 text-sm "
                >
                    {e.title}
                
                  <span className="text-[15px]  font-medium text-indigo-600">
                    {e.type == "Link" ? (
                      e.thirdlink ? (
                        <>
                          <a href={e.link1} target="_blank">
                            {" "}
                            <LinkIcon className="text-blue-300 mx-2" />
                            {e.value1}
                          </a>
                     
                          <a href={e.link2} target="_blank">
                            {" "}
                            <LinkIcon className="text-blue-300 mx-2" />
                            {e.value2}
                          </a>
                      
                          <a href={e.link3} target="_blank">
                            {" "}
                            <LinkIcon className="text-blue-300 mx-2" />
                            {e.value3}
                          </a>
                        </>
                      ) : e.doublelink ? (
                        <>
                          <a href={e.link1} target="_blank">
                            {" "}
                            <LinkIcon className="text-blue-300 mx-2" />
                            {e.value1}
                          </a>
                      
                          <a href={e.link2} target="_blank">
                            {" "}
                            <LinkIcon className="text-blue-300 mx-2" />
                            {e.value2}
                          </a>
                        </>
                      ) : (
                        <a href={e.link} target="_blank">
                          {" "}
                          <LinkIcon className="text-blue-300 mx-2" />
                          {e.value}
                        </a>
                      )
                    ) : (
                      <span>{e.value}</span>
                    )}
                  </span>
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sumary;
