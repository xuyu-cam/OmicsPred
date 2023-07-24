import Htext from "./components/Htext";

import Href from "../../Home/components/components/Href";

import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";

import pgs_calc_sum_report_1_img from "../../../Assets/pgsc_calc_sum_report_1.png";
import pgs_calc_sum_report_2_img from "../../../Assets/pgsc_calc_sum_report_2.png";

import { styled } from "@mui/material/styles";
import { tooltipClasses } from "@mui/material/Tooltip";


function createResults(sampleset, iid, denom, model_sum) {
    return { sampleset, iid, denom, model_sum };
  }
  
const rows = [
    createResults("UKB", 2018575, 1624, 0.774193),
    createResults("UKB", 3045886, 1624, -0.585766),
    createResults("UKB", 4602739, 1624, 0.90435),
    createResults("UKB", 3373485, 1624, -0.483836),
    createResults("UKB", 5750249, 1624, -0.588978),
    createResults("...", "...", "...", "..."),
];

const pgs_calc_version = 'v1.3.2'

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

export default function ScoresTool() {
    const pgs_calc_label = <span className="text-indigo-600">pgsc_calc</span>
    const comma = <span className="text-blue-400">,</span>
    return (
        <>
            <Htext text="Using pgsc_calc to calculate genetic scores on your own samples with OmicsPred (use pgsc_calc compatible model files)" />
            <div className="w-full lg:w-[80%] pl-5 md:px-10 my-5">
                <Typography className="text-xl text-gray-600 text-justify">
                    {pgs_calc_label} is a tool to calculate genetic scores on any cohorts with individual-level genetic data using any genetic score models, including the genetic score model files in OmicsPred.
                </Typography>
                <br/>
                <Typography className="text-xl text-gray-600 text-justify">
                    Full documentation of the tool is publicly accessible via :<Href text="this page" href="https://pgsc-calc.readthedocs.io/en/latest/index.html" />
                </Typography>
                <br/>
                <Typography className="text-xl text-gray-600 text-justify">
                    Below we show examples of how we can run {pgs_calc_label} using the released OmicsPred genetic score models (pgsc_calc compatible version) on your own cohorts with genetic data.  
                </Typography>
            </div>

            <div className="w-full lg:w-[80%] pl-5 md:px-10 my-5">
                <div className="mt-5 pt-4">
                    <h1 className="font-bold mb-4">Tools installation</h1>
                    <Typography className="text-xl text-gray-600 text-justify">
                        Please refer to the <Href text="pgsc_calc documentation" href="https://pgsc-calc.readthedocs.io/en/latest/getting-started.html"/> on the detailed installation steps of the calculator and other dependent softwares/tools (e.g. Java, Nextflow, Docker, Singularity, Anaconda).
                    </Typography>
                </div>

                <div className="mt-5 pt-4">
                    <h1 className="font-bold mb-4">Setup the samplesheet</h1>
                    <Typography className="text-xl text-gray-600 text-justify">
                        Here we use <Href text="UK Biobank (UKB)" href="https://www.ukbiobank.ac.uk/"/> dataset for demonstration purpose.
                    </Typography>
                    <br/>
                    <Typography className="text-xl text-gray-600 text-justify">
                    Firstly, we need to describe individual-level genetic data of the input dataset to be used for genetic score calculation. For instance, these are the genetic data of UKB samples in PLINK format:
                    </Typography>
                    <div className="border mt-2 mb-4 p-2">
                        <pre>  …/ukb_data/</pre>
                        <pre>    |-- ukb_imp_v3_dedup_chr1.bed</pre>
                        <pre>    |-- ukb_imp_v3_dedup_chr1.bim</pre>
                        <pre>    |-- ukb_imp_v3_dedup_chr1.fam</pre>
                        <pre>    |-- ukb_imp_v3_dedup_chr2.bed</pre>
                        <pre>    |-- ukb_imp_v3_dedup_chr2.bim</pre>
                        <pre>    |-- ukb_imp_v3_dedup_chr2.fam</pre>
                        <pre>    |-- …</pre>
                    </div>
                    <Typography className="text-xl text-gray-600 text-justify">
                        We then provide these information in the samplesheet file (<span className="text-indigo-600">samplesheet.csv</span>) following this format:
                    </Typography>
                    <div className="border mt-2 mb-4 p-2">
                        <pre className="font-bold text-blue-400">sampleset,vcf_path,bfile_path,pfile_path,chrom</pre>
                        <pre>ukb{comma}{comma}…/ukb_data/ukb_imp_v3_dedup_chr1{comma}{comma}1</pre>
                        <pre>ukb{comma}{comma}…/ukb_data/ukb_imp_v3_dedup_chr2{comma}{comma}2</pre>
                        <pre>ukb{comma}{comma}…/ukb_data/ukb_imp_v3_dedup_chr3{comma}{comma}3</pre>
                        <pre>ukb{comma}{comma}…/ukb_data/ukb_imp_v3_dedup_chr4{comma}{comma}4</pre>
                        <pre>ukb{comma}{comma}…/ukb_data/ukb_imp_v3_dedup_chr5{comma}{comma}5</pre>
                        <pre>ukb{comma}{comma}…/ukb_data/ukb_imp_v3_dedup_chr6{comma}{comma}6</pre>
                        <pre>ukb{comma}{comma}…/ukb_data/ukb_imp_v3_dedup_chr7{comma}{comma}7</pre>
                        <pre>ukb{comma}{comma}…/ukb_data/ukb_imp_v3_dedup_chr8{comma}{comma}8</pre>
                        <pre>ukb{comma}{comma}…/ukb_data/ukb_imp_v3_dedup_chr9{comma}{comma}9</pre>
                        <pre>ukb{comma}{comma}…/ukb_data/ukb_imp_v3_dedup_chr10{comma}{comma}10</pre>
                        <pre>ukb{comma}{comma}…/ukb_data/ukb_imp_v3_dedup_chr11{comma}{comma}11</pre>
                        <pre>ukb{comma}{comma}…/ukb_data/ukb_imp_v3_dedup_chr12{comma}{comma}12</pre>
                        <pre>ukb{comma}{comma}…/ukb_data/ukb_imp_v3_dedup_chr13{comma}{comma}13</pre>
                        <pre>ukb{comma}{comma}…/ukb_data/ukb_imp_v3_dedup_chr14{comma}{comma}14</pre>
                        <pre>ukb{comma}{comma}…/ukb_data/ukb_imp_v3_dedup_chr15{comma}{comma}15</pre>
                        <pre>ukb{comma}{comma}…/ukb_data/ukb_imp_v3_dedup_chr16{comma}{comma}16</pre>
                        <pre>ukb{comma}{comma}…/ukb_data/ukb_imp_v3_dedup_chr17{comma}{comma}17</pre>
                        <pre>ukb{comma}{comma}…/ukb_data/ukb_imp_v3_dedup_chr18{comma}{comma}18</pre>
                        <pre>ukb{comma}{comma}…/ukb_data/ukb_imp_v3_dedup_chr19{comma}{comma}19</pre>
                        <pre>ukb{comma}{comma}…/ukb_data/ukb_imp_v3_dedup_chr20{comma}{comma}20</pre>
                        <pre>ukb{comma}{comma}…/ukb_data/ukb_imp_v3_dedup_chr21{comma}{comma}21</pre>
                        <pre>ukb{comma}{comma}…/ukb_data/ukb_imp_v3_dedup_chr22{comma}{comma}22</pre>
                        <pre>ukb{comma}{comma}…/ukb_data/ukb_imp_v3_dedup_chrX{comma}{comma}X</pre>
                    </div>
                    <Typography className="text-xl text-gray-600 text-justify">
                        More information on the samplesheet setup can be found in the: <Href text="pgs _calc documentation" href="https://pgsc-calc.readthedocs.io/en/latest/reference/input.html"/>.
                    </Typography>
                </div>

                <div className="mt-5 pt-4">
                    <h1 className="font-bold mb-4 ">Setting genetic score files</h1>
                    <Typography className="text-xl text-gray-600 text-justify">
                        Then, we set up the genetic scores model file(s) to be applied for genetic score calculation. Here, we have the option of calculating score on the dataset using one score file or multiple score files at once.
                    </Typography>

                    <div className="my-5 pb-5">
                        <Typography className="text-xl text-gray-600 text-justify">
                            <span className="font-bold">1.</span> To set the input for <span className="font-bold">only one score model file</span>, we can use the full path of the score model file as follow:
                        </Typography>
                        <div className="mt-3 bg-gray-600 text text-sm rounded-lg">
                            <pre className="highlight">
                                <code>
                                    <span className="nt">--scorefile</span> .../SomaScan/OPGS000001_model.txt
                                </code>
                            </pre>
                        </div>
                    </div>

                    <div className="my-5">
                        <Typography className="text-xl text-gray-600 text-justify">
                            <span className="font-bold">2.</span> To set the calculation for <span className="font-bold">multiple score model files</span> on the input dataset at once, we can enter the full path to the directory and use the wildcard character “<span className="text-red-600">*</span>” to target all the model files in that directory:
                        </Typography>
                        <div className="mt-3 bg-gray-600 text text-sm rounded-lg">
                            <pre className="highlight">
                                <code>
                                    <span className="nt">--scorefile</span> <span className="k">"</span>.../SomaScan/<span className="nv">*</span>.txt<span className="k">"</span>
                                </code>
                            </pre>
                        </div>
                    </div>

                    <Typography className="text-xl text-gray-600 text-justify">
                        Here we assume all the model files have the “<span className="font-bold">.txt</span>” extension at the end of their file names.<br/><br/>
                        <span className="font-bold">Note that the quotes should be used on the directory path</span> (<span className="font-bold text-indigo-600">\"</span> might be needed to include quotes in the shell script), so the wildcard character is not interpreted by the shell. 
                    </Typography>
                    <br/>
                    <Typography className="text-xl text-gray-600 text-justify">
                        More information on the setting of the applied genetic scores files can be found in the <Href text="pgsc_calc documentation" href="https://pgsc-calc.readthedocs.io/en/latest/how-to/multiple.html#multiple-custom-scorefiles"/>.
                    </Typography>
                </div>

                <div className="mt-5 pt-4">
                    <h1 className="font-bold mb-4">Setting other parameters</h1>
                    {/* Genome build parameter */}
                    <div className="my-5 pb-4">
                        <Typography className="text-xl text-gray-600 text-justify">
                            <span className="font-bold">1.</span> Genome build of the input sample data
                        </Typography>
                        <div className="mt-3 bg-gray-600 text text-sm rounded-lg">
                            <pre className="highlight">
                                <code><span className="nt">--target_build</span> GRCh37</code>
                            </pre>
                        </div>
                    </div>
                    {/* Liftover parameter */}
                    <div className="my-5 pb-4">
                        <Typography className="text-xl text-gray-600 text-justify">
                            <span className="font-bold">2.</span> Lift genetic score model files to match the genome build of your input sample data. It requires build information in the header of the applied model file(s).
                        </Typography>
                        <div className="mt-3 bg-gray-600 text text-sm rounded-lg">
                            <pre className="highlight">
                                <code><span className="nt">--liftover</span></code>
                            </pre>
                        </div>
                    </div>
                    {/* Multiallelic parameter */}
                    <div className="my-5 pb-4">
                        <Typography className="text-xl text-gray-600 text-justify">
                            <span className="font-bold">3.</span> Allow matches of geneti score model file variants to multiallelic variants in the target dataset.
                        </Typography>
                        <div className="mt-3 bg-gray-600 text text-sm rounded-lg">
                            <pre className="highlight">
                                <code><span className="nt">--keep_multiallelic</span></code>
                            </pre>
                        </div>
                    </div>
                    {/* Ambiguous alleles parameter */}
                    <div className="my-5 pb-4">
                        <Typography className="text-xl text-gray-600 text-justify">
                            <span className="font-bold">4.</span> Keep matches of genetic score model file variants to strand-ambiguous variants (e.g. A/T and C/G SNPs) in the target dataset. This assumes the model file and target dataset report variants on the same strand. 
                        </Typography>
                        <div className="mt-3 bg-gray-600 text text-sm rounded-lg">
                            <pre className="highlight">
                                <code><span className="nt">--keep_ambiguous</span></code>
                            </pre>
                        </div>
                    </div>
                    {/* Minimum overlap parameter */}
                     <div className="my-5 pb-4">
                        <Typography className="text-xl text-gray-600 text-justify">
                            <span className="font-bold">5.</span> Minimum proportion of variants present in both the genetic score model file and input target genomic data [<span className="text-gray-400">default:  0.75</span>]. Otherwise, the scores will not be calculated for that model file.
                        </Typography>
                        <div className="mt-3 bg-gray-600 text text-sm rounded-lg">
                            <pre className="highlight">
                                <code><span className="nt">--min_overlap</span> 0.8</code>
                            </pre>
                        </div>
                    </div>
                    {/* Output directory parameter */}
                    <div className="my-5 pb-4">
                        <Typography className="text-xl text-gray-600 text-justify">
                            <span className="font-bold">6.</span> Path to the output directory where the results will be saved. [<span className="text-gray-400">default: ./results</span>]
                        </Typography>
                        <div className="mt-3 bg-gray-600 text text-sm rounded-lg">
                            <pre className="highlight">
                                <code><span className="nt">--outdir</span> /my_output_dir/</code>
                            </pre>
                        </div>
                    </div>

                    <div className="my-5 pt-5">
                        <Typography className="text-xl text-gray-600 text-justify">
                            You can find out settings of other optional parameters by running:
                        </Typography>
                        <div className="mt-3 bg-gray-600 text text-sm rounded-lg">
                            <pre className="highlight">
                                <code><span className="o">$</span> nextflow run pgscatalog/pgsc_calc <span className="nt">--help</span></code>
                            </pre>
                        </div>
                    </div>
                </div>

                {/* Run the calculator */}
                <div className="mt-5 pt-4">
                    <h1 className="font-bold mb-4 font-20">Run the calculator</h1>
                    {/* Run for 1 scoring file */}
                    <div className="my-5 pb-4">
                        <Typography className="text-xl text-gray-600 text-justify">
                            <span className="font-bold">1.</span> Calculate scores for UKB samples with one scoring file
                        </Typography>
                        <div className="mt-3 bg-gray-600 text text-sm rounded-lg">
                            <pre className="highlight">
                                <code>
                                    <span className="o">$</span> nextflow run pgscatalog/pgsc_calc <span className="k">\</span><br />
                                    <span className="nt">    -r</span> {pgs_calc_version} <span className="k">\</span><br />
                                    <span className="nt">    -profile</span> &lt;docker/singularity/conda&gt; <span className="k">\</span><br />
                                    <span className="nt">    --input</span> …/ukb_data/samplesheet.csv <span className="k">\</span><br />
                                    <span className="nt">    --scorefile</span> .../SomaScan/OPGS000001_model.txt
                                </code>
                            </pre>
                        </div>
                    </div>
                    {/* Run for multiple scoring files */}
                    <div className="my-5 pb-4">
                        <Typography className="text-xl text-gray-600 text-justify">
                            <span className="font-bold">2.</span> Calculate scores for UKB samples with multiple scoring files at once
                        </Typography>
                        <div className="mt-3 bg-gray-600 text text-sm rounded-lg">
                            <pre className="highlight">
                                <code>
                                    <span className="o">$</span> nextflow run pgscatalog/pgsc_calc <span className="k">\</span><br />
                                    <span className="nt">    -r</span> {pgs_calc_version} <span className="k">\</span><br />
                                    <span className="nt">    -profile</span> &lt;docker/singularity/conda&gt; <span className="k">\</span><br />
                                    <span className="nt">    --input</span> …/ukb_data/samplesheet.csv <span className="k">\</span><br />
                                    <span className="nt">    --scorefile</span> <span className="k">"</span>.../SomaScan/<span className="nv">*</span>.txt<span className="k">"</span>
                                </code>
                            </pre>
                        </div>
                    </div>

                    <div className="mb-4">
                        <Typography className="text-xl text-gray-600 text-justify">
                            If you run the calculator on more powerful computers or on high performance computing clusters, you can find the setting guidance on the pgsc_calc <Href text="Big job documentation" href="https://pgsc-calc.readthedocs.io/en/latest/how-to/bigjob.html#big-job"/> page.
                        </Typography>
                    </div>
                    <div className="mb-4">
                        <Typography className="text-xl text-gray-600 text-justify">
                            If you run the calculator on newer Mac computers with an M-series chip, see the setting on the pgsc_calc <Href text="ARM documentation" href="https://pgsc-calc.readthedocs.io/en/latest/how-to/arm.html#arm"/> page.
                        </Typography>
                    </div>
                    <div>
                        <Typography className="text-xl text-gray-600 text-justify">
                            <span className="font-bold">NOTE:</span> The number of genetic score model files you can run on the calculator at once depends on the computational resources you allocate to the job and the sample size of the input sample dataset. The tests were only run on the version 1.3.2 of the calculator with OmicsPred score files, so we recomend to use this version when apply OmicsPred scores.
                        </Typography>
                    </div>
                </div>

                {/* Outputs & results */}
                <div className="mt-5 pt-4">
                    <h1 className="font-bold mb-4 font-20">Outputs & results</h1>
                    <Typography className="text-xl text-gray-600 text-justify">
                        The outputs are written to a result directory <code className="bg-gray-600 rounded-lg text-sm p-1"><span className="nt">--outdir</span></code> [<span className="text-gray-400">default: ./results</span>] that contains three subdirectories:
                    </Typography>
                    <div className="mt-3">
                        <Typography className="text-xl text-gray-600 text-justify">
                            - <span className="text-indigo-600">score/</span>: calculated genetic scores with summary report
                        </Typography>
                    </div>
                    <div>
                        <Typography className="text-xl text-gray-600 text-justify">
                            - <span className="text-indigo-600">match/</span>: metadata on the matches between score model files and input sample dataset
                        </Typography>
                    </div>
                    <div className="mb-5 pb-4">
                        <Typography className="text-xl text-gray-600 text-justify">
                            - <span className="text-indigo-600">pipeline_info/</span>: nextflow pipeline execution (memory, runtime, etc.)
                        </Typography>
                    </div>

                    <h2 className="mb-2">&gt; Calculated Scores</h2>
                    <Typography className="text-xl text-gray-600 text-justify">
                        The calculated scores are stored in a gzipped-text space-delimited text file called <span className="text-indigo-600">aggregated_scores.txt.gz</span> under the <span className="text-indigo-600">score/</span> directory. Here is an example of the output of one scoring file (<span className="text-indigo-600">OPGS000001_model.txt</span>):
                    </Typography>

                    <TableContainer component={Paper} className="w-full my-6">
                        <Table stickyHeader className="w-full" aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <LightTooltip title="Sampleset Name" arrow placement="top">
                                        <TableCell align="center" className="font-bold"> 
                                            <h1 className="font-bold">sampleset</h1>
                                        </TableCell>
                                    </LightTooltip>
                                    <LightTooltip title="Sample Identifier" arrow placement="top">
                                        <TableCell align="center" className="font-bold"> 
                                            <h1 className="font-bold">IID</h1>
                                        </TableCell>
                                    </LightTooltip>
                                    <LightTooltip title="Variants numbers" arrow placement="top">
                                        <TableCell align="center" className="font-bold"> 
                                            <h1 className="font-bold">DENOM</h1>
                                        </TableCell>
                                    </LightTooltip>
                                    <LightTooltip title="Calculated genetic score" arrow placement="top">
                                        <TableCell align="center" className="font-bold"> 
                                            <h1 className="font-bold">OPGS000001_model_SUM</h1>
                                        </TableCell>
                                    </LightTooltip>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row , index) => (
                                    <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                        <TableCell align="center">{row.sampleset}</TableCell>
                                        <TableCell align="center">{row.iid}</TableCell>
                                        <TableCell align="center">{row.denom}</TableCell>
                                        <TableCell align="center">{row.model_sum}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Typography className="text-xl text-gray-600 text-justify">
                        in which:
                    </Typography>
                    <div className="mt-3">
                        <Typography className="text-xl text-gray-600 text-justify">
                            - <span className="text-indigo-600">IID</span>: represents the identifier of each sample within the input dataset
                        </Typography>
                    </div>
                    <div className="mb-5 pb-4">
                        <Typography className="text-xl text-gray-600 text-justify">
                            - <span className="text-indigo-600">[Score NAME]_SUM</span>: reports the weighted sum of <span className="font-bold">effect_allele</span> dosages multiplied by their <span className="font-bold">effect_weight</span> for each matched variant in the score model file (i.e. the <span className="font-bold">calculated genetic score</span> for your followup analysis).
                        </Typography>
                    </div>

                    <h2 className="mb-2">&gt; Summary report</h2>
                    <div>
                        <Typography className="text-xl text-gray-600 text-justify">
                            A summary report of the genetic score calculation is also available in both a <span className="font-bold">CSV</span> file (<span className="text-indigo-600">[sampleset NAME]_summary.csv</span>) and a  <span className="font-bold">HTML</span> file (<span className="text-indigo-600">report.html</span>) under the <span className="text-indigo-600">match/</span> directory.
                        </Typography>
                    </div>
                    <div className="my-3">
                        <Typography className="text-xl text-gray-600 text-justify">
                            Here are examples of two summary tables in the <span className="text-indigo-600">report.html</span> file for calculating five OmicsPred scores (OPGS000001-OPGS000005) on the UKB dataset: 
                        </Typography>
                        <img className='border mt-3' alt="pgs_calc sum report 1" src={pgs_calc_sum_report_1_img}/>
                        <img className='border mt-6' alt="pgs_calc sum report 2" src={pgs_calc_sum_report_2_img}/>
                    </div>
                    <div className="my-3">
                        <Typography className="text-xl text-gray-600 text-justify">
                        in which, they include information such as the total number of variants matched between each score file and the input dataset (<span className="text-indigo-600">Total matched</span>), indication of whether there are matched variants that are strand-ambiguous (<span className="text-indigo-600">Ambiguous</span>), etc. 
                        </Typography>
                    </div>
                    <div className="my-3">
                        <Typography className="text-xl text-gray-600 text-justify">
                            Please refer to the PGS calculator <Href text="Output documentation" href="​​https://pgsc-calc.readthedocs.io/en/latest/output.html"/> for more information on the output files and their reported content.
                        </Typography>
                    </div>
                </div>
            </div>
        </>
    )
}