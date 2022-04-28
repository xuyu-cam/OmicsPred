export const scores = `A genetic score, also called a polygenic score (PGS), polygenic risk score (PRS), genetic risk score, or genome-wide score, is a number that summarises the estimated effect of many genetic variants (usually SNPs) on an individual’s phenotype, typically calculated as a weighted sum of trait-associated alleles(wikipedia).

What is a genetic score?

What does a genetic score model look like in the Atlas?

A genetic score model file presents in the following format:

rsidrsID
chrChromosome code
posBase-pair coordinate (GRCh37)
effect_alleleEffect allele with regard to the dosage of a variant
other_alleleThe other allele
effectEffect size of the variant

What does a genetic score model look like in the Atlas?
An easy way to calculate genetic scores of a new cohort is to use PLINK2. Here is an example:

$ plink2 
 --bfile bed_file 
 --score model_file 1 4 6 header list-variants cols=scoresums 
 --out results

  bed_file: Plink bed file of genetic data in a new cohort
 model_file: Path for a genetic model file downloaded from the Atlas
 results: Result file path

 Explore traits and their genetic scores

 Number of proteins: 2,384
Training cohort: INTERVAL
Training sample size: 3,175
External validation in cohort 1: FENLAND (European; 2,129 proteins; 8,832 participants)
External validation in cohort 2: MEC (2,070 proteins) - Chinese (CN; N=602), Indian (IN; N=585) and Malay (MA; N=588)
External validation in cohort 3: JHS (African American; 820 proteins; 1,852 participants)
Evaluation Metric: Spearman correlation coefficient (Rho), Variance explained (R2)


Number of proteins: 308
Training cohort: INTERVAL
Training sample size: 4,822
External validation cohort 1: NSPHS (European; 302 proteins; 872 participants)
External validation cohort 2: ORCADES (European; 301 proteins; 1052 participants)
Evaluation Metric: Spearman correlation coefficient (Rho), Variance Explained (R2)


Number of metabolites: 726
Training cohort: INTERVAL
Training sample size: 8,153
Independent validation subset: INTERVAL withheld subset (527 metabolites; 8114 participants)
External validation cohort: ORCADES (European; 455 metabolites; 1007 participants)
Evaluation Metric: Spearman correlation coefficient (Rho), Variance explained (R2)

Number of metabolic traits: 141
Training cohort: INTERVAL
Training sample size: 37,359
External validation cohort 1: UK Biobank (European; 141 traits; 116,830 participants)
External validation cohort 2: ORCADES (European; 141 traits; 1,884 participants)
External validation cohort 3: VIKING (European; 141 traits; 2,046 participants)
External validation in cohort 4: MEC (139 traits) - Chinese (CN; N=1,019), Indian (IN; N=677) and Malay (MA; N=659)
Evaluation Metric: Spearman correlation coefficient (Rho), Variance explained (R2)


Number of genes: 13,668
Training cohort: INTERVAL
Training sample size: 4,136
Independent validation subset: INTERVAL withheld subset (12,958 genes; 598 participants)
Evaluation Metric: Spearman correlation coefficient (Rho), Variance explained (R2)`