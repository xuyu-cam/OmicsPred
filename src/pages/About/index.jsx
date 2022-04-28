import React from "react";

import Container from "./components/container";
import Href from "../Home/components/components/Href";




const About = () => {
  return (
    <div className="md:pl-[5%] md:w-[90%] pt-[70px] pb-10">
      <Container
        title="About"
        text={<div>The OmicsPred Atlas development was led by <Href text="Yu Xu" href="mailto:yx322@medschl.cam.ac.uk"></Href>, under the supervison of <Href text="Michael Inouye" href="https://www.inouyelab.org/home/people" /> at the Department of Public Health and Primary Care, University of Cambridge.</div>}
      />
      <Container
        title="Our Collaborators"
        text={<div> <Href text="InouyeLab" href="https://www.inouyelab.org/" />: <Href text="Scott C. Ritchie" href="https://orcid.org/0000-0002-8454-9548" />, <Href text="Samuel Lambert" href="https://www.phpc.cam.ac.uk/people/ceu-group/ceu-research-staff/sam-lambert/" />, Loïc Lannelongue, Artika Nath, Elodie Persyn, Carles Foguet
 <br /> <Href text="Department of Public Health and Primary Care, University of Cambridge:" href="https://www.phpc.cam.ac.uk/ceu/" /> Bram Prins, Praveen Surendran, Dirk Paul, Emanuele Di Angelantonio, Adam Butterworth, John Danesh
 <br /> <Href text="MRC Epidemiology Unit, University of Cambridge" href="https://www.mrc-epid.cam.ac.uk/" /> : Maik Pietzner, Jian’an Luan, Claudia Langenberg
 <br /><Href text="MRC Human Genetics Unit, The University of Edinburgh" href="https://www.ed.ac.uk/mrc-human-genetics-unit/research/wilson-group" /> : Paul Timmers, Sebastian May-Wilson, Nicola Pirastu, Jim Wilson

 <br /><Href text="Saw Swee Hock School of Public Health, National University of Singapore " href="https://sph.nus.edu.sg/" />: Yujian Liang, E Shyong Tai, Rob M van Dam, Xueling Sim
 <br /><Href text="Beth Israel Deaconess Medical Center, Harvard Medical School" href="https://www.bidmc.org/" />: Usman A. Tahir, Shuliang Deng, Robert E. Gerszten


 <br /><Href text="Wellcome Sanger Institute" href="https://www.sanger.ac.uk/" />: Lorenzo Bomba, Emma E Davenport, Nicole Soranzo
 <br /><Href text="Immunology, Genetics and Pathology, IGP, Uppsala University" href="https://igp.uu.se/" /> : Åsa Johansson
 <br /> <Href text="Karolinska Institutet" href="https://ki.se/" /> : Anders Mälarstig </div>}
      />
      <Container
        title="Acknowledgements"
        text={ <div> Participants in the INTERVAL randomised controlled trial were recruited with the active collaboration of <Href text="NHS Blood and Transplant England" href="http://www.nhsbt.nhs.uk/" />  , which has supported field work and other elements of the trial. DNA extraction and genotyping was co-funded by the National Institute for Health Research (NIHR), <Href text="the NIHR BioResource" href="http://bioresource.nihr.ac.uk/" />  and the NIHR [Cambridge Biomedical Research Centre at the Cambridge University Hospitals NHS Foundation Trust]. The academic coordinating centre for INTERVAL was supported by core funding from: NIHR Blood and Transplant Research Unit in Donor Health and Genomics (NIHR BTRU-2014-10024), UK Medical Research Council (MR/L003120/1), British Heart Foundation (SP/09/002; RG/13/13/30194; RG/18/13/33946) and the NIHR [Cambridge Biomedical Research Centre at the Cambridge University Hospitals NHS Foundation Trust]. A complete list of the investigators and contributors to the INTERVAL trial is provided in the <Href  text="reference" href="https://pubmed.ncbi.nlm.nih.gov/28941948" /> . The academic coordinating centre would like to thank blood donor centre staff and blood donors for participating in the INTERVAL trial. All participants in the ORCADES study gave written informed consent and the study was approved by Research Ethics Committees in Orkney, Aberdeen (North of Scotland REC), and South East Scotland REC, NHS Lothian (reference: 12/SS/0151).The NSPHS study was approved by the local ethics committee at the University of Uppsala (Regionala Etikprövningsnämnden, Uppsala, Dnr 2005:325) in compliance with the Declaration of Helsinki. All participants gave their written informed consent to the study. For participants of under legal age, a legal guardian also signed. UK Biobank data access was approved under project 7439, and all the participants gave their informed consent for health research.</div> }
      />
    </div>
  );
};

export default About;
