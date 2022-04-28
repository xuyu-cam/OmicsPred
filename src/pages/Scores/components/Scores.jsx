import react from "react";

import Htext from "./components/Htext";
import LinkIcon from "@mui/icons-material/Link";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

import Href from "../../Home/components/components/Href";

import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import Tooltip from "@mui/material/Tooltip";

import { styled } from "@mui/material/styles";
import { tooltipClasses } from "@mui/material/Tooltip";

import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";

function createData(rsid, chr, pos, effect_allele, other_allele, effect) {
  return { rsid, chr, pos, effect_allele, other_allele, effect };
}

const rows = [
  createData("rs116576188", 6, 31296369, "C", "A", 0.015),
  createData("rs568630420", 6, 31315587, "T", "G", 0.02),
  createData("...", "...", "...", "...", "...", "..."),

  createData("rs78630340", 6, 31342334, "A", "T", 0.05),
];

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "blue",
    boxShadow: theme.shadows[1],
    fontSize: 14,
  },
}));

const ScoresHome = (props) => {
  return (
    <>
      <div className="h-auto max-w-full pb-10 lg:px-32 pr-3 md:pr-10">
        <Htext text="What is a genetic score?"/>
        <div className="w-full pr-10 pl-5 md:pl-10">
          <Typography className="text-xl text-gray-600 text-justify">
            A genetic score, also called a polygenic score (PGS), polygenic risk
            score (PRS), genetic risk score, or genome-wide score, is a number
            that summarises the estimated effect of many genetic variants
            (usually SNPs) on an individual’s phenotype, typically calculated as
            a weighted sum of trait-associated alleles(
            <Href text="wikipedia" href="https://en.wikipedia.org/wiki/Polygenic_score" />
            ).
          </Typography>
          <br/>
        </div>
        
        <Htext text="What does a genetic score model look like in the Atlas?" />

        <div className=" w-full lg:w-[60%] pl-5 md:px-10 my-5">
          <Typography className="text-xl text-gray-600 text-justify">
            A genetic score model file presents in the following format:
          </Typography>
          <TableContainer component={Paper} className="w-full my-6">
            <Table stickyHeader className="w-full" aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <LightTooltip title="rsID" arrow placement="top">
                    <TableCell align="center" className="font-bold"> <h1 className="font-bold">
                      rsid
                      </h1></TableCell>
                  </LightTooltip>{" "}
                  <LightTooltip title="Chromosome code" arrow placement="top">
                    <TableCell align="center"> <h1 className="font-bold">chr</h1></TableCell>
                  </LightTooltip>{" "}
                  <LightTooltip
                    title="Base-pair coordinate (GRCh37)"
                    arrow
                    placement="top"
                  >
                    <TableCell align="center"><h1 className="font-bold">pos</h1></TableCell>
                  </LightTooltip>{" "}
                  <LightTooltip
                    title="Effect allele with regard to the dosage of a variant"
                    arrow
                    placement="top"
                  >
                    <TableCell align="center"><h1 className="font-bold">effect_allele</h1></TableCell>
                  </LightTooltip>{" "}
                  <LightTooltip title="The other allele" arrow placement="top">
                    <TableCell align="center"><h1 className="font-bold">other_allele</h1></TableCell>
                  </LightTooltip>{" "}
                  <LightTooltip
                    title="Effect size of the variant"
                    arrow
                    placement="top"
                  >
                    <TableCell><h1 className="font-bold">effect</h1></TableCell>
                  </LightTooltip>{" "}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row , index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.rsid}
                    </TableCell>
                    <TableCell align="center">{row.chr}</TableCell>
                    <TableCell align="center">{row.pos}</TableCell>
                    <TableCell align="center">{row.effect_allele}</TableCell>
                    <TableCell align="center">{row.other_allele}</TableCell>
                    <TableCell align="center">{row.effect}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="w-full px-5 md:px-10 my-5">
          <h1 className="font-bold">Where :</h1>
          <h1>
            <span className="mr-5 text-indigo-600">rsid</span>rsID
          </h1>
          <h1>
            <span className="mr-5 text-indigo-600">chr</span>Chromosome code
          </h1>
          <h1>
            <span className="mr-5 text-indigo-600">pos</span>Base-pair
            coordinate (GRCh37)
          </h1>
          <h1>
            <span className="mr-5 text-indigo-600">effect_allele</span>Effect
            allele with regard to the dosage of a variant
          </h1>
          <h1>
            <span className="mr-5 text-indigo-600">other_allele</span>The other allele
          </h1>
          <h1>
            <span className="mr-5 text-indigo-600">effect</span>Effect size of the variant
          </h1>
        </div>
        <Htext text="What does a genetic score model look like in the Atlas?" />
        <div className="w-full px-5 md:px-10 my-5">
          <Typography className="text-xl text-gray-600 text-justify">
            An easy way to calculate genetic scores of a new cohort is to use{" "}
            <Href text="PLINK2" href="https://www.cog-genomics.org/plink/2.0/score"></Href>. Here is an example:
          </Typography>
          <br />

          <div>
            <div className="w-full lg:w-[80%]">
              <div className="highlight bg-gray-600 text text-sm rounded-lg">
                <pre className="highlight">
                  <code>
                    <span className="o">$</span> plink2 <br />
                    <span className="nt"> --bfile</span>{" "}
                    <span class="k">{"${"}</span>
                    <span className="nv">bed_file</span>
                    <span className="k">{"}"}</span> <br />
                    <span className="nt"> --score</span>{" "}
                    <span class="k">{"${"}</span>
                    <span class="nv">model_file</span>
                    <span class="k">{"}"}</span> 1 4 6 header list-variants{" "}
                    <span class="nv">cols</span>
                    <span class="o">=</span>scoresums <br />
                    <span class="nt"> --out</span> <span class="k">{"${"}</span>
                    <span class="nv">results</span>
                    <span class="k">{"}"}</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <br />

          <Typography className="text-xl text-gray-600 text-justify">
            <code className=" py-1">
              {" "}
              <code className="text-blue-400  font-bold">
                {" "}
                <AssistantPhotoIcon /> bed_file:{" "}
              </code>{" "}
              Plink bed file of genetic data in a new cohort
            </code>

            <br />

            <code className=" py-1">
              {" "}
              <code className="text-blue-400 font-bold">
                {" "}
                <AssistantPhotoIcon /> model_file:{" "}
              </code>
              Path for a genetic model file downloaded from the Atlas
            </code>

            <br />

            <code className=" py-1">
              {" "}
              <code className="text-blue-400 font-bold">
                {" "}
                <AssistantPhotoIcon /> results:{" "}
              </code>
              Result file path{" "}
            </code>
          </Typography>
        </div>
      </div>
    </>
  );
};

export default ScoresHome;
