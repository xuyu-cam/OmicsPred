import react from "react" ; 


import LinkIcon from "@mui/icons-material/Link";


const Href = (props)=>{
    return(
        <a href={props.href} target="_blank" className="text-indigo-600"> 
        <LinkIcon className="text-blue-300 mx-0 " />
        {
            props.text
        }
      </a>
    )  ;
}


export default Href ;