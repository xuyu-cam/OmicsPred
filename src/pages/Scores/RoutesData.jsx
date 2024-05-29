import React from "react";

/*******************************
 *
 * import here all the scores data as following
 *  - table data
 *  - ploting data
 *  - downloads links
 *  - sumarry data
 *
 *  to do this you need just to create a new folder the data folder then copy the content of the exemple_to_çopy folder there to it , then change the content as you want
 */

import {
  TableData_4,
  PlotData_4,
  DownloadData_4,
  SumarryData_4,
} from "..//..//data/Metabolomics_Metabolon";

import {
  TableData_3,
  PlotData_3,
  DownloadData_3,
  SumarryData_3,
} from "..//..//data/Metabolomics_Nightingale";

import {
  TableData_2,
  PlotData_2,
  DownloadData_2,
  SumarryData_2,
} from "..//..//data/Proteomics_Olink/INTERVAL";

import {
  TableData_OLINK_UKB_EUR,
  PlotData_OLINK_UKB_EUR,
  DownloadData_OLINK_UKB_EUR,
  SumarryData_OLINK_UKB_EUR,
} from "..//..//data/Proteomics_Olink/UKB_EUR";

import {
  TableData_OLINK_UKB_MULTI,
  PlotData_OLINK_UKB_MULTI,
  DownloadData_OLINK_UKB_MULTI,
  SumarryData_OLINK_UKB_MULTI,
} from "..//..//data/Proteomics_Olink/UKB_MULTI";

import {
  TableData_1,
  PlotData_1,
  DownloadData_1,
  SumarryData_1,
} from "..//..//data/Proteomics_Somalogic";

import {
  TableData_5,
  PlotData_5,
  DownloadData_5,
  SumarryData_5,
} from "..//..//data/Transcriptomics_Illumina_RNAseq";

const RoutesData = {
  "Proteomics (Somalogic)": {
    table_data: TableData_1,
    plot_data: PlotData_1,
    download_data: DownloadData_1,
    sumarry_data: SumarryData_1,
  },
  "Proteomics (Olink) - INTERVAL": {
    table_data: TableData_2,
    plot_data: PlotData_2,
    download_data: DownloadData_2,
    sumarry_data: SumarryData_2,
  },
  "Proteomics (Olink) - UKB European": {
    table_data: TableData_OLINK_UKB_EUR,
    plot_data: PlotData_OLINK_UKB_EUR,
    download_data: DownloadData_OLINK_UKB_EUR,
    sumarry_data: SumarryData_OLINK_UKB_EUR,
  },
  "Proteomics (Olink) - UKB Multi-Ancestry": {
    table_data: TableData_OLINK_UKB_MULTI,
    plot_data: PlotData_OLINK_UKB_MULTI,
    download_data: DownloadData_OLINK_UKB_MULTI,
    sumarry_data: SumarryData_OLINK_UKB_MULTI,
  },
  "Metabolomics (Metabolon)": {
    table_data: TableData_4,
    plot_data: PlotData_4,
    download_data: DownloadData_4 ,
    sumarry_data: SumarryData_4,
  },
  "Metabolomics (Nightingale)": {
    table_data: TableData_3,
    plot_data: PlotData_3,
    download_data: DownloadData_3,
    sumarry_data: SumarryData_3,
  },
  "Transcriptomics (Illumina RNAseq)": {
    table_data: TableData_5,
    plot_data: PlotData_5,
    download_data: DownloadData_5,
    sumarry_data: SumarryData_5,
  },
};

export default RoutesData;
