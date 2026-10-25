/* Catalogue aligned to the latest 80-page manuscript. */
window.AI4AI_DATA = {
  "meta": {
    "title": "AI4AI: Toward AI-discovered Superintelligence",
    "source": "AI4AI_survey_latest.pdf",
    "sourcePages": 80,
    "referenceCount": 336,
    "surveyedCount": 297,
    "methodCount": 146,
    "benchmarkCount": 54,
    "note": "Source: AI4AI_survey (1).zip, compiled without content changes. Figure numbers and reference destinations follow the 80-page manuscript. Surveyed works are cited in Sections 4–7. Taxonomy attribution comes from Figures 4, 6, 8 and 10 and Tables 3–10; benchmarks receive no control-source level."
  },
  "papers": [
    {
      "ref": 1,
      "name": "SemDeDup",
      "title": "SemDeDup: Data-Efficient Learning at Web-Scale through Semantic Deduplication",
      "authors": "Amro Abbas, Kushal Tirumala, Daniel Simig, Surya Ganguli, and Ari S. Morcos",
      "year": 2023,
      "citation": "Amro Abbas, Kushal Tirumala, Daniel Simig, Surya Ganguli, and Ari S. Morcos. SemDeDup: Data-efficient learning at web-scale through semantic deduplication. arXiv preprint arXiv:2303.09540, 2023.",
      "url": "https://arxiv.org/abs/2303.09540",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "AI4AI Data › Selection and curation",
      "sourcePage": 37,
      "refPage": 54,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Data",
          "path": "AI4AI Data › Selection and curation",
          "label": "SemDeDup",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.3.1",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.1 Selection and Curation"
        }
      ],
      "citekey": "semdd2023"
    },
    {
      "ref": 2,
      "name": "LLM-FE",
      "title": "LLM-FE: Automated Feature Engineering for Tabular Data with Llms as Evolutionary Optimizers",
      "authors": "Nikhil Abhyankar, Parshin Shojaee, and Chandan K. Reddy",
      "year": 2025,
      "citation": "Nikhil Abhyankar, Parshin Shojaee, and Chandan K. Reddy. LLM-FE: Automated feature engineering for tabular data with llms as evolutionary optimizers. arXiv preprint arXiv:2503.14434, 2025.",
      "url": "https://arxiv.org/abs/2503.14434",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Data"
      ],
      "category": "Augmentation and feature construction",
      "sourcePage": 43,
      "refPage": 54,
      "placements": [
        {
          "type": "table",
          "where": "Table 8",
          "page": 43,
          "level": "L1",
          "family": "Data",
          "path": "Augmentation and feature construction",
          "label": "LLM-FE"
        },
        {
          "type": "text",
          "where": "§4.2",
          "page": 18,
          "level": "L1",
          "family": null,
          "path": "§4.2 Evolutionary Program Improvement"
        },
        {
          "type": "text",
          "where": "§7.3.2",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.2 Augmentation, Synthesis, and Curricula"
        }
      ],
      "fieldsFrom": 8,
      "tableLabel": "LLM-FE",
      "artifact": "evolved feature-engineering programs",
      "human": "tabular tasks, input schema, validation metric",
      "citekey": "llmfe2025"
    },
    {
      "ref": 3,
      "name": "Halide autoscheduler",
      "title": "Learning to Optimize Halide with Tree Search and Random Programs",
      "authors": "Andrew Adams, Karima Ma, Luke Anderson, Riyadh Baghdadi, Tzu-Mao Li, Michael Gharbi, Benoit Steiner, Steven Johnson, Kayvon Fatahalian, Fredo Durand, and Jonathan Ragan-Kelley",
      "year": 2019,
      "citation": "Andrew Adams, Karima Ma, Luke Anderson, Riyadh Baghdadi, Tzu-Mao Li, Michael Gharbi, Benoit Steiner, Steven Johnson, Kayvon Fatahalian, Fredo Durand, and Jonathan Ragan-Kelley. Learning to optimize halide with tree search and random programs. ACM Transactions on Graphics, 38(4):121:1--121:12, 2019.",
      "url": "https://doi.org/10.1145/3306346.3322967",
      "urlSource": "openalex",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Infrastructure"
      ],
      "category": "AI4AI Infrastructure › Kernels and tensor programs",
      "sourcePage": 37,
      "refPage": 54,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Infrastructure",
          "path": "AI4AI Infrastructure › Kernels and tensor programs",
          "label": "Halide autoscheduler",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.4.1",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.1 Kernels and Tensor Programs"
        }
      ],
      "citekey": "halideautoscheduler2019"
    },
    {
      "ref": 4,
      "name": "PromptWizard",
      "title": "PromptWizard: Task-Aware Prompt Optimization Framework",
      "authors": "Eshaan Agarwal, Joykirat Singh, Vivek Dani, Raghav Magazine, Tanuja Ganu, and Akshay Nambi",
      "year": 2024,
      "citation": "Eshaan Agarwal, Joykirat Singh, Vivek Dani, Raghav Magazine, Tanuja Ganu, and Akshay Nambi. PromptWizard: Task-aware prompt optimization framework. arXiv preprint arXiv:2405.18369, 2024.",
      "url": "https://arxiv.org/abs/2405.18369",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Inference"
      ],
      "category": "§4.3 Prompt, Pipeline, and Workflow Optimization",
      "sourcePage": 19,
      "refPage": 54,
      "placements": [
        {
          "type": "text",
          "where": "§4.3",
          "page": 19,
          "level": "L1",
          "family": null,
          "path": "§4.3 Prompt, Pipeline, and Workflow Optimization"
        },
        {
          "type": "text",
          "where": "§7.2.1",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.1 Prompt and Workflow Optimization"
        }
      ],
      "citekey": "promptwizard2024"
    },
    {
      "ref": 5,
      "name": "AutoDMP",
      "title": "AutoDMP: Automated DREAMPlace-Based Macro Placement",
      "authors": "Anthony Agnesina, Puranjay Rajvanshi, Tian Yang, Geraldo Pradipta, Austin Jiao, Ben Keller, Brucek Khailany, and Haoxing Ren",
      "year": 2023,
      "citation": "Anthony Agnesina, Puranjay Rajvanshi, Tian Yang, Geraldo Pradipta, Austin Jiao, Ben Keller, Brucek Khailany, and Haoxing Ren. AutoDMP: Automated DREAMPlace-based macro placement. In Proceedings of the 2023 International Symposium on Physical Design, pages 149--157, 2023.",
      "url": "https://doi.org/10.1145/3569052.3578923",
      "urlSource": "crossref-doi",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Infrastructure"
      ],
      "category": "§7.4.3 Logic, RTL, and Physical Design",
      "sourcePage": 44,
      "refPage": 54,
      "placements": [
        {
          "type": "text",
          "where": "§7.4.3",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.3 Logic, RTL, and Physical Design"
        }
      ],
      "citekey": "autodmp2023"
    },
    {
      "ref": 6,
      "name": "GEPA",
      "title": "GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning",
      "authors": "Lakshya A. Agrawal, Shangyin Tan, Dilara Soylu, Noah Ziems, Rishi Khare, Krista Opsahl-Ong, Arnav Singhvi, Herumb Shandilya, Michael J. Ryan, Meng Jiang, Christopher Potts, Koushik Sen, Alexandros G. Dimakis, Ion Stoica, Dan Klein, Matei Zaharia, and Omar Khattab",
      "year": 2025,
      "citation": "Lakshya A. Agrawal, Shangyin Tan, Dilara Soylu, Noah Ziems, Rishi Khare, Krista Opsahl-Ong, Arnav Singhvi, Herumb Shandilya, Michael J. Ryan, Meng Jiang, Christopher Potts, Koushik Sen, Alexandros G. Dimakis, Ion Stoica, Dan Klein, Matei Zaharia, and Omar Khattab. GEPA: Reflective prompt evolution can outperform reinforcement learning. arXiv preprint arXiv:2507.19457, 2025.",
      "url": "https://arxiv.org/abs/2507.19457",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Inference"
      ],
      "category": "Reflective histories",
      "sourcePage": 18,
      "refPage": 54,
      "placements": [
        {
          "type": "table",
          "where": "Table 3",
          "page": 18,
          "level": "L1",
          "family": null,
          "path": "Reflective histories",
          "label": "GEPA"
        },
        {
          "type": "table",
          "where": "Table 7",
          "page": 41,
          "level": "L1",
          "family": "Inference",
          "path": "Prompt and workflow optimization",
          "label": "GEPA"
        },
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Reflective histories › Textual gradients and critiques",
          "label": "GEPA"
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§4.3",
          "page": 19,
          "level": "L1",
          "family": null,
          "path": "§4.3 Prompt, Pipeline, and Workflow Optimization"
        },
        {
          "type": "text",
          "where": "§7.2.1",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.1 Prompt and Workflow Optimization"
        }
      ],
      "fieldsFrom": 3,
      "tableLabel": "GEPA",
      "artifact": "parent and reflection-conditioned edit",
      "historyRead": "reflective feedback, lineage, Pareto archive",
      "citekey": "gepa2025"
    },
    {
      "ref": 7,
      "name": "LLM-POET",
      "title": "LLM-POET: Evolving Complex Environments Using Large Language Models",
      "authors": "Fuma Aki, Riku Ikeda, Takumi Saito, Ciaran Regan, and Mizuki Oka",
      "year": 2024,
      "citation": "Fuma Aki, Riku Ikeda, Takumi Saito, Ciaran Regan, and Mizuki Oka. LLM-POET: Evolving complex environments using large language models. arXiv preprint arXiv:2406.04663, 2024.",
      "url": "https://arxiv.org/abs/2406.04663",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "figure",
      "families": [
        "Data"
      ],
      "category": "Adaptive evaluation and oversight › Adaptive tests and environments",
      "sourcePage": 32,
      "refPage": 54,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Adaptive evaluation and oversight › Adaptive tests and environments",
          "label": "LLM-POET"
        },
        {
          "type": "text",
          "where": "§6.5",
          "page": 34,
          "level": "L3",
          "family": null,
          "path": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence"
        },
        {
          "type": "text",
          "where": "§7.3.2",
          "page": 43,
          "level": null,
          "family": "Data",
          "path": "§7.3.2 Augmentation, Synthesis, and Curricula"
        }
      ],
      "citekey": "aki2024llmpoet"
    },
    {
      "ref": 8,
      "name": "Optuna",
      "title": "Optuna: A next-Generation Hyperparameter Optimization Framework",
      "authors": "Takuya Akiba, Shotaro Sano, Toshihiko Yanase, Takeru Ohta, and Masanori Koyama",
      "year": 2019,
      "citation": "Takuya Akiba, Shotaro Sano, Toshihiko Yanase, Takeru Ohta, and Masanori Koyama. Optuna: A next-generation hyperparameter optimization framework. In Proceedings of the 25th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining, pages 2623--2631, 2019.",
      "url": "https://arxiv.org/abs/1907.10902",
      "urlSource": "arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "figure",
      "families": [
        "Learning"
      ],
      "category": "Performance histories › Budget and learning curves",
      "sourcePage": 17,
      "refPage": 54,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Performance histories › Budget and learning curves",
          "label": "Optuna"
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§7.1.1",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.1 Configurations and Training Pipelines"
        }
      ],
      "citekey": "optuna2019"
    },
    {
      "ref": 9,
      "name": "A survey on data selection for language models",
      "title": "A Survey on Data Selection for Language Models",
      "authors": "Alon Albalak, Yanai Elazar, Sang Michael Xie, Shayne Longpre, Nathan Lambert, Xinyi Wang, Niklas Muennighoff, Bairu Hou, Liangming Pan, Haewon Jeong, Colin Raffel, Shiyu Chang, Tatsunori Hashimoto, and William Yang Wang",
      "year": 2024,
      "citation": "Alon Albalak, Yanai Elazar, Sang Michael Xie, Shayne Longpre, Nathan Lambert, Xinyi Wang, Niklas Muennighoff, Bairu Hou, Liangming Pan, Haewon Jeong, Colin Raffel, Shiyu Chang, Tatsunori Hashimoto, and William Yang Wang. A survey on data selection for language models. Transactions on Machine Learning Research, 2024.",
      "url": "https://arxiv.org/abs/2402.16827",
      "urlSource": "arxiv",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 8,
      "refPage": 54,
      "placements": [],
      "citekey": "albalak2024data"
    },
    {
      "ref": 10,
      "name": "Learning to learn by gradient descent by gradient descent",
      "title": "Learning to Learn by Gradient Descent by Gradient Descent",
      "authors": "Marcin Andrychowicz, Misha Denil, Sergio Gomez, Matthew W. Hoffman, David Pfau, Tom Schaul, Brendan Shillingford, and Nando de Freitas",
      "year": 2016,
      "citation": "Marcin Andrychowicz, Misha Denil, Sergio Gomez, Matthew W. Hoffman, David Pfau, Tom Schaul, Brendan Shillingford, and Nando de Freitas. Learning to learn by gradient descent by gradient descent. In Advances in Neural Information Processing Systems, volume 29, 2016.",
      "url": "https://arxiv.org/abs/1606.04474",
      "urlSource": "arxiv",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§7.1.2 Architectures and Update Rules",
      "sourcePage": 39,
      "refPage": 54,
      "placements": [
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "andrychowicz2016learning"
    },
    {
      "ref": 11,
      "name": "HPO-B",
      "title": "HPO-B: A Large-Scale Reproducible Benchmark for Black-Box HPO Based on OpenML",
      "authors": "Sebastian Pineda Arango, Hadi S. Jomaa, Martin Wistuba, and Josif Grabocka",
      "year": 2021,
      "citation": "Sebastian Pineda Arango, Hadi S. Jomaa, Martin Wistuba, and Josif Grabocka. HPO-B: A large-scale reproducible benchmark for black-box HPO based on OpenML, 2021.",
      "url": "https://arxiv.org/abs/2106.06257",
      "urlSource": "arxiv",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§7.1.3 Parameter-Updating Post-Training",
      "sourcePage": 39,
      "refPage": 54,
      "placements": [
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "hpob2021"
    },
    {
      "ref": 12,
      "name": "CodeEvolve",
      "title": "CodeEvolve: An Open Source Evolutionary Coding Agent for Algorithmic Discovery and Optimization",
      "authors": "Henrique Assumpcao, Diego Ferreira, Leandro Campos, and Fabricio Murai",
      "year": 2025,
      "citation": "Henrique Assumpcao, Diego Ferreira, Leandro Campos, and Fabricio Murai. CodeEvolve: An open source evolutionary coding agent for algorithmic discovery and optimization. arXiv preprint arXiv:2510.14150, 2025.",
      "url": "https://arxiv.org/abs/2510.14150",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "figure",
      "families": [
        "Infrastructure"
      ],
      "category": "Evolutionary histories › Variation and strategy histories",
      "sourcePage": 17,
      "refPage": 54,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Evolutionary histories › Variation and strategy histories",
          "label": "CodeEvolve"
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§4.2",
          "page": 17,
          "level": "L1",
          "family": null,
          "path": "§4.2 Evolutionary Program Improvement"
        },
        {
          "type": "text",
          "where": "§4.6",
          "page": 22,
          "level": "L1",
          "family": null,
          "path": "§4.6 Direction Quality, Failure Modes, and the Boundary with L2"
        },
        {
          "type": "text",
          "where": "§7.4.1",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.1 Kernels and Tensor Programs"
        }
      ],
      "citekey": "codeevolve2025"
    },
    {
      "ref": 13,
      "name": "DEHB",
      "title": "DEHB: Evolutionary Hyperband for Scalable, Robust and Efficient Hyperparameter Optimization",
      "authors": "Noor Awad, Neeratyoy Mallik, and Frank Hutter",
      "year": 2021,
      "citation": "Noor Awad, Neeratyoy Mallik, and Frank Hutter. DEHB: Evolutionary hyperband for scalable, robust and efficient hyperparameter optimization. In Proceedings of the Thirtieth International Joint Conference on Artificial Intelligence, pages 2147--2153, 2021.",
      "url": "https://arxiv.org/abs/2105.09821",
      "urlSource": "arxiv",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§7.1.1 Configurations and Training Pipelines",
      "sourcePage": 38,
      "refPage": 54,
      "placements": [
        {
          "type": "text",
          "where": "§7.1.1",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.1 Configurations and Training Pipelines"
        }
      ],
      "citekey": "dehb2021"
    },
    {
      "ref": 14,
      "name": "ResearchAgent",
      "title": "ResearchAgent: Iterative Research Idea Generation over Scientific Literature with Large Language Models",
      "authors": "Jinheon Baek, Sujay Kumar Jauhar, Silviu Cucerzan, and Sung Ju Hwang",
      "year": 2024,
      "citation": "Jinheon Baek, Sujay Kumar Jauhar, Silviu Cucerzan, and Sung Ju Hwang. ResearchAgent: Iterative research idea generation over scientific literature with large language models. arXiv preprint arXiv:2404.07738, 2024.",
      "url": "https://arxiv.org/abs/2404.07738",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 21,
      "refPage": 55,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 45,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "baek2024researchagent"
    },
    {
      "ref": 15,
      "name": "Constitutional AI",
      "title": "Constitutional AI: Harmlessness from AI Feedback",
      "authors": "Yuntao Bai, Saurav Kadavath, Sandipan Kundu, Amanda Askell, Jackson Kernion, Andy Jones, Anna Chen, Anna Goldie, Azalia Mirhoseini, Cameron McKinnon, Carol Chen, Catherine Olsson, Christopher Olah, Danny Hernandez, Dawn Drain, Deep Ganguli, Dustin Li, Eli Tran-Johnson, Ethan Perez, Jamie Kerr, Jared Mueller, Jeffrey Ladish, Joshua Landau, Kamal Ndousse, Kamile Lukosuite, Liane Lovitt, Michael Sellitto, Nelson Elhage, Nicholas Schiefer, Noemi Mercado, Nova DasSarma, Robert Lasenby, Robin Larson, Sam Ringer, Scott Johnston, Shauna Kravec, Sheer El Showk, Stanislav Fort, Tamera Lanham, Timothy Telleen-Lawton, Tom Conerly, Tom Henighan, Tristan Hume, Samuel R. Bowman, Zac Hatfield-Dodds, Ben Mann, Dario Amodei, Nicholas Joseph, Sam McCandlish, Tom Brown, and Jared Kaplan",
      "year": 2022,
      "citation": "Yuntao Bai, Saurav Kadavath, Sandipan Kundu, Amanda Askell, Jackson Kernion, Andy Jones, Anna Chen, Anna Goldie, Azalia Mirhoseini, Cameron McKinnon, Carol Chen, Catherine Olsson, Christopher Olah, Danny Hernandez, Dawn Drain, Deep Ganguli, Dustin Li, Eli Tran-Johnson, Ethan Perez, Jamie Kerr, Jared Mueller, Jeffrey Ladish, Joshua Landau, Kamal Ndousse, Kamile Lukosuite, Liane Lovitt, Michael Sellitto, Nelson Elhage, Nicholas Schiefer, Noemi Mercado, Nova DasSarma, Robert Lasenby, Robin Larson, Sam Ringer, Scott Johnston, Shauna Kravec, Sheer El Showk, Stanislav Fort, Tamera Lanham, Timothy Telleen-Lawton, Tom Conerly, Tom Henighan, Tristan Hume, Samuel R. Bowman, Zac Hatfield-Dodds, Ben Mann, Dario Amodei, Nicholas Joseph, Sam McCandlish, Tom Brown, and Jared Kaplan. Constitutional AI: Harmlessness from AI feedback. arXiv preprint arXiv:2212.08073, 2022.",
      "url": "https://arxiv.org/abs/2212.08073",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3",
        "L2"
      ],
      "level": "L3",
      "basis": "table",
      "families": [
        "Learning"
      ],
      "category": "Learned preference evaluation and model judges",
      "sourcePage": 33,
      "refPage": 55,
      "placements": [
        {
          "type": "table",
          "where": "Table 5",
          "page": 33,
          "level": "L3",
          "family": null,
          "path": "Learned preference evaluation and model judges",
          "label": "Constitutional AI"
        },
        {
          "type": "table",
          "where": "Table 6",
          "page": 38,
          "level": "L3",
          "family": "Learning",
          "path": "Parameter-updating post-training",
          "label": "Constitutional AI"
        },
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Learned preference evaluation and model judges › Reward models and AI feedback",
          "label": "Constitutional AI"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Parameter-updating post-training",
          "label": "Constitutional AI",
          "starred": true
        },
        {
          "type": "text",
          "where": "§5.3",
          "page": 29,
          "level": "L2",
          "family": null,
          "path": "§5.3 Composition with Direction and Evaluation Control"
        },
        {
          "type": "text",
          "where": "§6.3",
          "page": 32,
          "level": "L3",
          "family": null,
          "path": "§6.3 Learned Preference Evaluation and Model Judges"
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "fieldsFrom": 5,
      "tableLabel": "Constitutional AI",
      "artifact": "critiques, revisions, preferences, learned reward",
      "human": "written constitution, seed helpfulness data",
      "citekey": "bai2022constitutional"
    },
    {
      "ref": 16,
      "name": "Accelerating neural architecture search using performance prediction",
      "title": "Accelerating Neural Architecture Search Using Performance Prediction",
      "authors": "Bowen Baker, Otkrist Gupta, Ramesh Raskar, and Nikhil Naik",
      "year": 2017,
      "citation": "Bowen Baker, Otkrist Gupta, Ramesh Raskar, and Nikhil Naik. Accelerating neural architecture search using performance prediction. arXiv preprint arXiv:1705.10823, 2017.",
      "url": "https://arxiv.org/abs/1705.10823",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "figure",
      "families": [
        "Learning"
      ],
      "category": "Performance histories › Architecture response surfaces",
      "sourcePage": 17,
      "refPage": 55,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Performance histories › Architecture response surfaces",
          "label": "performance prediction"
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "nasperformanceprediction2017"
    },
    {
      "ref": 17,
      "name": "Evaluating Sakana’s AI Scientist",
      "title": "Evaluating Sakana's AI Scientist: Bold Claims, Mixed Results, and a Promising Future?",
      "authors": "Joeran Beel, Min-Yen Kan, and Moritz Baumgart",
      "year": 2025,
      "citation": "Joeran Beel, Min-Yen Kan, and Moritz Baumgart. Evaluating sakana's AI scientist: Bold claims, mixed results, and a promising future? arXiv preprint arXiv:2502.14297, 2025.",
      "url": "https://arxiv.org/abs/2502.14297",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "figure",
      "families": [
        "Cross-family"
      ],
      "category": "Experimental histories › Research memory and experiment selection",
      "sourcePage": 17,
      "refPage": 55,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Experimental histories › Research memory and experiment selection",
          "label": "research-agent evaluation"
        },
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "sakanaeval2025"
    },
    {
      "ref": 18,
      "name": "Cosmopedia",
      "title": "Cosmopedia: How to Create Large-Scale Synthetic Data for Pre-Training",
      "authors": "Loubna Ben Allal, Anton Lozhkov, and Daniel van Strien",
      "year": 2024,
      "citation": "Loubna Ben Allal, Anton Lozhkov, and Daniel van Strien. Cosmopedia: How to create large-scale synthetic data for pre-training. Hugging Face Blog, March 2024.",
      "url": "https://huggingface.co/blog/cosmopedia",
      "urlSource": "publisher-page",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "§7.3.2 Augmentation, Synthesis, and Curricula",
      "sourcePage": 42,
      "refPage": 55,
      "placements": [
        {
          "type": "text",
          "where": "§7.3.2",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.2 Augmentation, Synthesis, and Curricula"
        }
      ],
      "citekey": "cosmopedia2024"
    },
    {
      "ref": 19,
      "name": "Random search for hyper-parameter optimization",
      "title": "Random Search for Hyper-Parameter Optimization",
      "authors": "James Bergstra and Yoshua Bengio",
      "year": 2012,
      "citation": "James Bergstra and Yoshua Bengio. Random search for hyper-parameter optimization. Journal of Machine Learning Research, 13(10):281--305, 2012.",
      "url": "http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.296.2005",
      "urlSource": "openalex",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Learning"
      ],
      "category": "§4.1 History-Conditioned Direction Selection",
      "sourcePage": 16,
      "refPage": 55,
      "placements": [
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§7.1.1",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.1 Configurations and Training Pipelines"
        }
      ],
      "citekey": "bergstra2012random"
    },
    {
      "ref": 20,
      "name": "Stitch",
      "title": "Top-down Synthesis for Library Learning",
      "authors": "Matthew Bowers, Theo X. Olausson, Lionel Wong, Gabriel Grand, Joshua B. Tenenbaum, Kevin Ellis, and Armando Solar-Lezama",
      "year": 2022,
      "citation": "Matthew Bowers, Theo X. Olausson, Lionel Wong, Gabriel Grand, Joshua B. Tenenbaum, Kevin Ellis, and Armando Solar-Lezama. Top-down synthesis for library learning. arXiv preprint arXiv:2211.16605, 2022.",
      "url": "https://arxiv.org/abs/2211.16605",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L2"
      ],
      "level": "L2",
      "basis": "table",
      "families": [
        "Inference"
      ],
      "category": "Available primitives (P)",
      "sourcePage": 26,
      "refPage": 55,
      "placements": [
        {
          "type": "table",
          "where": "Table 4",
          "page": 26,
          "level": "L2",
          "family": null,
          "path": "Available primitives (P)",
          "label": "Stitch"
        },
        {
          "type": "figure",
          "where": "Figure 6",
          "page": 25,
          "level": "L2",
          "path": "Available primitives (P) › Program-library construction",
          "label": "Stitch"
        },
        {
          "type": "text",
          "where": "§5.1",
          "page": 25,
          "level": "L2",
          "family": null,
          "path": "§5.1 Formalization and evaluation of AI-defined search spaces"
        },
        {
          "type": "text",
          "where": "§7.2.2",
          "page": 41,
          "level": null,
          "family": "Inference",
          "path": "§7.2.2 Agent, Tool, and Library Design"
        }
      ],
      "fieldsFrom": 4,
      "tableLabel": "Stitch",
      "artifact": "reusable functions that compress common program patterns",
      "human": "base DSL, primitives, valid expressions",
      "citekey": "stitch2022"
    },
    {
      "ref": 21,
      "name": "Measuring progress on scalable oversight for large language models",
      "title": "Measuring Progress on Scalable Oversight for Large Language Models",
      "authors": "Samuel R. Bowman, Jeeyoon Hyun, Ethan Perez, Edwin Chen, Craig Pettit, Scott Heiner, Kamile Lukosiute, Amanda Askell, Andy Jones, Anna Chen, Anna Goldie, Azalia Mirhoseini, Cameron McKinnon, Christopher Olah, Daniela Amodei, Dario Amodei, Dawn Drain, Dustin Li, Eli Tran-Johnson, Jackson Kernion, Jamie Kerr, Jared Mueller, Jeffrey Ladish, Joshua Landau, Kamal Ndousse, Liane Lovitt, Nelson Elhage, Nicholas Schiefer, Nicholas Joseph, Noemi Mercado, Nova DasSarma, Robin Larson, Sam McCandlish, Sandipan Kundu, Scott Johnston, Shauna Kravec, Sheer El Showk, Stanislav Fort, Timothy Telleen-Lawton, Tom Brown, Tom Henighan, Tristan Hume, Yuntao Bai, Zac Hatfield-Dodds, Ben Mann, and Jared Kaplan",
      "year": 2022,
      "citation": "Samuel R. Bowman, Jeeyoon Hyun, Ethan Perez, Edwin Chen, Craig Pettit, Scott Heiner, Kamile Lukosiute, Amanda Askell, Andy Jones, Anna Chen, Anna Goldie, Azalia Mirhoseini, Cameron McKinnon, Christopher Olah, Daniela Amodei, Dario Amodei, Dawn Drain, Dustin Li, Eli Tran-Johnson, Jackson Kernion, Jamie Kerr, Jared Mueller, Jeffrey Ladish, Joshua Landau, Kamal Ndousse, Liane Lovitt, Nelson Elhage, Nicholas Schiefer, Nicholas Joseph, Noemi Mercado, Nova DasSarma, Robin Larson, Sam McCandlish, Sandipan Kundu, Scott Johnston, Shauna Kravec, Sheer El Showk, Stanislav Fort, Timothy Telleen-Lawton, Tom Brown, Tom Henighan, Tristan Hume, Yuntao Bai, Zac Hatfield-Dodds, Ben Mann, and Jared Kaplan. Measuring progress on scalable oversight for large language models. arXiv preprint arXiv:2211.03540, 2022.",
      "url": "https://arxiv.org/abs/2211.03540",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence",
      "sourcePage": 35,
      "refPage": 55,
      "placements": [
        {
          "type": "text",
          "where": "§6.5",
          "page": 35,
          "level": "L3",
          "family": null,
          "path": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "bowman2022oversight"
    },
    {
      "ref": 22,
      "name": "Weak-to-strong generalization",
      "title": "Weak-to-Strong Generalization: Eliciting Strong Capabilities with Weak Supervision",
      "authors": "Collin Burns, Pavel Izmailov, Jan Hendrik Kirchner, Bowen Baker, Leo Gao, Leopold Aschenbrenner, Yining Chen, Adrien Ecoffet, Manas Joglekar, Jan Leike, Ilya Sutskever, and Jeff Wu",
      "year": 2023,
      "citation": "Collin Burns, Pavel Izmailov, Jan Hendrik Kirchner, Bowen Baker, Leo Gao, Leopold Aschenbrenner, Yining Chen, Adrien Ecoffet, Manas Joglekar, Jan Leike, Ilya Sutskever, and Jeff Wu. Weak-to-strong generalization: Eliciting strong capabilities with weak supervision. arXiv preprint arXiv:2312.09390, 2023.",
      "url": "https://arxiv.org/abs/2312.09390",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "figure",
      "families": [
        "Cross-family"
      ],
      "category": "Adaptive evaluation and oversight › Debate and AI-assisted oversight",
      "sourcePage": 32,
      "refPage": 55,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Adaptive evaluation and oversight › Debate and AI-assisted oversight",
          "label": "weak-to-strong generalization"
        },
        {
          "type": "text",
          "where": "§6.5",
          "page": 35,
          "level": "L3",
          "family": null,
          "path": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "burns2023weakstrong"
    },
    {
      "ref": 23,
      "name": "Once-for-All",
      "title": "Once-for-All: Train One Network and Specialize It for Efficient Deployment",
      "authors": "Han Cai, Chuang Gan, Tianzhe Wang, Zhekai Zhang, and Song Han",
      "year": 2020,
      "citation": "Han Cai, Chuang Gan, Tianzhe Wang, Zhekai Zhang, and Song Han. Once-for-all: Train one network and specialize it for efficient deployment. In International Conference on Learning Representations, 2020.",
      "url": "https://arxiv.org/abs/1908.09791",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Learning"
      ],
      "category": "AI4AI Learning › Architectures and update rules",
      "sourcePage": 37,
      "refPage": 55,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Architectures and update rules",
          "label": "Once-for-All",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "onceforall2020"
    },
    {
      "ref": 24,
      "name": "ProxylessNAS",
      "title": "ProxylessNAS: Direct Neural Architecture Search on Target Task and Hardware",
      "authors": "Han Cai, Ligeng Zhu, and Song Han",
      "year": 2019,
      "citation": "Han Cai, Ligeng Zhu, and Song Han. ProxylessNAS: Direct neural architecture search on target task and hardware. In International Conference on Learning Representations, 2019.",
      "url": "https://arxiv.org/abs/1812.00332",
      "urlSource": "arxiv",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§7.1.2 Architectures and Update Rules",
      "sourcePage": 38,
      "refPage": 56,
      "placements": [
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "proxylessnas2019"
    },
    {
      "ref": 25,
      "name": "LATM",
      "title": "Large Language Models as Tool Makers",
      "authors": "Tianle Cai, Xuezhi Wang, Tengyu Ma, Xinyun Chen, and Denny Zhou",
      "year": 2023,
      "citation": "Tianle Cai, Xuezhi Wang, Tengyu Ma, Xinyun Chen, and Denny Zhou. Large language models as tool makers. arXiv preprint arXiv:2305.17126, 2023.",
      "url": "https://arxiv.org/abs/2305.17126",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L2"
      ],
      "level": "L2",
      "basis": "table",
      "families": [
        "Inference"
      ],
      "category": "Available primitives (P)",
      "sourcePage": 26,
      "refPage": 56,
      "placements": [
        {
          "type": "table",
          "where": "Table 4",
          "page": 26,
          "level": "L2",
          "family": null,
          "path": "Available primitives (P)",
          "label": "LATM"
        },
        {
          "type": "figure",
          "where": "Figure 6",
          "page": 25,
          "level": "L2",
          "path": "Available primitives (P) › Reusable tool construction",
          "label": "LATM"
        },
        {
          "type": "text",
          "where": "§5.1",
          "page": 25,
          "level": "L2",
          "family": null,
          "path": "§5.1 Formalization and evaluation of AI-defined search spaces"
        },
        {
          "type": "text",
          "where": "§7.2.2",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.2 Agent, Tool, and Library Design"
        }
      ],
      "fieldsFrom": 4,
      "tableLabel": "LATM",
      "artifact": "verified Python tools cached for reuse",
      "human": "Python runtime, tool interface, task examples",
      "citekey": "latm2023"
    },
    {
      "ref": 26,
      "name": "Open problems and fundamental limitations of reinforcement learning from human feedback",
      "title": "Open Problems and Fundamental Limitations of Reinforcement Learning from Human Feedback",
      "authors": "Stephen Casper, Xander Davies, Claudia Shi, Thomas Krendl Gilbert, Jeremy Scheurer, Javier Rando, Rachel Freedman, Tomasz Korbak, David Lindner, Pedro Freire, Tony Wang, Samuel Marks, Charbel-Raphael Segerie, Micah Carroll, Andi Peng, Phillip Christoffersen, Mehul Damani, Stewart Slocum, Usman Anwar, Anand Siththaranjan, Max Nadeau, Eric J. Michaud, Jacob Pfau, Dmitrii Krasheninnikov, Xin Chen, Lauro Langosco, Peter Hase, Erdem Byk, Anca Dragan, David Krueger, Dorsa Sadigh, and Dylan Hadfield-Menell",
      "year": 2023,
      "citation": "Stephen Casper, Xander Davies, Claudia Shi, Thomas Krendl Gilbert, Jeremy Scheurer, Javier Rando, Rachel Freedman, Tomasz Korbak, David Lindner, Pedro Freire, Tony Wang, Samuel Marks, Charbel-Raphael Segerie, Micah Carroll, Andi Peng, Phillip Christoffersen, Mehul Damani, Stewart Slocum, Usman Anwar, Anand Siththaranjan, Max Nadeau, Eric J. Michaud, Jacob Pfau, Dmitrii Krasheninnikov, Xin Chen, Lauro Langosco, Peter Hase, Erdem Byk, Anca Dragan, David Krueger, Dorsa Sadigh, and Dylan Hadfield-Menell. Open problems and fundamental limitations of reinforcement learning from human feedback. Transactions on Machine Learning Research, 2023.",
      "url": "https://arxiv.org/abs/2307.15217",
      "urlSource": "arxiv",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 8,
      "refPage": 56,
      "placements": [],
      "citekey": "casper2023rlhf"
    },
    {
      "ref": 27,
      "name": "MLE-bench",
      "title": "MLE-Bench: Evaluating Machine Learning Agents on Machine Learning Engineering",
      "authors": "Jun Shern Chan, Neil Chowdhury, Oliver Jaffe, James Aung, Dane Sherburn, Evan Mays, Giulio Starace, Kevin Liu, Leon Maksin, Tejal Patwardhan, Lilian Weng, and Aleksander Madry",
      "year": 2024,
      "citation": "Jun Shern Chan, Neil Chowdhury, Oliver Jaffe, James Aung, Dane Sherburn, Evan Mays, Giulio Starace, Kevin Liu, Leon Maksin, Tejal Patwardhan, Lilian Weng, and Aleksander Madry. MLE-bench: Evaluating machine learning agents on machine learning engineering. arXiv preprint arXiv:2410.07095, 2024.",
      "url": "https://arxiv.org/abs/2410.07095",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 21,
      "refPage": 56,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": null,
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§5.2",
          "page": 28,
          "level": null,
          "family": null,
          "path": "§5.2 Evaluation and Minimum Evidence for L2"
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 40,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "mlebench2024"
    },
    {
      "ref": 28,
      "name": "CodeT",
      "title": "CodeT: Code Generation with Generated Tests",
      "authors": "Bei Chen, Fengji Zhang, Anh Nguyen, Daoguang Zan, Zeqi Lin, Jian-Guang Lou, and Weizhu Chen",
      "year": 2023,
      "citation": "Bei Chen, Fengji Zhang, Anh Nguyen, Daoguang Zan, Zeqi Lin, Jian-Guang Lou, and Weizhu Chen. CodeT: Code generation with generated tests. In International Conference on Learning Representations, 2023.",
      "url": "https://arxiv.org/abs/2207.10397",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "table",
      "families": [
        "Inference"
      ],
      "category": "Executable evaluation artifacts",
      "sourcePage": 33,
      "refPage": 56,
      "placements": [
        {
          "type": "table",
          "where": "Table 5",
          "page": 33,
          "level": "L3",
          "family": null,
          "path": "Executable evaluation artifacts",
          "label": "CodeT"
        },
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Executable evaluation artifacts › Generated tests and oracles",
          "label": "CodeT"
        },
        {
          "type": "text",
          "where": "§6.2",
          "page": 31,
          "level": "L3",
          "family": null,
          "path": "§6.2 Executable Evaluation Artifacts"
        },
        {
          "type": "text",
          "where": "§7.2.3",
          "page": 41,
          "level": null,
          "family": "Inference",
          "path": "§7.2.3 Test-Time Reasoning and Serving"
        }
      ],
      "fieldsFrom": 5,
      "tableLabel": "CodeT",
      "artifact": "generated test suite; dual execution-agreement score",
      "human": "problem statement, language runtime, execution semantics",
      "citekey": "codet2022"
    },
    {
      "ref": 29,
      "name": "Data-Juicer",
      "title": "Data-Juicer: A One-Stop Data Processing System for Large Language Models",
      "authors": "Daoyuan Chen, Yilun Huang, Zhijian Ma, Hesen Chen, Xuchen Pan, Ce Ge, Dawei Gao, Yuexiang Xie, Zhaoyang Liu, Jinyang Gao, Yaliang Li, Bolin Ding, and Jingren Zhou",
      "year": 2023,
      "citation": "Daoyuan Chen, Yilun Huang, Zhijian Ma, Hesen Chen, Xuchen Pan, Ce Ge, Dawei Gao, Yuexiang Xie, Zhaoyang Liu, Jinyang Gao, Yaliang Li, Bolin Ding, and Jingren Zhou. Data-juicer: A one-stop data processing system for large language models. arXiv preprint arXiv:2309.02033, 2023.",
      "url": "https://arxiv.org/abs/2309.02033",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "§7.3.2 Augmentation, Synthesis, and Curricula",
      "sourcePage": 43,
      "refPage": 56,
      "placements": [
        {
          "type": "text",
          "where": "§7.3.2",
          "page": 43,
          "level": null,
          "family": "Data",
          "path": "§7.3.2 Augmentation, Synthesis, and Curricula"
        }
      ],
      "citekey": "datajuicer2023"
    },
    {
      "ref": 30,
      "name": "AlpaGasus",
      "title": "AlpaGasus: Training a Better Alpaca with Fewer Data",
      "authors": "Lichang Chen, Shiyang Li, Jun Yan, Hai Wang, Kalpa Gunaratna, Vikas Yadav, Zheng Tang, Vijay Srinivasan, Tianyi Zhou, Heng Huang, and Hongxia Jin",
      "year": 2024,
      "citation": "Lichang Chen, Shiyang Li, Jun Yan, Hai Wang, Kalpa Gunaratna, Vikas Yadav, Zheng Tang, Vijay Srinivasan, Tianyi Zhou, Heng Huang, and Hongxia Jin. AlpaGasus: Training a better alpaca with fewer data. In International Conference on Learning Representations (ICLR), 2024.",
      "url": "https://arxiv.org/abs/2307.08701",
      "urlSource": "arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "AI4AI Data › Selection and curation",
      "sourcePage": 37,
      "refPage": 56,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Data",
          "path": "AI4AI Data › Selection and curation",
          "label": "AlpaGasus",
          "starred": true
        },
        {
          "type": "text",
          "where": "§7.3.1",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.1 Selection and Curation"
        }
      ],
      "citekey": "alpagasus2024"
    },
    {
      "ref": 31,
      "name": "Recursive self-improvement in AI",
      "title": "Recursive Self-Improvement in AI: From Bounded Self-Refinement to Autonomous Research Loops",
      "authors": "Mingguang Chen, Licheng Wang, and Bo Qu",
      "year": 2026,
      "citation": "Mingguang Chen, Licheng Wang, and Bo Qu. Recursive self-improvement in AI: From bounded self-refinement to autonomous research loops. arXiv preprint arXiv:2607.07663, 2026.",
      "url": "https://arxiv.org/abs/2607.07663",
      "urlSource": "manuscript",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 6,
      "refPage": 56,
      "placements": [],
      "citekey": "chen2026rsi"
    },
    {
      "ref": 32,
      "name": "S3",
      "title": "Searching the Search Space of Vision Transformer",
      "authors": "Minghao Chen, Kan Wu, Bolin Ni, Houwen Peng, Bei Liu, Jianlong Fu, Hongyang Chao, and Haibin Ling",
      "year": 2021,
      "citation": "Minghao Chen, Kan Wu, Bolin Ni, Houwen Peng, Bei Liu, Jianlong Fu, Hongyang Chao, and Haibin Ling. Searching the search space of vision transformer. In Advances in Neural Information Processing Systems, volume 34, pages 8714--8726, 2021.",
      "url": "https://arxiv.org/abs/2111.14725",
      "urlSource": "arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L2"
      ],
      "level": "L2",
      "basis": "table",
      "families": [
        "Learning"
      ],
      "category": "Admissibility constraints (K)",
      "sourcePage": 26,
      "refPage": 56,
      "placements": [
        {
          "type": "table",
          "where": "Table 4",
          "page": 26,
          "level": "L2",
          "family": null,
          "path": "Admissibility constraints (K)",
          "label": "S3"
        },
        {
          "type": "table",
          "where": "Table 6",
          "page": 38,
          "level": "L2",
          "family": "Learning",
          "path": "Architectures and update rules",
          "label": "S3"
        },
        {
          "type": "figure",
          "where": "Figure 6",
          "page": 25,
          "level": "L2",
          "path": "Admissibility constraints (K) › Admissible design value sets",
          "label": "S3"
        },
        {
          "type": "text",
          "where": "§5.1",
          "page": 25,
          "level": "L2",
          "family": null,
          "path": "§5.1 Formalization and evaluation of AI-defined search spaces"
        },
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "fieldsFrom": 4,
      "tableLabel": "S3",
      "artifact": "evolved value sets for depth, width, heads, windows, MLP, Q–K–V",
      "human": "ViT blocks, design dimensions, initial choices, budgets",
      "citekey": "s3vit2021"
    },
    {
      "ref": 33,
      "name": "Ai4research: A survey of artificial intelligence for scientific research",
      "title": "Ai4research: A Survey of Artificial Intelligence for Scientific Research",
      "authors": "Qiguang Chen, Mingda Yang, Libo Qin, Jinhao Liu, Zheng Yan, Jiannan Guan, Dengyun Peng, Yiyan Ji, Hanjing Li, Mengkang Hu, Yimeng Zhang, Yihao Liang, Yuhang Zhou, Jiaqi Wang, Zhi Chen, and Wanxiang Che",
      "year": 2026,
      "citation": "Qiguang Chen, Mingda Yang, Libo Qin, Jinhao Liu, Zheng Yan, Jiannan Guan, Dengyun Peng, Yiyan Ji, Hanjing Li, Mengkang Hu, Yimeng Zhang, Yihao Liang, Yuhang Zhou, Jiaqi Wang, Zhi Chen, and Wanxiang Che. Ai4research: A survey of artificial intelligence for scientific research. Science China Information Sciences, 69(10):201101, 2026.",
      "url": "https://arxiv.org/abs/2507.01903",
      "urlSource": "arxiv",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 8,
      "refPage": 56,
      "placements": [],
      "citekey": "chen2025ai4research"
    },
    {
      "ref": 34,
      "name": "AutoTVM",
      "title": "Learning to Optimize Tensor Programs",
      "authors": "Tianqi Chen, Lianmin Zheng, Eddie Yan, Ziheng Jiang, Thierry Moreau, Luis Ceze, Carlos Guestrin, and Arvind Krishnamurthy",
      "year": 2018,
      "citation": "Tianqi Chen, Lianmin Zheng, Eddie Yan, Ziheng Jiang, Thierry Moreau, Luis Ceze, Carlos Guestrin, and Arvind Krishnamurthy. Learning to optimize tensor programs. In Proceedings of the 32nd International Conference on Neural Information Processing Systems, NIPS'18, pages 3393--3404, Red Hook, NY, USA, 2018. Curran Associates Inc.",
      "url": "https://arxiv.org/abs/1805.08166",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Infrastructure"
      ],
      "category": "AI4AI Infrastructure › Kernels and tensor programs",
      "sourcePage": 37,
      "refPage": 56,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Infrastructure",
          "path": "AI4AI Infrastructure › Kernels and tensor programs",
          "label": "AutoTVM",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.4.1",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.1 Kernels and Tensor Programs"
        }
      ],
      "citekey": "autotvm2018"
    },
    {
      "ref": 35,
      "name": "AgentVerse",
      "title": "AgentVerse: Facilitating Multi-Agent Collaboration and Exploring Emergent Behaviors",
      "authors": "Weize Chen, Yusheng Su, Jingwei Zuo, Cheng Yang, Chenfei Yuan, Chi-Min Chan, Heyang Yu, Yaxi Lu, Yi-Hsin Hung, Chen Qian, Yujia Qin, Xin Cong, Ruobing Xie, Zhiyuan Liu, Maosong Sun, and Jie Zhou",
      "year": 2023,
      "citation": "Weize Chen, Yusheng Su, Jingwei Zuo, Cheng Yang, Chenfei Yuan, Chi-Min Chan, Heyang Yu, Yaxi Lu, Yi-Hsin Hung, Chen Qian, Yujia Qin, Xin Cong, Ruobing Xie, Zhiyuan Liu, Maosong Sun, and Jie Zhou. AgentVerse: Facilitating multi-agent collaboration and exploring emergent behaviors. arXiv preprint arXiv:2308.10848, 2023.",
      "url": "https://arxiv.org/abs/2308.10848",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 21,
      "refPage": 56,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "agentverse2023"
    },
    {
      "ref": 36,
      "name": "Symbolic discovery of optimization algorithms",
      "title": "Symbolic Discovery of Optimization Algorithms",
      "authors": "Xiangning Chen, Chen Liang, Da Huang, Esteban Real, Kaiyuan Wang, Yao Liu, Hieu Pham, Xuanyi Dong, Thang Luong, Cho-Jui Hsieh, Yifeng Lu, and Quoc V. Le",
      "year": 2023,
      "citation": "Xiangning Chen, Chen Liang, Da Huang, Esteban Real, Kaiyuan Wang, Yao Liu, Hieu Pham, Xuanyi Dong, Thang Luong, Cho-Jui Hsieh, Yifeng Lu, and Quoc V. Le. Symbolic discovery of optimization algorithms. arXiv preprint arXiv:2302.06675, 2023.",
      "url": "https://arxiv.org/abs/2302.06675",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§7.1.2 Architectures and Update Rules",
      "sourcePage": 39,
      "refPage": 57,
      "placements": [
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "symbolicopt2023"
    },
    {
      "ref": 37,
      "name": "Graph-augmented evolution",
      "title": "GAE: Graph-Augmented Evolution for Scientific Discovery via Reinforcement Optimization",
      "authors": "Xuanzhou Chen and Taoli Cheng",
      "year": 2026,
      "citation": "Xuanzhou Chen and Taoli Cheng. GAE: Graph-augmented evolution for scientific discovery via reinforcement optimization. arXiv preprint arXiv:2607.10127, 2026.",
      "url": "https://arxiv.org/abs/2607.10127",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Infrastructure"
      ],
      "category": "§4.2 Evolutionary Program Improvement",
      "sourcePage": 18,
      "refPage": 57,
      "placements": [
        {
          "type": "text",
          "where": "§4.2",
          "page": 18,
          "level": "L1",
          "family": null,
          "path": "§4.2 Evolutionary Program Improvement"
        },
        {
          "type": "text",
          "where": "§7.4.1",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.1 Kernels and Tensor Programs"
        }
      ],
      "citekey": "gae2026"
    },
    {
      "name": "MetaKernelBench",
      "url": "https://arxiv.org/abs/2610.05014",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Infrastructure"
      ],
      "category": "§7.4.3 Logic, RTL, and Physical Design",
      "placements": [
        {
          "type": "text",
          "where": "§7.4.3",
          "page": 45,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.3 Logic, RTL, and Physical Design"
        }
      ],
      "ref": 38,
      "title": "MetaKernelBench: Measuring GPU Kernel Knowledge Transfer Beyond Code",
      "authors": "Xueyi Chen, Shiyu Liu, Xin Jin, Yuhua Zheng, Xin Li, Haolei Bai, Junhan Zhu, and Huan Wang",
      "year": 2026,
      "citation": "Xueyi Chen, Shiyu Liu, Xin Jin, Yuhua Zheng, Xin Li, Haolei Bai, Junhan Zhu, and Huan Wang. Metakernelbench: Measuring gpu kernel knowledge transfer beyond code, 2026.",
      "citekey": "chen2026metakernelbench",
      "refPage": 57,
      "sourcePage": 45
    },
    {
      "ref": 39,
      "name": "ChatUniTest",
      "title": "ChatUniTest: A Framework for LLM-Based Test Generation",
      "authors": "Yinghao Chen, Zehao Hu, Chen Zhi, Junxiao Han, Shuiguang Deng, and Jianwei Yin",
      "year": 2024,
      "citation": "Yinghao Chen, Zehao Hu, Chen Zhi, Junxiao Han, Shuiguang Deng, and Jianwei Yin. ChatUniTest: A framework for LLM-based test generation. arXiv preprint arXiv:2305.04764, 2024.",
      "url": "https://arxiv.org/abs/2305.04764",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "figure",
      "families": [
        "Cross-family"
      ],
      "category": "Executable evaluation artifacts › Generated tests and oracles",
      "sourcePage": 32,
      "refPage": 57,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Executable evaluation artifacts › Generated tests and oracles",
          "label": "ChatUniTest"
        },
        {
          "type": "text",
          "where": "§6.2",
          "page": 31,
          "level": "L3",
          "family": null,
          "path": "§6.2 Executable Evaluation Artifacts"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "chatunitest2023"
    },
    {
      "ref": 40,
      "name": "AI4AI-Bench",
      "title": "AI4AI-Bench: Benchmarking LLM Agents in Algorithmic Design for Recursive Self-Improvement",
      "authors": "Yizhe Chi, Wenyi Li, Deyao Hong, Xiaoqiu Wang, Mingju Gao, Kaisen Yang, Bingxiang He, Youjie Zheng, Calvin Xiao, and Qinhuai Na",
      "year": 2026,
      "citation": "Yizhe Chi, Wenyi Li, Deyao Hong, Xiaoqiu Wang, Mingju Gao, Kaisen Yang, Bingxiang He, Youjie Zheng, Calvin Xiao, and Qinhuai Na. AI4AI-Bench: Benchmarking LLM agents in algorithmic design for recursive self-improvement. arXiv preprint arXiv:2608.20318, 2026.",
      "url": "https://arxiv.org/abs/2608.20318",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "Benchmarks › AI4AI Learning",
      "sourcePage": 48,
      "refPage": 57,
      "placements": [
        {
          "type": "table",
          "where": "Table 10",
          "page": 48,
          "family": "Learning",
          "path": "Benchmarks › AI4AI Learning",
          "label": "AI4AI-Bench",
          "level": null
        },
        {
          "type": "text",
          "where": "§6.5",
          "page": 36,
          "level": null,
          "family": null,
          "path": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence"
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "chi2026ai4aibench",
      "task": "Redesign training algorithms",
      "protocol": "Rerun edited code from scratch against the original algorithm; hidden evaluator",
      "evidence": "Capability gain from the revised learning procedure",
      "fieldsFrom": 10
    },
    {
      "ref": 41,
      "name": "Deep reinforcement learning from human preferences",
      "title": "Deep Reinforcement Learning from Human Preferences",
      "authors": "Paul F. Christiano, Jan Leike, Tom B. Brown, Miljan Martic, Shane Legg, and Dario Amodei",
      "year": 2017,
      "citation": "Paul F. Christiano, Jan Leike, Tom B. Brown, Miljan Martic, Shane Legg, and Dario Amodei. Deep reinforcement learning from human preferences. In Advances in Neural Information Processing Systems, volume 30, 2017.",
      "url": "https://arxiv.org/abs/1706.03741",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "figure",
      "families": [
        "Learning"
      ],
      "category": "Learned preference evaluation and model judges › Reward models and AI feedback",
      "sourcePage": 32,
      "refPage": 57,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Learned preference evaluation and model judges › Reward models and AI feedback",
          "label": "preference RMs"
        },
        {
          "type": "text",
          "where": "§6.3",
          "page": 32,
          "level": "L3",
          "family": null,
          "path": "§6.3 Learned Preference Evaluation and Model Judges"
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "christiano2017preferences"
    },
    {
      "ref": 42,
      "name": "Evolving reinforcement learning algorithms",
      "title": "Evolving Reinforcement Learning Algorithms",
      "authors": "John D. Co-Reyes, Yingjie Miao, Daiyi Peng, Esteban Real, Sergey Levine, Quoc V. Le, Honglak Lee, and Aleksandra Faust",
      "year": 2021,
      "citation": "John D. Co-Reyes, Yingjie Miao, Daiyi Peng, Esteban Real, Sergey Levine, Quoc V. Le, Honglak Lee, and Aleksandra Faust. Evolving reinforcement learning algorithms. In International Conference on Learning Representations, 2021.",
      "url": "https://arxiv.org/abs/2101.03958",
      "urlSource": "openalex-arxiv",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§7.1.2 Architectures and Update Rules",
      "sourcePage": 39,
      "refPage": 57,
      "placements": [
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "coreyes2021evolving"
    },
    {
      "ref": 43,
      "name": "Training verifiers to solve math word problems",
      "title": "Training Verifiers to Solve Math Word Problems",
      "authors": "Karl Cobbe, Vineet Kosaraju, Mohammad Bavarian, Mark Chen, Heewoo Jun, Lukasz Kaiser, Matthias Plappert, Jerry Tworek, Jacob Hilton, Reiichiro Nakano, Christopher Hesse, and John Schulman",
      "year": 2021,
      "citation": "Karl Cobbe, Vineet Kosaraju, Mohammad Bavarian, Mark Chen, Heewoo Jun, Lukasz Kaiser, Matthias Plappert, Jerry Tworek, Jacob Hilton, Reiichiro Nakano, Christopher Hesse, and John Schulman. Training verifiers to solve math word problems. arXiv preprint arXiv:2110.14168, 2021.",
      "url": "https://arxiv.org/abs/2110.14168",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "chapter",
      "families": [
        "Inference"
      ],
      "category": "§6.2 Executable Evaluation Artifacts",
      "sourcePage": 32,
      "refPage": 57,
      "placements": [
        {
          "type": "text",
          "where": "§6.2",
          "page": 32,
          "level": "L3",
          "family": null,
          "path": "§6.2 Executable Evaluation Artifacts"
        },
        {
          "type": "text",
          "where": "§7.2.3",
          "page": 41,
          "level": null,
          "family": "Inference",
          "path": "§7.2.3 Test-Time Reasoning and Serving"
        }
      ],
      "citekey": "cobbe2021verifiers"
    },
    {
      "ref": 44,
      "name": "Reward model ensembles help mitigate overoptimization",
      "title": "Reward Model Ensembles Help Mitigate Overoptimization",
      "authors": "Thomas Coste, Usman Anwar, Robert Kirk, and David Krueger",
      "year": 2023,
      "citation": "Thomas Coste, Usman Anwar, Robert Kirk, and David Krueger. Reward model ensembles help mitigate overoptimization. arXiv preprint arXiv:2310.02743, 2023.",
      "url": "https://arxiv.org/abs/2310.02743",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence",
      "sourcePage": 35,
      "refPage": 57,
      "placements": [
        {
          "type": "text",
          "where": "§6.5",
          "page": 35,
          "level": "L3",
          "family": null,
          "path": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "coste2023ensembles"
    },
    {
      "ref": 45,
      "name": "AutoAugment",
      "title": "AutoAugment: Learning Augmentation Strategies from Data",
      "authors": "Ekin D. Cubuk, Barret Zoph, Dandelion Mane, Vijay Vasudevan, and Quoc V. Le",
      "year": 2019,
      "citation": "Ekin D. Cubuk, Barret Zoph, Dandelion Mane, Vijay Vasudevan, and Quoc V. Le. AutoAugment: Learning augmentation strategies from data. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 113--123, 2019.",
      "url": "https://doi.org/10.1109/cvpr.2019.00020",
      "urlSource": "openalex-doi",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Data"
      ],
      "category": "Augmentation and feature construction",
      "sourcePage": 43,
      "refPage": 57,
      "placements": [
        {
          "type": "table",
          "where": "Table 8",
          "page": 43,
          "level": "L1",
          "family": "Data",
          "path": "Augmentation and feature construction",
          "label": "AutoAugment"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Data",
          "path": "AI4AI Data › Augmentation, synthesis, and curricula",
          "label": "AutoAugment",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.3.2",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.2 Augmentation, Synthesis, and Curricula"
        }
      ],
      "fieldsFrom": 8,
      "tableLabel": "AutoAugment",
      "artifact": "op pairs, probabilities, magnitudes",
      "human": "operation set, magnitude bins, child model",
      "citekey": "autoaugment2019"
    },
    {
      "ref": 46,
      "name": "CompilerGym",
      "title": "CompilerGym: Robust, Performant Compiler Optimization Environments for AI Research",
      "authors": "Chris Cummins, Bram Wasti, Jiadong Guo, Brandon Cui, Jason Ansel, Sahir Gomez, Somya Jain, Jia Liu, Olivier Teytaud, Benoit Steiner, Yuandong Tian, and Hugh Leather",
      "year": 2021,
      "citation": "Chris Cummins, Bram Wasti, Jiadong Guo, Brandon Cui, Jason Ansel, Sahir Gomez, Somya Jain, Jia Liu, Olivier Teytaud, Benoit Steiner, Yuandong Tian, and Hugh Leather. CompilerGym: Robust, performant compiler optimization environments for AI research, 2021.",
      "url": "https://arxiv.org/abs/2109.08267",
      "urlSource": "openalex-arxiv",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Infrastructure"
      ],
      "category": "§7.4.3 Logic, RTL, and Physical Design",
      "sourcePage": 45,
      "refPage": 57,
      "placements": [
        {
          "type": "text",
          "where": "§7.4.3",
          "page": 45,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.3 Logic, RTL, and Physical Design"
        }
      ],
      "citekey": "compilergym2021"
    },
    {
      "ref": 47,
      "name": "Input-adaptive allocation",
      "title": "Learning How Hard to Think: Input-Adaptive Allocation of LM Computation",
      "authors": "Mehul Damani, Idan Shenfeld, Andi Peng, Andreea Bobu, and Jacob Andreas",
      "year": 2025,
      "citation": "Mehul Damani, Idan Shenfeld, Andi Peng, Andreea Bobu, and Jacob Andreas. Learning how hard to think: Input-adaptive allocation of LM computation. In International Conference on Learning Representations (ICLR), 2025.",
      "url": "https://arxiv.org/abs/2410.04707",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Inference"
      ],
      "category": "Test-time reasoning and serving",
      "sourcePage": 41,
      "refPage": 57,
      "placements": [
        {
          "type": "table",
          "where": "Table 7",
          "page": 41,
          "level": "L1",
          "family": "Inference",
          "path": "Test-time reasoning and serving",
          "label": "Input-adaptive allocation"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Inference",
          "path": "AI4AI Inference › Test-time reasoning and serving",
          "label": "input-adaptive compute allocation",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.2.3",
          "page": 41,
          "level": null,
          "family": "Inference",
          "path": "§7.2.3 Test-Time Reasoning and Serving"
        }
      ],
      "fieldsFrom": 7,
      "tableLabel": "Input-adaptive allocation",
      "artifact": "learned per-input compute budget",
      "human": "budget grid, cost model, task mix",
      "citekey": "damani2025adaptive"
    },
    {
      "ref": 48,
      "name": "RLPrompt",
      "title": "RLPrompt: Optimizing Discrete Text Prompts with Reinforcement Learning",
      "authors": "Mingkai Deng, Jianyu Wang, Cheng-Ping Hsieh, Yihan Wang, Han Guo, Tianmin Shu, Meng Song, Eric P. Xing, and Zhiting Hu",
      "year": 2022,
      "citation": "Mingkai Deng, Jianyu Wang, Cheng-Ping Hsieh, Yihan Wang, Han Guo, Tianmin Shu, Meng Song, Eric P. Xing, and Zhiting Hu. RLPrompt: Optimizing discrete text prompts with reinforcement learning. arXiv preprint arXiv:2205.12548, 2022.",
      "url": "https://arxiv.org/abs/2205.12548",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Inference"
      ],
      "category": "AI4AI Inference › Prompt and workflow optimization",
      "sourcePage": 37,
      "refPage": 57,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Inference",
          "path": "AI4AI Inference › Prompt and workflow optimization",
          "label": "RLPrompt",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.3",
          "page": 19,
          "level": "L1",
          "family": null,
          "path": "§4.3 Prompt, Pipeline, and Workflow Optimization"
        },
        {
          "type": "text",
          "where": "§7.2.1",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.1 Prompt and Workflow Optimization"
        }
      ],
      "citekey": "rlprompt2022"
    },
    {
      "ref": 49,
      "name": "PAIRED",
      "title": "Emergent Complexity and Zero-Shot Transfer via Unsupervised Environment Design",
      "authors": "Michael Dennis, Natasha Jaques, Eugene Vinitsky, Alexandre Bayen, Stuart J. Russell, Andrew Critch, and Sergey Levine",
      "year": 2020,
      "citation": "Michael Dennis, Natasha Jaques, Eugene Vinitsky, Alexandre Bayen, Stuart J. Russell, Andrew Critch, and Sergey Levine. Emergent complexity and zero-shot transfer via unsupervised environment design. In Advances in Neural Information Processing Systems, volume 33, 2020.",
      "url": "https://arxiv.org/abs/2012.02096",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "table",
      "families": [
        "Data"
      ],
      "category": "Adaptive evaluation and oversight",
      "sourcePage": 33,
      "refPage": 57,
      "placements": [
        {
          "type": "table",
          "where": "Table 5",
          "page": 33,
          "level": "L3",
          "family": null,
          "path": "Adaptive evaluation and oversight",
          "label": "PAIRED†"
        },
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Adaptive evaluation and oversight › Adaptive tests and environments",
          "label": "PAIRED"
        },
        {
          "type": "text",
          "where": "§6.5",
          "page": 34,
          "level": "L3",
          "family": null,
          "path": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence"
        },
        {
          "type": "text",
          "where": "§7.3.2",
          "page": 43,
          "level": null,
          "family": "Data",
          "path": "§7.3.2 Augmentation, Synthesis, and Curricula"
        }
      ],
      "fieldsFrom": 5,
      "tableLabel": "PAIRED†",
      "artifact": "regret-shaped adaptive environment",
      "human": "generator interface, agents, task dynamics",
      "citekey": "dennis2020paired"
    },
    {
      "name": "Φ-Bench",
      "url": "https://arxiv.org/abs/2609.10226",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Infrastructure"
      ],
      "category": "Benchmarks › AI4AI Infrastructure",
      "placements": [
        {
          "type": "table",
          "where": "Table 10",
          "page": 48,
          "family": "Infrastructure",
          "path": "Benchmarks › AI4AI Infrastructure",
          "label": "Φ-Bench",
          "level": null
        },
        {
          "type": "text",
          "where": "§7.4.3",
          "page": 45,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.3 Logic, RTL, and Physical Design"
        }
      ],
      "ref": 50,
      "title": "Φ-Bench: Can Large Language Models Engineer the Infrastructure That Powers Them?",
      "authors": "Leilei Ding, Shumin Wang, Yuting Huang, Fanqi Wan, Yinmin Zhang, Qi Han, Yiming Xu, Feiyuan Zhang, Xiaomeng Chu, Guoliang You, Wuyang Zhang, Daxin Jiang, and Yanyong Zhang",
      "year": 2026,
      "citation": "Leilei Ding, Shumin Wang, Yuting Huang, Fanqi Wan, Yinmin Zhang, Qi Han, Yiming Xu, Feiyuan Zhang, Xiaomeng Chu, Guoliang You, Wuyang Zhang, Daxin Jiang, and Yanyong Zhang. -bench: Can large language models engineer the infrastructure that powers them?, 2026.",
      "citekey": "ding2026phibench",
      "refPage": 58,
      "task": "Engineer training and inference infrastructure",
      "protocol": "Implement and optimize real-repository tasks; gate rewards on correctness and anti-hacking checks",
      "evidence": "Repository-level functionality and performance",
      "fieldsFrom": 10,
      "sourcePage": 48
    },
    {
      "ref": 51,
      "name": "Enhancing chat language models by scaling high-quality instructional conversations",
      "title": "Enhancing Chat Language Models by Scaling High-Quality Instructional Conversations",
      "authors": "Ning Ding, Yulin Chen, Bokai Xu, Yujia Qin, Zhi Zheng, Shengding Hu, Zhiyuan Liu, Maosong Sun, and Bowen Zhou",
      "year": 2023,
      "citation": "Ning Ding, Yulin Chen, Bokai Xu, Yujia Qin, Zhi Zheng, Shengding Hu, Zhiyuan Liu, Maosong Sun, and Bowen Zhou. Enhancing chat language models by scaling high-quality instructional conversations. arXiv preprint arXiv:2305.14233, 2023.",
      "url": "https://arxiv.org/abs/2305.14233",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "§7.3.2 Augmentation, Synthesis, and Curricula",
      "sourcePage": 42,
      "refPage": 58,
      "placements": [
        {
          "type": "text",
          "where": "§7.3.2",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.2 Augmentation, Synthesis, and Curricula"
        }
      ],
      "citekey": "ultrachat2023"
    },
    {
      "ref": 52,
      "name": "Autonomous research agents: A survey of ai scientists and the verification gap",
      "title": "Autonomous Research Agents: A Survey of AI Scientists and the Verification Gap",
      "authors": "Tianyu Ding, Aditya Nannapaneni, Bingfan Liu, and Ling Zhang",
      "year": 2026,
      "citation": "Tianyu Ding, Aditya Nannapaneni, Bingfan Liu, and Ling Zhang. Autonomous research agents: A survey of AI scientists and the verification gap, 2026.",
      "url": "https://arxiv.org/abs/2608.05179",
      "urlSource": "openalex-arxiv",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 8,
      "refPage": 58,
      "placements": [],
      "citekey": "verificationgap2026"
    },
    {
      "ref": 53,
      "name": "NATS-Bench",
      "title": "NATS-Bench: Benchmarking NAS Algorithms for Architecture Topology and Size",
      "authors": "Xuanyi Dong, Lu Liu, Katarzyna Musial, and Bogdan Gabrys",
      "year": 2021,
      "citation": "Xuanyi Dong, Lu Liu, Katarzyna Musial, and Bogdan Gabrys. NATS-Bench: Benchmarking NAS algorithms for architecture topology and size. IEEE Transactions on Pattern Analysis and Machine Intelligence, 2021.",
      "url": "https://arxiv.org/abs/2009.00437",
      "urlSource": "openalex-arxiv",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "Experimental histories › Reproducible search replay",
      "sourcePage": 17,
      "refPage": 58,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": null,
          "path": "Experimental histories › Reproducible search replay",
          "label": "NATS-Bench"
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": null,
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§5.2",
          "page": 28,
          "level": null,
          "family": null,
          "path": "§5.2 Evaluation and Minimum Evidence for L2"
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "natsbench2021"
    },
    {
      "ref": 54,
      "name": "NAS-Bench-201",
      "title": "NAS-Bench-201: Extending the Scope of Reproducible Neural Architecture Search",
      "authors": "Xuanyi Dong and Yi Yang",
      "year": 2020,
      "citation": "Xuanyi Dong and Yi Yang. NAS-Bench-201: Extending the scope of reproducible neural architecture search. arXiv preprint arXiv:2001.00326, 2020.",
      "url": "https://arxiv.org/abs/2001.00326",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "Benchmarks › AI4AI Learning",
      "sourcePage": 48,
      "refPage": 58,
      "placements": [
        {
          "type": "table",
          "where": "Table 10",
          "page": 48,
          "family": "Learning",
          "path": "Benchmarks › AI4AI Learning",
          "label": "NAS-Bench-201",
          "level": null
        },
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": null,
          "path": "Experimental histories › Reproducible search replay",
          "label": "NAS-Bench-201"
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": null,
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§5.2",
          "page": 28,
          "level": null,
          "family": null,
          "path": "§5.2 Evaluation and Minimum Evidence for L2"
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "nasbench2012020",
      "task": "Select neural architectures for training",
      "protocol": "Query tabulated outcomes under a shared cell space and training recipe",
      "evidence": "Accuracy or regret versus search cost",
      "fieldsFrom": 10
    },
    {
      "ref": 55,
      "name": "A survey on the optimization of large language model-based agents",
      "title": "A Survey on the Optimization of Large Language Model-Based Agents",
      "authors": "Shangheng Du, Jiabao Zhao, Jinxin Shi, Zhentao Xie, Xin Jiang, Yanhong Bai, and Liang He",
      "year": 2026,
      "citation": "Shangheng Du, Jiabao Zhao, Jinxin Shi, Zhentao Xie, Xin Jiang, Yanhong Bai, and Liang He. A survey on the optimization of large language model-based agents. ACM Computing Surveys, 58(9):1--37, 2026.",
      "url": "https://arxiv.org/abs/2503.12434",
      "urlSource": "openalex-arxiv",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 8,
      "refPage": 58,
      "placements": [],
      "citekey": "du2026agentopt"
    },
    {
      "ref": 56,
      "name": "TransNAS-Bench-101",
      "title": "TransNAS-Bench-101: Improving Transferability and Generalizability of Cross-Task Neural Architecture Search",
      "authors": "Yawen Duan, Xin Chen, Hang Xu, Zewei Chen, Xiaodan Liang, Tong Zhang, and Zhenguo Li",
      "year": 2021,
      "citation": "Yawen Duan, Xin Chen, Hang Xu, Zewei Chen, Xiaodan Liang, Tong Zhang, and Zhenguo Li. TransNAS-Bench-101: Improving transferability and generalizability of cross-task neural architecture search. arXiv preprint arXiv:2105.11871, 2021.",
      "url": "https://arxiv.org/abs/2105.11871",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§7.1.3 Parameter-Updating Post-Training",
      "sourcePage": 39,
      "refPage": 58,
      "placements": [
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "transnasbench2021"
    },
    {
      "ref": 57,
      "name": "From code to play",
      "title": "From Code to Play: Benchmarking Program Search for Games Using Large Language Models",
      "authors": "Manuel Eberhardinger, James Goodman, Alexander Dockhorn, Diego Perez-Liebana, Raluca D. Gaina, Duygu Cakmak, Setareh Maghsudi, and Simon Lucas",
      "year": 2024,
      "citation": "Manuel Eberhardinger, James Goodman, Alexander Dockhorn, Diego Perez-Liebana, Raluca D. Gaina, Duygu Cakmak, Setareh Maghsudi, and Simon Lucas. From code to play: Benchmarking program search for games using large language models. arXiv preprint arXiv:2412.04057, 2024.",
      "url": "https://arxiv.org/abs/2412.04057",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Inference"
      ],
      "category": "§4.2 Evolutionary Program Improvement",
      "sourcePage": 18,
      "refPage": 58,
      "placements": [
        {
          "type": "text",
          "where": "§4.2",
          "page": 18,
          "level": null,
          "family": null,
          "path": "§4.2 Evolutionary Program Improvement"
        },
        {
          "type": "text",
          "where": "§7.2.3",
          "page": 42,
          "level": null,
          "family": "Inference",
          "path": "§7.2.3 Test-Time Reasoning and Serving"
        }
      ],
      "citekey": "codetoplay2024"
    },
    {
      "ref": 58,
      "name": "HPOBench",
      "title": "HPOBench: A Collection of Reproducible Multi-Fidelity Benchmark Problems for HPO",
      "authors": "Katharina Eggensperger, Philipp Muller, Neeratyoy Mallik, Matthias Feurer, Rene Sass, Aaron Klein, Noor Awad, Marius Lindauer, and Frank Hutter",
      "year": 2021,
      "citation": "Katharina Eggensperger, Philipp Muller, Neeratyoy Mallik, Matthias Feurer, Rene Sass, Aaron Klein, Noor Awad, Marius Lindauer, and Frank Hutter. HPOBench: A collection of reproducible multi-fidelity benchmark problems for HPO, 2021.",
      "url": "https://arxiv.org/abs/2109.06716",
      "urlSource": "openalex-arxiv",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "Benchmarks › AI4AI Learning",
      "sourcePage": 48,
      "refPage": 58,
      "placements": [
        {
          "type": "table",
          "where": "Table 10",
          "page": 48,
          "family": "Learning",
          "path": "Benchmarks › AI4AI Learning",
          "label": "HPOBench",
          "level": null
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "hpobench2021",
      "task": "Tune hyperparameters and allocate trial budgets",
      "protocol": "Compare optimizers on common datasets, spaces, and fidelities",
      "evidence": "Anytime performance and cost to reach target quality",
      "fieldsFrom": 10
    },
    {
      "ref": 59,
      "name": "Helping or herding? reward model ensembles mitigate but do not eliminate reward hacking",
      "title": "Helping or Herding? Reward Model Ensembles Mitigate but Do Not Eliminate Reward Hacking",
      "authors": "Jacob Eisenstein, Chirag Nagpal, Alekh Agarwal, Ahmad Beirami, Alex D'Amour, elax DJ Dvijotham, Adam Fisch, Katherine Heller, Stephen Pfohl, Deepak Ramachandran, Peter Shaw, and Jonathan Berant",
      "year": 2023,
      "citation": "Jacob Eisenstein, Chirag Nagpal, Alekh Agarwal, Ahmad Beirami, Alex D'Amour, elax DJ Dvijotham, Adam Fisch, Katherine Heller, Stephen Pfohl, Deepak Ramachandran, Peter Shaw, and Jonathan Berant. Helping or herding? Reward model ensembles mitigate but do not eliminate reward hacking. arXiv preprint arXiv:2312.09244, 2023.",
      "url": "https://arxiv.org/abs/2312.09244",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence",
      "sourcePage": 35,
      "refPage": 58,
      "placements": [
        {
          "type": "text",
          "where": "§6.5",
          "page": 35,
          "level": "L3",
          "family": null,
          "path": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "eisenstein2023herding"
    },
    {
      "ref": 60,
      "name": "EC²",
      "title": "Learning Libraries of Subroutines for Neurally-Guided Bayesian Program Induction",
      "authors": "Kevin Ellis, Lucas Morales, Mathias Sable-Meyer, Armando Solar-Lezama, and Joshua B. Tenenbaum",
      "year": 2018,
      "citation": "Kevin Ellis, Lucas Morales, Mathias Sable-Meyer, Armando Solar-Lezama, and Joshua B. Tenenbaum. Learning libraries of subroutines for neurally-guided bayesian program induction. In Advances in Neural Information Processing Systems, volume 31, 2018.",
      "url": "https://papers.nips.cc/paper/8006-learning-libraries-of-subroutines-for-neurallyguided-bayesian-program-induction.pdf",
      "urlSource": "openalex-landing",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L2"
      ],
      "level": "L2",
      "basis": "figure",
      "families": [
        "Inference"
      ],
      "category": "Available primitives (P) › Program-library construction",
      "sourcePage": 25,
      "refPage": 58,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 6",
          "page": 25,
          "level": "L2",
          "path": "Available primitives (P) › Program-library construction",
          "label": "EC²"
        },
        {
          "type": "text",
          "where": "§5.1",
          "page": 25,
          "level": "L2",
          "family": null,
          "path": "§5.1 Formalization and evaluation of AI-defined search spaces"
        },
        {
          "type": "text",
          "where": "§7.2.2",
          "page": 41,
          "level": null,
          "family": "Inference",
          "path": "§7.2.2 Agent, Tool, and Library Design"
        }
      ],
      "citekey": "ec2library2018"
    },
    {
      "ref": 61,
      "name": "DreamCoder",
      "title": "DreamCoder: Growing Generalizable, Interpretable Knowledge with Wake-Sleep Bayesian Program Learning",
      "authors": "Kevin Ellis, Catherine Wong, Maxwell Nye, Mathias Sable-Meyer, Luc Cary, Lucas Morales, Luke Hewitt, Armando Solar-Lezama, and Joshua B. Tenenbaum",
      "year": 2020,
      "citation": "Kevin Ellis, Catherine Wong, Maxwell Nye, Mathias Sable-Meyer, Luc Cary, Lucas Morales, Luke Hewitt, Armando Solar-Lezama, and Joshua B. Tenenbaum. DreamCoder: Growing generalizable, interpretable knowledge with wake-sleep bayesian program learning. arXiv preprint arXiv:2006.08381, 2020.",
      "url": "https://arxiv.org/abs/2006.08381",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L2"
      ],
      "level": "L2",
      "basis": "table",
      "families": [
        "Inference"
      ],
      "category": "Available primitives (P)",
      "sourcePage": 26,
      "refPage": 58,
      "placements": [
        {
          "type": "table",
          "where": "Table 4",
          "page": 26,
          "level": "L2",
          "family": null,
          "path": "Available primitives (P)",
          "label": "DreamCoder"
        },
        {
          "type": "table",
          "where": "Table 7",
          "page": 41,
          "level": "L2",
          "family": "Inference",
          "path": "Agent, tool, and library design",
          "label": "DreamCoder"
        },
        {
          "type": "figure",
          "where": "Figure 6",
          "page": 25,
          "level": "L2",
          "path": "Available primitives (P) › Program-library construction",
          "label": "DreamCoder"
        },
        {
          "type": "text",
          "where": "§5.1",
          "page": 25,
          "level": "L2",
          "family": null,
          "path": "§5.1 Formalization and evaluation of AI-defined search spaces"
        },
        {
          "type": "text",
          "where": "§7.2.2",
          "page": 41,
          "level": null,
          "family": "Inference",
          "path": "§7.2.2 Agent, Tool, and Library Design"
        }
      ],
      "fieldsFrom": 4,
      "tableLabel": "DreamCoder",
      "artifact": "probabilistic DSL enriched with reusable abstractions",
      "human": "base DSL, primitives, execution semantics",
      "citekey": "dreamcoder2020"
    },
    {
      "ref": 62,
      "name": "Neural architecture search: A survey",
      "title": "Neural Architecture Search: A Survey",
      "authors": "Thomas Elsken, Jan Hendrik Metzen, and Frank Hutter",
      "year": 2019,
      "citation": "Thomas Elsken, Jan Hendrik Metzen, and Frank Hutter. Neural architecture search: A survey. Journal of Machine Learning Research, 20(55):1--21, 2019.",
      "url": "https://arxiv.org/abs/1808.05377",
      "urlSource": "openalex-arxiv",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [],
      "category": "§4.1 History-Conditioned Direction Selection",
      "sourcePage": 16,
      "refPage": 58,
      "placements": [
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        }
      ],
      "citekey": "elsken2019neural"
    },
    {
      "ref": 63,
      "name": "JEST",
      "title": "Data Curation via Joint Example Selection Further Accelerates Multimodal Learning",
      "authors": "Talfan Evans, Nikhil Parthasarathy, Hamza Merzic, and Olivier J. Henaff",
      "year": 2024,
      "citation": "Talfan Evans, Nikhil Parthasarathy, Hamza Merzic, and Olivier J. Henaff. Data curation via joint example selection further accelerates multimodal learning. arXiv preprint arXiv:2406.17711, 2024.",
      "url": "https://arxiv.org/abs/2406.17711",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "AI4AI Data › Selection and curation",
      "sourcePage": 37,
      "refPage": 59,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Data",
          "path": "AI4AI Data › Selection and curation",
          "label": "JEST",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.3.1",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.1 Selection and Curation"
        }
      ],
      "citekey": "jest2024"
    },
    {
      "ref": 64,
      "name": "AutoKD",
      "title": "AutoKD: Automatic Knowledge Distillation into a Student Architecture Family",
      "authors": "Roy Henha Eyono, Fabio Maria Carlucci, Pedro M. Esperanca, Binxin Ru, and Philip H. S. Torr",
      "year": 2021,
      "citation": "Roy Henha Eyono, Fabio Maria Carlucci, Pedro M. Esperanca, Binxin Ru, and Philip H. S. Torr. AutoKD: Automatic knowledge distillation into a student architecture family. arXiv preprint arXiv:2111.03555, 2021.",
      "url": "https://arxiv.org/abs/2111.03555",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "AI4AI Learning › Parameter-updating post-training",
      "sourcePage": 37,
      "refPage": 59,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Parameter-updating post-training",
          "label": "AutoKD",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "autokd2021"
    },
    {
      "ref": 65,
      "name": "BOHB",
      "title": "BOHB: Robust and Efficient Hyperparameter Optimization at Scale",
      "authors": "Stefan Falkner, Aaron Klein, and Frank Hutter",
      "year": 2018,
      "citation": "Stefan Falkner, Aaron Klein, and Frank Hutter. BOHB: Robust and efficient hyperparameter optimization at scale. In Proceedings of the 35th International Conference on Machine Learning, volume 80 of Proceedings of Machine Learning Research, pages 1437--1446, 2018.",
      "url": "https://arxiv.org/abs/1807.01774",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Learning"
      ],
      "category": "Performance histories",
      "sourcePage": 18,
      "refPage": 59,
      "placements": [
        {
          "type": "table",
          "where": "Table 3",
          "page": 18,
          "level": "L1",
          "family": null,
          "path": "Performance histories",
          "label": "BOHB"
        },
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Performance histories › Budget and learning curves",
          "label": "BOHB"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Configurations and training pipelines",
          "label": "BOHB",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§7.1.1",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.1 Configurations and Training Pipelines"
        }
      ],
      "fieldsFrom": 3,
      "tableLabel": "BOHB",
      "artifact": "configuration and next budget",
      "historyRead": "scores, budgets, model-based density estimates",
      "citekey": "bohb2018"
    },
    {
      "ref": 66,
      "name": "A comprehensive survey of self-evolving AI agents: A new paradigm bridging foundation models and lifelong agentic systems",
      "title": "A Comprehensive Survey of Self-Evolving AI Agents: A New Paradigm Bridging Foundation Models and Lifelong Agentic Systems",
      "authors": "Jinyuan Fang, Yanwen Peng, Xi Zhang, Yingxu Wang, Xinhao Yi, Guibin Zhang, Yi Xu, Bin Wu, Siwei Liu, Zihao Li, Zhaochun Ren, Nikos Aletras, Xi Wang, Han Zhou, and Zaiqiao Meng",
      "year": 2025,
      "citation": "Jinyuan Fang, Yanwen Peng, Xi Zhang, Yingxu Wang, Xinhao Yi, Guibin Zhang, Yi Xu, Bin Wu, Siwei Liu, Zihao Li, Zhaochun Ren, Nikos Aletras, Xi Wang, Han Zhou, and Zaiqiao Meng. A comprehensive survey of self-evolving AI agents: A new paradigm bridging foundation models and lifelong agentic systems. arXiv preprint arXiv:2508.07407, 2025.",
      "url": "https://arxiv.org/abs/2508.07407",
      "urlSource": "manuscript",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 5,
      "refPage": 59,
      "placements": [],
      "citekey": "fang2025selfevolving"
    },
    {
      "ref": 67,
      "name": "AlphaTensor",
      "title": "Discovering Faster Matrix Multiplication Algorithms with Reinforcement Learning",
      "authors": "Alhussein Fawzi, Matej Balog, Aja Huang, Thomas Hubert, Bernardino Romera-Paredes, Mohammadamin Barekatain, Alexander Novikov, Francisco J. R. Ruiz, Julian Schrittwieser, Grzegorz Swirszcz, David Silver, Demis Hassabis, and Pushmeet Kohli",
      "year": 2022,
      "citation": "Alhussein Fawzi, Matej Balog, Aja Huang, Thomas Hubert, Bernardino Romera-Paredes, Mohammadamin Barekatain, Alexander Novikov, Francisco J. R. Ruiz, Julian Schrittwieser, Grzegorz Swirszcz, David Silver, Demis Hassabis, and Pushmeet Kohli. Discovering faster matrix multiplication algorithms with reinforcement learning. Nature, 610:47--53, 2022.",
      "url": "https://doi.org/10.1038/s41586-022-05172-4",
      "urlSource": "openalex-doi",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Infrastructure"
      ],
      "category": "Algorithms, kernels, and tensor programs",
      "sourcePage": 45,
      "refPage": 59,
      "placements": [
        {
          "type": "table",
          "where": "Table 9",
          "page": 45,
          "level": "L1",
          "family": "Infrastructure",
          "path": "Algorithms, kernels, and tensor programs",
          "label": "AlphaTensor"
        },
        {
          "type": "text",
          "where": "§4.5",
          "page": 22,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.4.1",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.1 Kernels and Tensor Programs"
        }
      ],
      "fieldsFrom": 9,
      "tableLabel": "AlphaTensor",
      "artifact": "matrix-multiplication algorithms",
      "human": "tensor formulation, action space, objective",
      "citekey": "fawzi2022alphatensor"
    },
    {
      "ref": 68,
      "name": "Levels of autonomy for AI agents",
      "title": "Levels of Autonomy for AI Agents",
      "authors": "K. J. Kevin Feng, David W. McDonald, and Amy X. Zhang",
      "year": 2025,
      "citation": "K. J. Kevin Feng, David W. McDonald, and Amy X. Zhang. Levels of autonomy for AI agents. arXiv preprint arXiv:2506.12469, 2025.",
      "url": "https://arxiv.org/abs/2506.12469",
      "urlSource": "manuscript",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 8,
      "refPage": 59,
      "placements": [],
      "citekey": "feng2025levels"
    },
    {
      "ref": 69,
      "name": "PromptBreeder",
      "title": "Promptbreeder: Self-Referential Self-Improvement via Prompt Evolution",
      "authors": "Chrisantha Fernando, Dylan Sunil Banarse, Henryk Michalewski, Simon Osindero, and Tim Rocktaschel",
      "year": 2024,
      "citation": "Chrisantha Fernando, Dylan Sunil Banarse, Henryk Michalewski, Simon Osindero, and Tim Rocktaschel. Promptbreeder: Self-referential self-improvement via prompt evolution. In Proceedings of the 41st International Conference on Machine Learning, volume 235 of Proceedings of Machine Learning Research, pages 13481--13544, 2024.",
      "url": "https://arxiv.org/abs/2309.16797",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Inference"
      ],
      "category": "Evolutionary histories",
      "sourcePage": 18,
      "refPage": 59,
      "placements": [
        {
          "type": "table",
          "where": "Table 3",
          "page": 18,
          "level": "L1",
          "family": null,
          "path": "Evolutionary histories",
          "label": "PromptBreeder"
        },
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Evolutionary histories › Variation and strategy histories",
          "label": "PromptBreeder"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Inference",
          "path": "AI4AI Inference › Prompt and workflow optimization",
          "label": "Promptbreeder",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§4.2",
          "page": 17,
          "level": "L1",
          "family": null,
          "path": "§4.2 Evolutionary Program Improvement"
        },
        {
          "type": "text",
          "where": "§7.2.1",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.1 Prompt and Workflow Optimization"
        }
      ],
      "fieldsFrom": 3,
      "tableLabel": "PromptBreeder",
      "artifact": "parent prompt and mutation strategy",
      "historyRead": "task prompts, mutation prompts, fitness history",
      "citekey": "fernando2024promptbreeder"
    },
    {
      "ref": 70,
      "name": "Auto-sklearn 2.0",
      "title": "Auto-Sklearn 2.0: Hands-Free AutoML via Meta-Learning",
      "authors": "Matthias Feurer, Katharina Eggensperger, Stefan Falkner, Marius Lindauer, and Frank Hutter",
      "year": 2022,
      "citation": "Matthias Feurer, Katharina Eggensperger, Stefan Falkner, Marius Lindauer, and Frank Hutter. Auto-sklearn 2.0: Hands-free AutoML via meta-learning. Journal of Machine Learning Research, 23(261):1--61, 2022.",
      "url": "https://arxiv.org/abs/2007.04074",
      "urlSource": "openalex-arxiv",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§7.1.1 Configurations and Training Pipelines",
      "sourcePage": 38,
      "refPage": 59,
      "placements": [
        {
          "type": "text",
          "where": "§7.1.1",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.1 Configurations and Training Pipelines"
        }
      ],
      "citekey": "autosklearn22022"
    },
    {
      "ref": 71,
      "name": "auto-sklearn",
      "title": "Efficient and Robust Automated Machine Learning",
      "authors": "Matthias Feurer, Aaron Klein, Katharina Eggensperger, Jost Tobias Springenberg, Manuel Blum, and Frank Hutter",
      "year": 2015,
      "citation": "Matthias Feurer, Aaron Klein, Katharina Eggensperger, Jost Tobias Springenberg, Manuel Blum, and Frank Hutter. Efficient and robust automated machine learning. In Advances in Neural Information Processing Systems, volume 28, pages 2962--2970, 2015.",
      "url": "https://papers.nips.cc/paper/2015/file/11d0e6287202fced83f79975ec59a3a6-Paper.pdf",
      "urlSource": "openalex-landing",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Learning"
      ],
      "category": "Configurations and training pipelines",
      "sourcePage": 38,
      "refPage": 59,
      "placements": [
        {
          "type": "table",
          "where": "Table 6",
          "page": 38,
          "level": "L1",
          "family": "Learning",
          "path": "Configurations and training pipelines",
          "label": "auto-sklearn"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Configurations and training pipelines",
          "label": "auto-sklearn",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§7.1.1",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.1 Configurations and Training Pipelines"
        }
      ],
      "fieldsFrom": 6,
      "tableLabel": "auto-sklearn",
      "artifact": "pipeline, hyperparameters, ensemble",
      "human": "pipeline grammar, meta-tasks, validation metric",
      "citekey": "feurer2015efficient"
    },
    {
      "ref": 72,
      "name": "Model-agnostic meta-learning for fast adaptation of deep networks",
      "title": "Model-Agnostic Meta-Learning for Fast Adaptation of Deep Networks",
      "authors": "Chelsea Finn, Pieter Abbeel, and Sergey Levine",
      "year": 2017,
      "citation": "Chelsea Finn, Pieter Abbeel, and Sergey Levine. Model-agnostic meta-learning for fast adaptation of deep networks. In Proceedings of the 34th International Conference on Machine Learning, volume 70 of Proceedings of Machine Learning Research, pages 1126--1135, 2017.",
      "url": "https://arxiv.org/abs/1703.03400",
      "urlSource": "openalex-arxiv",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§7.1.2 Architectures and Update Rules",
      "sourcePage": 39,
      "refPage": 59,
      "placements": [
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "finn2017maml"
    },
    {
      "ref": 73,
      "name": "HERO",
      "title": "Overcoming the Weakest-Link Effect in LLM-Driven Program Optimization via Heterogeneous Edit Recombination",
      "authors": "Jingwen Fu, Zhen Liu, Yuhan Liu, He Zhang, and Nanning Zheng",
      "year": 2026,
      "citation": "Jingwen Fu, Zhen Liu, Yuhan Liu, He Zhang, and Nanning Zheng. Overcoming the weakest-link effect in LLM-driven program optimization via heterogeneous edit recombination. arXiv preprint arXiv:2607.28947, 2026.",
      "url": "https://arxiv.org/abs/2607.28947",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Inference"
      ],
      "category": "AI4AI Inference › Parameter-free agent and tool design",
      "sourcePage": 37,
      "refPage": 59,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Inference",
          "path": "AI4AI Inference › Parameter-free agent and tool design",
          "label": "HERO",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.2.2",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.2 Agent, Tool, and Library Design"
        }
      ],
      "citekey": "fu2026hero"
    },
    {
      "ref": 74,
      "name": "Do two AI scientists agree?",
      "title": "Do Two AI Scientists Agree?",
      "authors": "Xinghong Fu, Ziming Liu, and Max Tegmark",
      "year": 2025,
      "citation": "Xinghong Fu, Ziming Liu, and Max Tegmark. Do two AI scientists agree? arXiv preprint arXiv:2504.02822, 2025.",
      "url": "https://arxiv.org/abs/2504.02822",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 22,
      "refPage": 59,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 22,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "twoaiscientists2025"
    },
    {
      "ref": 75,
      "name": "GPT4AIGChip",
      "title": "GPT4AIGChip: Towards next-Generation AI Accelerator Design Automation via Large Language Models",
      "authors": "Yonggan Fu, Yongan Zhang, Zhongzhi Yu, Sixu Li, Zhifan Ye, Chaojian Li, Cheng Wan, and Yingyan Celine Lin",
      "year": 2023,
      "citation": "Yonggan Fu, Yongan Zhang, Zhongzhi Yu, Sixu Li, Zhifan Ye, Chaojian Li, Cheng Wan, and Yingyan Celine Lin. GPT4AIGChip: Towards next-generation AI accelerator design automation via large language models. arXiv preprint arXiv:2309.10730, 2023.",
      "url": "https://arxiv.org/abs/2309.10730",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Infrastructure"
      ],
      "category": "§7.4.3 Logic, RTL, and Physical Design",
      "sourcePage": 44,
      "refPage": 59,
      "placements": [
        {
          "type": "text",
          "where": "§7.4.3",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.3 Logic, RTL, and Physical Design"
        }
      ],
      "citekey": "gpt4aigchip2023"
    },
    {
      "ref": 76,
      "name": "MLReplicate",
      "title": "MLReplicate: Benchmarking Autonomous Research Systems for Machine Learning Reproducibility",
      "authors": "Sasi Kiran Gaddipati, Diyana Muhammed, Farhana Keya, Gollam Rabby, and Soren Auer",
      "year": 2026,
      "citation": "Sasi Kiran Gaddipati, Diyana Muhammed, Farhana Keya, Gollam Rabby, and Soren Auer. MLReplicate: Benchmarking autonomous research systems for machine learning reproducibility. arXiv preprint arXiv:2605.16616, 2026.",
      "url": "https://arxiv.org/abs/2605.16616",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning",
        "Cross-family"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 22,
      "refPage": 60,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 22,
          "level": null,
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 40,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "mlreplicate2026"
    },
    {
      "ref": 77,
      "name": "DataComp",
      "title": "DataComp: In Search of the next Generation of Multimodal Datasets",
      "authors": "Samir Yitzhak Gadre, Gabriel Ilharco, Alex Fang, Jonathan Hayase, Georgios Smyrnis, Thao Nguyen, Ryan Marten, Mitchell Wortsman, Dhruba Ghosh, Jieyu Zhang, Eyal Orgad, Rahim Entezari, Giannis Daras, Sarah Pratt, Vivek Ramanujan, Yonatan Bitton, Kalyani Marathe, Stephen Mussmann, Richard Vencu, Mehdi Cherti, Ranjay Krishna, Pang Wei Koh, Olga Saukh, Alexander Ratner, Shuran Song, Hannaneh Hajishirzi, Ali Farhadi, Romain Beaumont, Sewoong Oh, Alex Dimakis, Jenia Jitsev, Yair Carmon, Vaishaal Shankar, and Ludwig Schmidt",
      "year": 2023,
      "citation": "Samir Yitzhak Gadre, Gabriel Ilharco, Alex Fang, Jonathan Hayase, Georgios Smyrnis, Thao Nguyen, Ryan Marten, Mitchell Wortsman, Dhruba Ghosh, Jieyu Zhang, Eyal Orgad, Rahim Entezari, Giannis Daras, Sarah Pratt, Vivek Ramanujan, Yonatan Bitton, Kalyani Marathe, Stephen Mussmann, Richard Vencu, Mehdi Cherti, Ranjay Krishna, Pang Wei Koh, Olga Saukh, Alexander Ratner, Shuran Song, Hannaneh Hajishirzi, Ali Farhadi, Romain Beaumont, Sewoong Oh, Alex Dimakis, Jenia Jitsev, Yair Carmon, Vaishaal Shankar, and Ludwig Schmidt. DataComp: In search of the next generation of multimodal datasets. In Advances in Neural Information Processing Systems, volume 36, pages 27092--27112, 2023.",
      "url": "https://arxiv.org/abs/2304.14108",
      "urlSource": "openalex-arxiv",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "Benchmarks › AI4AI Data",
      "sourcePage": 48,
      "refPage": 60,
      "placements": [
        {
          "type": "table",
          "where": "Table 10",
          "page": 48,
          "family": "Data",
          "path": "Benchmarks › AI4AI Data",
          "label": "DataComp",
          "level": null
        },
        {
          "type": "text",
          "where": "§7.3.2",
          "page": 43,
          "level": null,
          "family": "Data",
          "path": "§7.3.2 Augmentation, Synthesis, and Curricula"
        }
      ],
      "citekey": "datacomp2023",
      "task": "Select or filter multimodal training data",
      "protocol": "Train CLIP with a shared recipe and compute scale",
      "evidence": "Downstream gains from the submitted dataset",
      "fieldsFrom": 10
    },
    {
      "ref": 78,
      "name": "AgentScope",
      "title": "AgentScope: A Flexible yet Robust Multi-Agent Platform",
      "authors": "Dawei Gao, Zitao Li, Xuchen Pan, Weirui Kuang, Zhijian Ma, Bingchen Qian, Fei Wei, Wenhao Zhang, Yuexiang Xie, Daoyuan Chen, Liuyi Yao, Hongyi Peng, Zeyu Zhang, Lin Zhu, Chen Cheng, Hongzhu Shi, Yaliang Li, Bolin Ding, and Jingren Zhou",
      "year": 2024,
      "citation": "Dawei Gao, Zitao Li, Xuchen Pan, Weirui Kuang, Zhijian Ma, Bingchen Qian, Fei Wei, Wenhao Zhang, Yuexiang Xie, Daoyuan Chen, Liuyi Yao, Hongyi Peng, Zeyu Zhang, Lin Zhu, Chen Cheng, Hongzhu Shi, Yaliang Li, Bolin Ding, and Jingren Zhou. AgentScope: A flexible yet robust multi-agent platform. arXiv preprint arXiv:2402.14034, 2024.",
      "url": "https://arxiv.org/abs/2402.14034",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 21,
      "refPage": 60,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "agentscope2024"
    },
    {
      "ref": 79,
      "name": "A survey of self-evolving agents: What, when, how, and where to evolve on the path to artificial super intelligence",
      "title": "A Survey of Self-Evolving Agents: What, When, How, and Where to Evolve on the Path to Artificial Super Intelligence",
      "authors": "Huan-ang Gao, Jiayi Geng, Wenyue Hua, Mengkang Hu, Xinzhe Juan, Hongzhang Liu, Shilong Liu, Jiahao Qiu, Xuan Qi, Qihan Ren, Yiran Wu, Hongru Wang, Han Xiao, Yuhang Zhou, Shaokun Zhang, Jiayi Zhang, Jinyu Xiang, Yixiong Fang, Qiwen Zhao, Dongrui Liu, Cheng Qian, Zhenhailong Wang, Minda Hu, Huazheng Wang, Qingyun Wu, Heng Ji, and Mengdi Wang",
      "year": 2026,
      "citation": "Huan-ang Gao, Jiayi Geng, Wenyue Hua, Mengkang Hu, Xinzhe Juan, Hongzhang Liu, Shilong Liu, Jiahao Qiu, Xuan Qi, Qihan Ren, Yiran Wu, Hongru Wang, Han Xiao, Yuhang Zhou, Shaokun Zhang, Jiayi Zhang, Jinyu Xiang, Yixiong Fang, Qiwen Zhao, Dongrui Liu, Cheng Qian, Zhenhailong Wang, Minda Hu, Huazheng Wang, Qingyun Wu, Heng Ji, and Mengdi Wang. A survey of self-evolving agents: What, when, how, and where to evolve on the path to artificial super intelligence. Transactions on Machine Learning Research, 2026.",
      "url": "https://arxiv.org/abs/2507.21046",
      "urlSource": "manuscript",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 5,
      "refPage": 60,
      "placements": [],
      "citekey": "gao2025selfevolving"
    },
    {
      "ref": 80,
      "name": "Scaling laws for reward model overoptimization",
      "title": "Scaling Laws for Reward Model Overoptimization",
      "authors": "Leo Gao, John Schulman, and Jacob Hilton",
      "year": 2023,
      "citation": "Leo Gao, John Schulman, and Jacob Hilton. Scaling laws for reward model overoptimization. In Proceedings of the 40th International Conference on Machine Learning, volume 202 of Proceedings of Machine Learning Research, pages 10835--10866, 2023.",
      "url": "https://arxiv.org/abs/2210.10760",
      "urlSource": "openalex-arxiv",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence",
      "sourcePage": 35,
      "refPage": 60,
      "placements": [
        {
          "type": "text",
          "where": "§6.5",
          "page": 35,
          "level": "L3",
          "family": null,
          "path": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "gao2023overoptimization"
    },
    {
      "ref": 81,
      "name": "SBLLM",
      "title": "Search-Based LLMs for Code Optimization",
      "authors": "Shuzheng Gao, Cuiyun Gao, Wenchao Gu, and Michael Lyu",
      "year": 2024,
      "citation": "Shuzheng Gao, Cuiyun Gao, Wenchao Gu, and Michael Lyu. Search-based LLMs for code optimization. arXiv preprint arXiv:2408.12159, 2024.",
      "url": "https://arxiv.org/abs/2408.12159",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "figure",
      "families": [
        "Infrastructure"
      ],
      "category": "Evolutionary histories › Variation and strategy histories",
      "sourcePage": 17,
      "refPage": 60,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Evolutionary histories › Variation and strategy histories",
          "label": "SBLLM"
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§4.2",
          "page": 17,
          "level": "L1",
          "family": null,
          "path": "§4.2 Evolutionary Program Improvement"
        },
        {
          "type": "text",
          "where": "§7.4.1",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.1 Kernels and Tensor Programs"
        }
      ],
      "citekey": "sbllm2024"
    },
    {
      "ref": 82,
      "name": "AutoRISE",
      "title": "AutoRISE: Agent-Driven Strategy Evolution for Red-Teaming Large Language Models",
      "authors": "Tanmay Gautam, Alireza Bahramali, and Sandeep Atluri",
      "year": 2026,
      "citation": "Tanmay Gautam, Alireza Bahramali, and Sandeep Atluri. AutoRISE: Agent-driven strategy evolution for red-teaming large language models. arXiv preprint arXiv:2604.22871, 2026.",
      "url": "https://arxiv.org/abs/2604.22871",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 22,
      "refPage": 60,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 22,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "autorise2026"
    },
    {
      "ref": 83,
      "name": "AutoQNN",
      "title": "AutoQNN: An End-to-End Framework for Automatically Quantizing Neural Networks",
      "authors": "Cheng Gong, Ye Lu, Su-Rong Dai, Qian Deng, Cheng-Kun Du, and Tao Li",
      "year": 2024,
      "citation": "Cheng Gong, Ye Lu, Su-Rong Dai, Qian Deng, Cheng-Kun Du, and Tao Li. AutoQNN: An end-to-end framework for automatically quantizing neural networks. Journal of Computer Science and Technology, 39(2):401--420, 2024.",
      "url": "https://arxiv.org/abs/2304.03782",
      "urlSource": "openalex-arxiv",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§7.1.3 Parameter-Updating Post-Training",
      "sourcePage": 39,
      "refPage": 60,
      "placements": [
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "autoqnn2023"
    },
    {
      "ref": 84,
      "name": "CRITIC",
      "title": "CRITIC: Large Language Models Can Self-Correct with Tool-Interactive Critiquing",
      "authors": "Zhibin Gou, Zhihong Shao, Yeyun Gong, Yelong Shen, Yujiu Yang, Nan Duan, and Weizhu Chen",
      "year": 2023,
      "citation": "Zhibin Gou, Zhihong Shao, Yeyun Gong, Yelong Shen, Yujiu Yang, Nan Duan, and Weizhu Chen. CRITIC: Large language models can self-correct with tool-interactive critiquing. arXiv preprint arXiv:2305.11738, 2023.",
      "url": "https://arxiv.org/abs/2305.11738",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "chapter",
      "families": [
        "Inference"
      ],
      "category": "§6.2 Executable Evaluation Artifacts",
      "sourcePage": 32,
      "refPage": 60,
      "placements": [
        {
          "type": "text",
          "where": "§6.2",
          "page": 32,
          "level": "L3",
          "family": null,
          "path": "§6.2 Executable Evaluation Artifacts"
        },
        {
          "type": "text",
          "where": "§7.2.3",
          "page": 41,
          "level": null,
          "family": "Inference",
          "path": "§7.2.3 Test-Time Reasoning and Serving"
        }
      ],
      "citekey": "critic2023"
    },
    {
      "ref": 85,
      "name": "LILO",
      "title": "LILO: Learning Interpretable Libraries by Compressing and Documenting Code",
      "authors": "Gabriel Grand, Lionel Wong, Maddy Bowers, Theo X. Olausson, Muxin Liu, Joshua B. Tenenbaum, and Jacob Andreas",
      "year": 2023,
      "citation": "Gabriel Grand, Lionel Wong, Maddy Bowers, Theo X. Olausson, Muxin Liu, Joshua B. Tenenbaum, and Jacob Andreas. LILO: Learning interpretable libraries by compressing and documenting code. arXiv preprint arXiv:2310.19791, 2023.",
      "url": "https://arxiv.org/abs/2310.19791",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L2"
      ],
      "level": "L2",
      "basis": "table",
      "families": [
        "Inference"
      ],
      "category": "Available primitives (P)",
      "sourcePage": 26,
      "refPage": 60,
      "placements": [
        {
          "type": "table",
          "where": "Table 4",
          "page": 26,
          "level": "L2",
          "family": null,
          "path": "Available primitives (P)",
          "label": "LILO"
        },
        {
          "type": "figure",
          "where": "Figure 6",
          "page": 25,
          "level": "L2",
          "path": "Available primitives (P) › Program-library construction",
          "label": "LILO"
        },
        {
          "type": "text",
          "where": "§5.1",
          "page": 25,
          "level": "L2",
          "family": null,
          "path": "§5.1 Formalization and evaluation of AI-defined search spaces"
        },
        {
          "type": "text",
          "where": "§7.2.2",
          "page": 41,
          "level": null,
          "family": "Inference",
          "path": "§7.2.2 Agent, Tool, and Library Design"
        }
      ],
      "fieldsFrom": 4,
      "tableLabel": "LILO",
      "artifact": "compressed abstractions with LLM-written names and docstrings",
      "human": "base DSL, composition rules, task descriptions",
      "citekey": "lilo2023"
    },
    {
      "ref": 86,
      "name": "Automated curriculum",
      "title": "Automated Curriculum Learning for Neural Networks",
      "authors": "Alex Graves, Marc G. Bellemare, Jacob Menick, Remi Munos, and Koray Kavukcuoglu",
      "year": 2017,
      "citation": "Alex Graves, Marc G. Bellemare, Jacob Menick, Remi Munos, and Koray Kavukcuoglu. Automated curriculum learning for neural networks. In Proceedings of the 34th International Conference on Machine Learning, volume 70 of Proceedings of Machine Learning Research, pages 1311--1320, 2017.",
      "url": "https://arxiv.org/abs/1704.03003",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Data"
      ],
      "category": "Synthetic corpora and curricula",
      "sourcePage": 43,
      "refPage": 60,
      "placements": [
        {
          "type": "table",
          "where": "Table 8",
          "page": 43,
          "level": "L1",
          "family": "Data",
          "path": "Synthetic corpora and curricula",
          "label": "Automated curriculum"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Data",
          "path": "AI4AI Data › Augmentation, synthesis, and curricula",
          "label": "automated curriculum learning",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.3.2",
          "page": 43,
          "level": null,
          "family": "Data",
          "path": "§7.3.2 Augmentation, Synthesis, and Curricula"
        }
      ],
      "fieldsFrom": 8,
      "tableLabel": "Automated curriculum",
      "artifact": "which task to train on next",
      "human": "task set, progress signals",
      "citekey": "graves2017automated"
    },
    {
      "ref": 87,
      "name": "A survey on LLM-as-a-judge",
      "title": "A Survey on LLM-as-a-Judge",
      "authors": "Jiawei Gu, Xuhui Jiang, Zhichao Shi, Hexiang Tan, Xuehao Zhai, Chengjin Xu, Wei Li, Yinghan Shen, Shengjie Ma, Honghao Liu, Saizhuo Wang, Kun Zhang, Yuanzhuo Wang, Wen Gao, Lionel Ni, and Jian Guo",
      "year": 2024,
      "citation": "Jiawei Gu, Xuhui Jiang, Zhichao Shi, Hexiang Tan, Xuehao Zhai, Chengjin Xu, Wei Li, Yinghan Shen, Shengjie Ma, Honghao Liu, Saizhuo Wang, Kun Zhang, Yuanzhuo Wang, Wen Gao, Lionel Ni, and Jian Guo. A survey on LLM-as-a-judge. arXiv preprint arXiv:2411.15594, 2024.",
      "url": "https://arxiv.org/abs/2411.15594",
      "urlSource": "manuscript",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 8,
      "refPage": 61,
      "placements": [],
      "citekey": "gu2024judge"
    },
    {
      "ref": 88,
      "name": "Large language models for constructing and optimizing machine learning workflows: A survey",
      "title": "Large Language Models for Constructing and Optimizing Machine Learning Workflows: A Survey",
      "authors": "Yang Gu, Hengyu You, Jian Cao, Muran Yu, Haoran Fan, and Shiyou Qian",
      "year": 2026,
      "citation": "Yang Gu, Hengyu You, Jian Cao, Muran Yu, Haoran Fan, and Shiyou Qian. Large language models for constructing and optimizing machine learning workflows: A survey. ACM Transactions on Software Engineering and Methodology, 35(9):1--46, 2026.",
      "url": "https://arxiv.org/abs/2411.10478",
      "urlSource": "openalex-arxiv",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 8,
      "refPage": 61,
      "placements": [],
      "citekey": "gu2024llmworkflow"
    },
    {
      "ref": 89,
      "name": "CUDA kernel evolution",
      "title": "Code Evolution for Control: Synthesizing Policies via LLM-Driven Evolutionary Search",
      "authors": "Ping Guo, Chao Li, Yinglan Feng, and Chaoning Zhang",
      "year": 2026,
      "citation": "Ping Guo, Chao Li, Yinglan Feng, and Chaoning Zhang. Code evolution for control: Synthesizing policies via LLM-driven evolutionary search, 2026.",
      "url": "https://arxiv.org/abs/2601.06845",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Infrastructure"
      ],
      "category": "AI4AI Infrastructure › Kernels and tensor programs",
      "sourcePage": 37,
      "refPage": 61,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Infrastructure",
          "path": "AI4AI Infrastructure › Kernels and tensor programs",
          "label": "CUDA kernel evolution",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.2",
          "page": 18,
          "level": "L1",
          "family": null,
          "path": "§4.2 Evolutionary Program Improvement"
        },
        {
          "type": "text",
          "where": "§7.4.1",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.1 Kernels and Tensor Programs"
        }
      ],
      "citekey": "evolutionkernels2025"
    },
    {
      "ref": 90,
      "name": "EvoPrompt",
      "title": "EvoPrompt: Connecting Llms with Evolutionary Algorithms Yields Powerful Prompt Optimizers",
      "authors": "Qingyan Guo, Rui Wang, Junliang Guo, Bei Li, Kaitao Song, Xu Tan, Guoqing Liu, Jiang Bian, and Yujiu Yang",
      "year": 2023,
      "citation": "Qingyan Guo, Rui Wang, Junliang Guo, Bei Li, Kaitao Song, Xu Tan, Guoqing Liu, Jiang Bian, and Yujiu Yang. EvoPrompt: Connecting llms with evolutionary algorithms yields powerful prompt optimizers. arXiv preprint arXiv:2309.08532, 2023.",
      "url": "https://arxiv.org/abs/2309.08532",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Inference"
      ],
      "category": "§4.2 Evolutionary Program Improvement",
      "sourcePage": 18,
      "refPage": 61,
      "placements": [
        {
          "type": "text",
          "where": "§4.2",
          "page": 18,
          "level": "L1",
          "family": null,
          "path": "§4.2 Evolutionary Program Improvement"
        },
        {
          "type": "text",
          "where": "§7.2.1",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.1 Prompt and Workflow Optimization"
        }
      ],
      "citekey": "evoprompt2023"
    },
    {
      "ref": 91,
      "name": "Large language models as surrogate models in evolutionary algorithms: A preliminary study",
      "title": "Large Language Models as Surrogate Models in Evolutionary Algorithms: A Preliminary Study",
      "authors": "Hao Hao, Xiaoqun Zhang, and Aimin Zhou",
      "year": 2024,
      "citation": "Hao Hao, Xiaoqun Zhang, and Aimin Zhou. Large language models as surrogate models in evolutionary algorithms: A preliminary study. arXiv preprint arXiv:2406.10675, 2024.",
      "url": "https://arxiv.org/abs/2406.10675",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Infrastructure"
      ],
      "category": "§4.2 Evolutionary Program Improvement",
      "sourcePage": 17,
      "refPage": 61,
      "placements": [
        {
          "type": "text",
          "where": "§4.2",
          "page": 17,
          "level": "L1",
          "family": null,
          "path": "§4.2 Evolutionary Program Improvement"
        },
        {
          "type": "text",
          "where": "§7.4.1",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.1 Kernels and Tensor Programs"
        }
      ],
      "citekey": "llmsurrogateevo2024"
    },
    {
      "ref": 92,
      "name": "CriSPO",
      "title": "CriSPO: Multi-Aspect Critique-Suggestion-Guided Automatic Prompt Optimization for Text Generation",
      "authors": "Han He, Qianchu Liu, Lei Xu, Chaitanya Shivade, Yi Zhang, Sundararajan Srinivasan, and Katrin Kirchhoff",
      "year": 2024,
      "citation": "Han He, Qianchu Liu, Lei Xu, Chaitanya Shivade, Yi Zhang, Sundararajan Srinivasan, and Katrin Kirchhoff. CriSPO: Multi-aspect critique-suggestion-guided automatic prompt optimization for text generation. arXiv preprint arXiv:2410.02748, 2024.",
      "url": "https://arxiv.org/abs/2410.02748",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Inference"
      ],
      "category": "§4.3 Prompt, Pipeline, and Workflow Optimization",
      "sourcePage": 19,
      "refPage": 61,
      "placements": [
        {
          "type": "text",
          "where": "§4.3",
          "page": 19,
          "level": "L1",
          "family": null,
          "path": "§4.3 Prompt, Pipeline, and Workflow Optimization"
        },
        {
          "type": "text",
          "where": "§4.6",
          "page": 22,
          "level": "L1",
          "family": null,
          "path": "§4.6 Direction Quality, Failure Modes, and the Boundary with L2"
        },
        {
          "type": "text",
          "where": "§7.2.1",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.1 Prompt and Workflow Optimization"
        }
      ],
      "citekey": "crispo2024"
    },
    {
      "ref": 93,
      "name": "AutoML: A survey of the state-of-the-art",
      "title": "AutoML: A Survey of the State-of-the-Art",
      "authors": "Xin He, Kaiyong Zhao, and Xiaowen Chu",
      "year": 2021,
      "citation": "Xin He, Kaiyong Zhao, and Xiaowen Chu. AutoML: A survey of the state-of-the-art. Knowledge-Based Systems, 212:106622, 2021.",
      "url": "https://arxiv.org/abs/1908.00709",
      "urlSource": "openalex-arxiv",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 5,
      "refPage": 61,
      "placements": [],
      "citekey": "he2021automl"
    },
    {
      "ref": 94,
      "name": "AMC",
      "title": "AMC: AutoML for Model Compression and Acceleration on Mobile Devices",
      "authors": "Yihui He, Ji Lin, Zhijian Liu, Hanrui Wang, Li-Jia Li, and Song Han",
      "year": 2018,
      "citation": "Yihui He, Ji Lin, Zhijian Liu, Hanrui Wang, Li-Jia Li, and Song Han. AMC: AutoML for model compression and acceleration on mobile devices. In Proceedings of the European Conference on Computer Vision (ECCV), pages 784--800, 2018.",
      "url": "https://arxiv.org/abs/1802.03494",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Learning"
      ],
      "category": "Adaptation and compression",
      "sourcePage": 38,
      "refPage": 61,
      "placements": [
        {
          "type": "table",
          "where": "Table 6",
          "page": 38,
          "level": "L1",
          "family": "Learning",
          "path": "Adaptation and compression",
          "label": "AMC"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Parameter-updating post-training",
          "label": "AMC",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "fieldsFrom": 6,
      "tableLabel": "AMC",
      "artifact": "per-layer compression ratios",
      "human": "pruning space, latency constraint, recovery",
      "citekey": "amc2018"
    },
    {
      "ref": 95,
      "name": "PBA",
      "title": "Population Based Augmentation: Efficient Learning of Augmentation Policy Schedules",
      "authors": "Daniel Ho, Eric Liang, Xi Chen, Ion Stoica, and Pieter Abbeel",
      "year": 2019,
      "citation": "Daniel Ho, Eric Liang, Xi Chen, Ion Stoica, and Pieter Abbeel. Population based augmentation: Efficient learning of augmentation policy schedules. In Proceedings of the 36th International Conference on Machine Learning, volume 97 of Proceedings of Machine Learning Research, pages 2731--2741, 2019.",
      "url": "https://arxiv.org/abs/1905.05393",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "AI4AI Data › Augmentation, synthesis, and curricula",
      "sourcePage": 37,
      "refPage": 61,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Data",
          "path": "AI4AI Data › Augmentation, synthesis, and curricula",
          "label": "PBA",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.3.2",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.2 Augmentation, Synthesis, and Curricula"
        }
      ],
      "citekey": "pba2019"
    },
    {
      "ref": 96,
      "name": "Data Interpreter",
      "title": "Data Interpreter: An LLM Agent for Data Science",
      "authors": "Sirui Hong, Yizhang Lin, Bang Liu, Bangbang Liu, Binhao Wu, Ceyao Zhang, Chenxing Wei, Danyang Li, Jiaqi Chen, Jiayi Zhang, Jinlin Wang, Li Zhang, Lingyao Zhang, Min Yang, Mingchen Zhuge, Taicheng Guo, Tuo Zhou, Wei Tao, Xiangru Tang, Xiangtao Lu, Xiawu Zheng, Xinbing Liang, Yaying Fei, Yuheng Cheng, Zhibin Gou, Zongze Xu, and Chenglin Wu",
      "year": 2024,
      "citation": "Sirui Hong, Yizhang Lin, Bang Liu, Bangbang Liu, Binhao Wu, Ceyao Zhang, Chenxing Wei, Danyang Li, Jiaqi Chen, Jiayi Zhang, Jinlin Wang, Li Zhang, Lingyao Zhang, Min Yang, Mingchen Zhuge, Taicheng Guo, Tuo Zhou, Wei Tao, Xiangru Tang, Xiangtao Lu, Xiawu Zheng, Xinbing Liang, Yaying Fei, Yuheng Cheng, Zhibin Gou, Zongze Xu, and Chenglin Wu. Data interpreter: An LLM agent for data science. arXiv preprint arXiv:2402.18679, 2024.",
      "url": "https://arxiv.org/abs/2402.18679",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 21,
      "refPage": 61,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "datainterpreter2024"
    },
    {
      "ref": 97,
      "name": "MetaGPT",
      "title": "MetaGPT: Meta Programming for a Multi-Agent Collaborative Framework",
      "authors": "Sirui Hong, Mingchen Zhuge, Jiaqi Chen, Xiawu Zheng, Yuheng Cheng, Ceyao Zhang, Jinlin Wang, Zili Wang, Steven Ka Shing Yau, Zijuan Lin, Liyang Zhou, Chenyu Ran, Lingfeng Xiao, Chenglin Wu, and Jurgen Schmidhuber",
      "year": 2023,
      "citation": "Sirui Hong, Mingchen Zhuge, Jiaqi Chen, Xiawu Zheng, Yuheng Cheng, Ceyao Zhang, Jinlin Wang, Zili Wang, Steven Ka Shing Yau, Zijuan Lin, Liyang Zhou, Chenyu Ran, Lingfeng Xiao, Chenglin Wu, and Jurgen Schmidhuber. MetaGPT: Meta programming for a multi-agent collaborative framework. arXiv preprint arXiv:2308.00352, 2023.",
      "url": "https://arxiv.org/abs/2308.00352",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 21,
      "refPage": 61,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "metagpt2023"
    },
    {
      "ref": 98,
      "name": "DRiLLS",
      "title": "DRiLLS: Deep Reinforcement Learning for Logic Synthesis",
      "authors": "Abdelrahman Hosny, Soheil Hashemi, Mohamed Shalan, and Sherief Reda",
      "year": 2020,
      "citation": "Abdelrahman Hosny, Soheil Hashemi, Mohamed Shalan, and Sherief Reda. DRiLLS: Deep reinforcement learning for logic synthesis. In Asia and South Pacific Design Automation Conference, pages 581--586, 2020.",
      "url": "https://arxiv.org/abs/1911.04021",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Infrastructure"
      ],
      "category": "Logic, RTL, and physical design",
      "sourcePage": 45,
      "refPage": 61,
      "placements": [
        {
          "type": "table",
          "where": "Table 9",
          "page": 45,
          "level": "L1",
          "family": "Infrastructure",
          "path": "Logic, RTL, and physical design",
          "label": "DRiLLS§"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Infrastructure",
          "path": "AI4AI Infrastructure › Logic, RTL, and physical design",
          "label": "DRiLLS",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.4.3",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.3 Logic, RTL, and Physical Design"
        }
      ],
      "fieldsFrom": 9,
      "tableLabel": "DRiLLS§",
      "artifact": "sequence of synthesis transformations",
      "human": "transformation set, cell library, area and delay",
      "citekey": "drills2020"
    },
    {
      "ref": 99,
      "name": "Meta-learning in neural networks: A survey",
      "title": "Meta-Learning in Neural Networks: A Survey",
      "authors": "Timothy Hospedales, Antreas Antoniou, Paul Micaelli, and Amos Storkey",
      "year": 2022,
      "citation": "Timothy Hospedales, Antreas Antoniou, Paul Micaelli, and Amos Storkey. Meta-learning in neural networks: A survey. IEEE Transactions on Pattern Analysis and Machine Intelligence, 44(9):5149--5169, 2022.",
      "url": "https://arxiv.org/abs/2004.05439",
      "urlSource": "openalex-arxiv",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 7,
      "refPage": 61,
      "placements": [],
      "citekey": "hospedales2021meta"
    },
    {
      "ref": 100,
      "name": "ADAS",
      "title": "Automated Design of Agentic Systems",
      "authors": "Shengran Hu, Cong Lu, and Jeff Clune",
      "year": 2025,
      "citation": "Shengran Hu, Cong Lu, and Jeff Clune. Automated Design of Agentic Systems. In The Thirteenth International Conference on Learning Representations, 2025.",
      "url": "https://arxiv.org/abs/2408.08435",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Inference"
      ],
      "category": "Agent, tool, and library design",
      "sourcePage": 41,
      "refPage": 62,
      "placements": [
        {
          "type": "table",
          "where": "Table 7",
          "page": 41,
          "level": "L1",
          "family": "Inference",
          "path": "Agent, tool, and library design",
          "label": "ADAS"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Inference",
          "path": "AI4AI Inference › Parameter-free agent and tool design",
          "label": "ADAS",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.2.2",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.2 Agent, Tool, and Library Design"
        }
      ],
      "fieldsFrom": 7,
      "tableLabel": "ADAS",
      "artifact": "agent code: roles, tools, control flow",
      "human": "tool pool, role template, task and holdout sets",
      "citekey": "hu2024automated"
    },
    {
      "ref": 101,
      "name": "AgentCoder",
      "title": "AgentCoder: Multi-Agent-Based Code Generation with Iterative Testing and Optimisation",
      "authors": "Dong Huang, Jie M. Zhang, Michael Luck, Qingwen Bu, Yuhao Qing, and Heming Cui",
      "year": 2023,
      "citation": "Dong Huang, Jie M. Zhang, Michael Luck, Qingwen Bu, Yuhao Qing, and Heming Cui. AgentCoder: Multi-agent-based code generation with iterative testing and optimisation. arXiv preprint arXiv:2312.13010, 2023.",
      "url": "https://arxiv.org/abs/2312.13010",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 21,
      "refPage": 62,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "agentcoder2023"
    },
    {
      "ref": 102,
      "name": "Large language models cannot self-correct reasoning yet",
      "title": "Large Language Models Cannot Self-Correct Reasoning Yet",
      "authors": "Jie Huang, Xinyun Chen, Swaroop Mishra, Huaixiu Steven Zheng, Adams Wei Yu, Xinying Song, and Denny Zhou",
      "year": 2024,
      "citation": "Jie Huang, Xinyun Chen, Swaroop Mishra, Huaixiu Steven Zheng, Adams Wei Yu, Xinying Song, and Denny Zhou. Large language models cannot self-correct reasoning yet. arXiv preprint arXiv:2310.01798, 2024.",
      "url": "https://arxiv.org/abs/2310.01798",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [],
      "category": "§4.4 Reflection, Memory, and Search over Trajectories",
      "sourcePage": 20,
      "refPage": 62,
      "placements": [
        {
          "type": "text",
          "where": "§4.4",
          "page": 20,
          "level": "L1",
          "family": null,
          "path": "§4.4 Reflection, Memory, and Search over Trajectories"
        }
      ],
      "citekey": "cannotselfcorrect2024"
    },
    {
      "ref": 103,
      "name": "MLAgentBench",
      "title": "MLAgentBench: Evaluating Language Agents on Machine Learning Experimentation",
      "authors": "Qian Huang, Jian Vora, Percy Liang, and Jure Leskovec",
      "year": 2023,
      "citation": "Qian Huang, Jian Vora, Percy Liang, and Jure Leskovec. MLAgentBench: Evaluating language agents on machine learning experimentation. arXiv preprint arXiv:2310.03302, 2023.",
      "url": "https://arxiv.org/abs/2310.03302",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 21,
      "refPage": 62,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": null,
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 40,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "huang2023mlagentbench"
    },
    {
      "ref": 104,
      "name": "Automated Machine Learning",
      "title": "Automated Machine Learning: Methods, Systems, Challenges",
      "authors": "Frank Hutter, Lars Kotthoff, and Joaquin Vanschoren, editors",
      "year": 2019,
      "citation": "Frank Hutter, Lars Kotthoff, and Joaquin Vanschoren, editors. Automated Machine Learning: Methods, Systems, Challenges. Springer, 2019.",
      "url": "https://doi.org/10.1007/978-3-030-05318-5",
      "urlSource": "crossref-doi",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 3,
      "refPage": 62,
      "placements": [],
      "citekey": "hutter2019automated"
    },
    {
      "ref": 105,
      "name": "Debate",
      "title": "AI Safety via Debate",
      "authors": "Geoffrey Irving, Paul Christiano, and Dario Amodei",
      "year": 2018,
      "citation": "Geoffrey Irving, Paul Christiano, and Dario Amodei. AI safety via debate. arXiv preprint arXiv:1805.00899, 2018.",
      "url": "https://arxiv.org/abs/1805.00899",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "figure",
      "families": [
        "Cross-family"
      ],
      "category": "Adaptive evaluation and oversight › Debate and AI-assisted oversight",
      "sourcePage": 32,
      "refPage": 62,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Adaptive evaluation and oversight › Debate and AI-assisted oversight",
          "label": "Debate"
        },
        {
          "type": "text",
          "where": "§6.5",
          "page": 34,
          "level": "L3",
          "family": null,
          "path": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "irving2018debate"
    },
    {
      "ref": 106,
      "name": "PBT",
      "title": "Population Based Training of Neural Networks",
      "authors": "Max Jaderberg, Valentin Dalibard, Simon Osindero, Wojciech M. Czarnecki, Jeff Donahue, Ali Razavi, Oriol Vinyals, Tim Green, Iain Dunning, Karen Simonyan, Chrisantha Fernando, and Koray Kavukcuoglu",
      "year": 2017,
      "citation": "Max Jaderberg, Valentin Dalibard, Simon Osindero, Wojciech M. Czarnecki, Jeff Donahue, Ali Razavi, Oriol Vinyals, Tim Green, Iain Dunning, Karen Simonyan, Chrisantha Fernando, and Koray Kavukcuoglu. Population based training of neural networks. arXiv preprint arXiv:1711.09846, 2017.",
      "url": "https://arxiv.org/abs/1711.09846",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Learning"
      ],
      "category": "Configurations and training pipelines",
      "sourcePage": 38,
      "refPage": 62,
      "placements": [
        {
          "type": "table",
          "where": "Table 6",
          "page": 38,
          "level": "L1",
          "family": "Learning",
          "path": "Configurations and training pipelines",
          "label": "PBT"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Configurations and training pipelines",
          "label": "Population-Based Training",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§7.1.1",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.1 Configurations and Training Pipelines"
        }
      ],
      "fieldsFrom": 6,
      "tableLabel": "PBT",
      "artifact": "per-member hyperparameter schedule",
      "human": "config space, mutation operators, train budget",
      "citekey": "jaderberg2017pbt"
    },
    {
      "ref": 107,
      "name": "Local prompt optimization",
      "title": "Local Prompt Optimization",
      "authors": "Yash Jain and Vishal Chowdhary",
      "year": 2025,
      "citation": "Yash Jain and Vishal Chowdhary. Local prompt optimization. arXiv preprint arXiv:2504.20355, 2025.",
      "url": "https://arxiv.org/abs/2504.20355",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Inference"
      ],
      "category": "§4.3 Prompt, Pipeline, and Workflow Optimization",
      "sourcePage": 19,
      "refPage": 62,
      "placements": [
        {
          "type": "text",
          "where": "§4.3",
          "page": 19,
          "level": "L1",
          "family": null,
          "path": "§4.3 Prompt, Pipeline, and Workflow Optimization"
        },
        {
          "type": "text",
          "where": "§7.2.1",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.1 Prompt and Workflow Optimization"
        }
      ],
      "citekey": "localprompt2025"
    },
    {
      "ref": 108,
      "name": "FlexFlow",
      "title": "Beyond Data and Model Parallelism for Deep Neural Networks",
      "authors": "Zhihao Jia, Matei Zaharia, and Alex Aiken",
      "year": 2019,
      "citation": "Zhihao Jia, Matei Zaharia, and Alex Aiken. Beyond data and model parallelism for deep neural networks. In Proceedings of Machine Learning and Systems, volume 1, 2019.",
      "url": "https://arxiv.org/abs/1807.05358",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Infrastructure"
      ],
      "category": "Execution plans and hardware co-design",
      "sourcePage": 45,
      "refPage": 62,
      "placements": [
        {
          "type": "table",
          "where": "Table 9",
          "page": 45,
          "level": "L1",
          "family": "Infrastructure",
          "path": "Execution plans and hardware co-design",
          "label": "FlexFlow"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Infrastructure",
          "path": "AI4AI Infrastructure › Execution plans and hardware co-design",
          "label": "FlexFlow",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.4.2",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.2 Execution Plans and Hardware Co-Design"
        }
      ],
      "fieldsFrom": 9,
      "tableLabel": "FlexFlow",
      "artifact": "per-operator parallelization strategy",
      "human": "parallelization space, simulator, hardware model",
      "citekey": "flexflow2019"
    },
    {
      "ref": 109,
      "name": "SWE-bench",
      "title": "SWE-Bench: Can Language Models Resolve Real-World GitHub Issues?",
      "authors": "Carlos E. Jimenez, John Yang, Alexander Wettig, Shunyu Yao, Kexin Pei, Ofir Press, and Karthik Narasimhan",
      "year": 2024,
      "citation": "Carlos E. Jimenez, John Yang, Alexander Wettig, Shunyu Yao, Kexin Pei, Ofir Press, and Karthik Narasimhan. SWE-bench: Can language models resolve real-world GitHub issues? In International Conference on Learning Representations, volume 2024, pages 54107--54157, 2024.",
      "url": "https://arxiv.org/abs/2310.06770",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Inference"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 21,
      "refPage": 62,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": null,
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§5.2",
          "page": 28,
          "level": null,
          "family": null,
          "path": "§5.2 Evaluation and Minimum Evidence for L2"
        },
        {
          "type": "text",
          "where": "§7.2.3",
          "page": 42,
          "level": null,
          "family": "Inference",
          "path": "§7.2.3 Test-Time Reasoning and Serving"
        }
      ],
      "citekey": "swebench2024"
    },
    {
      "ref": 110,
      "name": "Apollo",
      "title": "Apollo: Transferable Architecture Exploration",
      "authors": "Albin Jones, Amir Yazdanbakhsh, Berkin Akin, Christof Angermueller, James Pierce Laudon, Kevin Swersky, Milad Hashemi, Ravi Narayanaswami, Sat Chatterjee, and Yanqi Zhou",
      "year": 2020,
      "citation": "Albin Jones, Amir Yazdanbakhsh, Berkin Akin, Christof Angermueller, James Pierce Laudon, Kevin Swersky, Milad Hashemi, Ravi Narayanaswami, Sat Chatterjee, and Yanqi Zhou. Apollo: Transferable architecture exploration. In ML for Systems Workshop at NeurIPS 2020, 2020.",
      "url": "https://arxiv.org/abs/2102.01723",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Infrastructure"
      ],
      "category": "AI4AI Infrastructure › Execution plans and hardware co-design",
      "sourcePage": 37,
      "refPage": 62,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Infrastructure",
          "path": "AI4AI Infrastructure › Execution plans and hardware co-design",
          "label": "Apollo",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.4.2",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.2 Execution Plans and Hardware Co-Design"
        }
      ],
      "citekey": "apollo2021"
    },
    {
      "name": "Curation-Bench",
      "url": "https://arxiv.org/abs/2606.04261",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "Benchmarks › AI4AI Data",
      "placements": [
        {
          "type": "table",
          "where": "Table 10",
          "page": 48,
          "family": "Data",
          "path": "Benchmarks › AI4AI Data",
          "label": "Curation-Bench",
          "level": null
        },
        {
          "type": "text",
          "where": "§7.3.2",
          "page": 43,
          "level": null,
          "family": "Data",
          "path": "§7.3.2 Augmentation, Synthesis, and Curricula"
        }
      ],
      "ref": 111,
      "title": "Can Generalist Agents Automate Data Curation?",
      "authors": "Feiyang Kang, Hanze Li, Adam Nguyen, Mahavir Dabas, Jiaqi W. Ma, Frederic Sala, Dawn Song, and Ruoxi Jia",
      "year": 2026,
      "citation": "Feiyang Kang, Hanze Li, Adam Nguyen, Mahavir Dabas, Jiaqi W. Ma, Frederic Sala, Dawn Song, and Ruoxi Jia. Can generalist agents automate data curation?, 2026.",
      "citekey": "kang2026curationbench",
      "refPage": 62,
      "task": "Discover data-selection policies",
      "protocol": "Fix the model, training recipe, and evaluation; iterate executable data policies",
      "evidence": "Data efficiency and research behavior beyond execution",
      "fieldsFrom": 10,
      "sourcePage": 48
    },
    {
      "name": "DataEnvGym",
      "url": "https://openreview.net/forum?id=00SnKBGTsz",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "Benchmarks › AI4AI Data",
      "placements": [
        {
          "type": "table",
          "where": "Table 10",
          "page": 48,
          "family": "Data",
          "path": "Benchmarks › AI4AI Data",
          "label": "DataEnvGym",
          "level": null
        },
        {
          "type": "text",
          "where": "§7.3.2",
          "page": 43,
          "level": null,
          "family": "Data",
          "path": "§7.3.2 Augmentation, Synthesis, and Curricula"
        }
      ],
      "ref": 112,
      "title": "DataEnvGym: Data Generation Agents in Teacher Environments with Student Feedback",
      "authors": "Zaid Khan, Elias Stengel-Eskin, Jaemin Cho, and Mohit Bansal",
      "year": 2025,
      "citation": "Zaid Khan, Elias Stengel-Eskin, Jaemin Cho, and Mohit Bansal. Dataenvgym: Data generation agents in teacher environments with student feedback. In The Thirteenth International Conference on Learning Representations, 2025.",
      "citekey": "khan2024dataenvgym",
      "refPage": 62,
      "task": "Construct training data from student feedback",
      "protocol": "Iterate generation, student training, and evaluation in shared teacher environments",
      "evidence": "Student gains across rounds and use of feedback",
      "fieldsFrom": 10,
      "sourcePage": 48
    },
    {
      "ref": 113,
      "name": "DSPy",
      "title": "DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines",
      "authors": "Omar Khattab, Arnav Singhvi, Paridhi Maheshwari, Zhiyuan Zhang, Keshav Santhanam, Sri Vardhamanan, Saiful Haq, Ashutosh Sharma, Thomas T. Joshi, Hanna Moazam, Heather Miller, Matei Zaharia, and Christopher Potts",
      "year": 2023,
      "citation": "Omar Khattab, Arnav Singhvi, Paridhi Maheshwari, Zhiyuan Zhang, Keshav Santhanam, Sri Vardhamanan, Saiful Haq, Ashutosh Sharma, Thomas T. Joshi, Hanna Moazam, Heather Miller, Matei Zaharia, and Christopher Potts. DSPy: Compiling declarative language model calls into self-improving pipelines. arXiv preprint arXiv:2310.03714, 2023.",
      "url": "https://arxiv.org/abs/2310.03714",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Inference"
      ],
      "category": "Prompt and workflow optimization",
      "sourcePage": 41,
      "refPage": 62,
      "placements": [
        {
          "type": "table",
          "where": "Table 7",
          "page": 41,
          "level": "L1",
          "family": "Inference",
          "path": "Prompt and workflow optimization",
          "label": "DSPy"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Inference",
          "path": "AI4AI Inference › Prompt and workflow optimization",
          "label": "DSPy",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.3",
          "page": 19,
          "level": "L1",
          "family": null,
          "path": "§4.3 Prompt, Pipeline, and Workflow Optimization"
        },
        {
          "type": "text",
          "where": "§7.2.1",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.1 Prompt and Workflow Optimization"
        }
      ],
      "fieldsFrom": 7,
      "tableLabel": "DSPy",
      "artifact": "module instructions, few-shot demos",
      "human": "program signature, module set, program metric",
      "citekey": "dspy2023"
    },
    {
      "ref": 114,
      "name": "Prometheus",
      "title": "Prometheus: Inducing Fine-Grained Evaluation Capability in Language Models",
      "authors": "Seungone Kim, Jamin Shin, Yejin Cho, Joel Jang, Shayne Longpre, Hwaran Lee, Sangdoo Yun, Seongjin Shin, Sungdong Kim, James Thorne, and Minjoon Seo",
      "year": 2023,
      "citation": "Seungone Kim, Jamin Shin, Yejin Cho, Joel Jang, Shayne Longpre, Hwaran Lee, Sangdoo Yun, Seongjin Shin, Sungdong Kim, James Thorne, and Minjoon Seo. Prometheus: Inducing fine-grained evaluation capability in language models. arXiv preprint arXiv:2310.08491, 2023.",
      "url": "https://arxiv.org/abs/2310.08491",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§6.3 Learned Preference Evaluation and Model Judges",
      "sourcePage": 33,
      "refPage": 62,
      "placements": [
        {
          "type": "text",
          "where": "§6.3",
          "page": 33,
          "level": "L3",
          "family": null,
          "path": "§6.3 Learned Preference Evaluation and Model Judges"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "prometheus2023"
    },
    {
      "ref": 115,
      "name": "Prometheus 2",
      "title": "Prometheus 2: An Open Source Language Model Specialized in Evaluating Other Language Models",
      "authors": "Seungone Kim, Juyoung Suk, Shayne Longpre, Bill Yuchen Lin, Jamin Shin, Sean Welleck, Graham Neubig, Moontae Lee, Kyungjae Lee, and Minjoon Seo",
      "year": 2024,
      "citation": "Seungone Kim, Juyoung Suk, Shayne Longpre, Bill Yuchen Lin, Jamin Shin, Sean Welleck, Graham Neubig, Moontae Lee, Kyungjae Lee, and Minjoon Seo. Prometheus 2: An open source language model specialized in evaluating other language models. arXiv preprint arXiv:2405.01535, 2024.",
      "url": "https://arxiv.org/abs/2405.01535",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "table",
      "families": [
        "Cross-family"
      ],
      "category": "Learned preference evaluation and model judges",
      "sourcePage": 33,
      "refPage": 63,
      "placements": [
        {
          "type": "table",
          "where": "Table 5",
          "page": 33,
          "level": "L3",
          "family": null,
          "path": "Learned preference evaluation and model judges",
          "label": "Prometheus 2"
        },
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Learned preference evaluation and model judges › General-purpose model judges",
          "label": "Prometheus 2"
        },
        {
          "type": "text",
          "where": "§6.3",
          "page": 32,
          "level": "L3",
          "family": null,
          "path": "§6.3 Learned Preference Evaluation and Model Judges"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "fieldsFrom": 5,
      "tableLabel": "Prometheus 2",
      "artifact": "trained rubric-conditioned direct or pairwise judgment",
      "human": "rubric, reference answer, evaluation examples",
      "citekey": "prometheus22024"
    },
    {
      "name": "AgoraBench",
      "url": "https://aclanthology.org/2025.acl-long.320/",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "§7.3.2 Augmentation, Synthesis, and Curricula",
      "placements": [
        {
          "type": "text",
          "where": "§7.3.2",
          "page": 43,
          "level": null,
          "family": "Data",
          "path": "§7.3.2 Augmentation, Synthesis, and Curricula"
        }
      ],
      "ref": 116,
      "title": "Evaluating Language Models as Synthetic Data Generators",
      "authors": "Seungone Kim, Juyoung Suk, Xiang Yue, Vijay Viswanathan, Seongyun Lee, Yizhong Wang, Kiril Gashteovski, Carolin Lawrence, Sean Welleck, and Graham Neubig",
      "year": 2025,
      "citation": "Seungone Kim, Juyoung Suk, Xiang Yue, Vijay Viswanathan, Seongyun Lee, Yizhong Wang, Kiril Gashteovski, Carolin Lawrence, Sean Welleck, and Graham Neubig. Evaluating language models as synthetic data generators. In Wanxiang Che, Joyce Nabende, Ekaterina Shutova, and Mohammad Taher Pilehvar, editors, Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 6385--6403, Vienna, Austria, July 2025. Association for Computational Linguistics.",
      "citekey": "kim2024agorabench",
      "refPage": 63,
      "sourcePage": 43
    },
    {
      "ref": 117,
      "name": "Understanding black-box predictions via influence functions",
      "title": "Understanding Black-Box Predictions via Influence Functions",
      "authors": "Pang Wei Koh and Percy Liang",
      "year": 2017,
      "citation": "Pang Wei Koh and Percy Liang. Understanding black-box predictions via influence functions. In Proceedings of the 34th International Conference on Machine Learning, volume 70 of Proceedings of Machine Learning Research, pages 1885--1894, 2017.",
      "url": "https://arxiv.org/abs/1703.04730",
      "urlSource": "openalex-arxiv",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "§7.3.1 Selection and Curation",
      "sourcePage": 42,
      "refPage": 63,
      "placements": [
        {
          "type": "text",
          "where": "§7.3.1",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.1 Selection and Curation"
        }
      ],
      "citekey": "influence2017"
    },
    {
      "ref": 118,
      "name": "AI for auto-research",
      "title": "AI for Auto-Research: Roadmap & User Guide",
      "authors": "Lingdong Kong, Xian Sun, Wei Chow, Linfeng Li, Kevin Qinghong Lin, Xuan Billy Zhang, Song Wang, Rong Li, Qing Wu, Wei Gao, Yingshuo Wang, Shaoyuan Xie, Jiachen Liu, Leigang Qu, Shijie Li, Lai Xing Ng, Benoit R. Cottereau, Ziwei Liu, Tat-Seng Chua, and Wei Tsang Ooi",
      "year": 2026,
      "citation": "Lingdong Kong, Xian Sun, Wei Chow, Linfeng Li, Kevin Qinghong Lin, Xuan Billy Zhang, Song Wang, Rong Li, Qing Wu, Wei Gao, Yingshuo Wang, Shaoyuan Xie, Jiachen Liu, Leigang Qu, Shijie Li, Lai Xing Ng, Benoit R. Cottereau, Ziwei Liu, Tat-Seng Chua, and Wei Tsang Ooi. AI for auto-research: Roadmap & user guide. arXiv preprint arXiv:2605.18661, 2026.",
      "url": "https://arxiv.org/abs/2605.18661",
      "urlSource": "manuscript",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 8,
      "refPage": 63,
      "placements": [],
      "citekey": "kong2026autoresearch"
    },
    {
      "ref": 119,
      "name": "ADSL-PDE",
      "title": "Improving Auto-Design of Neural PDE Solvers with a Domain-Specific Language",
      "authors": "Shengxin Kong, Liwen Xu, and Jingwen Fu",
      "year": 2026,
      "citation": "Shengxin Kong, Liwen Xu, and Jingwen Fu. Improving auto-design of neural PDE solvers with a domain-specific language. arXiv preprint arXiv:2608.04384, 2026.",
      "url": "https://arxiv.org/abs/2608.04384",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "AI4AI Learning › Architectures and update rules",
      "sourcePage": 37,
      "refPage": 63,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Architectures and update rules",
          "label": "ADSL-PDE",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "kong2026adslpde"
    },
    {
      "ref": 120,
      "name": "ArchGym",
      "title": "ArchGym: An Open-Source Gymnasium for Machine Learning Assisted Architecture Design",
      "authors": "Srivatsan Krishnan, Amir Yazdanbaksh, Shvetank Prakash, Jason Jabbour, Ikechukwu Uchendu, Susobhan Ghosh, Behzad Boroujerdian, Daniel Richins, Devashree Tripathy, Aleksandra Faust, and Vijay Janapa Reddi",
      "year": 2023,
      "citation": "Srivatsan Krishnan, Amir Yazdanbaksh, Shvetank Prakash, Jason Jabbour, Ikechukwu Uchendu, Susobhan Ghosh, Behzad Boroujerdian, Daniel Richins, Devashree Tripathy, Aleksandra Faust, and Vijay Janapa Reddi. ArchGym: An open-source gymnasium for machine learning assisted architecture design. arXiv preprint arXiv:2306.08888, 2023.",
      "url": "https://arxiv.org/abs/2306.08888",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Infrastructure"
      ],
      "category": "§7.4.2 Execution Plans and Hardware Co-Design",
      "sourcePage": 44,
      "refPage": 63,
      "placements": [
        {
          "type": "text",
          "where": "§7.4.2",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.2 Execution Plans and Hardware Co-Design"
        },
        {
          "type": "text",
          "where": "§7.4.3",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.3 Logic, RTL, and Physical Design"
        }
      ],
      "citekey": "archgym2023"
    },
    {
      "ref": 121,
      "name": "MaskPlace",
      "title": "MaskPlace: Fast Chip Placement via Reinforced Visual Representation Learning",
      "authors": "Yao Lai, Yao Mu, and Ping Luo",
      "year": 2022,
      "citation": "Yao Lai, Yao Mu, and Ping Luo. MaskPlace: Fast chip placement via reinforced visual representation learning. arXiv preprint arXiv:2211.13382, 2022.",
      "url": "https://arxiv.org/abs/2211.13382",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Infrastructure"
      ],
      "category": "AI4AI Infrastructure › Logic, RTL, and physical design",
      "sourcePage": 37,
      "refPage": 63,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Infrastructure",
          "path": "AI4AI Infrastructure › Logic, RTL, and physical design",
          "label": "MaskPlace",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.4.3",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.3 Logic, RTL, and Physical Design"
        }
      ],
      "citekey": "maskplace2022"
    },
    {
      "ref": 122,
      "name": "The Agentic Scientist",
      "title": "The Agentic Scientist: Orchestrating Coding Agents for Automated Scientific (Co-)Discovery",
      "authors": "Robert Tjarko Lange, Luca Grillotti, Yutaro Yamada, Rujikorn Charakorn, and David Ha",
      "year": 2026,
      "citation": "Robert Tjarko Lange, Luca Grillotti, Yutaro Yamada, Rujikorn Charakorn, and David Ha. The agentic scientist: Orchestrating coding agents for automated scientific (co-)discovery. arXiv preprint arXiv:2610.18933, 2026.",
      "url": "https://arxiv.org/abs/2610.18933",
      "urlSource": "manuscript",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 49,
      "refPage": 63,
      "placements": [],
      "citekey": "lange2026agenticscientist"
    },
    {
      "ref": 123,
      "name": "ShinkaEvolve",
      "title": "ShinkaEvolve: Towards Open-Ended and Sample-Efficient Program Evolution",
      "authors": "Robert Tjarko Lange, Yuki Imajuku, and Edoardo Cetin",
      "year": 2025,
      "citation": "Robert Tjarko Lange, Yuki Imajuku, and Edoardo Cetin. ShinkaEvolve: Towards open-ended and sample-efficient program evolution. arXiv preprint arXiv:2509.19349, 2025.",
      "url": "https://arxiv.org/abs/2509.19349",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "figure",
      "families": [
        "Infrastructure"
      ],
      "category": "Evolutionary histories › Program archives and lineages",
      "sourcePage": 17,
      "refPage": 63,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Evolutionary histories › Program archives and lineages",
          "label": "ShinkaEvolve"
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§4.2",
          "page": 17,
          "level": "L1",
          "family": null,
          "path": "§4.2 Evolutionary Program Improvement"
        },
        {
          "type": "text",
          "where": "§7.4.1",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.1 Kernels and Tensor Programs"
        }
      ],
      "citekey": "shinkaevolve2025"
    },
    {
      "ref": 124,
      "name": "Goal misgeneralization in deep reinforcement learning",
      "title": "Goal Misgeneralization in Deep Reinforcement Learning",
      "authors": "Lauro Langosco, Jack Koch, Lee Sharkey, Jacob Pfau, and David Krueger",
      "year": 2022,
      "citation": "Lauro Langosco, Jack Koch, Lee Sharkey, Jacob Pfau, and David Krueger. Goal misgeneralization in deep reinforcement learning. In Proceedings of the 39th International Conference on Machine Learning, volume 162 of Proceedings of Machine Learning Research, pages 12004--12019, 2022.",
      "url": "https://arxiv.org/abs/2105.14111",
      "urlSource": "openalex-arxiv",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "chapter",
      "families": [],
      "category": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence",
      "sourcePage": 35,
      "refPage": 63,
      "placements": [
        {
          "type": "text",
          "where": "§6.5",
          "page": 35,
          "level": "L3",
          "family": null,
          "path": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence"
        }
      ],
      "citekey": "langosco2022goal"
    },
    {
      "ref": 125,
      "name": "CodeRL",
      "title": "CodeRL: Mastering Code Generation through Pretrained Models and Deep Reinforcement Learning",
      "authors": "Hung Le, Yue Wang, Akhilesh Deepak Gotmare, Silvio Savarese, and Steven C. H. Hoi",
      "year": 2022,
      "citation": "Hung Le, Yue Wang, Akhilesh Deepak Gotmare, Silvio Savarese, and Steven C. H. Hoi. CodeRL: Mastering code generation through pretrained models and deep reinforcement learning. In Advances in Neural Information Processing Systems, volume 35, 2022.",
      "url": "https://arxiv.org/abs/2207.01780",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "figure",
      "families": [
        "Learning"
      ],
      "category": "Executable evaluation artifacts › Learned verifiers and process critics",
      "sourcePage": 32,
      "refPage": 63,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Executable evaluation artifacts › Learned verifiers and process critics",
          "label": "CodeRL"
        },
        {
          "type": "text",
          "where": "§6.2",
          "page": 32,
          "level": "L3",
          "family": null,
          "path": "§6.2 Executable Evaluation Artifacts"
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "coderl2022"
    },
    {
      "ref": 126,
      "name": "RLAIF",
      "title": "RLAIF vs. RLHF: Scaling Reinforcement Learning from Human Feedback with AI Feedback",
      "authors": "Harrison Lee, Samrat Phatale, Hassan Mansoor, Thomas Mesnard, Johan Ferret, Kellie Lu, Colton Bishop, Ethan Hall, Victor Carbune, Abhinav Rastogi, and Sushant Prakash",
      "year": 2023,
      "citation": "Harrison Lee, Samrat Phatale, Hassan Mansoor, Thomas Mesnard, Johan Ferret, Kellie Lu, Colton Bishop, Ethan Hall, Victor Carbune, Abhinav Rastogi, and Sushant Prakash. RLAIF vs. RLHF: Scaling reinforcement learning from human feedback with AI feedback. arXiv preprint arXiv:2309.00267, 2023.",
      "url": "https://arxiv.org/abs/2309.00267",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3",
        "L2"
      ],
      "level": "L3",
      "basis": "table",
      "families": [
        "Learning"
      ],
      "category": "Learned preference evaluation and model judges",
      "sourcePage": 33,
      "refPage": 63,
      "placements": [
        {
          "type": "table",
          "where": "Table 5",
          "page": 33,
          "level": "L3",
          "family": null,
          "path": "Learned preference evaluation and model judges",
          "label": "RLAIF"
        },
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Learned preference evaluation and model judges › Reward models and AI feedback",
          "label": "RLAIF"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Parameter-updating post-training",
          "label": "RLAIF",
          "starred": true
        },
        {
          "type": "text",
          "where": "§5.3",
          "page": 29,
          "level": "L2",
          "family": null,
          "path": "§5.3 Composition with Direction and Evaluation Control"
        },
        {
          "type": "text",
          "where": "§6.3",
          "page": 32,
          "level": "L3",
          "family": null,
          "path": "§6.3 Learned Preference Evaluation and Model Judges"
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "fieldsFrom": 5,
      "tableLabel": "RLAIF",
      "artifact": "AI preference labels; fitted reward model",
      "human": "task prompts, principles, calibration examples",
      "citekey": "lee2023rlaif"
    },
    {
      "ref": 127,
      "name": "Evolution through large models",
      "title": "Evolution through Large Models",
      "authors": "Joel Lehman, Jonathan Gordon, Shawn Jain, Kamal Ndousse, Cathy Yeh, and Kenneth O. Stanley",
      "year": 2022,
      "citation": "Joel Lehman, Jonathan Gordon, Shawn Jain, Kamal Ndousse, Cathy Yeh, and Kenneth O. Stanley. Evolution through large models. arXiv preprint arXiv:2206.08896, 2022.",
      "url": "https://arxiv.org/abs/2206.08896",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Infrastructure"
      ],
      "category": "§4.2 Evolutionary Program Improvement",
      "sourcePage": 17,
      "refPage": 64,
      "placements": [
        {
          "type": "text",
          "where": "§4.2",
          "page": 17,
          "level": "L1",
          "family": null,
          "path": "§4.2 Evolutionary Program Improvement"
        },
        {
          "type": "text",
          "where": "§7.4.1",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.1 Kernels and Tensor Programs"
        }
      ],
      "citekey": "evolutionlargemodels2022"
    },
    {
      "ref": 128,
      "name": "HW-NAS-Bench",
      "title": "HW-NAS-Bench: Hardware-Aware Neural Architecture Search Benchmark",
      "authors": "Chaojian Li, Zhongzhi Yu, Yonggan Fu, Yongan Zhang, Yang Zhao, Haoran You, Qixuan Yu, Yue Wang, and Yingyan Lin",
      "year": 2021,
      "citation": "Chaojian Li, Zhongzhi Yu, Yonggan Fu, Yongan Zhang, Yang Zhao, Haoran You, Qixuan Yu, Yue Wang, and Yingyan Lin. HW-NAS-Bench: Hardware-aware neural architecture search benchmark. arXiv preprint arXiv:2103.10584, 2021.",
      "url": "https://arxiv.org/abs/2103.10584",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§7.1.3 Parameter-Updating Post-Training",
      "sourcePage": 39,
      "refPage": 64,
      "placements": [
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "hwnasbench2021"
    },
    {
      "ref": 129,
      "name": "From generation to judgment",
      "title": "From Generation to Judgment: Opportunities and Challenges of LLM-as-a-Judge",
      "authors": "Dawei Li, Bohan Jiang, Liangjie Huang, Alimohammad Beigi, Chengshuai Zhao, Zhen Tan, Amrita Bhattacharjee, Yuxuan Jiang, Canyu Chen, Tianhao Wu, Kai Shu, Lu Cheng, and Huan Liu",
      "year": 2024,
      "citation": "Dawei Li, Bohan Jiang, Liangjie Huang, Alimohammad Beigi, Chengshuai Zhao, Zhen Tan, Amrita Bhattacharjee, Yuxuan Jiang, Canyu Chen, Tianhao Wu, Kai Shu, Lu Cheng, and Huan Liu. From generation to judgment: Opportunities and challenges of LLM-as-a-judge. arXiv preprint arXiv:2411.16594, 2024.",
      "url": "https://arxiv.org/abs/2411.16594",
      "urlSource": "manuscript",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 8,
      "refPage": 64,
      "placements": [],
      "citekey": "li2024judge"
    },
    {
      "ref": 130,
      "name": "DataComp-LM",
      "title": "DataComp-LM: In Search of the next Generation of Training Sets for Language Models",
      "authors": "Jeffrey Li, Alex Fang, Georgios Smyrnis, Maor Ivgi, Matt Jordan, Samir Gadre, Hritik Bansal, Etash Guha, Sedrick Keh, Kushal Arora, Saurabh Garg, Rui Xin, Niklas Muennighoff, Reinhard Heckel, Jean Mercat, Mayee Chen, Suchin Gururangan, Mitchell Wortsman, Alon Albalak, Yonatan Bitton, Marianna Nezhurina, Amro Abbas, Cheng-Yu Hsieh, Dhruba Ghosh, Josh Gardner, Maciej Kilian, Hanlin Zhang, Rulin Shao, Sarah Pratt, Sunny Sanyal, Gabriel Ilharco, Giannis Daras, Kalyani Marathe, Aaron Gokaslan, Jieyu Zhang, Khyathi Chandu, Thao Nguyen, Igor Vasiljevic, Sham Kakade, Shuran Song, Sujay Sanghavi, Fartash Faghri, Sewoong Oh, Luke Zettlemoyer, Kyle Lo, Alaaeldin El-Nouby, Hadi Pouransari, Alexander Toshev, Stephanie Wang, Dirk Groeneveld, Luca Soldaini, Pang Wei Koh, Jenia Jitsev, Thomas Kollar, Alexandros G. Dimakis, Yair Carmon, Achal Dave, Ludwig Schmidt, and Vaishaal Shankar",
      "year": 2024,
      "citation": "Jeffrey Li, Alex Fang, Georgios Smyrnis, Maor Ivgi, Matt Jordan, Samir Gadre, Hritik Bansal, Etash Guha, Sedrick Keh, Kushal Arora, Saurabh Garg, Rui Xin, Niklas Muennighoff, Reinhard Heckel, Jean Mercat, Mayee Chen, Suchin Gururangan, Mitchell Wortsman, Alon Albalak, Yonatan Bitton, Marianna Nezhurina, Amro Abbas, Cheng-Yu Hsieh, Dhruba Ghosh, Josh Gardner, Maciej Kilian, Hanlin Zhang, Rulin Shao, Sarah Pratt, Sunny Sanyal, Gabriel Ilharco, Giannis Daras, Kalyani Marathe, Aaron Gokaslan, Jieyu Zhang, Khyathi Chandu, Thao Nguyen, Igor Vasiljevic, Sham Kakade, Shuran Song, Sujay Sanghavi, Fartash Faghri, Sewoong Oh, Luke Zettlemoyer, Kyle Lo, Alaaeldin El-Nouby, Hadi Pouransari, Alexander Toshev, Stephanie Wang, Dirk Groeneveld, Luca Soldaini, Pang Wei Koh, Jenia Jitsev, Thomas Kollar, Alexandros G. Dimakis, Yair Carmon, Achal Dave, Ludwig Schmidt, and Vaishaal Shankar. DataComp-LM: In search of the next generation of training sets for language models. arXiv preprint arXiv:2406.11794, 2024.",
      "url": "https://arxiv.org/abs/2406.11794",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "§7.3.2 Augmentation, Synthesis, and Curricula",
      "sourcePage": 43,
      "refPage": 64,
      "placements": [
        {
          "type": "text",
          "where": "§7.3.2",
          "page": 43,
          "level": null,
          "family": "Data",
          "path": "§7.3.2 Augmentation, Synthesis, and Curricula"
        }
      ],
      "citekey": "datacomplm2024"
    },
    {
      "ref": 131,
      "name": "More agents is all you need",
      "title": "More Agents Is All You Need",
      "authors": "Junyou Li, Qin Zhang, Yangbin Yu, Qiang Fu, and Deheng Ye",
      "year": 2024,
      "citation": "Junyou Li, Qin Zhang, Yangbin Yu, Qiang Fu, and Deheng Ye. More agents is all you need. arXiv preprint arXiv:2402.05120, 2024.",
      "url": "https://arxiv.org/abs/2402.05120",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 21,
      "refPage": 64,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "moreagents2024"
    },
    {
      "ref": 132,
      "name": "ASHA",
      "title": "A System for Massively Parallel Hyperparameter Tuning",
      "authors": "Liam Li, Kevin Jamieson, Afshin Rostamizadeh, Ekaterina Gonina, Jonathan Ben-Tzur, Moritz Hardt, Benjamin Recht, and Ameet Talwalkar",
      "year": 2020,
      "citation": "Liam Li, Kevin Jamieson, Afshin Rostamizadeh, Ekaterina Gonina, Jonathan Ben-Tzur, Moritz Hardt, Benjamin Recht, and Ameet Talwalkar. A system for massively parallel hyperparameter tuning. In Proceedings of Machine Learning and Systems, volume 2, 2020.",
      "url": "https://arxiv.org/abs/1810.05934",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "AI4AI Learning › Configurations and training pipelines",
      "sourcePage": 37,
      "refPage": 64,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Configurations and training pipelines",
          "label": "ASHA",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.1.1",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.1 Configurations and Training Pipelines"
        }
      ],
      "citekey": "asha2020"
    },
    {
      "ref": 133,
      "name": "Random search and reproducibility for neural architecture search",
      "title": "Random Search and Reproducibility for Neural Architecture Search",
      "authors": "Liam Li and Ameet Talwalkar",
      "year": 2020,
      "citation": "Liam Li and Ameet Talwalkar. Random search and reproducibility for neural architecture search. In Ryan P. Adams and Vibhav Gogate, editors, Proceedings of the 35th Uncertainty in Artificial Intelligence Conference, volume 115 of Proceedings of Machine Learning Research, pages 367--377. PMLR, July 2020.",
      "url": "https://arxiv.org/abs/1902.07638",
      "urlSource": "openalex-arxiv",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [],
      "category": "§4.6 Direction Quality, Failure Modes, and the Boundary with L2",
      "sourcePage": 22,
      "refPage": 64,
      "placements": [
        {
          "type": "text",
          "where": "§4.6",
          "page": 22,
          "level": "L1",
          "family": null,
          "path": "§4.6 Direction Quality, Failure Modes, and the Boundary with L2"
        }
      ],
      "citekey": "li2019randomnas"
    },
    {
      "ref": 134,
      "name": "Hyperband",
      "title": "Hyperband: A Novel Bandit-Based Approach to Hyperparameter Optimization",
      "authors": "Lisha Li, Kevin Jamieson, Giulia DeSalvo, Afshin Rostamizadeh, and Ameet Talwalkar",
      "year": 2018,
      "citation": "Lisha Li, Kevin Jamieson, Giulia DeSalvo, Afshin Rostamizadeh, and Ameet Talwalkar. Hyperband: A novel bandit-based approach to hyperparameter optimization. Journal of Machine Learning Research, 18(185):1--52, 2018.",
      "url": "https://arxiv.org/abs/1603.06560",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Learning"
      ],
      "category": "Performance histories",
      "sourcePage": 18,
      "refPage": 64,
      "placements": [
        {
          "type": "table",
          "where": "Table 3",
          "page": 18,
          "level": "L1",
          "family": null,
          "path": "Performance histories",
          "label": "Hyperband"
        },
        {
          "type": "table",
          "where": "Table 6",
          "page": 38,
          "level": "L1",
          "family": "Learning",
          "path": "Configurations and training pipelines",
          "label": "Hyperband"
        },
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Performance histories › Budget and learning curves",
          "label": "Hyperband"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Configurations and training pipelines",
          "label": "Hyperband",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§7.1.1",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.1 Configurations and Training Pipelines"
        }
      ],
      "fieldsFrom": 3,
      "tableLabel": "Hyperband",
      "artifact": "configuration and next budget (continue or resume)",
      "historyRead": "learning curves, validation scores, rung budgets",
      "citekey": "hyperband2018"
    },
    {
      "ref": 135,
      "name": "DeepGate",
      "title": "DeepGate: Learning Neural Representations of Logic Gates",
      "authors": "Min Li, Sadaf Khan, Zhengyuan Shi, Naixing Wang, Yu Huang, and Qiang Xu",
      "year": 2022,
      "citation": "Min Li, Sadaf Khan, Zhengyuan Shi, Naixing Wang, Yu Huang, and Qiang Xu. DeepGate: Learning neural representations of logic gates. In Proceedings of the 59th ACM/IEEE Design Automation Conference, pages 667--672, 2022.",
      "url": "https://arxiv.org/abs/2111.14616",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Infrastructure"
      ],
      "category": "§7.4.3 Logic, RTL, and Physical Design",
      "sourcePage": 44,
      "refPage": 64,
      "placements": [
        {
          "type": "text",
          "where": "§7.4.3",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.3 Logic, RTL, and Physical Design"
        }
      ],
      "citekey": "deepgate2022"
    },
    {
      "ref": 136,
      "name": "DADA",
      "title": "DADA: Differentiable Automatic Data Augmentation",
      "authors": "Yonggang Li, Guosheng Hu, Yongtao Wang, Timothy Hospedales, Neil M. Robertson, and Yongxin Yang",
      "year": 2020,
      "citation": "Yonggang Li, Guosheng Hu, Yongtao Wang, Timothy Hospedales, Neil M. Robertson, and Yongxin Yang. DADA: Differentiable automatic data augmentation. In Proceedings of the European Conference on Computer Vision, pages 580--595, 2020.",
      "url": "https://arxiv.org/abs/2003.03780",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "AI4AI Data › Augmentation, synthesis, and curricula",
      "sourcePage": 37,
      "refPage": 64,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Data",
          "path": "AI4AI Data › Augmentation, synthesis, and curricula",
          "label": "DADA",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.3.2",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.2 Augmentation, Synthesis, and Curricula"
        }
      ],
      "citekey": "dada2020"
    },
    {
      "ref": 137,
      "name": "PRM800K",
      "title": "Let's Verify Step by Step",
      "authors": "Hunter Lightman, Vineet Kosaraju, Yuri Burda, Harrison Edwards, Bowen Baker, Teddy Lee, Jan Leike, John Schulman, Ilya Sutskever, and Karl Cobbe",
      "year": 2023,
      "citation": "Hunter Lightman, Vineet Kosaraju, Yuri Burda, Harrison Edwards, Bowen Baker, Teddy Lee, Jan Leike, John Schulman, Ilya Sutskever, and Karl Cobbe. Let's verify step by step. arXiv preprint arXiv:2305.20050, 2023.",
      "url": "https://arxiv.org/abs/2305.20050",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3",
        "L2"
      ],
      "level": "L3",
      "basis": "figure",
      "families": [
        "Learning"
      ],
      "category": "Executable evaluation artifacts › Learned verifiers and process critics",
      "sourcePage": 32,
      "refPage": 64,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Executable evaluation artifacts › Learned verifiers and process critics",
          "label": "PRM800K"
        },
        {
          "type": "text",
          "where": "§5.3",
          "page": 29,
          "level": "L2",
          "family": null,
          "path": "§5.3 Composition with Direction and Evaluation Control"
        },
        {
          "type": "text",
          "where": "§6.2",
          "page": 32,
          "level": "L3",
          "family": null,
          "path": "§6.2 Executable Evaluation Artifacts"
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "lightman2023verify"
    },
    {
      "ref": 138,
      "name": "NAAS",
      "title": "NAAS: Neural Accelerator Architecture Search",
      "authors": "Yujun Lin, Mengtian Yang, and Song Han",
      "year": 2021,
      "citation": "Yujun Lin, Mengtian Yang, and Song Han. NAAS: Neural accelerator architecture search. In Proceedings of the 58th Annual ACM/IEEE Design Automation Conference, Dac '21, pages 1051--1056, San Francisco, California, United States, 2021. IEEE Press.",
      "url": "https://arxiv.org/abs/2105.13258",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Infrastructure"
      ],
      "category": "Execution plans and hardware co-design",
      "sourcePage": 45,
      "refPage": 65,
      "placements": [
        {
          "type": "table",
          "where": "Table 9",
          "page": 45,
          "level": "L1",
          "family": "Infrastructure",
          "path": "Execution plans and hardware co-design",
          "label": "NAAS"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Infrastructure",
          "path": "AI4AI Infrastructure › Execution plans and hardware co-design",
          "label": "NAAS",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.4.2",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.2 Execution Plans and Hardware Co-Design"
        }
      ],
      "fieldsFrom": 9,
      "tableLabel": "NAAS",
      "artifact": "accelerator, mapping, network",
      "human": "architecture grammar, mapping space, simulator",
      "citekey": "naas2021"
    },
    {
      "ref": 139,
      "name": "SMAC3",
      "title": "SMAC3: A Versatile Bayesian Optimization Package for Hyperparameter Optimization",
      "authors": "Marius Lindauer, Katharina Eggensperger, Matthias Feurer, Andre Biedenkapp, Difan Deng, Carolin Benjamins, Tim Ruhkopf, Rene Sass, and Frank Hutter",
      "year": 2022,
      "citation": "Marius Lindauer, Katharina Eggensperger, Matthias Feurer, Andre Biedenkapp, Difan Deng, Carolin Benjamins, Tim Ruhkopf, Rene Sass, and Frank Hutter. SMAC3: A versatile bayesian optimization package for hyperparameter optimization. Journal of Machine Learning Research, 23(54):1--9, 2022.",
      "url": "https://arxiv.org/abs/2109.09831",
      "urlSource": "openalex-arxiv",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§7.1.1 Configurations and Training Pipelines",
      "sourcePage": 38,
      "refPage": 65,
      "placements": [
        {
          "type": "text",
          "where": "§7.1.1",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.1 Configurations and Training Pipelines"
        }
      ],
      "citekey": "smac32022"
    },
    {
      "ref": 140,
      "name": "PNAS",
      "title": "Progressive Neural Architecture Search",
      "authors": "Chenxi Liu, Barret Zoph, Maxim Neumann, Jonathon Shlens, Wei Hua, Li-Jia Li, Fei-Fei Li, Alan Yuille, Jonathan Huang, and Kevin Murphy",
      "year": 2018,
      "citation": "Chenxi Liu, Barret Zoph, Maxim Neumann, Jonathon Shlens, Wei Hua, Li-Jia Li, Fei-Fei Li, Alan Yuille, Jonathan Huang, and Kevin Murphy. Progressive neural architecture search. In Computer Vision -- ECCV 2018, volume 11205 of Lecture Notes in Computer Science, pages 19--35, 2018.",
      "url": "https://arxiv.org/abs/1712.00559",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "figure",
      "families": [
        "Learning"
      ],
      "category": "Performance histories › Architecture response surfaces",
      "sourcePage": 17,
      "refPage": 65,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Performance histories › Architecture response surfaces",
          "label": "PNAS"
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "pnas2018"
    },
    {
      "ref": 141,
      "name": "Large language models have intrinsic self-correction ability",
      "title": "Large Language Models Have Intrinsic Self-Correction Ability",
      "authors": "Dancheng Liu, Amir Nassereldine, Ziming Yang, Chenhui Xu, Yuting Hu, Jiajie Li, Utkarsh Kumar, Changjae Lee, Ruiyang Qin, Yiyu Shi, and Jinjun Xiong",
      "year": 2024,
      "citation": "Dancheng Liu, Amir Nassereldine, Ziming Yang, Chenhui Xu, Yuting Hu, Jiajie Li, Utkarsh Kumar, Changjae Lee, Ruiyang Qin, Yiyu Shi, and Jinjun Xiong. Large language models have intrinsic self-correction ability. arXiv preprint arXiv:2406.15673, 2024.",
      "url": "https://arxiv.org/abs/2406.15673",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [],
      "category": "§4.4 Reflection, Memory, and Search over Trajectories",
      "sourcePage": 20,
      "refPage": 65,
      "placements": [
        {
          "type": "text",
          "where": "§4.4",
          "page": 20,
          "level": "L1",
          "family": null,
          "path": "§4.4 Reflection, Memory, and Search over Trajectories"
        }
      ],
      "citekey": "intrinsicselfcorrection2024"
    },
    {
      "ref": 142,
      "name": "Evolution of Heuristics",
      "title": "Evolution of Heuristics: Towards Efficient Automatic Algorithm Design Using Large Language Model",
      "authors": "Fei Liu, Xialiang Tong, Mingxuan Yuan, Xi Lin, Fu Luo, Zhenkun Wang, Zhichao Lu, and Qingfu Zhang",
      "year": 2024,
      "citation": "Fei Liu, Xialiang Tong, Mingxuan Yuan, Xi Lin, Fu Luo, Zhenkun Wang, Zhichao Lu, and Qingfu Zhang. Evolution of heuristics: Towards efficient automatic algorithm design using large language model. arXiv preprint arXiv:2401.02051, 2024.",
      "url": "https://arxiv.org/abs/2401.02051",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Infrastructure"
      ],
      "category": "§4.2 Evolutionary Program Improvement",
      "sourcePage": 17,
      "refPage": 65,
      "placements": [
        {
          "type": "text",
          "where": "§4.2",
          "page": 17,
          "level": "L1",
          "family": null,
          "path": "§4.2 Evolutionary Program Improvement"
        },
        {
          "type": "text",
          "where": "§7.4.1",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.1 Kernels and Tensor Programs"
        }
      ],
      "citekey": "eoh2024"
    },
    {
      "ref": 143,
      "name": "Algorithm evolution using large language model",
      "title": "Algorithm Evolution Using Large Language Model",
      "authors": "Fei Liu, Xialiang Tong, Mingxuan Yuan, and Qingfu Zhang",
      "year": 2023,
      "citation": "Fei Liu, Xialiang Tong, Mingxuan Yuan, and Qingfu Zhang. Algorithm evolution using large language model. arXiv preprint arXiv:2311.15249, 2023.",
      "url": "https://arxiv.org/abs/2311.15249",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Infrastructure"
      ],
      "category": "§4.2 Evolutionary Program Improvement",
      "sourcePage": 17,
      "refPage": 65,
      "placements": [
        {
          "type": "text",
          "where": "§4.2",
          "page": 17,
          "level": "L1",
          "family": null,
          "path": "§4.2 Evolutionary Program Improvement"
        },
        {
          "type": "text",
          "where": "§7.4.1",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.1 Kernels and Tensor Programs"
        }
      ],
      "citekey": "ael2023"
    },
    {
      "ref": 144,
      "name": "A systematic survey on large language models for algorithm design",
      "title": "A Systematic Survey on Large Language Models for Algorithm Design",
      "authors": "Fei Liu, Yiming Yao, Ping Guo, Zhiyuan Yang, Zhe Zhao, Xi Lin, Xialiang Tong, Kun Mao, Zhichao Lu, Zhenkun Wang, Mingxuan Yuan, and Qingfu Zhang",
      "year": 2024,
      "citation": "Fei Liu, Yiming Yao, Ping Guo, Zhiyuan Yang, Zhe Zhao, Xi Lin, Xialiang Tong, Kun Mao, Zhichao Lu, Zhenkun Wang, Mingxuan Yuan, and Qingfu Zhang. A systematic survey on large language models for algorithm design. arXiv preprint arXiv:2410.14716, 2024.",
      "url": "https://arxiv.org/abs/2410.14716",
      "urlSource": "manuscript",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 7,
      "refPage": 65,
      "placements": [],
      "citekey": "liu2024llm4ad"
    },
    {
      "ref": 145,
      "name": "DARTS",
      "title": "DARTS: Differentiable Architecture Search",
      "authors": "Hanxiao Liu, Karen Simonyan, and Yiming Yang",
      "year": 2019,
      "citation": "Hanxiao Liu, Karen Simonyan, and Yiming Yang. DARTS: Differentiable architecture search. In International Conference on Learning Representations, 2019.",
      "url": "https://arxiv.org/abs/1806.09055",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Learning"
      ],
      "category": "Architectures and update rules",
      "sourcePage": 38,
      "refPage": 65,
      "placements": [
        {
          "type": "table",
          "where": "Table 6",
          "page": 38,
          "level": "L1",
          "family": "Learning",
          "path": "Architectures and update rules",
          "label": "DARTS"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Architectures and update rules",
          "label": "DARTS",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "fieldsFrom": 6,
      "tableLabel": "DARTS",
      "artifact": "mixed-op weights, then discrete cell",
      "human": "operator set, search space, validation loss",
      "citekey": "liu2019darts"
    },
    {
      "ref": 146,
      "name": "AutoResearchClaw",
      "title": "AutoResearchClaw: Self-Reinforcing Autonomous Research with Human--AI Collaboration",
      "authors": "Jiaqi Liu, Shi Qiu, Mairui Li, Bingzhou Li, Haonian Ji, Siwei Han, Xinyu Ye, Peng Xia, Zihan Dong, Meng Chen, Congyu Zhang, Letian Zhang, Guiming Chen, Haoqin Tu, Xinyu Yang, Lu Feng, Xujiang Zhao, Haifeng Chen, Jiawei Zhou, Xiao Wang, Weitong Zhang, Hongtu Zhu, Yun Li, Jieru Mei, Hongliang Fei, Jiaheng Zhang, Linjie Li, Linjun Zhang, Yuyin Zhou, Sheng Wang, Caiming Xiong, James Zou, Zeyu Zheng, Cihang Xie, Mingyu Ding, and Huaxiu Yao",
      "year": 2026,
      "citation": "Jiaqi Liu, Shi Qiu, Mairui Li, Bingzhou Li, Haonian Ji, Siwei Han, Xinyu Ye, Peng Xia, Zihan Dong, Meng Chen, Congyu Zhang, Letian Zhang, Guiming Chen, Haoqin Tu, Xinyu Yang, Lu Feng, Xujiang Zhao, Haifeng Chen, Jiawei Zhou, Xiao Wang, Weitong Zhang, Hongtu Zhu, Yun Li, Jieru Mei, Hongliang Fei, Jiaheng Zhang, Linjie Li, Linjun Zhang, Yuyin Zhou, Sheng Wang, Caiming Xiong, James Zou, Zeyu Zheng, Cihang Xie, Mingyu Ding, and Huaxiu Yao. AutoResearchClaw: Self-reinforcing autonomous research with human--AI collaboration. arXiv preprint arXiv:2605.20025, 2026.",
      "url": "https://arxiv.org/abs/2605.20025",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Cross-family"
      ],
      "category": "Experimental histories",
      "sourcePage": 18,
      "refPage": 65,
      "placements": [
        {
          "type": "table",
          "where": "Table 3",
          "page": 18,
          "level": "L1",
          "family": null,
          "path": "Experimental histories",
          "label": "AutoResearchClaw"
        },
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Experimental histories › Research memory and experiment selection",
          "label": "AutoResearchClaw"
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 45,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "fieldsFrom": 3,
      "tableLabel": "AutoResearchClaw",
      "artifact": "research action and artifact to revise",
      "historyRead": "literature memory, experiment log, reviewer feedback",
      "citekey": "autoresearchclaw2026"
    },
    {
      "ref": 147,
      "name": "VerilogEval",
      "title": "VerilogEval: Evaluating Large Language Models for Verilog Code Generation",
      "authors": "Mingjie Liu, Nathaniel Pinckney, Brucek Khailany, and Haoxing Ren",
      "year": 2023,
      "citation": "Mingjie Liu, Nathaniel Pinckney, Brucek Khailany, and Haoxing Ren. VerilogEval: Evaluating large language models for verilog code generation. In Proceedings of the 2023 IEEE/ACM International Conference on Computer-Aided Design, 2023.",
      "url": "https://arxiv.org/abs/2309.07544",
      "urlSource": "openalex-arxiv",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Infrastructure"
      ],
      "category": "§7.4.3 Logic, RTL, and Physical Design",
      "sourcePage": 45,
      "refPage": 65,
      "placements": [
        {
          "type": "text",
          "where": "§7.4.3",
          "page": 45,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.3 Logic, RTL, and Physical Design"
        }
      ],
      "citekey": "verilogeval2023"
    },
    {
      "ref": 148,
      "name": "AutoCompress",
      "title": "AutoCompress: An Automatic DNN Structured Pruning Framework for Ultra-High Compression Rates",
      "authors": "Ning Liu, Xiaolong Ma, Zhiyuan Xu, Yanzhi Wang, Jian Tang, and Jieping Ye",
      "year": 2020,
      "citation": "Ning Liu, Xiaolong Ma, Zhiyuan Xu, Yanzhi Wang, Jian Tang, and Jieping Ye. AutoCompress: An automatic DNN structured pruning framework for ultra-high compression rates. Proceedings of the AAAI Conference on Artificial Intelligence, 34(4):4876--4883, 2020.",
      "url": "https://arxiv.org/abs/1907.03141",
      "urlSource": "openalex-arxiv",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§7.1.3 Parameter-Updating Post-Training",
      "sourcePage": 39,
      "refPage": 65,
      "placements": [
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "autocompress2020"
    },
    {
      "ref": 149,
      "name": "RTLCoder",
      "title": "RTLCoder: Fully Open-Source and Efficient LLM-Assisted RTL Code Generation Technique",
      "authors": "Shang Liu, Wenji Fang, Yao Lu, Jing Wang, Qijun Zhang, Hongce Zhang, and Zhiyao Xie",
      "year": 2025,
      "citation": "Shang Liu, Wenji Fang, Yao Lu, Jing Wang, Qijun Zhang, Hongce Zhang, and Zhiyao Xie. RTLCoder: Fully open-source and efficient LLM-assisted RTL code generation technique. IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems, 44(4):1448--1461, 2025.",
      "url": "https://doi.org/10.1109/tcad.2024.3483089",
      "urlSource": "openalex-doi",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Infrastructure"
      ],
      "category": "§7.4.3 Logic, RTL, and Physical Design",
      "sourcePage": 44,
      "refPage": 65,
      "placements": [
        {
          "type": "text",
          "where": "§7.4.3",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.3 Logic, RTL, and Physical Design"
        }
      ],
      "citekey": "rtlcoder2023"
    },
    {
      "ref": 150,
      "name": "Large language models as evolutionary optimizers",
      "title": "Large Language Models as Evolutionary Optimizers",
      "authors": "Shengcai Liu, Caishun Chen, Xinghua Qu, Ke Tang, and Yew-Soon Ong",
      "year": 2023,
      "citation": "Shengcai Liu, Caishun Chen, Xinghua Qu, Ke Tang, and Yew-Soon Ong. Large language models as evolutionary optimizers. arXiv preprint arXiv:2310.19046, 2023.",
      "url": "https://arxiv.org/abs/2310.19046",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Infrastructure"
      ],
      "category": "§4.2 Evolutionary Program Improvement",
      "sourcePage": 17,
      "refPage": 65,
      "placements": [
        {
          "type": "text",
          "where": "§4.2",
          "page": 17,
          "level": "L1",
          "family": null,
          "path": "§4.2 Evolutionary Program Improvement"
        },
        {
          "type": "text",
          "where": "§7.4.1",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.1 Kernels and Tensor Programs"
        }
      ],
      "citekey": "llmevooptimizers2023"
    },
    {
      "ref": 151,
      "name": "AgentBench",
      "title": "AgentBench: Evaluating LLMs as Agents",
      "authors": "Xiao Liu, Hao Yu, Hanchen Zhang, Yifan Xu, Xuanyu Lei, Hanyu Lai, Yu Gu, Hangliang Ding, Kaiwen Men, Kejuan Yang, Shudan Zhang, Xiang Deng, Aohan Zeng, Zhengxiao Du, Chenhui Zhang, Sheng Shen, Tianjun Zhang, Yu Su, Huan Sun, Minlie Huang, Yuxiao Dong, and Jie Tang",
      "year": 2023,
      "citation": "Xiao Liu, Hao Yu, Hanchen Zhang, Yifan Xu, Xuanyu Lei, Hanyu Lai, Yu Gu, Hangliang Ding, Kaiwen Men, Kejuan Yang, Shudan Zhang, Xiang Deng, Aohan Zeng, Zhengxiao Du, Chenhui Zhang, Sheng Shen, Tianjun Zhang, Yu Su, Huan Sun, Minlie Huang, Yuxiao Dong, and Jie Tang. AgentBench: Evaluating LLMs as agents. arXiv preprint arXiv:2308.03688, 2023.",
      "url": "https://arxiv.org/abs/2308.03688",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Inference"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 21,
      "refPage": 66,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": null,
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§5.2",
          "page": 28,
          "level": null,
          "family": null,
          "path": "§5.2 Evaluation and Minimum Evidence for L2"
        },
        {
          "type": "text",
          "where": "§7.2.3",
          "page": 42,
          "level": null,
          "family": "Inference",
          "path": "§7.2.3 Test-Time Reasoning and Serving"
        }
      ],
      "citekey": "agentbench2023"
    },
    {
      "ref": 152,
      "name": "G-Eval",
      "title": "G-Eval: NLG Evaluation Using GPT-4 with Better Human Alignment",
      "authors": "Yang Liu, Dan Iter, Yichong Xu, Shuohang Wang, Ruochen Xu, and Chenguang Zhu",
      "year": 2023,
      "citation": "Yang Liu, Dan Iter, Yichong Xu, Shuohang Wang, Ruochen Xu, and Chenguang Zhu. G-Eval: NLG evaluation using GPT-4 with better human alignment. In Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing, pages 2511--2522, 2023.",
      "url": "https://arxiv.org/abs/2303.16634",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "table",
      "families": [
        "Cross-family"
      ],
      "category": "Learned preference evaluation and model judges",
      "sourcePage": 33,
      "refPage": 66,
      "placements": [
        {
          "type": "table",
          "where": "Table 5",
          "page": 33,
          "level": "L3",
          "family": null,
          "path": "Learned preference evaluation and model judges",
          "label": "G-Eval"
        },
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Learned preference evaluation and model judges › General-purpose model judges",
          "label": "G-Eval"
        },
        {
          "type": "text",
          "where": "§6.3",
          "page": 32,
          "level": "L3",
          "family": null,
          "path": "§6.3 Learned Preference Evaluation and Model Judges"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "fieldsFrom": 5,
      "tableLabel": "G-Eval",
      "artifact": "CoT criterion use; probability-weighted score",
      "human": "human criteria, task inputs, reference context",
      "citekey": "geval2023"
    },
    {
      "ref": 153,
      "name": "MetaPruning",
      "title": "MetaPruning: Meta Learning for Automatic Neural Network Channel Pruning",
      "authors": "Zechun Liu, Haoyuan Mu, Xiangyu Zhang, Zichao Guo, Xin Yang, Kwang-Ting Cheng, and Jian Sun",
      "year": 2019,
      "citation": "Zechun Liu, Haoyuan Mu, Xiangyu Zhang, Zichao Guo, Xin Yang, Kwang-Ting Cheng, and Jian Sun. MetaPruning: Meta learning for automatic neural network channel pruning. In Proceedings of the IEEE/CVF International Conference on Computer Vision, pages 3296--3305, 2019.",
      "url": "https://arxiv.org/abs/1903.10258",
      "urlSource": "openalex-arxiv",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§7.1.3 Parameter-Updating Post-Training",
      "sourcePage": 39,
      "refPage": 66,
      "placements": [
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "metapruning2019"
    },
    {
      "ref": 154,
      "name": "AutoPrune",
      "title": "An AI4AI Framework for Visual Token Pruning",
      "authors": "Zhen Liu, Wenli Huang, Wei Song, Yuhan Liu, Zhiqin Yang, and Jingwen Fu",
      "year": 2026,
      "citation": "Zhen Liu, Wenli Huang, Wei Song, Yuhan Liu, Zhiqin Yang, and Jingwen Fu. An AI4AI framework for visual token pruning. arXiv preprint arXiv:2608.07193, 2026.",
      "url": "https://arxiv.org/abs/2608.07193",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Inference"
      ],
      "category": "Test-time reasoning and serving",
      "sourcePage": 41,
      "refPage": 66,
      "placements": [
        {
          "type": "table",
          "where": "Table 7",
          "page": 41,
          "level": "L1",
          "family": "Inference",
          "path": "Test-time reasoning and serving",
          "label": "AutoPrune"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Inference",
          "path": "AI4AI Inference › Test-time reasoning and serving",
          "label": "AutoPrune",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.2.3",
          "page": 41,
          "level": null,
          "family": "Inference",
          "path": "§7.2.3 Test-Time Reasoning and Serving"
        }
      ],
      "fieldsFrom": 7,
      "tableLabel": "AutoPrune",
      "artifact": "token-pruning policy in the DSL",
      "human": "pruning DSL, token budget, task metric",
      "citekey": "liu2026ai4ai"
    },
    {
      "ref": 155,
      "name": "SPARK",
      "title": "Structured Progressive Knowledge Activation for LLM-Driven Neural Architecture Search",
      "authors": "Zhen Liu, Yuhan Liu, Jinjun Wang, Wei Song, Jianyi Liu, and Jingwen Fu",
      "year": 2026,
      "citation": "Zhen Liu, Yuhan Liu, Jinjun Wang, Wei Song, Jianyi Liu, and Jingwen Fu. Structured progressive knowledge activation for LLM-driven neural architecture search. arXiv preprint arXiv:2605.04057, 2026.",
      "url": "https://arxiv.org/abs/2605.04057",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "AI4AI Learning › Architectures and update rules",
      "sourcePage": 37,
      "refPage": 66,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Architectures and update rules",
          "label": "SPARK",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "liu2026structured"
    },
    {
      "ref": 156,
      "name": "GraphIR",
      "title": "GraphIR: Architecture-Level Search States for LLM-Guided Neural Architecture Evolution",
      "authors": "Zhen Liu, Wanqi Zhou, Shuanghao Bai, Yuhan Liu, Jinjun Wang, and Jingwen Fu",
      "year": 2026,
      "citation": "Zhen Liu, Wanqi Zhou, Shuanghao Bai, Yuhan Liu, Jinjun Wang, and Jingwen Fu. GraphIR: Architecture-level search states for LLM-guided neural architecture evolution. arXiv preprint arXiv:2608.01633, 2026.",
      "url": "https://arxiv.org/abs/2608.01633",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "AI4AI Learning › Architectures and update rules",
      "sourcePage": 37,
      "refPage": 66,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Architectures and update rules",
          "label": "GraphIR",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "liu2026graphir"
    },
    {
      "ref": 157,
      "name": "On LLMsdriven synthetic data generation, curation, and evaluation: A survey",
      "title": "On LLMs-Driven Synthetic Data Generation, Curation, and Evaluation: A Survey",
      "authors": "Lin Long, Rui Wang, Ruixuan Xiao, Junbo Zhao, Xiao Ding, Gang Chen, and Haobo Wang",
      "year": 2024,
      "citation": "Lin Long, Rui Wang, Ruixuan Xiao, Junbo Zhao, Xiao Ding, Gang Chen, and Haobo Wang. On LLMs-driven synthetic data generation, curation, and evaluation: A survey. In Findings of the Association for Computational Linguistics: ACL 2024, pages 11065--11082, 2024.",
      "url": "https://arxiv.org/abs/2406.15126",
      "urlSource": "openalex-arxiv",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 8,
      "refPage": 66,
      "placements": [],
      "citekey": "long2024synthetic"
    },
    {
      "ref": 158,
      "name": "AI Scientist",
      "title": "The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery",
      "authors": "Chris Lu, Cong Lu, Robert Tjarko Lange, Jakob Foerster, Jeff Clune, and David Ha",
      "year": 2024,
      "citation": "Chris Lu, Cong Lu, Robert Tjarko Lange, Jakob Foerster, Jeff Clune, and David Ha. The AI scientist: Towards fully automated open-ended scientific discovery. arXiv preprint arXiv:2408.06292, 2024.",
      "url": "https://arxiv.org/abs/2408.06292",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1",
        "L3"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Cross-family"
      ],
      "category": "Experimental histories",
      "sourcePage": 18,
      "refPage": 66,
      "placements": [
        {
          "type": "table",
          "where": "Table 3",
          "page": 18,
          "level": "L1",
          "family": null,
          "path": "Experimental histories",
          "label": "AI Scientist"
        },
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Experimental histories › Research memory and experiment selection",
          "label": "AI Scientist"
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§6.5",
          "page": 35,
          "level": "L3",
          "family": null,
          "path": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 45,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "fieldsFrom": 3,
      "tableLabel": "AI Scientist",
      "artifact": "next hypothesis and experiment",
      "historyRead": "literature, hypotheses, code, results, reviews",
      "citekey": "lu2024scientist"
    },
    {
      "ref": 159,
      "name": "RTLLM",
      "title": "RTLLM: An Open-Source Benchmark for Design RTL Generation with Large Language Model",
      "authors": "Yao Lu, Shang Liu, Qijun Zhang, and Zhiyao Xie",
      "year": 2023,
      "citation": "Yao Lu, Shang Liu, Qijun Zhang, and Zhiyao Xie. RTLLM: An open-source benchmark for design RTL generation with large language model. arXiv preprint arXiv:2308.05345, 2023.",
      "url": "https://arxiv.org/abs/2308.05345",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Infrastructure"
      ],
      "category": "§7.4.3 Logic, RTL, and Physical Design",
      "sourcePage": 45,
      "refPage": 66,
      "placements": [
        {
          "type": "text",
          "where": "§7.4.3",
          "page": 45,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.3 Logic, RTL, and Physical Design"
        }
      ],
      "citekey": "rtllm2023"
    },
    {
      "ref": 160,
      "name": "NAO",
      "title": "Neural Architecture Optimization",
      "authors": "Renqian Luo, Fei Tian, Tao Qin, Enhong Chen, and Tie-Yan Liu",
      "year": 2018,
      "citation": "Renqian Luo, Fei Tian, Tao Qin, Enhong Chen, and Tie-Yan Liu. Neural architecture optimization. arXiv preprint arXiv:1808.07233, 2018.",
      "url": "https://arxiv.org/abs/1808.07233",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "figure",
      "families": [
        "Learning"
      ],
      "category": "Performance histories › Architecture response surfaces",
      "sourcePage": 17,
      "refPage": 66,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Performance histories › Architecture response surfaces",
          "label": "NAO"
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "nao2018"
    },
    {
      "ref": 161,
      "name": "Adaptive population handoff",
      "title": "Relay, Don't Route: Adaptive Population Handoff for Cost-Efficient LLM-Driven Evolution",
      "authors": "Sichun Luo, Yi Huang, Guanzhi Deng, Haibo Wang, Haochen Luo, Lei Li, Zefa Hu, Junlan Feng, and Qi Liu",
      "year": 2026,
      "citation": "Sichun Luo, Yi Huang, Guanzhi Deng, Haibo Wang, Haochen Luo, Lei Li, Zefa Hu, Junlan Feng, and Qi Liu. Relay, don't route: Adaptive population handoff for cost-efficient LLM-driven evolution. arXiv preprint arXiv:2608.05651, 2026.",
      "url": "https://arxiv.org/abs/2608.05651",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Infrastructure"
      ],
      "category": "§4.2 Evolutionary Program Improvement",
      "sourcePage": 18,
      "refPage": 66,
      "placements": [
        {
          "type": "text",
          "where": "§4.2",
          "page": 18,
          "level": "L1",
          "family": null,
          "path": "§4.2 Evolutionary Program Improvement"
        },
        {
          "type": "text",
          "where": "§7.4.1",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.1 Kernels and Tensor Programs"
        }
      ],
      "citekey": "relay2026"
    },
    {
      "ref": 162,
      "name": "SeaEvo",
      "title": "SeaEvo: Advancing Algorithm Discovery with Strategy Space Evolution",
      "authors": "Sichun Luo, Yi Huang, Haochen Luo, Fengyuan Liu, Guanzhi Deng, Lei Li, Qinghua Yao, Zefa Hu, Junlan Feng, and Qi Liu",
      "year": 2026,
      "citation": "Sichun Luo, Yi Huang, Haochen Luo, Fengyuan Liu, Guanzhi Deng, Lei Li, Qinghua Yao, Zefa Hu, Junlan Feng, and Qi Liu. SeaEvo: Advancing algorithm discovery with strategy space evolution. arXiv preprint arXiv:2604.24372, 2026.",
      "url": "https://arxiv.org/abs/2604.24372",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "figure",
      "families": [
        "Infrastructure"
      ],
      "category": "Evolutionary histories › Program archives and lineages",
      "sourcePage": 17,
      "refPage": 66,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Evolutionary histories › Program archives and lineages",
          "label": "SeaEvo"
        },
        {
          "type": "text",
          "where": "§4.2",
          "page": 17,
          "level": "L1",
          "family": null,
          "path": "§4.2 Evolutionary Program Improvement"
        },
        {
          "type": "text",
          "where": "§7.4.1",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.1 Kernels and Tensor Programs"
        }
      ],
      "citekey": "seaevo2026"
    },
    {
      "ref": 163,
      "name": "The more you automate, the less you see: Hidden pitfalls of AI scientist systems",
      "title": "The More You Automate, the Less You See: Hidden Pitfalls of AI Scientist Systems",
      "authors": "Ziming Luo, Atoosa Kasirzadeh, and Nihar B. Shah",
      "year": 2025,
      "citation": "Ziming Luo, Atoosa Kasirzadeh, and Nihar B. Shah. The more you automate, the less you see: Hidden pitfalls of AI scientist systems. arXiv preprint arXiv:2509.08713, 2025.",
      "url": "https://arxiv.org/abs/2509.08713",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 22,
      "refPage": 66,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 22,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "automationpitfalls2025"
    },
    {
      "ref": 164,
      "name": "LLM4SR: A survey on large language models for scientific research",
      "title": "LLM4SR: A Survey on Large Language Models for Scientific Research",
      "authors": "Ziming Luo, Zonglin Yang, Zexin Xu, Wei Yang, and Xinya Du",
      "year": 2025,
      "citation": "Ziming Luo, Zonglin Yang, Zexin Xu, Wei Yang, and Xinya Du. LLM4SR: A survey on large language models for scientific research. arXiv preprint arXiv:2501.04306, 2025.",
      "url": "https://arxiv.org/abs/2501.04306",
      "urlSource": "manuscript",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 5,
      "refPage": 66,
      "placements": [],
      "citekey": "luo2025llm4sr"
    },
    {
      "name": "AIRS-Bench",
      "url": "https://arxiv.org/abs/2602.06855",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Cross-family"
      ],
      "category": "§7.5 Research Workflows and Shared Evaluation",
      "placements": [
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "ref": 165,
      "title": "AIRS-Bench: a Suite of Tasks for Frontier AI Research Science Agents",
      "authors": "Alisia Lupidi, Bhavul Gauri, Thomas Simon Foster, Bassel Al Omari, Despoina Magka, Alberto Pepe, Alexis Audran-Reiss, Muna Aghamelu, Nicolas Baldwin, Lucia Cipolina-Kun, Jean-Christophe Gagnon-Audet, Chee Hau Leow, Sandra Lefdal, Hossam Mossalam, Abhinav Moudgil, Saba Nazir, Emanuel Tewolde, Isabel Urrego, Jordi Armengol Estape, Amar Budhiraja, Gaurav Chaurasia, Abhishek Charnalia, Derek Dunfield, Karen Hambardzumyan, Daniel Izcovich, Martin Josifoski, Ishita Mediratta, Kelvin Niu, Parth Pathak, Michael Shvartsman, Edan Toledo, Anton Protopopov, Roberta Raileanu, Alexander Miller, Tatiana Shavrina, Jakob Foerster, and Yoram Bachrach",
      "year": 2026,
      "citation": "Alisia Lupidi, Bhavul Gauri, Thomas Simon Foster, Bassel Al Omari, Despoina Magka, Alberto Pepe, Alexis Audran-Reiss, Muna Aghamelu, Nicolas Baldwin, Lucia Cipolina-Kun, Jean-Christophe Gagnon-Audet, Chee Hau Leow, Sandra Lefdal, Hossam Mossalam, Abhinav Moudgil, Saba Nazir, Emanuel Tewolde, Isabel Urrego, Jordi Armengol Estape, Amar Budhiraja, Gaurav Chaurasia, Abhishek Charnalia, Derek Dunfield, Karen Hambardzumyan, Daniel Izcovich, Martin Josifoski, Ishita Mediratta, Kelvin Niu, Parth Pathak, Michael Shvartsman, Edan Toledo, Anton Protopopov, Roberta Raileanu, Alexander Miller, Tatiana Shavrina, Jakob Foerster, and Yoram Bachrach. Airs-bench: a suite of tasks for frontier ai research science agents, 2026.",
      "citekey": "lupidi2026airsbench",
      "refPage": 67,
      "sourcePage": 46
    },
    {
      "name": "MLS-Bench",
      "url": "https://arxiv.org/abs/2605.08678",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§7.1.3 Parameter-Updating Post-Training",
      "placements": [
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 40,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "ref": 166,
      "title": "MLS-Bench: A Holistic and Rigorous Assessment of AI Systems on Building Better AI",
      "authors": "Bohan Lyu, Yucheng Yang, Siqiao Huang, Jiaru Zhang, Qixin Xu, Xinghan Li, Xinyang Han, Yicheng Zhang, Huaqing Zhang, Runhan Huang, Kaicheng Yang, Zitao Chen, Wentao Guo, Junlin Yang, Xinyue Ai, Wenhao Chai, Yadi Cao, Ziran Yang, Kun Wang, Dapeng Jiang, Huan ang Gao, Shange Tang, Chengshuai Shi, Simon S. Du, Max Simchowitz, Jiantao Jiao, Dawn Song, and Chi Jin",
      "year": 2026,
      "citation": "Bohan Lyu, Yucheng Yang, Siqiao Huang, Jiaru Zhang, Qixin Xu, Xinghan Li, Xinyang Han, Yicheng Zhang, Huaqing Zhang, Runhan Huang, Kaicheng Yang, Zitao Chen, Wentao Guo, Junlin Yang, Xinyue Ai, Wenhao Chai, Yadi Cao, Ziran Yang, Kun Wang, Dapeng Jiang, Huan ang Gao, Shange Tang, Chengshuai Shi, Simon S. Du, Max Simchowitz, Jiantao Jiao, Dawn Song, and Chi Jin. Mls-bench: A holistic and rigorous assessment of ai systems on building better ai, 2026.",
      "citekey": "lyu2026mlsbench",
      "refPage": 67,
      "sourcePage": 40
    },
    {
      "ref": 167,
      "name": "AgentBoard",
      "title": "AgentBoard: An Analytical Evaluation Board of Multi-Turn LLM Agents",
      "authors": "Chang Ma, Junlei Zhang, Zhihao Zhu, Cheng Yang, Yujiu Yang, Yaohui Jin, Zhenzhong Lan, Lingpeng Kong, and Junxian He",
      "year": 2024,
      "citation": "Chang Ma, Junlei Zhang, Zhihao Zhu, Cheng Yang, Yujiu Yang, Yaohui Jin, Zhenzhong Lan, Lingpeng Kong, and Junxian He. AgentBoard: An analytical evaluation board of multi-turn LLM agents. arXiv preprint arXiv:2401.13178, 2024.",
      "url": "https://arxiv.org/abs/2401.13178",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Inference"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 21,
      "refPage": 67,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": null,
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§5.2",
          "page": 28,
          "level": null,
          "family": null,
          "path": "§5.2 Evaluation and Minimum Evidence for L2"
        },
        {
          "type": "text",
          "where": "§7.2.3",
          "page": 42,
          "level": null,
          "family": "Inference",
          "path": "§7.2.3 Test-Time Reasoning and Serving"
        }
      ],
      "citekey": "agentboard2024"
    },
    {
      "ref": 168,
      "name": "Eureka",
      "title": "Eureka: Human-Level Reward Design via Coding Large Language Models",
      "authors": "Yecheng Jason Ma, William Liang, Guanzhi Wang, De-An Huang, Osbert Bastani, Dinesh Jayaraman, Yuke Zhu, Linxi Fan, and Anima Anandkumar",
      "year": 2023,
      "citation": "Yecheng Jason Ma, William Liang, Guanzhi Wang, De-An Huang, Osbert Bastani, Dinesh Jayaraman, Yuke Zhu, Linxi Fan, and Anima Anandkumar. Eureka: Human-level reward design via coding large language models. arXiv preprint arXiv:2310.12931, 2023.",
      "url": "https://arxiv.org/abs/2310.12931",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3",
        "L1",
        "L2"
      ],
      "level": "L3",
      "basis": "table",
      "families": [
        "Learning"
      ],
      "category": "Generated objectives and self-evaluation",
      "sourcePage": 33,
      "refPage": 67,
      "placements": [
        {
          "type": "table",
          "where": "Table 5",
          "page": 33,
          "level": "L3",
          "family": null,
          "path": "Generated objectives and self-evaluation",
          "label": "Eureka"
        },
        {
          "type": "table",
          "where": "Table 6",
          "page": 38,
          "level": "L3",
          "family": "Learning",
          "path": "Parameter-updating post-training",
          "label": "Eureka"
        },
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Generated objectives and self-evaluation › Executable reward design",
          "label": "Eureka"
        },
        {
          "type": "text",
          "where": "§4.5",
          "page": 22,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§5.3",
          "page": 29,
          "level": "L2",
          "family": null,
          "path": "§5.3 Composition with Direction and Evaluation Control"
        },
        {
          "type": "text",
          "where": "§6.4",
          "page": 34,
          "level": "L3",
          "family": null,
          "path": "§6.4 Generated Objectives and Self-Evaluation"
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "fieldsFrom": 5,
      "tableLabel": "Eureka",
      "artifact": "reward program evolved from training feedback",
      "human": "environment code, natural-language objective, simulator dynamics",
      "citekey": "ma2023eureka"
    },
    {
      "ref": 169,
      "name": "Self-Refine",
      "title": "Self-Refine: Iterative Refinement with Self-Feedback",
      "authors": "Aman Madaan, Niket Tandon, Prakhar Gupta, Skyler Hallinan, Luyu Gao, Sarah Wiegreffe, Uri Alon, Nouha Dziri, Shrimai Prabhumoye, Yiming Yang, Shashank Gupta, Bodhisattwa Prasad Majumder, Katherine Hermann, Sean Welleck, Amir Yazdanbakhsh, and Peter Clark",
      "year": 2023,
      "citation": "Aman Madaan, Niket Tandon, Prakhar Gupta, Skyler Hallinan, Luyu Gao, Sarah Wiegreffe, Uri Alon, Nouha Dziri, Shrimai Prabhumoye, Yiming Yang, Shashank Gupta, Bodhisattwa Prasad Majumder, Katherine Hermann, Sean Welleck, Amir Yazdanbakhsh, and Peter Clark. Self-refine: Iterative refinement with self-feedback. In Advances in Neural Information Processing Systems, volume 36, 2023.",
      "url": "https://arxiv.org/abs/2303.17651",
      "urlSource": "openalex-arxiv",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 12,
      "refPage": 67,
      "placements": [],
      "citekey": "madaan2023selfrefine"
    },
    {
      "ref": 170,
      "name": "Faster sorting algorithms discovered using deep reinforcement learning",
      "title": "Faster Sorting Algorithms Discovered Using Deep Reinforcement Learning",
      "authors": "Daniel J. Mankowitz, Andrea Michi, Anton Zhernov, Marco Gelmi, Marco Selvi, Cosmin Paduraru, Edouard Leurent, Shariq Iqbal, Jean-Baptiste Lespiau, Alex Ahern, Thomas Koppe, Kevin Millikin, Stephen Gaffney, Sophie Elster, Jackson Broshear, Chris Gamble, Kieran Milan, Robert Tung, Minjae Hwang, Taylan Cemgil, Mohammadamin Barekatain, Yujia Li, Amol Mandhane, Thomas Hubert, Julian Schrittwieser, Demis Hassabis, Pushmeet Kohli, Martin Riedmiller, Oriol Vinyals, and David Silver",
      "year": 2023,
      "citation": "Daniel J. Mankowitz, Andrea Michi, Anton Zhernov, Marco Gelmi, Marco Selvi, Cosmin Paduraru, Edouard Leurent, Shariq Iqbal, Jean-Baptiste Lespiau, Alex Ahern, Thomas Koppe, Kevin Millikin, Stephen Gaffney, Sophie Elster, Jackson Broshear, Chris Gamble, Kieran Milan, Robert Tung, Minjae Hwang, Taylan Cemgil, Mohammadamin Barekatain, Yujia Li, Amol Mandhane, Thomas Hubert, Julian Schrittwieser, Demis Hassabis, Pushmeet Kohli, Martin Riedmiller, Oriol Vinyals, and David Silver. Faster sorting algorithms discovered using deep reinforcement learning. Nature, 618(7964):257--263, 2023.",
      "url": "https://doi.org/10.1038/s41586-023-06004-9",
      "urlSource": "openalex-doi",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Infrastructure"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 22,
      "refPage": 67,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 22,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.4.1",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.1 Kernels and Tensor Programs"
        }
      ],
      "citekey": "mankowitz2023alphadev"
    },
    {
      "ref": 171,
      "name": "DataPerf",
      "title": "DataPerf: Benchmarks for Data-Centric AI Development",
      "authors": "Mark Mazumder, Colby Banbury, Xiaozhe Yao, Bojan Karlas, William Gaviria Rojas, Sudnya Diamos, Greg Diamos, Lynn He, Alicia Parrish, Hannah Rose Kirk, Jessica Quaye, Charvi Rastogi, Douwe Kiela, David Jurado, David Kanter, Rafael Mosquera, Will Cukierski, Juan Ciro, Lora Aroyo, Bilge Acun, Lingjiao Chen, Mehul Raje, Max Bartolo, Evan Sabri Eyuboglu, Amirata Ghorbani, Emmett Goodman, Addison Howard, Oana Inel, Tariq Kane, Christine R. Kirkpatrick, D. Sculley, Tzu-Sheng Kuo, Jonas W Mueller, Tristan Thrush, Joaquin Vanschoren, Margaret Warren, Adina Williams, Serena Yeung, Newsha Ardalani, Praveen Paritosh, Ce Zhang, James Zou, Carole-Jean Wu, Cody Coleman, Andrew Ng, Peter Mattson, and Vijay Janapa Reddi",
      "year": 2023,
      "citation": "Mark Mazumder, Colby Banbury, Xiaozhe Yao, Bojan Karlas, William Gaviria Rojas, Sudnya Diamos, Greg Diamos, Lynn He, Alicia Parrish, Hannah Rose Kirk, Jessica Quaye, Charvi Rastogi, Douwe Kiela, David Jurado, David Kanter, Rafael Mosquera, Will Cukierski, Juan Ciro, Lora Aroyo, Bilge Acun, Lingjiao Chen, Mehul Raje, Max Bartolo, Evan Sabri Eyuboglu, Amirata Ghorbani, Emmett Goodman, Addison Howard, Oana Inel, Tariq Kane, Christine R. Kirkpatrick, D. Sculley, Tzu-Sheng Kuo, Jonas W Mueller, Tristan Thrush, Joaquin Vanschoren, Margaret Warren, Adina Williams, Serena Yeung, Newsha Ardalani, Praveen Paritosh, Ce Zhang, James Zou, Carole-Jean Wu, Cody Coleman, Andrew Ng, Peter Mattson, and Vijay Janapa Reddi. DataPerf: Benchmarks for data-centric AI development. In Advances in Neural Information Processing Systems, Datasets and Benchmarks Track, volume 36, pages 5320--5347, 2023.",
      "url": "https://arxiv.org/abs/2207.10062",
      "urlSource": "openalex-arxiv",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "§7.3.2 Augmentation, Synthesis, and Curricula",
      "sourcePage": 43,
      "refPage": 67,
      "placements": [
        {
          "type": "text",
          "where": "§7.3.2",
          "page": 43,
          "level": null,
          "family": "Data",
          "path": "§7.3.2 Augmentation, Synthesis, and Curricula"
        }
      ],
      "citekey": "dataperf2022"
    },
    {
      "ref": 172,
      "name": "CriticGPT",
      "title": "LLM Critics Help Catch LLM Bugs",
      "authors": "Nat McAleese, Rai Michael Pokorny, Juan Felipe Ceron Uribe, Evgenia Nitishinskaya, Maja Trebacz, and Jan Leike",
      "year": 2024,
      "citation": "Nat McAleese, Rai Michael Pokorny, Juan Felipe Ceron Uribe, Evgenia Nitishinskaya, Maja Trebacz, and Jan Leike. LLM critics help catch LLM bugs. arXiv preprint arXiv:2407.00215, 2024.",
      "url": "https://arxiv.org/abs/2407.00215",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "table",
      "families": [
        "Cross-family"
      ],
      "category": "Adaptive evaluation and oversight",
      "sourcePage": 33,
      "refPage": 67,
      "placements": [
        {
          "type": "table",
          "where": "Table 5",
          "page": 33,
          "level": "L3",
          "family": null,
          "path": "Adaptive evaluation and oversight",
          "label": "CriticGPT†"
        },
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Adaptive evaluation and oversight › Debate and AI-assisted oversight",
          "label": "CriticGPT"
        },
        {
          "type": "text",
          "where": "§6.5",
          "page": 35,
          "level": "L3",
          "family": null,
          "path": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "fieldsFrom": 5,
      "tableLabel": "CriticGPT†",
      "artifact": "learned critique that guides review",
      "human": "human reviewer, code task, known-error supervision",
      "citekey": "mcaleese2024critics"
    },
    {
      "ref": 173,
      "name": "Neural architecture search without training",
      "title": "Neural Architecture Search without Training",
      "authors": "Joseph Mellor, Jack Turner, Amos Storkey, and Elliot J. Crowley",
      "year": 2020,
      "citation": "Joseph Mellor, Jack Turner, Amos Storkey, and Elliot J. Crowley. Neural architecture search without training. arXiv preprint arXiv:2006.04647, 2020.",
      "url": "https://arxiv.org/abs/2006.04647",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Learning"
      ],
      "category": "§4.1 History-Conditioned Direction Selection",
      "sourcePage": 16,
      "refPage": 68,
      "placements": [
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "naswithouttraining2020"
    },
    {
      "name": "RSIBench-Data",
      "url": "https://arxiv.org/abs/2607.25886",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "§7.3.2 Augmentation, Synthesis, and Curricula",
      "placements": [
        {
          "type": "text",
          "where": "§7.3.2",
          "page": 43,
          "level": null,
          "family": "Data",
          "path": "§7.3.2 Augmentation, Synthesis, and Curricula"
        }
      ],
      "ref": 174,
      "title": "RSIBench-Data: Benchmarking Data-Centric Research for Recursive Self-Improvement",
      "authors": "Fanqing Meng, Lingxiao Du, Qiguang Chen, Ziqi Zhao, Haocheng Lu, Mengkang Hu, and Michael Qizhe Shieh",
      "year": 2026,
      "citation": "Fanqing Meng, Lingxiao Du, Qiguang Chen, Ziqi Zhao, Haocheng Lu, Mengkang Hu, and Michael Qizhe Shieh. Rsibench-data: Benchmarking data-centric research for recursive self-improvement, 2026.",
      "citekey": "meng2026rsibenchdata",
      "refPage": 68,
      "sourcePage": 43
    },
    {
      "name": "RSIGym",
      "url": "https://arxiv.org/abs/2610.10310",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Cross-family"
      ],
      "category": "§7.5 Research Workflows and Shared Evaluation",
      "placements": [
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "ref": 175,
      "title": "RSIGym: A Flexible Environment for Recursive Self-Improvement",
      "authors": "Fanqing Meng, Lingxiao Du, Haocheng Lu, Qiguang Chen, Ziqi Zhao, Zijian Wu, Jiayuan Zhuo, Mengkang Hu, and Michael Qizhe Shieh",
      "year": 2026,
      "citation": "Fanqing Meng, Lingxiao Du, Haocheng Lu, Qiguang Chen, Ziqi Zhao, Zijian Wu, Jiayuan Zhuo, Mengkang Hu, and Michael Qizhe Shieh. Rsigym: A flexible environment for recursive self-improvement, 2026.",
      "citekey": "meng2026rsigym",
      "refPage": 68,
      "sourcePage": 46
    },
    {
      "ref": 176,
      "name": "VeLO",
      "title": "VeLO: Training Versatile Learned Optimizers by Scaling Up",
      "authors": "Luke Metz, James Harrison, C. Daniel Freeman, Amil Merchant, Lucas Beyer, James Bradbury, Naman Agrawal, Ben Poole, Igor Mordatch, Adam Roberts, and Jascha Sohl-Dickstein",
      "year": 2022,
      "citation": "Luke Metz, James Harrison, C. Daniel Freeman, Amil Merchant, Lucas Beyer, James Bradbury, Naman Agrawal, Ben Poole, Igor Mordatch, Adam Roberts, and Jascha Sohl-Dickstein. VeLO: Training versatile learned optimizers by scaling up. arXiv preprint arXiv:2211.09760, 2022.",
      "url": "https://arxiv.org/abs/2211.09760",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Learning"
      ],
      "category": "Architectures and update rules",
      "sourcePage": 38,
      "refPage": 68,
      "placements": [
        {
          "type": "table",
          "where": "Table 6",
          "page": 38,
          "level": "L1",
          "family": "Learning",
          "path": "Architectures and update rules",
          "label": "VeLO"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Architectures and update rules",
          "label": "VeLO",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "fieldsFrom": 6,
      "tableLabel": "VeLO",
      "artifact": "learned update-rule weights",
      "human": "optimizer family, meta-training distribution",
      "citekey": "velo2022"
    },
    {
      "ref": 177,
      "name": "Language Model Crossover",
      "title": "Language Model Crossover: Variation through Few-Shot Prompting",
      "authors": "Elliot Meyerson, Mark J. Nelson, Herbie Bradley, Adam Gaier, Arash Moradi, Amy K. Hoover, and Joel Lehman",
      "year": 2023,
      "citation": "Elliot Meyerson, Mark J. Nelson, Herbie Bradley, Adam Gaier, Arash Moradi, Amy K. Hoover, and Joel Lehman. Language model crossover: Variation through few-shot prompting. arXiv preprint arXiv:2302.12170, 2023.",
      "url": "https://arxiv.org/abs/2302.12170",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "figure",
      "families": [
        "Infrastructure"
      ],
      "category": "Evolutionary histories › Variation and strategy histories",
      "sourcePage": 17,
      "refPage": 68,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Evolutionary histories › Variation and strategy histories",
          "label": "Language Model Crossover"
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§4.2",
          "page": 17,
          "level": "L1",
          "family": null,
          "path": "§4.2 Evolutionary Program Improvement"
        },
        {
          "type": "text",
          "where": "§7.4.1",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.1 Kernels and Tensor Programs"
        }
      ],
      "citekey": "lmcrossover2023"
    },
    {
      "ref": 178,
      "name": "GAIA",
      "title": "GAIA: A Benchmark for General AI Assistants",
      "authors": "Gregoire Mialon, Clementine Fourrier, Craig Swift, Thomas Wolf, Yann LeCun, and Thomas Scialom",
      "year": 2023,
      "citation": "Gregoire Mialon, Clementine Fourrier, Craig Swift, Thomas Wolf, Yann LeCun, and Thomas Scialom. GAIA: A benchmark for general AI assistants. arXiv preprint arXiv:2311.12983, 2023.",
      "url": "https://arxiv.org/abs/2311.12983",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Inference"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 21,
      "refPage": 68,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": null,
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.2.3",
          "page": 42,
          "level": null,
          "family": "Inference",
          "path": "§7.2.3 Test-Time Reasoning and Serving"
        }
      ],
      "citekey": "gaia2023"
    },
    {
      "ref": 179,
      "name": "AlphaChip",
      "title": "A Graph Placement Methodology for Fast Chip Design",
      "authors": "Azalia Mirhoseini, Anna Goldie, Mustafa Yazgan, Joe Wenjie Jiang, Ebrahim Songhori, Shen Wang, Young-Joon Lee, Eric Johnson, Omkar Pathak, Azade Nova, Jiwoo Pak, Andy Tong, Kavya Srinivasa, William Hang, Emre Tuncer, Quoc V. Le, James Laudon, Richard Ho, Roger Carpenter, and Jeff Dean",
      "year": 2021,
      "citation": "Azalia Mirhoseini, Anna Goldie, Mustafa Yazgan, Joe Wenjie Jiang, Ebrahim Songhori, Shen Wang, Young-Joon Lee, Eric Johnson, Omkar Pathak, Azade Nova, Jiwoo Pak, Andy Tong, Kavya Srinivasa, William Hang, Emre Tuncer, Quoc V. Le, James Laudon, Richard Ho, Roger Carpenter, and Jeff Dean. A graph placement methodology for fast chip design. Nature, 594:207--212, 2021.",
      "url": "https://doi.org/10.1038/s41586-021-03544-w",
      "urlSource": "openalex-doi",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Infrastructure"
      ],
      "category": "Logic, RTL, and physical design",
      "sourcePage": 45,
      "refPage": 68,
      "placements": [
        {
          "type": "table",
          "where": "Table 9",
          "page": 45,
          "level": "L1",
          "family": "Infrastructure",
          "path": "Logic, RTL, and physical design",
          "label": "AlphaChip"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Infrastructure",
          "path": "AI4AI Infrastructure › Logic, RTL, and physical design",
          "label": "AlphaChip",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.4.3",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.3 Logic, RTL, and Physical Design"
        }
      ],
      "fieldsFrom": 9,
      "tableLabel": "AlphaChip",
      "artifact": "macro positions on the canvas",
      "human": "placement space, netlist, power and congestion",
      "citekey": "alphachip2021"
    },
    {
      "ref": 180,
      "name": "AIE-Bench",
      "title": "AIE-Bench: Benchmarking Agents That Build Agents",
      "authors": "Abhishek Mishra, Selvam Palanimalai, Yogendra Manawat, Samuel Verboomen, Prannay Hebbar, Damir Vrabac, Deepak Nathani, Sumeet Ramesh Motwani, Kunal Bhatia, and Vignesh Baskaran",
      "year": 2026,
      "citation": "Abhishek Mishra, Selvam Palanimalai, Yogendra Manawat, Samuel Verboomen, Prannay Hebbar, Damir Vrabac, Deepak Nathani, Sumeet Ramesh Motwani, Kunal Bhatia, and Vignesh Baskaran. AIE-Bench: Benchmarking agents that build agents. 1st Workshop on Combining Theory and Benchmarks (CTB), ICML 2026, 2026.",
      "url": null,
      "urlSource": null,
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Inference"
      ],
      "category": "§7.2.3 Test-Time Reasoning and Serving",
      "sourcePage": 42,
      "refPage": 68,
      "placements": [
        {
          "type": "text",
          "where": "§7.2.3",
          "page": 42,
          "level": null,
          "family": "Inference",
          "path": "§7.2.3 Test-Time Reasoning and Serving"
        }
      ],
      "citekey": "mishra2026aie"
    },
    {
      "ref": 181,
      "name": "Jr. AI Scientist",
      "title": "Jr. AI Scientist and Its Risk Report: Autonomous Scientific Exploration from a Baseline Paper",
      "authors": "Atsuyuki Miyai, Mashiro Toyooka, Takashi Otonari, Zaiying Zhao, and Kiyoharu Aizawa",
      "year": 2025,
      "citation": "Atsuyuki Miyai, Mashiro Toyooka, Takashi Otonari, Zaiying Zhao, and Kiyoharu Aizawa. Jr. AI scientist and its risk report: Autonomous scientific exploration from a baseline paper. arXiv preprint arXiv:2511.04583, 2025.",
      "url": "https://arxiv.org/abs/2511.04583",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 21,
      "refPage": 68,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 45,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "jraiscientist2025"
    },
    {
      "ref": 182,
      "name": "Position",
      "title": "Position: Levels of AGI for Operationalizing Progress on the Path to AGI",
      "authors": "Meredith Ringel Morris, Jascha Sohl-Dickstein, Noah Fiedel, Tris Warkentin, Allan Dafoe, Aleksandra Faust, Clement Farabet, and Shane Legg",
      "year": 2024,
      "citation": "Meredith Ringel Morris, Jascha Sohl-Dickstein, Noah Fiedel, Tris Warkentin, Allan Dafoe, Aleksandra Faust, Clement Farabet, and Shane Legg. Position: Levels of AGI for operationalizing progress on the path to AGI. In Proceedings of the 41st International Conference on Machine Learning, volume 235 of Proceedings of Machine Learning Research, pages 36308--36321, 2024.",
      "url": "https://arxiv.org/abs/2311.02462",
      "urlSource": "openalex-arxiv",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 8,
      "refPage": 68,
      "placements": [],
      "citekey": "morris2024levels"
    },
    {
      "ref": 183,
      "name": "Orca",
      "title": "Orca: Progressive Learning from Complex Explanation Traces of GPT-4",
      "authors": "Subhabrata Mukherjee, Arindam Mitra, Ganesh Jawahar, Sahaj Agarwal, Hamid Palangi, and Ahmed Awadallah",
      "year": 2023,
      "citation": "Subhabrata Mukherjee, Arindam Mitra, Ganesh Jawahar, Sahaj Agarwal, Hamid Palangi, and Ahmed Awadallah. Orca: Progressive learning from complex explanation traces of GPT-4. arXiv preprint arXiv:2306.02707, 2023.",
      "url": "https://arxiv.org/abs/2306.02707",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "§7.3.2 Augmentation, Synthesis, and Curricula",
      "sourcePage": 42,
      "refPage": 68,
      "placements": [
        {
          "type": "text",
          "where": "§7.3.2",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.2 Augmentation, Synthesis, and Curricula"
        }
      ],
      "citekey": "orca2023"
    },
    {
      "ref": 184,
      "name": "MLE-STAR",
      "title": "MLE-STAR: Machine Learning Engineering Agent via Search and Targeted Refinement",
      "authors": "Jaehyun Nam, Jinsung Yoon, Jiefeng Chen, Jinwoo Shin, Sercan O. Arik, and Tomas Pfister",
      "year": 2025,
      "citation": "Jaehyun Nam, Jinsung Yoon, Jiefeng Chen, Jinwoo Shin, Sercan O. Arik, and Tomas Pfister. MLE-STAR: Machine learning engineering agent via search and targeted refinement. arXiv preprint arXiv:2506.15692, 2025.",
      "url": "https://arxiv.org/abs/2506.15692",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Cross-family"
      ],
      "category": "Experimental histories",
      "sourcePage": 18,
      "refPage": 68,
      "placements": [
        {
          "type": "table",
          "where": "Table 3",
          "page": 18,
          "level": "L1",
          "family": null,
          "path": "Experimental histories",
          "label": "MLE-STAR"
        },
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Experimental histories › Research memory and experiment selection",
          "label": "MLE-STAR"
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 45,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "fieldsFrom": 3,
      "tableLabel": "MLE-STAR",
      "artifact": "pipeline component and revision strategy",
      "historyRead": "pipeline trials, ablations, validation, memory",
      "citekey": "mlestar2025"
    },
    {
      "ref": 185,
      "name": "LLMatic",
      "title": "LLMatic: Neural Architecture Search via Large Language Models and Quality Diversity Optimization",
      "authors": "Muhammad U. Nasir, Sam Earle, Christopher Cleghorn, Steven James, and Julian Togelius",
      "year": 2023,
      "citation": "Muhammad U. Nasir, Sam Earle, Christopher Cleghorn, Steven James, and Julian Togelius. LLMatic: Neural architecture search via large language models and quality diversity optimization. arXiv preprint arXiv:2306.01102, 2023.",
      "url": "https://arxiv.org/abs/2306.01102",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "figure",
      "families": [
        "Learning"
      ],
      "category": "Evolutionary histories › Variation and strategy histories",
      "sourcePage": 17,
      "refPage": 68,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Evolutionary histories › Variation and strategy histories",
          "label": "LLMatic"
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§4.2",
          "page": 17,
          "level": "L1",
          "family": null,
          "path": "§4.2 Evolutionary Program Improvement"
        },
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "llmatic2023"
    },
    {
      "ref": 186,
      "name": "MLGym",
      "title": "MLGym: A New Framework and Benchmark for Advancing AI Research Agents",
      "authors": "Deepak Nathani, Lovish Madaan, Nicholas Roberts, Nikolay Bashlykov, Ajay Menon, Vincent Moens, Mikhail Plekhanov, Amar Budhiraja, Despoina Magka, Vladislav Vorotilov, Gaurav Chaurasia, Dieuwke Hupkes, Ricardo Silveira Cabral, Tatiana Shavrina, Jakob Nicolaus Foerster, Yoram Bachrach, William Yang Wang, and Roberta Raileanu",
      "year": 2025,
      "citation": "Deepak Nathani, Lovish Madaan, Nicholas Roberts, Nikolay Bashlykov, Ajay Menon, Vincent Moens, Mikhail Plekhanov, Amar Budhiraja, Despoina Magka, Vladislav Vorotilov, Gaurav Chaurasia, Dieuwke Hupkes, Ricardo Silveira Cabral, Tatiana Shavrina, Jakob Nicolaus Foerster, Yoram Bachrach, William Yang Wang, and Roberta Raileanu. MLGym: A new framework and benchmark for advancing AI research agents. In Second Conference on Language Modeling, 2025.",
      "url": "https://arxiv.org/abs/2502.14499",
      "urlSource": "openalex-arxiv",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§7.1.3 Parameter-Updating Post-Training",
      "sourcePage": 40,
      "refPage": 69,
      "placements": [
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 40,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "mlgym2025"
    },
    {
      "ref": 187,
      "name": "DynaSaur",
      "title": "DynaSaur: Large Language Agents beyond Predefined Actions",
      "authors": "Dang Nguyen, Viet Dac Lai, Seunghyun Yoon, Ryan A. Rossi, Handong Zhao, Ruiyi Zhang, Puneet Mathur, Nedim Lipka, Yu Wang, Trung Bui, Franck Dernoncourt, and Tianyi Zhou",
      "year": 2024,
      "citation": "Dang Nguyen, Viet Dac Lai, Seunghyun Yoon, Ryan A. Rossi, Handong Zhao, Ruiyi Zhang, Puneet Mathur, Nedim Lipka, Yu Wang, Trung Bui, Franck Dernoncourt, and Tianyi Zhou. DynaSaur: Large language agents beyond predefined actions. arXiv preprint arXiv:2411.01747, 2024.",
      "url": "https://arxiv.org/abs/2411.01747",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L2"
      ],
      "level": "L2",
      "basis": "figure",
      "families": [
        "Inference"
      ],
      "category": "Available primitives (P) › Skill repertoire construction",
      "sourcePage": 25,
      "refPage": 69,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 6",
          "page": 25,
          "level": "L2",
          "path": "Available primitives (P) › Skill repertoire construction",
          "label": "DynaSaur"
        },
        {
          "type": "text",
          "where": "§5.1",
          "page": 25,
          "level": "L2",
          "family": null,
          "path": "§5.1 Formalization and evaluation of AI-defined search spaces"
        },
        {
          "type": "text",
          "where": "§7.2.2",
          "page": 41,
          "level": null,
          "family": "Inference",
          "path": "§7.2.2 Agent, Tool, and Library Design"
        }
      ],
      "citekey": "dynasaur2024"
    },
    {
      "ref": 188,
      "name": "LEVER",
      "title": "LEVER: Learning to Verify Language-to-Code Generation with Execution",
      "authors": "Ansong Ni, Srini Iyer, Dragomir Radev, Ves Stoyanov, Wen-tau Yih, Sida I. Wang, and Xi Victoria Lin",
      "year": 2023,
      "citation": "Ansong Ni, Srini Iyer, Dragomir Radev, Ves Stoyanov, Wen-tau Yih, Sida I. Wang, and Xi Victoria Lin. LEVER: Learning to verify language-to-code generation with execution. In Proceedings of the 40th International Conference on Machine Learning, volume 202 of Proceedings of Machine Learning Research, pages 26106--26128, 2023.",
      "url": "https://arxiv.org/abs/2302.08468",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "figure",
      "families": [
        "Inference"
      ],
      "category": "Executable evaluation artifacts › Learned verifiers and process critics",
      "sourcePage": 32,
      "refPage": 69,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Executable evaluation artifacts › Learned verifiers and process critics",
          "label": "LEVER"
        },
        {
          "type": "text",
          "where": "§6.2",
          "page": 32,
          "level": "L3",
          "family": null,
          "path": "§6.2 Executable Evaluation Artifacts"
        },
        {
          "type": "text",
          "where": "§7.2.3",
          "page": 41,
          "level": null,
          "family": "Inference",
          "path": "§7.2.3 Test-Time Reasoning and Serving"
        }
      ],
      "citekey": "lever2023"
    },
    {
      "name": "WhatWorkedBench",
      "url": "https://arxiv.org/abs/2609.27490",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Cross-family"
      ],
      "category": "Benchmarks › Cross-family AI research and evaluation",
      "placements": [
        {
          "type": "table",
          "where": "Table 10",
          "page": 48,
          "family": "Cross-family",
          "path": "Benchmarks › Cross-family AI research and evaluation",
          "label": "WhatWorkedBench",
          "level": null
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "ref": 189,
      "title": "WhatWorkedBench: Benchmarking Experimental Understanding in AI Agents",
      "authors": "Jingjie Ning, Xueqi Li, Yibo Kong, and Dongting Li",
      "year": 2026,
      "citation": "Jingjie Ning, Xueqi Li, Yibo Kong, and Dongting Li. Whatworkedbench: Benchmarking experimental understanding in ai agents, 2026.",
      "citekey": "ning2026whatworkedbench",
      "refPage": 69,
      "task": "Understand effects of experimental changes",
      "protocol": "Buy limited configuration measurements; predict effects and interactions against exhaustive references",
      "evidence": "Effect recovery, configuration choice, and experimental understanding",
      "fieldsFrom": 10,
      "sourcePage": 48
    },
    {
      "ref": 190,
      "name": "AlphaEvolve",
      "title": "AlphaEvolve: A Coding Agent for Scientific and Algorithmic Discovery",
      "authors": "Alexander Novikov, Ngan Vu, Marvin Eisenberger, Emilien Dupont, Po-Sen Huang, Adam Zsolt Wagner, Sergey Shirobokov, Borislav Kozlovskii, Francisco J. R. Ruiz, Abbas Mehrabian, M. Pawan Kumar, Abigail See, Swarat Chaudhuri, George Holland, Alex Davies, Sebastian Nowozin, Pushmeet Kohli, and Matej Balog",
      "year": 2025,
      "citation": "Alexander Novikov, Ngan Vu, Marvin Eisenberger, Emilien Dupont, Po-Sen Huang, Adam Zsolt Wagner, Sergey Shirobokov, Borislav Kozlovskii, Francisco J. R. Ruiz, Abbas Mehrabian, M. Pawan Kumar, Abigail See, Swarat Chaudhuri, George Holland, Alex Davies, Sebastian Nowozin, Pushmeet Kohli, and Matej Balog. AlphaEvolve: A coding agent for scientific and algorithmic discovery. arXiv preprint arXiv:2506.13131, 2025.",
      "url": "https://arxiv.org/abs/2506.13131",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Infrastructure"
      ],
      "category": "Algorithms, kernels, and tensor programs",
      "sourcePage": 45,
      "refPage": 69,
      "placements": [
        {
          "type": "table",
          "where": "Table 9",
          "page": 45,
          "level": "L1",
          "family": "Infrastructure",
          "path": "Algorithms, kernels, and tensor programs",
          "label": "AlphaEvolve"
        },
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Evolutionary histories › Program archives and lineages",
          "label": "AlphaEvolve"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Infrastructure",
          "path": "AI4AI Infrastructure › Kernels and tensor programs",
          "label": "AlphaEvolve",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§4.2",
          "page": 17,
          "level": "L1",
          "family": null,
          "path": "§4.2 Evolutionary Program Improvement"
        },
        {
          "type": "text",
          "where": "§7.4.1",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.1 Kernels and Tensor Programs"
        }
      ],
      "fieldsFrom": 9,
      "tableLabel": "AlphaEvolve",
      "artifact": "matmul tiling heuristic; TPU circuit",
      "human": "candidate pool, diff encoder, evaluation harness",
      "citekey": "novikov2025alphaevolve"
    },
    {
      "name": "FastKernels",
      "url": "https://arxiv.org/abs/2605.23215",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Infrastructure"
      ],
      "category": "§7.4.3 Logic, RTL, and Physical Design",
      "placements": [
        {
          "type": "text",
          "where": "§7.4.3",
          "page": 45,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.3 Logic, RTL, and Physical Design"
        }
      ],
      "ref": 191,
      "title": "FastKernels: Benchmarking GPU Kernel Generation in Production",
      "authors": "Gabriele Oliaro, Jaeseong Lee, Yichao Fu, Zhaoyuan Su, Owen Lu, Sreeram Vennam, May Jiang, Junli Wang, Hao Zhang, Zhihao Jia, and Samyam Rajbhandari",
      "year": 2026,
      "citation": "Gabriele Oliaro, Jaeseong Lee, Yichao Fu, Zhaoyuan Su, Owen Lu, Sreeram Vennam, May Jiang, Junli Wang, Hao Zhang, Zhihao Jia, and Samyam Rajbhandari. Fastkernels: Benchmarking gpu kernel generation in production, 2026.",
      "citekey": "oliaro2026fastkernels",
      "refPage": 69,
      "sourcePage": 45
    },
    {
      "ref": 192,
      "name": "Optimizing instructions and demonstrations for multi-stage language model programs",
      "title": "Optimizing Instructions and Demonstrations for Multi-Stage Language Model Programs",
      "authors": "Krista Opsahl-Ong, Michael J. Ryan, Josh Purtell, David Broman, Christopher Potts, Matei Zaharia, and Omar Khattab",
      "year": 2024,
      "citation": "Krista Opsahl-Ong, Michael J. Ryan, Josh Purtell, David Broman, Christopher Potts, Matei Zaharia, and Omar Khattab. Optimizing instructions and demonstrations for multi-stage language model programs. arXiv preprint arXiv:2406.11695, 2024.",
      "url": "https://arxiv.org/abs/2406.11695",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Inference"
      ],
      "category": "§4.3 Prompt, Pipeline, and Workflow Optimization",
      "sourcePage": 19,
      "refPage": 69,
      "placements": [
        {
          "type": "text",
          "where": "§4.3",
          "page": 19,
          "level": "L1",
          "family": null,
          "path": "§4.3 Prompt, Pipeline, and Workflow Optimization"
        },
        {
          "type": "text",
          "where": "§7.2.1",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.1 Prompt and Workflow Optimization"
        }
      ],
      "citekey": "mipro2024"
    },
    {
      "ref": 193,
      "name": "KernelBench",
      "title": "KernelBench: Can Llms Write Efficient GPU Kernels?",
      "authors": "Anne Ouyang, Simon Guo, Simran Arora, Alex L. Zhang, William Hu, Christopher Re, and Azalia Mirhoseini",
      "year": 2025,
      "citation": "Anne Ouyang, Simon Guo, Simran Arora, Alex L. Zhang, William Hu, Christopher Re, and Azalia Mirhoseini. KernelBench: Can llms write efficient GPU kernels?, 2025.",
      "url": "https://arxiv.org/abs/2502.10517",
      "urlSource": "openalex-arxiv",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Infrastructure"
      ],
      "category": "Benchmarks › AI4AI Infrastructure",
      "sourcePage": 48,
      "refPage": 69,
      "placements": [
        {
          "type": "table",
          "where": "Table 10",
          "page": 48,
          "family": "Infrastructure",
          "path": "Benchmarks › AI4AI Infrastructure",
          "label": "KernelBench",
          "level": null
        },
        {
          "type": "text",
          "where": "§7.4.3",
          "page": 45,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.3 Logic, RTL, and Physical Design"
        }
      ],
      "citekey": "kernelbench2025",
      "task": "Generate and refine ML GPU kernels",
      "protocol": "Execute against PyTorch references on specified hardware",
      "evidence": "Fraction correct and faster than a speedup threshold",
      "fieldsFrom": 10
    },
    {
      "ref": 194,
      "name": "InstructGPT",
      "title": "Training Language Models to Follow Instructions with Human Feedback",
      "authors": "Long Ouyang, Jeff Wu, Xu Jiang, Diogo Almeida, Carroll L. Wainwright, Pamela Mishkin, Chong Zhang, Sandhini Agarwal, Katarina Slama, Alex Ray, John Schulman, Jacob Hilton, Fraser Kelton, Luke Miller, Maddie Simens, Amanda Askell, Peter Welinder, Paul Christiano, Jan Leike, and Ryan Lowe",
      "year": 2022,
      "citation": "Long Ouyang, Jeff Wu, Xu Jiang, Diogo Almeida, Carroll L. Wainwright, Pamela Mishkin, Chong Zhang, Sandhini Agarwal, Katarina Slama, Alex Ray, John Schulman, Jacob Hilton, Fraser Kelton, Luke Miller, Maddie Simens, Amanda Askell, Peter Welinder, Paul Christiano, Jan Leike, and Ryan Lowe. Training language models to follow instructions with human feedback. arXiv preprint arXiv:2203.02155, 2022.",
      "url": "https://arxiv.org/abs/2203.02155",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "figure",
      "families": [
        "Learning"
      ],
      "category": "Learned preference evaluation and model judges › Reward models and AI feedback",
      "sourcePage": 32,
      "refPage": 69,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Learned preference evaluation and model judges › Reward models and AI feedback",
          "label": "InstructGPT"
        },
        {
          "type": "text",
          "where": "§6.3",
          "page": 32,
          "level": "L3",
          "family": null,
          "path": "§6.3 Learned Preference Evaluation and Model Judges"
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "ouyang2022instructgpt"
    },
    {
      "ref": 195,
      "name": "MemGPT",
      "title": "MemGPT: Towards Llms as Operating Systems",
      "authors": "Charles Packer, Sarah Wooders, Kevin Lin, Vivian Fang, Shishir G. Patil, Ion Stoica, and Joseph E. Gonzalez",
      "year": 2023,
      "citation": "Charles Packer, Sarah Wooders, Kevin Lin, Vivian Fang, Shishir G. Patil, Ion Stoica, and Joseph E. Gonzalez. MemGPT: Towards llms as operating systems. arXiv preprint arXiv:2310.08560, 2023.",
      "url": "https://arxiv.org/abs/2310.08560",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§4.4 Reflection, Memory, and Search over Trajectories",
      "sourcePage": 20,
      "refPage": 69,
      "placements": [
        {
          "type": "text",
          "where": "§4.4",
          "page": 20,
          "level": "L1",
          "family": null,
          "path": "§4.4 Reflection, Memory, and Search over Trajectories"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "memgpt2023"
    },
    {
      "ref": 196,
      "name": "Generative Agents",
      "title": "Generative Agents: Interactive Simulacra of Human Behavior",
      "authors": "Joon Sung Park, Joseph C. O'Brien, Carrie J. Cai, Meredith Ringel Morris, Percy Liang, and Michael S. Bernstein",
      "year": 2023,
      "citation": "Joon Sung Park, Joseph C. O'Brien, Carrie J. Cai, Meredith Ringel Morris, Percy Liang, and Michael S. Bernstein. Generative agents: Interactive simulacra of human behavior. arXiv preprint arXiv:2304.03442, 2023.",
      "url": "https://arxiv.org/abs/2304.03442",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§4.4 Reflection, Memory, and Search over Trajectories",
      "sourcePage": 20,
      "refPage": 69,
      "placements": [
        {
          "type": "text",
          "where": "§4.4",
          "page": 20,
          "level": "L1",
          "family": null,
          "path": "§4.4 Reflection, Memory, and Search over Trajectories"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "generativeagents2023"
    },
    {
      "ref": 197,
      "name": "Automated reinforcement learning (AutoRL): A survey and open problems",
      "title": "Automated Reinforcement Learning (AutoRL): A Survey and Open Problems",
      "authors": "Jack Parker-Holder, Raghu Rajan, Xingyou Song, Andre Biedenkapp, Yingjie Miao, Theresa Eimer, Baohe Zhang, Vu Nguyen, Roberto Calandra, Aleksandra Faust, Frank Hutter, and Marius Lindauer",
      "year": 2022,
      "citation": "Jack Parker-Holder, Raghu Rajan, Xingyou Song, Andre Biedenkapp, Yingjie Miao, Theresa Eimer, Baohe Zhang, Vu Nguyen, Roberto Calandra, Aleksandra Faust, Frank Hutter, and Marius Lindauer. Automated reinforcement learning (AutoRL): A survey and open problems. Journal of Artificial Intelligence Research, 74:517--568, 2022.",
      "url": "https://arxiv.org/abs/2201.03916",
      "urlSource": "openalex-arxiv",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 8,
      "refPage": 69,
      "placements": [],
      "citekey": "parkerholder2022autorl"
    },
    {
      "ref": 198,
      "name": "EvoTrace",
      "title": "What Do Evolutionary Coding Agents Evolve?",
      "authors": "Nico Pelleriti, Sree Harsha Nelaturu, Zhanke Zhou, Zongze Li, Max Zimmer, Bo Han, and Sebastian Pokutta",
      "year": 2026,
      "citation": "Nico Pelleriti, Sree Harsha Nelaturu, Zhanke Zhou, Zongze Li, Max Zimmer, Bo Han, and Sebastian Pokutta. What do evolutionary coding agents evolve? arXiv preprint arXiv:2605.20086, 2026.",
      "url": "https://arxiv.org/abs/2605.20086",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "figure",
      "families": [
        "Infrastructure"
      ],
      "category": "Evolutionary histories › Program archives and lineages",
      "sourcePage": 17,
      "refPage": 70,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Evolutionary histories › Program archives and lineages",
          "label": "EvoTrace"
        },
        {
          "type": "text",
          "where": "§4.2",
          "page": 17,
          "level": "L1",
          "family": null,
          "path": "§4.2 Evolutionary Program Improvement"
        },
        {
          "type": "text",
          "where": "§4.6",
          "page": 22,
          "level": "L1",
          "family": null,
          "path": "§4.6 Direction Quality, Failure Modes, and the Boundary with L2"
        },
        {
          "type": "text",
          "where": "§7.4.1",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.1 Kernels and Tensor Programs"
        }
      ],
      "citekey": "evotrace2026"
    },
    {
      "ref": 199,
      "name": "FineWeb-Edu",
      "title": "The FineWeb Datasets: Decanting the Web for the Finest Text Data at Scale",
      "authors": "Guilherme Penedo, Hynek Kydlicek, Loubna Ben Allal, Anton Lozhkov, Margaret Mitchell, Colin Raffel, Leandro von Werra, and Thomas Wolf",
      "year": 2024,
      "citation": "Guilherme Penedo, Hynek Kydlicek, Loubna Ben Allal, Anton Lozhkov, Margaret Mitchell, Colin Raffel, Leandro von Werra, and Thomas Wolf. The FineWeb datasets: Decanting the web for the finest text data at scale. In Advances in Neural Information Processing Systems, volume 37, 2024.",
      "url": "https://arxiv.org/abs/2406.17557",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "AI4AI Data › Selection and curation",
      "sourcePage": 37,
      "refPage": 70,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Data",
          "path": "AI4AI Data › Selection and curation",
          "label": "FineWeb-Edu",
          "starred": true
        },
        {
          "type": "text",
          "where": "§7.3.1",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.1 Selection and Curation"
        }
      ],
      "citekey": "fineweb2024"
    },
    {
      "ref": 200,
      "name": "LM red teaming",
      "title": "Red Teaming Language Models with Language Models",
      "authors": "Ethan Perez, Saffron Huang, Francis Song, Trevor Cai, Roman Ring, John Aslanides, Amelia Glaese, Nat McAleese, and Geoffrey Irving",
      "year": 2022,
      "citation": "Ethan Perez, Saffron Huang, Francis Song, Trevor Cai, Roman Ring, John Aslanides, Amelia Glaese, Nat McAleese, and Geoffrey Irving. Red teaming language models with language models. In Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing, pages 3419--3448, 2022.",
      "url": "https://arxiv.org/abs/2202.03286",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "table",
      "families": [
        "Cross-family"
      ],
      "category": "Adaptive evaluation and oversight",
      "sourcePage": 33,
      "refPage": 70,
      "placements": [
        {
          "type": "table",
          "where": "Table 5",
          "page": 33,
          "level": "L3",
          "family": null,
          "path": "Adaptive evaluation and oversight",
          "label": "LM red teaming†"
        },
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Adaptive evaluation and oversight › Adaptive tests and environments",
          "label": "LM red teaming"
        },
        {
          "type": "text",
          "where": "§6.5",
          "page": 34,
          "level": "L3",
          "family": null,
          "path": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "fieldsFrom": 5,
      "tableLabel": "LM red teaming†",
      "artifact": "adaptive prompt distribution",
      "human": "harm taxonomy, target model, safety policy",
      "citekey": "perez2022redteam"
    },
    {
      "ref": 201,
      "name": "Efficient neural architecture search via parameter sharing",
      "title": "Efficient Neural Architecture Search via Parameter Sharing",
      "authors": "Hieu Pham, Melody Y. Guan, Barret Zoph, Quoc V. Le, and Jeff Dean",
      "year": 2018,
      "citation": "Hieu Pham, Melody Y. Guan, Barret Zoph, Quoc V. Le, and Jeff Dean. Efficient neural architecture search via parameter sharing. arXiv preprint arXiv:1802.03268, 2018.",
      "url": "https://arxiv.org/abs/1802.03268",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Learning"
      ],
      "category": "§4.1 History-Conditioned Direction Selection",
      "sourcePage": 16,
      "refPage": 70,
      "placements": [
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "enas2018"
    },
    {
      "ref": 202,
      "name": "GrIPS",
      "title": "GrIPS: Gradient-Free, Edit-Based Instruction Search for Prompting Large Language Models",
      "authors": "Archiki Prasad, Peter Hase, Xiang Zhou, and Mohit Bansal",
      "year": 2022,
      "citation": "Archiki Prasad, Peter Hase, Xiang Zhou, and Mohit Bansal. GrIPS: Gradient-free, edit-based instruction search for prompting large language models. arXiv preprint arXiv:2203.07281, 2022.",
      "url": "https://arxiv.org/abs/2203.07281",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Inference"
      ],
      "category": "AI4AI Inference › Prompt and workflow optimization",
      "sourcePage": 37,
      "refPage": 70,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Inference",
          "path": "AI4AI Inference › Prompt and workflow optimization",
          "label": "GrIPS",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.3",
          "page": 19,
          "level": "L1",
          "family": null,
          "path": "§4.3 Prompt, Pipeline, and Workflow Optimization"
        },
        {
          "type": "text",
          "where": "§7.2.1",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.1 Prompt and Workflow Optimization"
        }
      ],
      "citekey": "grips2022"
    },
    {
      "ref": 203,
      "name": "Estimating training data influence by tracing gradient descent",
      "title": "Estimating Training Data Influence by Tracing Gradient Descent",
      "authors": "Garima Pruthi, Frederick Liu, Satyen Kale, and Mukund Sundararajan",
      "year": 2020,
      "citation": "Garima Pruthi, Frederick Liu, Satyen Kale, and Mukund Sundararajan. Estimating training data influence by tracing gradient descent. In Advances in Neural Information Processing Systems, volume 33, 2020.",
      "url": "https://arxiv.org/abs/2002.08484",
      "urlSource": "openalex-arxiv",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "§7.3.1 Selection and Curation",
      "sourcePage": 42,
      "refPage": 70,
      "placements": [
        {
          "type": "text",
          "where": "§7.3.1",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.1 Selection and Curation"
        }
      ],
      "citekey": "tracin2020"
    },
    {
      "ref": 204,
      "name": "ProTeGi",
      "title": "Automatic Prompt Optimization with ``Gradient Descent'' and Beam Search",
      "authors": "Reid Pryzant, Dan Iter, Jerry Li, Yin Lee, Chenguang Zhu, and Michael Zeng",
      "year": 2023,
      "citation": "Reid Pryzant, Dan Iter, Jerry Li, Yin Lee, Chenguang Zhu, and Michael Zeng. Automatic prompt optimization with ``gradient descent'' and beam search. In Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing, pages 7957--7968, 2023.",
      "url": "https://arxiv.org/abs/2305.03495",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "figure",
      "families": [
        "Inference"
      ],
      "category": "Reflective histories › Textual gradients and critiques",
      "sourcePage": 17,
      "refPage": 70,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Reflective histories › Textual gradients and critiques",
          "label": "ProTeGi"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Inference",
          "path": "AI4AI Inference › Prompt and workflow optimization",
          "label": "ProTeGi",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§4.3",
          "page": 19,
          "level": "L1",
          "family": null,
          "path": "§4.3 Prompt, Pipeline, and Workflow Optimization"
        },
        {
          "type": "text",
          "where": "§7.2.1",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.1 Prompt and Workflow Optimization"
        }
      ],
      "citekey": "pryzant2023protegi"
    },
    {
      "ref": 205,
      "name": "CREATOR",
      "title": "CREATOR: Tool Creation for Disentangling Abstract and Concrete Reasoning of Large Language Models",
      "authors": "Cheng Qian, Chi Han, Yi R. Fung, Yujia Qin, Zhiyuan Liu, and Heng Ji",
      "year": 2023,
      "citation": "Cheng Qian, Chi Han, Yi R. Fung, Yujia Qin, Zhiyuan Liu, and Heng Ji. CREATOR: Tool creation for disentangling abstract and concrete reasoning of large language models. In Findings of the Association for Computational Linguistics: EMNLP 2023, pages 6922--6939, 2023.",
      "url": "https://arxiv.org/abs/2305.14318",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L2"
      ],
      "level": "L2",
      "basis": "table",
      "families": [
        "Inference"
      ],
      "category": "Available primitives (P)",
      "sourcePage": 26,
      "refPage": 70,
      "placements": [
        {
          "type": "table",
          "where": "Table 4",
          "page": 26,
          "level": "L2",
          "family": null,
          "path": "Available primitives (P)",
          "label": "CREATOR"
        },
        {
          "type": "figure",
          "where": "Figure 6",
          "page": 25,
          "level": "L2",
          "path": "Available primitives (P) › Reusable tool construction",
          "label": "CREATOR"
        },
        {
          "type": "text",
          "where": "§5.1",
          "page": 25,
          "level": "L2",
          "family": null,
          "path": "§5.1 Formalization and evaluation of AI-defined search spaces"
        },
        {
          "type": "text",
          "where": "§7.2.2",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.2 Agent, Tool, and Library Design"
        }
      ],
      "fieldsFrom": 4,
      "tableLabel": "CREATOR",
      "artifact": "reusable tools generated before planning their use",
      "human": "Python runtime, APIs, task specifications",
      "citekey": "creator2023"
    },
    {
      "ref": 206,
      "name": "Toolink",
      "title": "Toolink: Linking Toolkit Creation and Using through Chain-of-Solving on Open-Source Model",
      "authors": "Cheng Qian, Chenyan Xiong, Zhenghao Liu, and Zhiyuan Liu",
      "year": 2024,
      "citation": "Cheng Qian, Chenyan Xiong, Zhenghao Liu, and Zhiyuan Liu. Toolink: Linking toolkit creation and using through chain-of-solving on open-source model. In Proceedings of the 2024 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 1: Long Papers), pages 831--854, 2024.",
      "url": "https://arxiv.org/abs/2310.05155",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L2"
      ],
      "level": "L2",
      "basis": "table",
      "families": [
        "Inference"
      ],
      "category": "Available primitives (P)",
      "sourcePage": 26,
      "refPage": 70,
      "placements": [
        {
          "type": "table",
          "where": "Table 4",
          "page": 26,
          "level": "L2",
          "family": null,
          "path": "Available primitives (P)",
          "label": "Toolink"
        },
        {
          "type": "figure",
          "where": "Figure 6",
          "page": 25,
          "level": "L2",
          "path": "Available primitives (P) › Reusable tool construction",
          "label": "Toolink"
        },
        {
          "type": "text",
          "where": "§5.1",
          "page": 25,
          "level": "L2",
          "family": null,
          "path": "§5.1 Formalization and evaluation of AI-defined search spaces"
        },
        {
          "type": "text",
          "where": "§7.2.2",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.2 Agent, Tool, and Library Design"
        }
      ],
      "fieldsFrom": 4,
      "tableLabel": "Toolink",
      "artifact": "task-family toolkit for Chain-of-Solving planning",
      "human": "Python runtime, task family, tool interface",
      "citekey": "toolink2024"
    },
    {
      "ref": 207,
      "name": "AI4AI at Test-Time",
      "title": "AI4AI at Test-Time: Strong-to-Weak Capability Transfer via Harnesses",
      "authors": "Cheng Qian, Wenting Zhao, Liangwei Yang, Heng Wang, Jielin Qiu, Heng Ji, Silvio Savarese, Huan Wang, and Shelby Heinecke",
      "year": 2026,
      "citation": "Cheng Qian, Wenting Zhao, Liangwei Yang, Heng Wang, Jielin Qiu, Heng Ji, Silvio Savarese, Huan Wang, and Shelby Heinecke. AI4AI at test-time: Strong-to-weak capability transfer via harnesses. arXiv preprint arXiv:2608.12307, 2026.",
      "url": "https://arxiv.org/abs/2608.12307",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Inference"
      ],
      "category": "AI4AI Inference › Parameter-free agent and tool design",
      "sourcePage": 37,
      "refPage": 70,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Inference",
          "path": "AI4AI Inference › Parameter-free agent and tool design",
          "label": "strong-to-weak test-time harnesses",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.2.2",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.2 Agent, Tool, and Library Design"
        }
      ],
      "citekey": "qian2026ai4aitesttime"
    },
    {
      "ref": 208,
      "name": "A systematic survey of automatic prompt optimization techniques",
      "title": "A Systematic Survey of Automatic Prompt Optimization Techniques",
      "authors": "Kiran Ramnath, Kang Zhou, Sheng Guan, Soumya Smruti Mishra, Xuan Qi, Zhengyuan Shen, Shuai Wang, Sangmin Woo, Sullam Jeoung, Yawei Wang, Haozhu Wang, Han Ding, Yuzhe Lu, Zhichao Xu, Yun Zhou, Balasubramaniam Srinivasan, Qiaojing Yan, Yueyan Chen, Haibo Ding, Panpan Xu, and Lin Lee Cheong",
      "year": 2025,
      "citation": "Kiran Ramnath, Kang Zhou, Sheng Guan, Soumya Smruti Mishra, Xuan Qi, Zhengyuan Shen, Shuai Wang, Sangmin Woo, Sullam Jeoung, Yawei Wang, Haozhu Wang, Han Ding, Yuzhe Lu, Zhichao Xu, Yun Zhou, Balasubramaniam Srinivasan, Qiaojing Yan, Yueyan Chen, Haibo Ding, Panpan Xu, and Lin Lee Cheong. A systematic survey of automatic prompt optimization techniques. In Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing, pages 33078--33110, 2025.",
      "url": "https://arxiv.org/abs/2502.16923",
      "urlSource": "manuscript",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 8,
      "refPage": 70,
      "placements": [],
      "citekey": "ramnath2025apo"
    },
    {
      "name": "PostTrainBench",
      "url": "https://openreview.net/forum?id=UnjxMTe57e",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§7.1.3 Parameter-Updating Post-Training",
      "placements": [
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 40,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "ref": 209,
      "title": "PostTrainBench: Can LLM Agents Automate LLM Post-Training?",
      "authors": "Ben Rank, Hardik Bhatnagar, Ameya Prabhu, Shira Eisenberg, Karina Nguyen, Matthias Bethge, and Maksym Andriushchenko",
      "year": 2026,
      "citation": "Ben Rank, Hardik Bhatnagar, Ameya Prabhu, Shira Eisenberg, Karina Nguyen, Matthias Bethge, and Maksym Andriushchenko. Posttrainbench: Can LLM agents automate LLM post-training? In Forty-third International Conference on Machine Learning, 2026.",
      "citekey": "rank2026posttrainbench",
      "refPage": 70,
      "sourcePage": 40
    },
    {
      "ref": 210,
      "name": "AmoebaNet",
      "title": "Regularized Evolution for Image Classifier Architecture Search",
      "authors": "Esteban Real, Alok Aggarwal, Yanping Huang, and Quoc V. Le",
      "year": 2019,
      "citation": "Esteban Real, Alok Aggarwal, Yanping Huang, and Quoc V. Le. Regularized evolution for image classifier architecture search. In Proceedings of the AAAI Conference on Artificial Intelligence, volume 33, pages 4780--4789, 2019.",
      "url": "https://arxiv.org/abs/1802.01548",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Learning"
      ],
      "category": "AI4AI Learning › Architectures and update rules",
      "sourcePage": 37,
      "refPage": 70,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Architectures and update rules",
          "label": "AmoebaNet",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "real2019regularized"
    },
    {
      "ref": 211,
      "name": "AutoML-Zero",
      "title": "AutoML-Zero: Evolving Machine Learning Algorithms from Scratch",
      "authors": "Esteban Real, Chen Liang, David So, and Quoc V. Le",
      "year": 2020,
      "citation": "Esteban Real, Chen Liang, David So, and Quoc V. Le. AutoML-Zero: Evolving machine learning algorithms from scratch. In Proceedings of the 37th International Conference on Machine Learning, volume 119 of Proceedings of Machine Learning Research, pages 8007--8019, 2020.",
      "url": "https://arxiv.org/abs/2003.03384",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Learning"
      ],
      "category": "Architectures and update rules",
      "sourcePage": 38,
      "refPage": 71,
      "placements": [
        {
          "type": "table",
          "where": "Table 6",
          "page": 38,
          "level": "L1",
          "family": "Learning",
          "path": "Architectures and update rules",
          "label": "AutoML-Zero"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Architectures and update rules",
          "label": "AutoML-Zero",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "fieldsFrom": 6,
      "tableLabel": "AutoML-Zero",
      "artifact": "setup, predict and learn programs",
      "human": "primitive set, function set, meta-distribution",
      "citekey": "real2020automlzero"
    },
    {
      "ref": 212,
      "name": "SelfAugment",
      "title": "SelfAugment: Automatic Augmentation Policies for Self-Supervised Learning",
      "authors": "Colorado J. Reed, Sean Metzger, Aravind Srinivas, Trevor Darrell, and Kurt Keutzer",
      "year": 2021,
      "citation": "Colorado J. Reed, Sean Metzger, Aravind Srinivas, Trevor Darrell, and Kurt Keutzer. SelfAugment: Automatic augmentation policies for self-supervised learning. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 2674--2683, 2021.",
      "url": "https://arxiv.org/abs/2009.07724",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "AI4AI Data › Augmentation, synthesis, and curricula",
      "sourcePage": 37,
      "refPage": 71,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Data",
          "path": "AI4AI Data › Augmentation, synthesis, and curricula",
          "label": "SelfAugment",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.3.2",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.2 Augmentation, Synthesis, and Curricula"
        }
      ],
      "citekey": "selfaugment2021"
    },
    {
      "ref": 213,
      "name": "Self-improvements in modern agentic systems: A survey",
      "title": "Self-Improvements in Modern Agentic Systems: A Survey",
      "authors": "Zhe Ren, Yimeng Chen, Dandan Guo, Guowei Rong, Tonghui Li, R. B. Xiong, Qingfeng Lan, Wenyi Wang, Nanbo Li, Yibo Yang, Mingchen Zhuge, and Jurgen Schmidhuber",
      "year": 2026,
      "citation": "Zhe Ren, Yimeng Chen, Dandan Guo, Guowei Rong, Tonghui Li, R. B. Xiong, Qingfeng Lan, Wenyi Wang, Nanbo Li, Yibo Yang, Mingchen Zhuge, and Jurgen Schmidhuber. Self-improvements in modern agentic systems: A survey. arXiv preprint arXiv:2607.13104, 2026.",
      "url": "https://arxiv.org/abs/2607.13104",
      "urlSource": "manuscript",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 5,
      "refPage": 71,
      "placements": [],
      "citekey": "ren2026selfimprovement"
    },
    {
      "ref": 214,
      "name": "FunSearch",
      "title": "Mathematical Discoveries from Program Search with Large Language Models",
      "authors": "Bernardino Romera-Paredes, Mohammadamin Barekatain, Alexander Novikov, Matej Balog, M. Pawan Kumar, Emilien Dupont, Francisco J. R. Ruiz, Jordan S. Ellenberg, Pengming Wang, Omar Fawzi, Pushmeet Kohli, and Alhussein Fawzi",
      "year": 2024,
      "citation": "Bernardino Romera-Paredes, Mohammadamin Barekatain, Alexander Novikov, Matej Balog, M. Pawan Kumar, Emilien Dupont, Francisco J. R. Ruiz, Jordan S. Ellenberg, Pengming Wang, Omar Fawzi, Pushmeet Kohli, and Alhussein Fawzi. Mathematical discoveries from program search with large language models. Nature, 625:468--475, 2024.",
      "url": "https://doi.org/10.1038/s41586-023-06924-6",
      "urlSource": "openalex-doi",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Infrastructure"
      ],
      "category": "Evolutionary histories",
      "sourcePage": 18,
      "refPage": 71,
      "placements": [
        {
          "type": "table",
          "where": "Table 3",
          "page": 18,
          "level": "L1",
          "family": null,
          "path": "Evolutionary histories",
          "label": "FunSearch"
        },
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Evolutionary histories › Program archives and lineages",
          "label": "FunSearch"
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§4.2",
          "page": 17,
          "level": "L1",
          "family": null,
          "path": "§4.2 Evolutionary Program Improvement"
        },
        {
          "type": "text",
          "where": "§4.6",
          "page": 22,
          "level": "L1",
          "family": null,
          "path": "§4.6 Direction Quality, Failure Modes, and the Boundary with L2"
        },
        {
          "type": "text",
          "where": "§7.4.1",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.1 Kernels and Tensor Programs"
        }
      ],
      "fieldsFrom": 3,
      "tableLabel": "FunSearch",
      "artifact": "parent program and semantic variation",
      "historyRead": "island archive, program scores, ancestry",
      "citekey": "romeraparedes2024mathematical"
    },
    {
      "ref": 215,
      "name": "PrefixRL",
      "title": "PrefixRL: Optimization of Parallel Prefix Circuits Using Deep Reinforcement Learning",
      "authors": "Rajarshi Roy, Jonathan Raiman, Neel Kant, Ilyas Elkin, Robert Kirby, Michael Siu, Stuart Oberman, Saad Godil, and Bryan Catanzaro",
      "year": 2022,
      "citation": "Rajarshi Roy, Jonathan Raiman, Neel Kant, Ilyas Elkin, Robert Kirby, Michael Siu, Stuart Oberman, Saad Godil, and Bryan Catanzaro. PrefixRL: Optimization of parallel prefix circuits using deep reinforcement learning. arXiv preprint arXiv:2205.07000, 2022.",
      "url": "https://arxiv.org/abs/2205.07000",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Infrastructure"
      ],
      "category": "AI4AI Infrastructure › Logic, RTL, and physical design",
      "sourcePage": 37,
      "refPage": 71,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Infrastructure",
          "path": "AI4AI Infrastructure › Logic, RTL, and physical design",
          "label": "PrefixRL",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.4.3",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.3 Logic, RTL, and Physical Design"
        }
      ],
      "citekey": "prefixrl2022"
    },
    {
      "ref": 216,
      "name": "Ask-LLM",
      "title": "How to Train Data-Efficient LLMs",
      "authors": "Noveen Sachdeva, Benjamin Coleman, Wang-Cheng Kang, Jianmo Ni, Lichan Hong, Ed H. Chi, James Caverlee, Julian McAuley, and Derek Zhiyuan Cheng",
      "year": 2024,
      "citation": "Noveen Sachdeva, Benjamin Coleman, Wang-Cheng Kang, Jianmo Ni, Lichan Hong, Ed H. Chi, James Caverlee, Julian McAuley, and Derek Zhiyuan Cheng. How to train data-efficient LLMs. arXiv preprint arXiv:2402.09668, 2024.",
      "url": "https://arxiv.org/abs/2402.09668",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "AI4AI Data › Selection and curation",
      "sourcePage": 37,
      "refPage": 71,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Data",
          "path": "AI4AI Data › Selection and curation",
          "label": "Ask-LLM",
          "starred": true
        },
        {
          "type": "text",
          "where": "§7.3.1",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.1 Selection and Curation"
        }
      ],
      "citekey": "askllm2024"
    },
    {
      "ref": 217,
      "name": "Agent Laboratory",
      "title": "Agent Laboratory: Using LLM Agents as Research Assistants",
      "authors": "Samuel Schmidgall, Yusheng Su, Ze Wang, Ximeng Sun, Jialian Wu, Xiaodong Yu, Jiang Liu, Michael Moor, Zicheng Liu, and Emad Barsoum",
      "year": 2025,
      "citation": "Samuel Schmidgall, Yusheng Su, Ze Wang, Ximeng Sun, Jialian Wu, Xiaodong Yu, Jiang Liu, Michael Moor, Zicheng Liu, and Emad Barsoum. Agent laboratory: Using LLM agents as research assistants. arXiv preprint arXiv:2501.04227, 2025.",
      "url": "https://arxiv.org/abs/2501.04227",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 21,
      "refPage": 71,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 45,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "schmidgall2025agentlab"
    },
    {
      "ref": 218,
      "name": "Symbolic prompt program search",
      "title": "Symbolic Prompt Program Search: A Structure-Aware Approach to Efficient Compile-Time Prompt Optimization",
      "authors": "Tobias Schnabel and Jennifer Neville",
      "year": 2024,
      "citation": "Tobias Schnabel and Jennifer Neville. Symbolic prompt program search: A structure-aware approach to efficient compile-time prompt optimization. arXiv preprint arXiv:2404.02319, 2024.",
      "url": "https://arxiv.org/abs/2404.02319",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Inference"
      ],
      "category": "§4.3 Prompt, Pipeline, and Workflow Optimization",
      "sourcePage": 19,
      "refPage": 71,
      "placements": [
        {
          "type": "text",
          "where": "§4.3",
          "page": 19,
          "level": "L1",
          "family": null,
          "path": "§4.3 Prompt, Pipeline, and Workflow Optimization"
        },
        {
          "type": "text",
          "where": "§7.2.1",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.1 Prompt and Workflow Optimization"
        }
      ],
      "citekey": "sammo2024"
    },
    {
      "ref": 219,
      "name": "OpenEvolve",
      "title": "OpenEvolve: An Open-Source Evolutionary Coding Agent",
      "authors": "Asankhaya Sharma",
      "year": 2025,
      "citation": "Asankhaya Sharma. OpenEvolve: An open-source evolutionary coding agent, 2025.",
      "url": "https://github.com/algorithmicsuperintelligence/openevolve",
      "urlSource": "repository",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Infrastructure"
      ],
      "category": "Evolutionary histories",
      "sourcePage": 18,
      "refPage": 71,
      "placements": [
        {
          "type": "table",
          "where": "Table 3",
          "page": 18,
          "level": "L1",
          "family": null,
          "path": "Evolutionary histories",
          "label": "OpenEvolve"
        },
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Evolutionary histories › Program archives and lineages",
          "label": "OpenEvolve"
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§4.2",
          "page": 17,
          "level": "L1",
          "family": null,
          "path": "§4.2 Evolutionary Program Improvement"
        },
        {
          "type": "text",
          "where": "§7.4.1",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.1 Kernels and Tensor Programs"
        }
      ],
      "fieldsFrom": 3,
      "tableLabel": "OpenEvolve",
      "artifact": "parent, edit operator, edit location",
      "historyRead": "program database, lineage, diversity, evaluator feedback",
      "citekey": "openevolve2025"
    },
    {
      "ref": 220,
      "name": "Towards understanding sycophancy in language models",
      "title": "Towards Understanding Sycophancy in Language Models",
      "authors": "Mrinank Sharma, Meg Tong, Tomasz Korbak, David Duvenaud, Amanda Askell, Samuel R. Bowman, Newton Cheng, Esin Durmus, Zac Hatfield-Dodds, Scott R. Johnston, Shauna Kravec, Timothy Maxwell, Sam McCandlish, Kamal Ndousse, Oliver Rausch, Nicholas Schiefer, Da Yan, Miranda Zhang, and Ethan Perez",
      "year": 2023,
      "citation": "Mrinank Sharma, Meg Tong, Tomasz Korbak, David Duvenaud, Amanda Askell, Samuel R. Bowman, Newton Cheng, Esin Durmus, Zac Hatfield-Dodds, Scott R. Johnston, Shauna Kravec, Timothy Maxwell, Sam McCandlish, Kamal Ndousse, Oliver Rausch, Nicholas Schiefer, Da Yan, Miranda Zhang, and Ethan Perez. Towards understanding sycophancy in language models. arXiv preprint arXiv:2310.13548, 2023.",
      "url": "https://arxiv.org/abs/2310.13548",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "chapter",
      "families": [],
      "category": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence",
      "sourcePage": 35,
      "refPage": 71,
      "placements": [
        {
          "type": "text",
          "where": "§6.5",
          "page": 35,
          "level": "L3",
          "family": null,
          "path": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence"
        }
      ],
      "citekey": "sharma2023sycophancy"
    },
    {
      "name": "τ^τ-Bench",
      "url": "https://arxiv.org/abs/2609.04611",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Inference"
      ],
      "category": "Benchmarks › AI4AI Inference",
      "placements": [
        {
          "type": "table",
          "where": "Table 10",
          "page": 48,
          "family": "Inference",
          "path": "Benchmarks › AI4AI Inference",
          "label": "τ^τ-Bench",
          "level": null
        },
        {
          "type": "text",
          "where": "§7.2.3",
          "page": 42,
          "level": null,
          "family": "Inference",
          "path": "§7.2.3 Test-Time Reasoning and Serving"
        }
      ],
      "ref": 221,
      "title": "τ^τ-Bench: An Environment for End-To-End, Realistic Agent Construction",
      "authors": "Quan Shi, Keshav Dhandhania, Karthik Narasimhan, and Victor Barres",
      "year": 2026,
      "citation": "Quan Shi, Keshav Dhandhania, Karthik Narasimhan, and Victor Barres. τ^τ-bench: An environment for end-to-end, realistic agent construction, 2026.",
      "citekey": "shi2026hypertau",
      "refPage": 71,
      "task": "Build a deployable task agent",
      "protocol": "Construct from client requirements, business records, APIs, and inherited code; test with held-out simulated users",
      "evidence": "Delivery success under serving constraints",
      "fieldsFrom": 10,
      "sourcePage": 48
    },
    {
      "ref": 222,
      "name": "AutoPrompt",
      "title": "AutoPrompt: Eliciting Knowledge from Language Models with Automatically Generated Prompts",
      "authors": "Taylor Shin, Yasaman Razeghi, Robert L. Logan, IV, Eric Wallace, and Sameer Singh",
      "year": 2020,
      "citation": "Taylor Shin, Yasaman Razeghi, Robert L. Logan, IV, Eric Wallace, and Sameer Singh. AutoPrompt: Eliciting knowledge from language models with automatically generated prompts. arXiv preprint arXiv:2010.15980, 2020.",
      "url": "https://arxiv.org/abs/2010.15980",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Inference"
      ],
      "category": "AI4AI Inference › Prompt and workflow optimization",
      "sourcePage": 37,
      "refPage": 71,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Inference",
          "path": "AI4AI Inference › Prompt and workflow optimization",
          "label": "AutoPrompt",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.3",
          "page": 19,
          "level": "L1",
          "family": null,
          "path": "§4.3 Prompt, Pipeline, and Workflow Optimization"
        },
        {
          "type": "text",
          "where": "§7.2.1",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.1 Prompt and Workflow Optimization"
        }
      ],
      "citekey": "autoprompt2020"
    },
    {
      "ref": 223,
      "name": "Reflexion",
      "title": "Reflexion: Language Agents with Verbal Reinforcement Learning",
      "authors": "Noah Shinn, Federico Cassano, Ashwin Gopinath, Karthik Narasimhan, and Shunyu Yao",
      "year": 2023,
      "citation": "Noah Shinn, Federico Cassano, Ashwin Gopinath, Karthik Narasimhan, and Shunyu Yao. Reflexion: Language agents with verbal reinforcement learning. In Advances in Neural Information Processing Systems, volume 36, 2023.",
      "url": "https://arxiv.org/abs/2303.11366",
      "urlSource": "openalex-arxiv",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 12,
      "refPage": 71,
      "placements": [],
      "citekey": "shinn2023reflexion"
    },
    {
      "ref": 224,
      "name": "NAS-Bench-301",
      "title": "NAS-Bench-301 and the Case for Surrogate Benchmarks for Neural Architecture Search",
      "authors": "Julien Siems, Lucas Zimmer, Arber Zela, Jovita Lukasik, Margret Keuper, and Frank Hutter",
      "year": 2020,
      "citation": "Julien Siems, Lucas Zimmer, Arber Zela, Jovita Lukasik, Margret Keuper, and Frank Hutter. NAS-bench-301 and the case for surrogate benchmarks for neural architecture search, 2020.",
      "url": "https://arxiv.org/abs/2008.09777",
      "urlSource": "arxiv-id",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§7.1.3 Parameter-Updating Post-Training",
      "sourcePage": 39,
      "refPage": 72,
      "placements": [
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "nasbench3012020"
    },
    {
      "ref": 225,
      "name": "ReST-EM",
      "title": "Beyond Human Data: Scaling Self-Training for Problem-Solving with Language Models",
      "authors": "Avi Singh, John D. Co-Reyes, Rishabh Agarwal, Ankesh Anand, Piyush Patil, Xavier Garcia, Peter J. Liu, James Harrison, Jaehoon Lee, Kelvin Xu, Aaron Parisi, Abhishek Kumar, Alex Alemi, Alex Rizkowsky, Azade Nova, Ben Adlam, Bernd Bohnet, Gamaleldin Elsayed, Hanie Sedghi, Igor Mordatch, Isabelle Simpson, Izzeddin Gur, Jasper Snoek, Jeffrey Pennington, Jiri Hron, Kathleen Kenealy, Kevin Swersky, Kshiteej Mahajan, Laura Culp, Lechao Xiao, Maxwell L. Bileschi, Noah Constant, Roman Novak, Rosanne Liu, Tris Warkentin, Yundi Qian, Yamini Bansal, Ethan Dyer, Behnam Neyshabur, Jascha Sohl-Dickstein, and Noah Fiedel",
      "year": 2023,
      "citation": "Avi Singh, John D. Co-Reyes, Rishabh Agarwal, Ankesh Anand, Piyush Patil, Xavier Garcia, Peter J. Liu, James Harrison, Jaehoon Lee, Kelvin Xu, Aaron Parisi, Abhishek Kumar, Alex Alemi, Alex Rizkowsky, Azade Nova, Ben Adlam, Bernd Bohnet, Gamaleldin Elsayed, Hanie Sedghi, Igor Mordatch, Isabelle Simpson, Izzeddin Gur, Jasper Snoek, Jeffrey Pennington, Jiri Hron, Kathleen Kenealy, Kevin Swersky, Kshiteej Mahajan, Laura Culp, Lechao Xiao, Maxwell L. Bileschi, Noah Constant, Roman Novak, Rosanne Liu, Tris Warkentin, Yundi Qian, Yamini Bansal, Ethan Dyer, Behnam Neyshabur, Jascha Sohl-Dickstein, and Noah Fiedel. Beyond human data: Scaling self-training for problem-solving with language models. arXiv preprint arXiv:2312.06585, 2023.",
      "url": "https://arxiv.org/abs/2312.06585",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Learning"
      ],
      "category": "AI4AI Learning › Parameter-updating post-training",
      "sourcePage": 37,
      "refPage": 72,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Parameter-updating post-training",
          "label": "ReST-EM",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.4",
          "page": 20,
          "level": "L1",
          "family": null,
          "path": "§4.4 Reflection, Memory, and Search over Trajectories"
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "restem2023"
    },
    {
      "ref": 226,
      "name": "ConceptSearch",
      "title": "ConceptSearch: Towards Efficient Program Search Using LLMs for Abstraction and Reasoning Corpus (ARC)",
      "authors": "Kartik Singhal and Gautam Shroff",
      "year": 2024,
      "citation": "Kartik Singhal and Gautam Shroff. ConceptSearch: Towards efficient program search using LLMs for abstraction and reasoning corpus (ARC). arXiv preprint arXiv:2412.07322, 2024.",
      "url": "https://arxiv.org/abs/2412.07322",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Inference"
      ],
      "category": "§4.2 Evolutionary Program Improvement",
      "sourcePage": 18,
      "refPage": 72,
      "placements": [
        {
          "type": "text",
          "where": "§4.2",
          "page": 18,
          "level": null,
          "family": null,
          "path": "§4.2 Evolutionary Program Improvement"
        },
        {
          "type": "text",
          "where": "§7.2.3",
          "page": 42,
          "level": null,
          "family": "Inference",
          "path": "§7.2.3 Test-Time Reasoning and Serving"
        }
      ],
      "citekey": "conceptsearch2024"
    },
    {
      "ref": 227,
      "name": "Defining and characterizing reward hacking",
      "title": "Defining and Characterizing Reward Hacking",
      "authors": "Joar Skalse, Nikolaus H. R. Howe, Dmitrii Krasheninnikov, and David Krueger",
      "year": 2022,
      "citation": "Joar Skalse, Nikolaus H. R. Howe, Dmitrii Krasheninnikov, and David Krueger. Defining and characterizing reward hacking. arXiv preprint arXiv:2209.13085, 2022.",
      "url": "https://arxiv.org/abs/2209.13085",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "chapter",
      "families": [],
      "category": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence",
      "sourcePage": 35,
      "refPage": 72,
      "placements": [
        {
          "type": "text",
          "where": "§6.5",
          "page": 35,
          "level": "L3",
          "family": null,
          "path": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence"
        }
      ],
      "citekey": "skalse2022rewardhacking"
    },
    {
      "name": "AutoHarnessBench",
      "url": null,
      "urlSource": null,
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Inference"
      ],
      "category": "Benchmarks › AI4AI Inference",
      "placements": [
        {
          "type": "table",
          "where": "Table 10",
          "page": 48,
          "family": "Inference",
          "path": "Benchmarks › AI4AI Inference",
          "label": "AutoHarnessBench",
          "level": null
        },
        {
          "type": "text",
          "where": "§7.2.3",
          "page": 42,
          "level": null,
          "family": "Inference",
          "path": "§7.2.3 Test-Time Reasoning and Serving"
        }
      ],
      "ref": 228,
      "title": "AutoHarnessBench: AI R&D at the Harness Layer",
      "authors": "Essam Sleiman, Mersad Abbasi, Ayush Chakravarthy, and Karina Nguyen",
      "year": 2026,
      "citation": "Essam Sleiman, Mersad Abbasi, Ayush Chakravarthy, and Karina Nguyen. Autoharnessbench: Ai r&d at the harness layer. https://github.com/essamsleiman/autoharnessbench, July 2026.",
      "citekey": "sleiman2026autoharnessbench",
      "refPage": 72,
      "task": "Improve a fixed actor's execution harness",
      "protocol": "Separate proposer and actor; freeze the selected harness after public trials; assess held-out lift",
      "evidence": "Generalization of harness improvements and research cost",
      "fieldsFrom": 10,
      "sourcePage": 48
    },
    {
      "ref": 229,
      "name": "Scaling LLM test-time compute optimally can be more effective than scaling model parameters",
      "title": "Scaling LLM Test-Time Compute Optimally Can Be More Effective than Scaling Model Parameters",
      "authors": "Charlie Snell, Jaehoon Lee, Kelvin Xu, and Aviral Kumar",
      "year": 2024,
      "citation": "Charlie Snell, Jaehoon Lee, Kelvin Xu, and Aviral Kumar. Scaling LLM test-time compute optimally can be more effective than scaling model parameters. arXiv preprint arXiv:2408.03314, 2024.",
      "url": "https://arxiv.org/abs/2408.03314",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Inference"
      ],
      "category": "§7.2.3 Test-Time Reasoning and Serving",
      "sourcePage": 41,
      "refPage": 72,
      "placements": [
        {
          "type": "text",
          "where": "§7.2.3",
          "page": 41,
          "level": null,
          "family": "Inference",
          "path": "§7.2.3 Test-Time Reasoning and Serving"
        }
      ],
      "citekey": "testtimecompute2024"
    },
    {
      "ref": 230,
      "name": "Practical bayesian optimization of machine learning algorithms",
      "title": "Practical Bayesian Optimization of Machine Learning Algorithms",
      "authors": "Jasper Snoek, Hugo Larochelle, and Ryan P. Adams",
      "year": 2012,
      "citation": "Jasper Snoek, Hugo Larochelle, and Ryan P. Adams. Practical bayesian optimization of machine learning algorithms. In Advances in Neural Information Processing Systems, volume 25, 2012.",
      "url": "https://arxiv.org/abs/1206.2944",
      "urlSource": "openalex-arxiv",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Learning"
      ],
      "category": "§4.1 History-Conditioned Direction Selection",
      "sourcePage": 16,
      "refPage": 72,
      "placements": [
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§7.1.1",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.1 Configurations and Training Pipelines"
        }
      ],
      "citekey": "snoek2012practical"
    },
    {
      "ref": 231,
      "name": "We have a package for you! a comprehensive analysis of package hallucinations by code generating LLMs",
      "title": "We Have a Package for You! A Comprehensive Analysis of Package Hallucinations by Code Generating LLMs",
      "authors": "Joseph Spracklen, Raveen Wijewickrama, A. H. M. Nazmus Sakib, Anindya Maiti, Bimal Viswanath, and Murtuza Jadliwala",
      "year": 2024,
      "citation": "Joseph Spracklen, Raveen Wijewickrama, A. H. M. Nazmus Sakib, Anindya Maiti, Bimal Viswanath, and Murtuza Jadliwala. We have a package for you! A comprehensive analysis of package hallucinations by code generating LLMs. arXiv preprint arXiv:2406.10279, 2024.",
      "url": "https://arxiv.org/abs/2406.10279",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 22,
      "refPage": 72,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 22,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        }
      ],
      "citekey": "packagehallucinations2024"
    },
    {
      "ref": 232,
      "name": "Recursive self-improvement of AI research agents",
      "title": "Recursive Self-Improvement of AI Research Agents",
      "authors": "Dhruv Srikanth, Bingchen Zhao, Dixing Xu, Yuxiang Wu, and Zhengyao Jiang",
      "year": 2026,
      "citation": "Dhruv Srikanth, Bingchen Zhao, Dixing Xu, Yuxiang Wu, and Zhengyao Jiang. Recursive self-improvement of AI research agents. arXiv preprint arXiv:2609.26457, 2026.",
      "url": "https://arxiv.org/abs/2609.26457",
      "urlSource": "manuscript",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 49,
      "refPage": 72,
      "placements": [],
      "citekey": "srikanth2026recursive"
    },
    {
      "ref": 233,
      "name": "PaperBench",
      "title": "PaperBench: Evaluating AI's Ability to Replicate AI Research",
      "authors": "Giulio Starace, Oliver Jaffe, Dane Sherburn, James Aung, Jun Shern Chan, Leon Maksin, Rachel Dias, Evan Mays, Benjamin Kinsella, Wyatt Thompson, Johannes Heidecke, Amelia Glaese, and Tejal Patwardhan",
      "year": 2025,
      "citation": "Giulio Starace, Oliver Jaffe, Dane Sherburn, James Aung, Jun Shern Chan, Leon Maksin, Rachel Dias, Evan Mays, Benjamin Kinsella, Wyatt Thompson, Johannes Heidecke, Amelia Glaese, and Tejal Patwardhan. PaperBench: Evaluating AI's ability to replicate AI research. In Proceedings of the 42nd International Conference on Machine Learning, volume 267 of Proceedings of Machine Learning Research, pages 56843--56873, 2025.",
      "url": "https://arxiv.org/abs/2504.01848",
      "urlSource": "arxiv-id",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Cross-family",
        "Learning"
      ],
      "category": "Benchmarks › Cross-family AI research and evaluation",
      "sourcePage": 48,
      "refPage": 72,
      "placements": [
        {
          "type": "table",
          "where": "Table 10",
          "page": 48,
          "family": "Cross-family",
          "path": "Benchmarks › Cross-family AI research and evaluation",
          "label": "PaperBench",
          "level": null
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 40,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "paperbench2025",
      "task": "Reproduce AI research methods and experiments",
      "protocol": "Execute submitted code in a fresh environment; grade with paper-specific rubrics",
      "evidence": "Weighted replication score over implementation and result checks",
      "fieldsFrom": 10
    },
    {
      "ref": 234,
      "name": "Nemotron-CC",
      "title": "Nemotron-CC: Transforming Common Crawl into a Refined Long-Horizon Pretraining Dataset",
      "authors": "Dan Su, Kezhi Kong, Ying Lin, Joseph Jennings, Brandon Norick, Markus Kliegl, Mostofa Patwary, Mohammad Shoeybi, and Bryan Catanzaro",
      "year": 2024,
      "citation": "Dan Su, Kezhi Kong, Ying Lin, Joseph Jennings, Brandon Norick, Markus Kliegl, Mostofa Patwary, Mohammad Shoeybi, and Bryan Catanzaro. Nemotron-CC: Transforming common crawl into a refined long-horizon pretraining dataset. arXiv preprint arXiv:2412.02595, 2024.",
      "url": "https://arxiv.org/abs/2412.02595",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "§7.3.2 Augmentation, Synthesis, and Curricula",
      "sourcePage": 42,
      "refPage": 72,
      "placements": [
        {
          "type": "text",
          "where": "§7.3.2",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.2 Augmentation, Synthesis, and Curricula"
        }
      ],
      "citekey": "nemotroncc2024"
    },
    {
      "ref": 235,
      "name": "BBTv2",
      "title": "BBTv2: Towards a Gradient-Free Future with Large Language Models",
      "authors": "Tianxiang Sun, Zhengfu He, Hong Qian, Yunhua Zhou, Xuanjing Huang, and Xipeng Qiu",
      "year": 2022,
      "citation": "Tianxiang Sun, Zhengfu He, Hong Qian, Yunhua Zhou, Xuanjing Huang, and Xipeng Qiu. BBTv2: Towards a gradient-free future with large language models. arXiv preprint arXiv:2205.11200, 2022.",
      "url": "https://arxiv.org/abs/2205.11200",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Learning"
      ],
      "category": "AI4AI Learning › Parameter-updating post-training",
      "sourcePage": 37,
      "refPage": 72,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Parameter-updating post-training",
          "label": "BBTv2",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.3",
          "page": 19,
          "level": "L1",
          "family": null,
          "path": "§4.3 Prompt, Pipeline, and Workflow Optimization"
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "bbtv22022"
    },
    {
      "ref": 236,
      "name": "Black-box tuning for language-model-as-a-service",
      "title": "Black-Box Tuning for Language-Model-as-a-Service",
      "authors": "Tianxiang Sun, Yunfan Shao, Hong Qian, Xuanjing Huang, and Xipeng Qiu",
      "year": 2022,
      "citation": "Tianxiang Sun, Yunfan Shao, Hong Qian, Xuanjing Huang, and Xipeng Qiu. Black-box tuning for language-model-as-a-service. arXiv preprint arXiv:2201.03514, 2022.",
      "url": "https://arxiv.org/abs/2201.03514",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Learning"
      ],
      "category": "§4.3 Prompt, Pipeline, and Workflow Optimization",
      "sourcePage": 19,
      "refPage": 72,
      "placements": [
        {
          "type": "text",
          "where": "§4.3",
          "page": 19,
          "level": "L1",
          "family": null,
          "path": "§4.3 Prompt, Pipeline, and Workflow Optimization"
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "bbt2022"
    },
    {
      "ref": 237,
      "name": "Dataset cartography",
      "title": "Dataset Cartography: Mapping and Diagnosing Datasets with Training Dynamics",
      "authors": "Swabha Swayamdipta, Roy Schwartz, Nicholas Lourie, Yizhong Wang, Hannaneh Hajishirzi, Noah A. Smith, and Yejin Choi",
      "year": 2020,
      "citation": "Swabha Swayamdipta, Roy Schwartz, Nicholas Lourie, Yizhong Wang, Hannaneh Hajishirzi, Noah A. Smith, and Yejin Choi. Dataset cartography: Mapping and diagnosing datasets with training dynamics. In Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP), pages 9275--9293, 2020.",
      "url": "https://arxiv.org/abs/2009.10795",
      "urlSource": "openalex-arxiv",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "§7.3.1 Selection and Curation",
      "sourcePage": 42,
      "refPage": 73,
      "placements": [
        {
          "type": "text",
          "where": "§7.3.1",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.1 Selection and Curation"
        }
      ],
      "citekey": "datacartography2020"
    },
    {
      "ref": 238,
      "name": "Freeze-Thaw",
      "title": "Freeze-Thaw Bayesian Optimization",
      "authors": "Kevin Swersky, Jasper Snoek, and Ryan Prescott Adams",
      "year": 2014,
      "citation": "Kevin Swersky, Jasper Snoek, and Ryan Prescott Adams. Freeze-thaw bayesian optimization. arXiv preprint arXiv:1406.3896, 2014.",
      "url": "https://arxiv.org/abs/1406.3896",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "figure",
      "families": [
        "Learning"
      ],
      "category": "Performance histories › Budget and learning curves",
      "sourcePage": 17,
      "refPage": 73,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Performance histories › Budget and learning curves",
          "label": "Freeze-Thaw"
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§7.1.1",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.1 Configurations and Training Pipelines"
        }
      ],
      "citekey": "freezethaw2014"
    },
    {
      "ref": 239,
      "name": "MnasNet",
      "title": "MnasNet: Platform-Aware Neural Architecture Search for Mobile",
      "authors": "Mingxing Tan, Bo Chen, Ruoming Pang, Vijay Vasudevan, Mark Sandler, Andrew Howard, and Quoc V. Le",
      "year": 2019,
      "citation": "Mingxing Tan, Bo Chen, Ruoming Pang, Vijay Vasudevan, Mark Sandler, Andrew Howard, and Quoc V. Le. MnasNet: Platform-aware neural architecture search for mobile. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pages 2820--2828, 2019.",
      "url": "https://arxiv.org/abs/1807.11626",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "AI4AI Learning › Architectures and update rules",
      "sourcePage": 37,
      "refPage": 73,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Architectures and update rules",
          "label": "MnasNet",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "mnasnet2019"
    },
    {
      "ref": 240,
      "name": "EfficientNet",
      "title": "EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks",
      "authors": "Mingxing Tan and Quoc V. Le",
      "year": 2019,
      "citation": "Mingxing Tan and Quoc V. Le. EfficientNet: Rethinking model scaling for convolutional neural networks. In Proceedings of the 36th International Conference on Machine Learning, volume 97 of Proceedings of Machine Learning Research, pages 6105--6114, 2019.",
      "url": "https://arxiv.org/abs/1905.11946",
      "urlSource": "openalex-arxiv",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§7.1.2 Architectures and Update Rules",
      "sourcePage": 38,
      "refPage": 73,
      "placements": [
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "efficientnet2019"
    },
    {
      "ref": 241,
      "name": "A survey on self-evolution of large language models",
      "title": "A Survey on Self-Evolution of Large Language Models",
      "authors": "Zhengwei Tao, Ting-En Lin, Xiancai Chen, Hangyu Li, Yuchuan Wu, Yongbin Li, Zhi Jin, Fei Huang, Dacheng Tao, and Jingren Zhou",
      "year": 2024,
      "citation": "Zhengwei Tao, Ting-En Lin, Xiancai Chen, Hangyu Li, Yuchuan Wu, Yongbin Li, Zhi Jin, Fei Huang, Dacheng Tao, and Jingren Zhou. A survey on self-evolution of large language models. arXiv preprint arXiv:2404.14387, 2024.",
      "url": "https://arxiv.org/abs/2404.14387",
      "urlSource": "manuscript",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 5,
      "refPage": 73,
      "placements": [],
      "citekey": "tao2024selfevolution"
    },
    {
      "ref": 242,
      "name": "VeriGen",
      "title": "VeriGen: A Large Language Model for Verilog Code Generation",
      "authors": "Shailja Thakur, Baleegh Ahmad, Hammond Pearce, Benjamin Tan, Brendan Dolan-Gavitt, Ramesh Karri, and Siddharth Garg",
      "year": 2023,
      "citation": "Shailja Thakur, Baleegh Ahmad, Hammond Pearce, Benjamin Tan, Brendan Dolan-Gavitt, Ramesh Karri, and Siddharth Garg. VeriGen: A large language model for verilog code generation. arXiv preprint arXiv:2308.00708, 2023.",
      "url": "https://arxiv.org/abs/2308.00708",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Infrastructure"
      ],
      "category": "§7.4.3 Logic, RTL, and Physical Design",
      "sourcePage": 44,
      "refPage": 73,
      "placements": [
        {
          "type": "text",
          "where": "§7.4.3",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.3 Logic, RTL, and Physical Design"
        }
      ],
      "citekey": "verigen2023"
    },
    {
      "ref": 243,
      "name": "AutoChip",
      "title": "AutoChip: Automating HDL Generation Using LLM Feedback",
      "authors": "Shailja Thakur, Jason Blocklove, Hammond Pearce, Benjamin Tan, Siddharth Garg, and Ramesh Karri",
      "year": 2023,
      "citation": "Shailja Thakur, Jason Blocklove, Hammond Pearce, Benjamin Tan, Siddharth Garg, and Ramesh Karri. AutoChip: Automating HDL generation using LLM feedback. arXiv preprint arXiv:2311.04887, 2023.",
      "url": "https://arxiv.org/abs/2311.04887",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Infrastructure"
      ],
      "category": "Logic, RTL, and physical design",
      "sourcePage": 45,
      "refPage": 73,
      "placements": [
        {
          "type": "table",
          "where": "Table 9",
          "page": 45,
          "level": "L1",
          "family": "Infrastructure",
          "path": "Logic, RTL, and physical design",
          "label": "AutoChip§"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Infrastructure",
          "path": "AI4AI Infrastructure › Logic, RTL, and physical design",
          "label": "AutoChip",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.4.3",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.3 Logic, RTL, and Physical Design"
        }
      ],
      "fieldsFrom": 9,
      "tableLabel": "AutoChip§",
      "artifact": "Verilog modules and their repairs",
      "human": "RTL template, testbench, PPA objective",
      "citekey": "autochip2023"
    },
    {
      "ref": 244,
      "name": "Drawing-Program Induction",
      "title": "Learning Abstract Structure for Drawing by Efficient Motor Program Induction",
      "authors": "Lucas Y. Tian, Kevin Ellis, Marta Kryven, and Joshua B. Tenenbaum",
      "year": 2020,
      "citation": "Lucas Y. Tian, Kevin Ellis, Marta Kryven, and Joshua B. Tenenbaum. Learning abstract structure for drawing by efficient motor program induction. In Advances in Neural Information Processing Systems, volume 33, pages 2686--2697, 2020.",
      "url": "https://arxiv.org/abs/2008.03519",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L2"
      ],
      "level": "L2",
      "basis": "figure",
      "families": [
        "Inference"
      ],
      "category": "Available primitives (P) › Program-library construction",
      "sourcePage": 25,
      "refPage": 73,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 6",
          "page": 25,
          "level": "L2",
          "path": "Available primitives (P) › Program-library construction",
          "label": "drawing-program induction"
        },
        {
          "type": "text",
          "where": "§5.1",
          "page": 25,
          "level": "L2",
          "family": null,
          "path": "§5.1 Formalization and evaluation of AI-defined search spaces"
        },
        {
          "type": "text",
          "where": "§7.2.2",
          "page": 41,
          "level": null,
          "family": "Inference",
          "path": "§7.2.2 Agent, Tool, and Library Design"
        }
      ],
      "citekey": "tian2020drawing"
    },
    {
      "ref": 245,
      "name": "AutoResearch AI",
      "title": "AutoResearch AI: Towards AI-Powered Research Automation for Scientific Discovery",
      "authors": "Guiyao Tie, Jiawen Shi, Dingjie Song, Yixiao Huang, Ziji Sheng, Xueyang Zhou, Daizong Liu, Pan Zhou, Yongchao Chen, Ran Xu, Lifang He, Qingsong Wen, Manling Li, Cong Lu, Shuai Li, Pengtao Xie, Yixuan Yuan, Rui Meng, Lei Xing, Lichao Sun, Caiming Xiong, Philip S. Yu, and Jianfeng Gao",
      "year": 2026,
      "citation": "Guiyao Tie, Jiawen Shi, Dingjie Song, Yixiao Huang, Ziji Sheng, Xueyang Zhou, Daizong Liu, Pan Zhou, Yongchao Chen, Ran Xu, Lifang He, Qingsong Wen, Manling Li, Cong Lu, Shuai Li, Pengtao Xie, Yixuan Yuan, Rui Meng, Lei Xing, Lichao Sun, Caiming Xiong, Philip S. Yu, and Jianfeng Gao. AutoResearch AI: Towards AI-powered research automation for scientific discovery. arXiv preprint arXiv:2605.23204, 2026.",
      "url": "https://arxiv.org/abs/2605.23204",
      "urlSource": "manuscript",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 7,
      "refPage": 73,
      "placements": [],
      "citekey": "tie2026autoresearch"
    },
    {
      "ref": 246,
      "name": "A survey of AI scientists: Surveying the automatic scientists and research",
      "title": "A Survey of AI Scientists: Surveying the Automatic Scientists and Research",
      "authors": "Guiyao Tie, Pan Zhou, and Lichao Sun",
      "year": 2025,
      "citation": "Guiyao Tie, Pan Zhou, and Lichao Sun. A survey of AI scientists: Surveying the automatic scientists and research. arXiv preprint arXiv:2510.23045, 2025.",
      "url": "https://arxiv.org/abs/2510.23045",
      "urlSource": "manuscript",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 5,
      "refPage": 73,
      "placements": [],
      "citekey": "tie2025aiscientists"
    },
    {
      "ref": 247,
      "name": "An empirical study of example forgetting during deep neural network learning",
      "title": "An Empirical Study of Example Forgetting during Deep Neural Network Learning",
      "authors": "Mariya Toneva, Alessandro Sordoni, Remi Tachet des Combes, Adam Trischler, Yoshua Bengio, and Geoffrey J. Gordon",
      "year": 2019,
      "citation": "Mariya Toneva, Alessandro Sordoni, Remi Tachet des Combes, Adam Trischler, Yoshua Bengio, and Geoffrey J. Gordon. An empirical study of example forgetting during deep neural network learning. In International Conference on Learning Representations, 2019.",
      "url": "https://arxiv.org/abs/1812.05159",
      "urlSource": "openalex-arxiv",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "§7.3.1 Selection and Curation",
      "sourcePage": 42,
      "refPage": 73,
      "placements": [
        {
          "type": "text",
          "where": "§7.3.1",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.1 Selection and Curation"
        }
      ],
      "citekey": "forgetting2019"
    },
    {
      "ref": 248,
      "name": "CodeJudge",
      "title": "CodeJudge: Evaluating Code Generation with Large Language Models",
      "authors": "Weixi Tong and Tianyi Zhang",
      "year": 2024,
      "citation": "Weixi Tong and Tianyi Zhang. CodeJudge: Evaluating code generation with large language models. In Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing, pages 20032--20051, 2024.",
      "url": "https://arxiv.org/abs/2410.02184",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "figure",
      "families": [
        "Cross-family"
      ],
      "category": "Executable evaluation artifacts › Generated tests and oracles",
      "sourcePage": 32,
      "refPage": 73,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Executable evaluation artifacts › Generated tests and oracles",
          "label": "CodeJudge"
        },
        {
          "type": "text",
          "where": "§6.2",
          "page": 31,
          "level": "L3",
          "family": null,
          "path": "§6.2 Executable Evaluation Artifacts"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "codejudge2024"
    },
    {
      "ref": 249,
      "name": "AutoML in the age of large language models: Current challenges, future opportunities and risks",
      "title": "AutoML in the Age of Large Language Models: Current Challenges, Future Opportunities and Risks",
      "authors": "Alexander Tornede, Difan Deng, Theresa Eimer, Joseph Giovanelli, Aditya Mohan, Tim Ruhkopf, Sarah Segel, Daphne Theodorakopoulos, Tanja Tornede, Henning Wachsmuth, and Marius Lindauer",
      "year": 2024,
      "citation": "Alexander Tornede, Difan Deng, Theresa Eimer, Joseph Giovanelli, Aditya Mohan, Tim Ruhkopf, Sarah Segel, Daphne Theodorakopoulos, Tanja Tornede, Henning Wachsmuth, and Marius Lindauer. AutoML in the age of large language models: Current challenges, future opportunities and risks. Transactions on Machine Learning Research, 2024.",
      "url": "https://arxiv.org/abs/2306.08107",
      "urlSource": "arxiv-id",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 8,
      "refPage": 73,
      "placements": [],
      "citekey": "tornede2024automl"
    },
    {
      "ref": 250,
      "name": "VeRO",
      "title": "VeRO: A Harness for Agents to Optimize Agents",
      "authors": "Varun Ursekar, Apaar Shanker, Veronica Chatrath, Yuan Xue, and Samuel Marc Denton",
      "year": 2026,
      "citation": "Varun Ursekar, Apaar Shanker, Veronica Chatrath, Yuan Xue, and Samuel Marc Denton. VeRO: A harness for agents to optimize agents, 2026.",
      "url": "https://arxiv.org/abs/2602.22480",
      "urlSource": "openalex-arxiv",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Inference"
      ],
      "category": "§7.2.3 Test-Time Reasoning and Serving",
      "sourcePage": 42,
      "refPage": 74,
      "placements": [
        {
          "type": "text",
          "where": "§7.2.3",
          "page": 42,
          "level": null,
          "family": "Inference",
          "path": "§7.2.3 Test-Time Reasoning and Serving"
        }
      ],
      "citekey": "ursekar2026vero"
    },
    {
      "ref": 251,
      "name": "Teach better or show smarter? on instructions and exemplars in automatic prompt optimization",
      "title": "Teach Better or Show Smarter? On Instructions and Exemplars in Automatic Prompt Optimization",
      "authors": "Xingchen Wan, Ruoxi Sun, Hootan Nakhost, and Sercan O. Arik",
      "year": 2024,
      "citation": "Xingchen Wan, Ruoxi Sun, Hootan Nakhost, and Sercan O. Arik. Teach better or show smarter? On instructions and exemplars in automatic prompt optimization. arXiv preprint arXiv:2406.15708, 2024.",
      "url": "https://arxiv.org/abs/2406.15708",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Inference"
      ],
      "category": "§4.3 Prompt, Pipeline, and Workflow Optimization",
      "sourcePage": 19,
      "refPage": 74,
      "placements": [
        {
          "type": "text",
          "where": "§4.3",
          "page": 19,
          "level": "L1",
          "family": null,
          "path": "§4.3 Prompt, Pipeline, and Workflow Optimization"
        },
        {
          "type": "text",
          "where": "§7.2.1",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.1 Prompt and Workflow Optimization"
        }
      ],
      "citekey": "teachbetter2024"
    },
    {
      "ref": 252,
      "name": "SkillX",
      "title": "SkillX: Automatically Constructing Skill Knowledge Bases for Agents",
      "authors": "Chenxi Wang, Zhuoyun Yu, Xin Xie, Wuguannan Yao, Runnan Fang, Shuofei Qiao, Kexin Cao, Guozhou Zheng, Xiang Qi, Peng Zhang, and Shumin Deng",
      "year": 2026,
      "citation": "Chenxi Wang, Zhuoyun Yu, Xin Xie, Wuguannan Yao, Runnan Fang, Shuofei Qiao, Kexin Cao, Guozhou Zheng, Xiang Qi, Peng Zhang, and Shumin Deng. SkillX: Automatically constructing skill knowledge bases for agents. arXiv preprint arXiv:2604.04804, 2026.",
      "url": "https://arxiv.org/abs/2604.04804",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L2"
      ],
      "level": "L2",
      "basis": "chapter",
      "families": [
        "Inference"
      ],
      "category": "Composition and edit operators (O) › Grammar productions and graph rewrites",
      "sourcePage": 25,
      "refPage": 74,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 6",
          "page": 25,
          "level": null,
          "boundary": true,
          "path": "Composition and edit operators (O) › Grammar productions and graph rewrites",
          "label": "SkillX"
        },
        {
          "type": "text",
          "where": "§5.1",
          "page": 25,
          "level": "L2",
          "family": null,
          "path": "§5.1 Formalization and evaluation of AI-defined search spaces"
        },
        {
          "type": "text",
          "where": "§7.2.2",
          "page": 41,
          "level": null,
          "family": "Inference",
          "path": "§7.2.2 Agent, Tool, and Library Design"
        }
      ],
      "citekey": "skillx2026"
    },
    {
      "ref": 253,
      "name": "Voyager",
      "title": "Voyager: An Open-Ended Embodied Agent with Large Language Models",
      "authors": "Guanzhi Wang, Yuqi Xie, Yunfan Jiang, Ajay Mandlekar, Chaowei Xiao, Yuke Zhu, Linxi Fan, and Anima Anandkumar",
      "year": 2023,
      "citation": "Guanzhi Wang, Yuqi Xie, Yunfan Jiang, Ajay Mandlekar, Chaowei Xiao, Yuke Zhu, Linxi Fan, and Anima Anandkumar. Voyager: An open-ended embodied agent with large language models. arXiv preprint arXiv:2305.16291, 2023.",
      "url": "https://arxiv.org/abs/2305.16291",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L2",
        "L3",
        "L1"
      ],
      "level": "L2",
      "basis": "table",
      "families": [
        "Inference"
      ],
      "category": "Available primitives (P)",
      "sourcePage": 26,
      "refPage": 74,
      "placements": [
        {
          "type": "table",
          "where": "Table 4",
          "page": 26,
          "level": "L2",
          "family": null,
          "path": "Available primitives (P)",
          "label": "Voyager"
        },
        {
          "type": "table",
          "where": "Table 7",
          "page": 41,
          "level": "L3",
          "family": "Inference",
          "path": "Agent, tool, and library design",
          "label": "Voyager"
        },
        {
          "type": "figure",
          "where": "Figure 6",
          "page": 25,
          "level": "L2",
          "path": "Available primitives (P) › Skill repertoire construction",
          "label": "Voyager"
        },
        {
          "type": "text",
          "where": "§4.4",
          "page": 20,
          "level": "L1",
          "family": null,
          "path": "§4.4 Reflection, Memory, and Search over Trajectories"
        },
        {
          "type": "text",
          "where": "§5.1",
          "page": 25,
          "level": "L2",
          "family": null,
          "path": "§5.1 Formalization and evaluation of AI-defined search spaces"
        },
        {
          "type": "text",
          "where": "§5.3",
          "page": 28,
          "level": "L2",
          "family": null,
          "path": "§5.3 Composition with Direction and Evaluation Control"
        },
        {
          "type": "text",
          "where": "§7.2.2",
          "page": 41,
          "level": null,
          "family": "Inference",
          "path": "§7.2.2 Agent, Tool, and Library Design"
        }
      ],
      "fieldsFrom": 4,
      "tableLabel": "Voyager",
      "artifact": "success-verified, retrievable, composable skills",
      "human": "Minecraft APIs, JavaScript, environment mechanics",
      "citekey": "voyager2023"
    },
    {
      "ref": 254,
      "name": "HAQ",
      "title": "HAQ: Hardware-Aware Automated Quantization with Mixed Precision",
      "authors": "Kuan Wang, Zhijian Liu, Yujun Lin, Ji Lin, and Song Han",
      "year": 2019,
      "citation": "Kuan Wang, Zhijian Liu, Yujun Lin, Ji Lin, and Song Han. HAQ: Hardware-aware automated quantization with mixed precision. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pages 8612--8620, 2019.",
      "url": "https://arxiv.org/abs/1811.08886",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "AI4AI Learning › Parameter-updating post-training",
      "sourcePage": 37,
      "refPage": 74,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Parameter-updating post-training",
          "label": "HAQ",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "haq2019"
    },
    {
      "ref": 255,
      "name": "Large language models are not fair evaluators",
      "title": "Large Language Models Are Not Fair Evaluators",
      "authors": "Peiyi Wang, Lei Li, Liang Chen, Zefan Cai, Dawei Zhu, Binghuai Lin, Yunbo Cao, Lingpeng Kong, Qi Liu, Tianyu Liu, and Zhifang Sui",
      "year": 2024,
      "citation": "Peiyi Wang, Lei Li, Liang Chen, Zefan Cai, Dawei Zhu, Binghuai Lin, Yunbo Cao, Lingpeng Kong, Qi Liu, Tianyu Liu, and Zhifang Sui. Large language models are not fair evaluators. In Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 9440--9450, 2024.",
      "url": "https://arxiv.org/abs/2305.17926",
      "urlSource": "openalex-arxiv",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence",
      "sourcePage": 35,
      "refPage": 74,
      "placements": [
        {
          "type": "text",
          "where": "§6.5",
          "page": 35,
          "level": "L3",
          "family": null,
          "path": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "wang2024unfair"
    },
    {
      "ref": 256,
      "name": "Math-Shepherd",
      "title": "Math-Shepherd: Verify and Reinforce LLMs Step-by-Step without Human Annotations",
      "authors": "Peiyi Wang, Lei Li, Zhihong Shao, Runxin Xu, Damai Dai, Yifei Li, Deli Chen, Yu Wu, and Zhifang Sui",
      "year": 2024,
      "citation": "Peiyi Wang, Lei Li, Zhihong Shao, Runxin Xu, Damai Dai, Yifei Li, Deli Chen, Yu Wu, and Zhifang Sui. Math-Shepherd: Verify and reinforce LLMs step-by-step without human annotations. In Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 9426--9439, 2024.",
      "url": "https://arxiv.org/abs/2312.08935",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "table",
      "families": [
        "Learning"
      ],
      "category": "Executable evaluation artifacts",
      "sourcePage": 33,
      "refPage": 74,
      "placements": [
        {
          "type": "table",
          "where": "Table 5",
          "page": 33,
          "level": "L3",
          "family": null,
          "path": "Executable evaluation artifacts",
          "label": "Math-Shepherd"
        },
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Executable evaluation artifacts › Learned verifiers and process critics",
          "label": "Math-Shepherd"
        },
        {
          "type": "text",
          "where": "§6.2",
          "page": 32,
          "level": "L3",
          "family": null,
          "path": "§6.2 Executable Evaluation Artifacts"
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "fieldsFrom": 5,
      "tableLabel": "Math-Shepherd",
      "artifact": "auto-built step labels; learned process reward model",
      "human": "math problems, final-answer correctness checks",
      "citekey": "mathshepherd2023"
    },
    {
      "ref": 257,
      "name": "POET",
      "title": "Paired Open-Ended Trailblazer (POET): Endlessly Generating Increasingly Complex and Diverse Learning Environments and Their Solutions",
      "authors": "Rui Wang, Joel Lehman, Jeff Clune, and Kenneth O. Stanley",
      "year": 2019,
      "citation": "Rui Wang, Joel Lehman, Jeff Clune, and Kenneth O. Stanley. Paired open-ended trailblazer (POET): Endlessly generating increasingly complex and diverse learning environments and their solutions. arXiv preprint arXiv:1901.01753, 2019.",
      "url": "https://arxiv.org/abs/1901.01753",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "figure",
      "families": [
        "Data"
      ],
      "category": "Adaptive evaluation and oversight › Adaptive tests and environments",
      "sourcePage": 32,
      "refPage": 74,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Adaptive evaluation and oversight › Adaptive tests and environments",
          "label": "POET"
        },
        {
          "type": "text",
          "where": "§6.5",
          "page": 34,
          "level": "L3",
          "family": null,
          "path": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence"
        },
        {
          "type": "text",
          "where": "§7.3.2",
          "page": 43,
          "level": null,
          "family": "Data",
          "path": "§7.3.2 Augmentation, Synthesis, and Curricula"
        }
      ],
      "citekey": "wang2019poet"
    },
    {
      "ref": 258,
      "name": "PromptAgent",
      "title": "PromptAgent: Strategic Planning with Language Models Enables Expert-Level Prompt Optimization",
      "authors": "Xinyuan Wang, Chenxi Li, Zhen Wang, Fan Bai, Haotian Luo, Jiayou Zhang, Nebojsa Jojic, Eric P. Xing, and Zhiting Hu",
      "year": 2023,
      "citation": "Xinyuan Wang, Chenxi Li, Zhen Wang, Fan Bai, Haotian Luo, Jiayou Zhang, Nebojsa Jojic, Eric P. Xing, and Zhiting Hu. PromptAgent: Strategic planning with language models enables expert-level prompt optimization. arXiv preprint arXiv:2310.16427, 2023.",
      "url": "https://arxiv.org/abs/2310.16427",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Inference"
      ],
      "category": "§4.3 Prompt, Pipeline, and Workflow Optimization",
      "sourcePage": 19,
      "refPage": 74,
      "placements": [
        {
          "type": "text",
          "where": "§4.3",
          "page": 19,
          "level": "L1",
          "family": null,
          "path": "§4.3 Prompt, Pipeline, and Workflow Optimization"
        },
        {
          "type": "text",
          "where": "§7.2.1",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.1 Prompt and Workflow Optimization"
        }
      ],
      "citekey": "promptagent2023"
    },
    {
      "ref": 259,
      "name": "PandaLM",
      "title": "PandaLM: An Automatic Evaluation Benchmark for LLM Instruction Tuning Optimization",
      "authors": "Yidong Wang, Zhuohao Yu, Zhengran Zeng, Linyi Yang, Cunxiang Wang, Hao Chen, Chaoya Jiang, Rui Xie, Jindong Wang, Xing Xie, Wei Ye, Shikun Zhang, and Yue Zhang",
      "year": 2023,
      "citation": "Yidong Wang, Zhuohao Yu, Zhengran Zeng, Linyi Yang, Cunxiang Wang, Hao Chen, Chaoya Jiang, Rui Xie, Jindong Wang, Xing Xie, Wei Ye, Shikun Zhang, and Yue Zhang. PandaLM: An automatic evaluation benchmark for LLM instruction tuning optimization. arXiv preprint arXiv:2306.05087, 2023.",
      "url": "https://arxiv.org/abs/2306.05087",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "figure",
      "families": [
        "Learning"
      ],
      "category": "Learned preference evaluation and model judges › General-purpose model judges",
      "sourcePage": 32,
      "refPage": 74,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Learned preference evaluation and model judges › General-purpose model judges",
          "label": "PandaLM"
        },
        {
          "type": "text",
          "where": "§6.3",
          "page": 32,
          "level": "L3",
          "family": null,
          "path": "§6.3 Learned Preference Evaluation and Model Judges"
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "pandalm2023"
    },
    {
      "ref": 260,
      "name": "MCP4EDA",
      "title": "MCP4EDA: LLM-Powered Model Context Protocol RTL-to-GDSII Automation with Backend-Aware Synthesis Optimization",
      "authors": "Yiting Wang, Wanghao Ye, Yexiao He, Yiran Chen, Gang Qu, and Ang Li",
      "year": 2025,
      "citation": "Yiting Wang, Wanghao Ye, Yexiao He, Yiran Chen, Gang Qu, and Ang Li. MCP4EDA: LLM-powered model context protocol RTL-to-GDSII automation with backend-aware synthesis optimization. arXiv preprint arXiv:2507.19570, 2025.",
      "url": "https://arxiv.org/abs/2507.19570",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Infrastructure"
      ],
      "category": "AI4AI Infrastructure › Logic, RTL, and physical design",
      "sourcePage": 37,
      "refPage": 74,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Infrastructure",
          "path": "AI4AI Infrastructure › Logic, RTL, and physical design",
          "label": "MCP4EDA",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.4.3",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.3 Logic, RTL, and Physical Design"
        }
      ],
      "citekey": "mcp4eda2025"
    },
    {
      "ref": 261,
      "name": "Self-Instruct",
      "title": "Self-Instruct: Aligning Language Models with Self-Generated Instructions",
      "authors": "Yizhong Wang, Yeganeh Kordi, Swaroop Mishra, Alisa Liu, Noah A. Smith, Daniel Khashabi, and Hannaneh Hajishirzi",
      "year": 2023,
      "citation": "Yizhong Wang, Yeganeh Kordi, Swaroop Mishra, Alisa Liu, Noah A. Smith, Daniel Khashabi, and Hannaneh Hajishirzi. Self-instruct: Aligning language models with self-generated instructions. In Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 13484--13508, 2023.",
      "url": "https://arxiv.org/abs/2212.10560",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Data"
      ],
      "category": "Synthetic corpora and curricula",
      "sourcePage": 43,
      "refPage": 74,
      "placements": [
        {
          "type": "table",
          "where": "Table 8",
          "page": 43,
          "level": "L1",
          "family": "Data",
          "path": "Synthetic corpora and curricula",
          "label": "Self-Instruct"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Data",
          "path": "AI4AI Data › Augmentation, synthesis, and curricula",
          "label": "Self-Instruct",
          "starred": true
        },
        {
          "type": "text",
          "where": "§7.3.2",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.2 Augmentation, Synthesis, and Curricula"
        }
      ],
      "fieldsFrom": 8,
      "tableLabel": "Self-Instruct",
      "artifact": "new instructions, inputs and outputs",
      "human": "seed tasks, output format, heuristic filters",
      "citekey": "selfinstruct2022"
    },
    {
      "ref": 262,
      "name": "Machine learning in compiler optimization",
      "title": "Machine Learning in Compiler Optimization",
      "authors": "Zheng Wang and Michael O'Boyle",
      "year": 2018,
      "citation": "Zheng Wang and Michael O'Boyle. Machine learning in compiler optimization. Proceedings of the IEEE, 106(11):1879--1901, 2018.",
      "url": "https://doi.org/10.1109/jproc.2018.2817118",
      "urlSource": "openalex-doi",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 8,
      "refPage": 74,
      "placements": [],
      "citekey": "wang2018compiler"
    },
    {
      "ref": 263,
      "name": "ChiPBench",
      "title": "Benchmarking End-to-End Performance of AI-Based Chip Placement Algorithms",
      "authors": "Zhihai Wang, Zijie Geng, Zhaojie Tu, Jie Wang, Yuxi Qian, Zhexuan Xu, Ziyan Liu, Siyuan Xu, Zhentao Tang, Shixiong Kai, Mingxuan Yuan, Jianye Hao, Bin Li, Yongdong Zhang, and Feng Wu",
      "year": 2024,
      "citation": "Zhihai Wang, Zijie Geng, Zhaojie Tu, Jie Wang, Yuxi Qian, Zhexuan Xu, Ziyan Liu, Siyuan Xu, Zhentao Tang, Shixiong Kai, Mingxuan Yuan, Jianye Hao, Bin Li, Yongdong Zhang, and Feng Wu. Benchmarking end-to-end performance of AI-based chip placement algorithms. arXiv preprint arXiv:2407.15026, 2024.",
      "url": "https://arxiv.org/abs/2407.15026",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Infrastructure"
      ],
      "category": "Benchmarks › AI4AI Infrastructure",
      "sourcePage": 48,
      "refPage": 75,
      "placements": [
        {
          "type": "table",
          "where": "Table 10",
          "page": 48,
          "family": "Infrastructure",
          "path": "Benchmarks › AI4AI Infrastructure",
          "label": "ChiPBench",
          "level": null
        },
        {
          "type": "text",
          "where": "§7.4.3",
          "page": 45,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.3 Logic, RTL, and Physical Design"
        }
      ],
      "citekey": "chipbenchplacement2024",
      "task": "Optimize chip-placement methods",
      "protocol": "Run placements through a shared downstream physical-design flow",
      "evidence": "Final routed PPA beyond intermediate placement proxies",
      "fieldsFrom": 10
    },
    {
      "ref": 264,
      "name": "TroVE",
      "title": "TroVE: Inducing Verifiable and Efficient Toolboxes for Solving Programmatic Tasks",
      "authors": "Zhiruo Wang, Daniel Fried, and Graham Neubig",
      "year": 2024,
      "citation": "Zhiruo Wang, Daniel Fried, and Graham Neubig. TroVE: Inducing verifiable and efficient toolboxes for solving programmatic tasks. arXiv preprint arXiv:2401.12869, 2024.",
      "url": "https://arxiv.org/abs/2401.12869",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L2"
      ],
      "level": "L2",
      "basis": "table",
      "families": [
        "Inference"
      ],
      "category": "Available primitives (P)",
      "sourcePage": 26,
      "refPage": 75,
      "placements": [
        {
          "type": "table",
          "where": "Table 4",
          "page": 26,
          "level": "L2",
          "family": null,
          "path": "Available primitives (P)",
          "label": "TroVE"
        },
        {
          "type": "figure",
          "where": "Figure 6",
          "page": 25,
          "level": "L2",
          "path": "Available primitives (P) › Reusable tool construction",
          "label": "TroVE"
        },
        {
          "type": "text",
          "where": "§5.1",
          "page": 25,
          "level": "L2",
          "family": null,
          "path": "§5.1 Formalization and evaluation of AI-defined search spaces"
        },
        {
          "type": "text",
          "where": "§7.2.2",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.2 Agent, Tool, and Library Design"
        }
      ],
      "fieldsFrom": 4,
      "tableLabel": "TroVE",
      "artifact": "execution-consistent reusable functions, pruned by usage",
      "human": "base primitives, programming language, execution interface",
      "citekey": "trove2024"
    },
    {
      "ref": 265,
      "name": "Self-preference bias in LLM-as-a-judge",
      "title": "Self-Preference Bias in LLM-as-a-Judge",
      "authors": "Koki Wataoka, Tsubasa Takahashi, and Ryokan Ri",
      "year": 2024,
      "citation": "Koki Wataoka, Tsubasa Takahashi, and Ryokan Ri. Self-preference bias in LLM-as-a-judge. arXiv preprint arXiv:2410.21819, 2024.",
      "url": "https://arxiv.org/abs/2410.21819",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence",
      "sourcePage": 35,
      "refPage": 75,
      "placements": [
        {
          "type": "text",
          "where": "§6.5",
          "page": 35,
          "level": "L3",
          "family": null,
          "path": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "wataoka2024selfpreference"
    },
    {
      "ref": 266,
      "name": "From AI for science to agentic science: A survey on autonomous scientific discovery",
      "title": "From AI for Science to Agentic Science: A Survey on Autonomous Scientific Discovery",
      "authors": "Jiaqi Wei, Yuejin Yang, Xiang Zhang, Yuhan Chen, Xiang Zhuang, Zhangyang Gao, Dongzhan Zhou, Guangshuai Wang, Zhiqiang Gao, Juntai Cao, Zijie Qiu, Ming Hu, Chenglong Ma, Shixiang Tang, Junjun He, Chunfeng Song, Xuming He, Qiang Zhang, Chenyu You, Shuangjia Zheng, Ning Ding, Wanli Ouyang, Nanqing Dong, Yu Cheng, Siqi Sun, Lei Bai, and Bowen Zhou",
      "year": 2025,
      "citation": "Jiaqi Wei, Yuejin Yang, Xiang Zhang, Yuhan Chen, Xiang Zhuang, Zhangyang Gao, Dongzhan Zhou, Guangshuai Wang, Zhiqiang Gao, Juntai Cao, Zijie Qiu, Ming Hu, Chenglong Ma, Shixiang Tang, Junjun He, Chunfeng Song, Xuming He, Qiang Zhang, Chenyu You, Shuangjia Zheng, Ning Ding, Wanli Ouyang, Nanqing Dong, Yu Cheng, Siqi Sun, Lei Bai, and Bowen Zhou. From AI for science to agentic science: A survey on autonomous scientific discovery. arXiv preprint arXiv:2508.14111, 2025.",
      "url": "https://arxiv.org/abs/2508.14111",
      "urlSource": "manuscript",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 8,
      "refPage": 75,
      "placements": [],
      "citekey": "wei2025agentic"
    },
    {
      "ref": 267,
      "name": "Network morphism",
      "title": "Network Morphism",
      "authors": "Tao Wei, Changhu Wang, Yong Rui, and Chang Wen Chen",
      "year": 2016,
      "citation": "Tao Wei, Changhu Wang, Yong Rui, and Chang Wen Chen. Network morphism. arXiv preprint arXiv:1603.01670, 2016.",
      "url": "https://arxiv.org/abs/1603.01670",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Learning"
      ],
      "category": "§4.1 History-Conditioned Direction Selection",
      "sourcePage": 16,
      "refPage": 75,
      "placements": [
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "networkmorphism2016"
    },
    {
      "ref": 268,
      "name": "Neural Predictor",
      "title": "Neural Predictor for Neural Architecture Search",
      "authors": "Wei Wen, Hanxiao Liu, Hai Li, Yiran Chen, Gabriel Bender, and Pieter-Jan Kindermans",
      "year": 2019,
      "citation": "Wei Wen, Hanxiao Liu, Hai Li, Yiran Chen, Gabriel Bender, and Pieter-Jan Kindermans. Neural predictor for neural architecture search. arXiv preprint arXiv:1912.00848, 2019.",
      "url": "https://arxiv.org/abs/1912.00848",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "figure",
      "families": [
        "Learning"
      ],
      "category": "Performance histories › Architecture response surfaces",
      "sourcePage": 17,
      "refPage": 75,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Performance histories › Architecture response surfaces",
          "label": "Neural Predictor"
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "neuralpredictor2019"
    },
    {
      "ref": 269,
      "name": "QuRating",
      "title": "QuRating: Selecting High-Quality Data for Training Language Models",
      "authors": "Alexander Wettig, Aatmik Gupta, Saumya Malik, and Danqi Chen",
      "year": 2024,
      "citation": "Alexander Wettig, Aatmik Gupta, Saumya Malik, and Danqi Chen. QuRating: Selecting high-quality data for training language models. In Proceedings of the 41st International Conference on Machine Learning, volume 235 of Proceedings of Machine Learning Research, pages 52915--52971, 2024.",
      "url": "https://arxiv.org/abs/2402.09739",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "table",
      "families": [
        "Data"
      ],
      "category": "Model-judged quality filtering",
      "sourcePage": 43,
      "refPage": 75,
      "placements": [
        {
          "type": "table",
          "where": "Table 8",
          "page": 43,
          "level": "L3",
          "family": "Data",
          "path": "Model-judged quality filtering",
          "label": "QuRating"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Data",
          "path": "AI4AI Data › Selection and curation",
          "label": "QuRating",
          "starred": true
        },
        {
          "type": "text",
          "where": "§7.3.1",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.1 Selection and Curation"
        }
      ],
      "fieldsFrom": 8,
      "tableLabel": "QuRating",
      "artifact": "pairwise judgments; trained rater",
      "human": "named quality criteria, sampling rule",
      "citekey": "qurating2024"
    },
    {
      "ref": 270,
      "name": "A study on encodings for neural architecture search",
      "title": "A Study on Encodings for Neural Architecture Search",
      "authors": "Colin White, Willie Neiswanger, Sam Nolen, and Yash Savani",
      "year": 2020,
      "citation": "Colin White, Willie Neiswanger, Sam Nolen, and Yash Savani. A study on encodings for neural architecture search. arXiv preprint arXiv:2007.04965, 2020.",
      "url": "https://arxiv.org/abs/2007.04965",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Learning"
      ],
      "category": "§4.6 Direction Quality, Failure Modes, and the Boundary with L2",
      "sourcePage": 22,
      "refPage": 75,
      "placements": [
        {
          "type": "text",
          "where": "§4.6",
          "page": 22,
          "level": "L1",
          "family": null,
          "path": "§4.6 Direction Quality, Failure Modes, and the Boundary with L2"
        },
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "nasencodings2020"
    },
    {
      "ref": 271,
      "name": "BANANAS",
      "title": "BANANAS: Bayesian Optimization with Neural Architectures for Neural Architecture Search",
      "authors": "Colin White, Willie Neiswanger, and Yash Savani",
      "year": 2019,
      "citation": "Colin White, Willie Neiswanger, and Yash Savani. BANANAS: Bayesian optimization with neural architectures for neural architecture search. arXiv preprint arXiv:1910.11858, 2019.",
      "url": "https://arxiv.org/abs/1910.11858",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Learning"
      ],
      "category": "Performance histories",
      "sourcePage": 18,
      "refPage": 75,
      "placements": [
        {
          "type": "table",
          "where": "Table 3",
          "page": 18,
          "level": "L1",
          "family": null,
          "path": "Performance histories",
          "label": "BANANAS"
        },
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Performance histories › Architecture response surfaces",
          "label": "BANANAS"
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "fieldsFrom": 3,
      "tableLabel": "BANANAS",
      "artifact": "architecture neighborhood to expand",
      "historyRead": "evaluated architectures, encodings, predictor uncertainty",
      "citekey": "bananas2019"
    },
    {
      "ref": 272,
      "name": "Neural architecture search",
      "title": "Neural Architecture Search: Insights from 1000 Papers",
      "authors": "Colin White, Mahmoud Safari, Rhea Sukthanker, Binxin Ru, Thomas Elsken, Arber Zela, Debadeepta Dey, and Frank Hutter",
      "year": 2023,
      "citation": "Colin White, Mahmoud Safari, Rhea Sukthanker, Binxin Ru, Thomas Elsken, Arber Zela, Debadeepta Dey, and Frank Hutter. Neural architecture search: Insights from 1000 papers. arXiv preprint arXiv:2301.08727, 2023.",
      "url": "https://arxiv.org/abs/2301.08727",
      "urlSource": "manuscript",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 8,
      "refPage": 75,
      "placements": [],
      "citekey": "white2023nas"
    },
    {
      "ref": 273,
      "name": "How powerful are performance predictors in neural architecture search?",
      "title": "How Powerful Are Performance Predictors in Neural Architecture Search?",
      "authors": "Colin White, Arber Zela, Binxin Ru, Yang Liu, and Frank Hutter",
      "year": 2021,
      "citation": "Colin White, Arber Zela, Binxin Ru, Yang Liu, and Frank Hutter. How powerful are performance predictors in neural architecture search? arXiv preprint arXiv:2104.01177, 2021.",
      "url": "https://arxiv.org/abs/2104.01177",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "figure",
      "families": [
        "Learning"
      ],
      "category": "Performance histories › Architecture response surfaces",
      "sourcePage": 17,
      "refPage": 75,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Performance histories › Architecture response surfaces",
          "label": "performance prediction"
        },
        {
          "type": "text",
          "where": "§4.6",
          "page": 22,
          "level": "L1",
          "family": null,
          "path": "§4.6 Direction Quality, Failure Modes, and the Boundary with L2"
        },
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "predictorsnas2021"
    },
    {
      "ref": 274,
      "name": "Learned optimizers that scale and generalize",
      "title": "Learned Optimizers That Scale and Generalize",
      "authors": "Olga Wichrowska, Niru Maheswaranathan, Matthew W. Hoffman, Sergio Gomez Colmenarejo, Misha Denil, Nando de Freitas, and Jascha Sohl-Dickstein",
      "year": 2017,
      "citation": "Olga Wichrowska, Niru Maheswaranathan, Matthew W. Hoffman, Sergio Gomez Colmenarejo, Misha Denil, Nando de Freitas, and Jascha Sohl-Dickstein. Learned optimizers that scale and generalize. In Proceedings of the 34th International Conference on Machine Learning, volume 70 of Proceedings of Machine Learning Research, pages 3751--3760, 2017.",
      "url": "https://arxiv.org/abs/1703.04813",
      "urlSource": "openalex-arxiv",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§7.1.2 Architectures and Update Rules",
      "sourcePage": 39,
      "refPage": 75,
      "placements": [
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "learnedscale2017"
    },
    {
      "ref": 275,
      "name": "RE-Bench",
      "title": "RE-Bench: Evaluating Frontier AI R&D Capabilities of Language Model Agents against Human Experts",
      "authors": "Hjalmar Wijk, Tao Lin, Joel Becker, Sami Jawhar, Neev Parikh, Thomas Broadley, Lawrence Chan, Michael Chen, Josh Clymer, Jai Dhyani, Elena Ericheva, Katharyn Garcia, Brian Goodrich, Nikola Jurkovic, Holden Karnofsky, Megan Kinniment, Aron Lajko, Seraphina Nix, Lucas Sato, William Saunders, Maksym Taran, Ben West, and Elizabeth Barnes",
      "year": 2024,
      "citation": "Hjalmar Wijk, Tao Lin, Joel Becker, Sami Jawhar, Neev Parikh, Thomas Broadley, Lawrence Chan, Michael Chen, Josh Clymer, Jai Dhyani, Elena Ericheva, Katharyn Garcia, Brian Goodrich, Nikola Jurkovic, Holden Karnofsky, Megan Kinniment, Aron Lajko, Seraphina Nix, Lucas Sato, William Saunders, Maksym Taran, Ben West, and Elizabeth Barnes. RE-Bench: Evaluating frontier AI R&D capabilities of language model agents against human experts. arXiv preprint arXiv:2411.15114, 2024.",
      "url": "https://arxiv.org/abs/2411.15114",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Cross-family",
        "Learning",
        "Infrastructure"
      ],
      "category": "Benchmarks › Cross-family AI research and evaluation",
      "sourcePage": 48,
      "refPage": 75,
      "placements": [
        {
          "type": "table",
          "where": "Table 10",
          "page": 48,
          "family": "Cross-family",
          "path": "Benchmarks › Cross-family AI research and evaluation",
          "label": "RE-Bench",
          "level": null
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        },
        {
          "type": "text",
          "where": "§7.4.3",
          "page": 45,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.3 Logic, RTL, and Physical Design"
        }
      ],
      "citekey": "rebench2024",
      "task": "Automate ML research engineering",
      "protocol": "Compare agents and human experts under matched time budgets",
      "evidence": "Task improvement versus time and monetary cost",
      "fieldsFrom": 10
    },
    {
      "ref": 276,
      "name": "ToolMaker",
      "title": "LLM Agents Making Agent Tools",
      "authors": "Georg Wolflein, Dyke Ferber, Daniel Truhn, Ognjen Arandjelovic, and Jakob Nikolas Kather",
      "year": 2025,
      "citation": "Georg Wolflein, Dyke Ferber, Daniel Truhn, Ognjen Arandjelovic, and Jakob Nikolas Kather. LLM agents making agent tools. arXiv preprint arXiv:2502.11705, 2025.",
      "url": "https://arxiv.org/abs/2502.11705",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L2"
      ],
      "level": "L2",
      "basis": "chapter",
      "families": [
        "Inference"
      ],
      "category": "Available primitives (P) › Reusable tool construction",
      "sourcePage": 25,
      "refPage": 76,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 6",
          "page": 25,
          "level": null,
          "boundary": true,
          "path": "Available primitives (P) › Reusable tool construction",
          "label": "ToolMaker"
        },
        {
          "type": "text",
          "where": "§5.1",
          "page": 25,
          "level": "L2",
          "family": null,
          "path": "§5.1 Formalization and evaluation of AI-defined search spaces"
        },
        {
          "type": "text",
          "where": "§7.2.2",
          "page": 41,
          "level": null,
          "family": "Inference",
          "path": "§7.2.2 Agent, Tool, and Library Design"
        }
      ],
      "citekey": "toolmaker2025"
    },
    {
      "ref": 277,
      "name": "LAPS",
      "title": "Leveraging Language to Learn Program Abstractions and Search Heuristics",
      "authors": "Catherine Wong, Kevin Ellis, Joshua B. Tenenbaum, and Jacob Andreas",
      "year": 2021,
      "citation": "Catherine Wong, Kevin Ellis, Joshua B. Tenenbaum, and Jacob Andreas. Leveraging language to learn program abstractions and search heuristics. arXiv preprint arXiv:2106.11053, 2021.",
      "url": "https://arxiv.org/abs/2106.11053",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L2"
      ],
      "level": "L2",
      "basis": "table",
      "families": [
        "Inference"
      ],
      "category": "Available primitives (P)",
      "sourcePage": 26,
      "refPage": 76,
      "placements": [
        {
          "type": "table",
          "where": "Table 4",
          "page": 26,
          "level": "L2",
          "family": null,
          "path": "Available primitives (P)",
          "label": "LAPS"
        },
        {
          "type": "figure",
          "where": "Figure 6",
          "page": 25,
          "level": "L2",
          "path": "Available primitives (P) › Program-library construction",
          "label": "LAPS"
        },
        {
          "type": "text",
          "where": "§5.1",
          "page": 25,
          "level": "L2",
          "family": null,
          "path": "§5.1 Formalization and evaluation of AI-defined search spaces"
        },
        {
          "type": "text",
          "where": "§7.2.2",
          "page": 41,
          "level": null,
          "family": "Inference",
          "path": "§7.2.2 Agent, Tool, and Library Design"
        }
      ],
      "fieldsFrom": 4,
      "tableLabel": "LAPS",
      "artifact": "language-grounded abstractions",
      "human": "base DSL, program syntax, language annotations",
      "citekey": "laps2021"
    },
    {
      "ref": 278,
      "name": "ChatEDA",
      "title": "ChatEDA: A Large Language Model Powered Autonomous Agent for EDA",
      "authors": "Haoyuan Wu, Zhuolun He, Xinyun Zhang, Xufeng Yao, Su Zheng, Haisheng Zheng, and Bei Yu",
      "year": 2024,
      "citation": "Haoyuan Wu, Zhuolun He, Xinyun Zhang, Xufeng Yao, Su Zheng, Haisheng Zheng, and Bei Yu. ChatEDA: A large language model powered autonomous agent for EDA. IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems, 43(10):3184--3197, 2024.",
      "url": "https://arxiv.org/abs/2308.10204",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Infrastructure"
      ],
      "category": "AI4AI Infrastructure › Logic, RTL, and physical design",
      "sourcePage": 37,
      "refPage": 76,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Infrastructure",
          "path": "AI4AI Infrastructure › Logic, RTL, and physical design",
          "label": "ChatEDA",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.4.3",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.3 Logic, RTL, and Physical Design"
        }
      ],
      "citekey": "chateda2023"
    },
    {
      "ref": 279,
      "name": "AutoGen",
      "title": "AutoGen: Enabling next-Gen LLM Applications via Multi-Agent Conversation",
      "authors": "Qingyun Wu, Gagan Bansal, Jieyu Zhang, Yiran Wu, Beibin Li, Erkang Zhu, Li Jiang, Xiaoyun Zhang, Shaokun Zhang, Jiale Liu, Ahmed Hassan Awadallah, Ryen W White, Doug Burger, and Chi Wang",
      "year": 2023,
      "citation": "Qingyun Wu, Gagan Bansal, Jieyu Zhang, Yiran Wu, Beibin Li, Erkang Zhu, Li Jiang, Xiaoyun Zhang, Shaokun Zhang, Jiale Liu, Ahmed Hassan Awadallah, Ryen W White, Doug Burger, and Chi Wang. AutoGen: Enabling next-gen LLM applications via multi-agent conversation. arXiv preprint arXiv:2308.08155, 2023.",
      "url": "https://arxiv.org/abs/2308.08155",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 21,
      "refPage": 76,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§4.6",
          "page": 22,
          "level": "L1",
          "family": null,
          "path": "§4.6 Direction Quality, Failure Modes, and the Boundary with L2"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "autogen2023"
    },
    {
      "ref": 280,
      "name": "Meta-Rewarding LMs",
      "title": "Meta-Rewarding Language Models: Self-Improving Alignment with LLM-as-a-Meta-Judge",
      "authors": "Tianhao Wu, Weizhe Yuan, Olga Golovneva, Jing Xu, Yuandong Tian, Jiantao Jiao, Jason Weston, and Sainbayar Sukhbaatar",
      "year": 2024,
      "citation": "Tianhao Wu, Weizhe Yuan, Olga Golovneva, Jing Xu, Yuandong Tian, Jiantao Jiao, Jason Weston, and Sainbayar Sukhbaatar. Meta-rewarding language models: Self-improving alignment with LLM-as-a-meta-judge. arXiv preprint arXiv:2407.19594, 2024.",
      "url": "https://arxiv.org/abs/2407.19594",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "figure",
      "families": [
        "Learning"
      ],
      "category": "Generated objectives and self-evaluation › Self-reward and meta-judgment",
      "sourcePage": 32,
      "refPage": 76,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Generated objectives and self-evaluation › Self-reward and meta-judgment",
          "label": "Meta-Rewarding LMs"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Parameter-updating post-training",
          "label": "Meta-Rewarding LMs",
          "starred": true
        },
        {
          "type": "text",
          "where": "§6.4",
          "page": 34,
          "level": "L3",
          "family": null,
          "path": "§6.4 Generated Objectives and Self-Evaluation"
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "metarewarding2024"
    },
    {
      "ref": 281,
      "name": "Evolutionary computation in the era of large language model: Survey and roadmap",
      "title": "Evolutionary Computation in the Era of Large Language Model: Survey and Roadmap",
      "authors": "Xingyu Wu, Sheng-hao Wu, Jibin Wu, Liang Feng, and Kay Chen Tan",
      "year": 2025,
      "citation": "Xingyu Wu, Sheng-hao Wu, Jibin Wu, Liang Feng, and Kay Chen Tan. Evolutionary computation in the era of large language model: Survey and roadmap. IEEE Transactions on Evolutionary Computation, 29(2):534--554, 2025.",
      "url": "https://arxiv.org/abs/2401.10034",
      "urlSource": "openalex-arxiv",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 8,
      "refPage": 76,
      "placements": [],
      "citekey": "wu2024evollm"
    },
    {
      "ref": 282,
      "name": "Agentless",
      "title": "Agentless: Demystifying LLM-Based Software Engineering Agents",
      "authors": "Chunqiu Steven Xia, Yinlin Deng, Soren Dunn, and Lingming Zhang",
      "year": 2024,
      "citation": "Chunqiu Steven Xia, Yinlin Deng, Soren Dunn, and Lingming Zhang. Agentless: Demystifying LLM-based software engineering agents. arXiv preprint arXiv:2407.01489, 2024.",
      "url": "https://arxiv.org/abs/2407.01489",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 21,
      "refPage": 76,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "agentless2024"
    },
    {
      "ref": 283,
      "name": "LESS",
      "title": "LESS: Selecting Influential Data for Targeted Instruction Tuning",
      "authors": "Mengzhou Xia, Sadhika Malladi, Suchin Gururangan, Sanjeev Arora, and Danqi Chen",
      "year": 2024,
      "citation": "Mengzhou Xia, Sadhika Malladi, Suchin Gururangan, Sanjeev Arora, and Danqi Chen. LESS: Selecting influential data for targeted instruction tuning. arXiv preprint arXiv:2402.04333, 2024.",
      "url": "https://arxiv.org/abs/2402.04333",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Data"
      ],
      "category": "Selection and mixing",
      "sourcePage": 43,
      "refPage": 76,
      "placements": [
        {
          "type": "table",
          "where": "Table 8",
          "page": 43,
          "level": "L1",
          "family": "Data",
          "path": "Selection and mixing",
          "label": "LESS"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Data",
          "path": "AI4AI Data › Selection and curation",
          "label": "LESS",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.3.1",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.1 Selection and Curation"
        }
      ],
      "fieldsFrom": 8,
      "tableLabel": "LESS",
      "artifact": "gradient-similarity scores; subset",
      "human": "target examples, warm-up recipe",
      "citekey": "less2024"
    },
    {
      "ref": 284,
      "name": "Hierarchical generative NAS",
      "title": "Towards Neural Architecture Search through Hierarchical Generative Modeling",
      "authors": "Lichuan Xiang, ukasz Dudziak, Mohamed S. Abdelfattah, Abhinav Mehrotra, Nicholas Donald Lane, and Hongkai Wen",
      "year": 2024,
      "citation": "Lichuan Xiang, ukasz Dudziak, Mohamed S. Abdelfattah, Abhinav Mehrotra, Nicholas Donald Lane, and Hongkai Wen. Towards neural architecture search through hierarchical generative modeling. In Proceedings of the 41st International Conference on Machine Learning, volume 235 of Proceedings of Machine Learning Research, pages 54236--54254, 2024.",
      "url": "https://doi.org/10.82444/warw.33887605",
      "urlSource": "datacite",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L2"
      ],
      "level": "L2",
      "basis": "table",
      "families": [
        "Learning"
      ],
      "category": "Candidate representations (R)",
      "sourcePage": 26,
      "refPage": 76,
      "placements": [
        {
          "type": "table",
          "where": "Table 4",
          "page": 26,
          "level": "L2",
          "family": null,
          "path": "Candidate representations (R)",
          "label": "Hierarchical generative NAS"
        },
        {
          "type": "figure",
          "where": "Figure 6",
          "page": 25,
          "level": "L2",
          "path": "Candidate representations (R) › Learned encodings and abstractions",
          "label": "Hierarchical generative NAS"
        },
        {
          "type": "text",
          "where": "§5.1",
          "page": 25,
          "level": "L2",
          "family": null,
          "path": "§5.1 Formalization and evaluation of AI-defined search spaces"
        },
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "fieldsFrom": 4,
      "tableLabel": "Hierarchical generative NAS",
      "artifact": "G-VAE cell embeddings; proxy-clustered cell families",
      "human": "architectural template, cell space, zero-cost proxies",
      "citekey": "hgmnas2024"
    },
    {
      "ref": 285,
      "name": "How far are AI scientists from changing the world?",
      "title": "How Far Are AI Scientists from Changing the World?",
      "authors": "Qiujie Xie, Yixuan Weng, Minjun Zhu, Fuchen Shen, Shulin Huang, Zhen Lin, Jiahui Zhou, Zilan Mao, Zijie Yang, Linyi Yang, Jian Wu, and Yue Zhang",
      "year": 2025,
      "citation": "Qiujie Xie, Yixuan Weng, Minjun Zhu, Fuchen Shen, Shulin Huang, Zhen Lin, Jiahui Zhou, Zilan Mao, Zijie Yang, Linyi Yang, Jian Wu, and Yue Zhang. How far are AI scientists from changing the world? arXiv preprint arXiv:2507.23276, 2025.",
      "url": "https://arxiv.org/abs/2507.23276",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 22,
      "refPage": 76,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 22,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "worldaiscientists2025"
    },
    {
      "ref": 286,
      "name": "DoReMi",
      "title": "DoReMi: Optimizing Data Mixtures Speeds up Language Model Pretraining",
      "authors": "Sang Michael Xie, Hieu Pham, Xuanyi Dong, Nan Du, Hanxiao Liu, Yifeng Lu, Percy Liang, Quoc V. Le, Tengyu Ma, and Adams Wei Yu",
      "year": 2023,
      "citation": "Sang Michael Xie, Hieu Pham, Xuanyi Dong, Nan Du, Hanxiao Liu, Yifeng Lu, Percy Liang, Quoc V. Le, Tengyu Ma, and Adams Wei Yu. DoReMi: Optimizing data mixtures speeds up language model pretraining. In Advances in Neural Information Processing Systems, volume 36, pages 69798--69818, 2023.",
      "url": "https://arxiv.org/abs/2305.10429",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Data"
      ],
      "category": "Selection and mixing",
      "sourcePage": 43,
      "refPage": 76,
      "placements": [
        {
          "type": "table",
          "where": "Table 8",
          "page": 43,
          "level": "L1",
          "family": "Data",
          "path": "Selection and mixing",
          "label": "DoReMi"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Data",
          "path": "AI4AI Data › Selection and curation",
          "label": "DoReMi",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.3.1",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.1 Selection and Curation"
        }
      ],
      "fieldsFrom": 8,
      "tableLabel": "DoReMi",
      "artifact": "domain mixture weights",
      "human": "domain partition, reference model, excess-loss objective",
      "citekey": "doremi2023"
    },
    {
      "ref": 287,
      "name": "DSIR",
      "title": "Data Selection for Language Models via Importance Resampling",
      "authors": "Sang Michael Xie, Shibani Santurkar, Tengyu Ma, and Percy Liang",
      "year": 2023,
      "citation": "Sang Michael Xie, Shibani Santurkar, Tengyu Ma, and Percy Liang. Data selection for language models via importance resampling. arXiv preprint arXiv:2302.03169, 2023.",
      "url": "https://arxiv.org/abs/2302.03169",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "AI4AI Data › Selection and curation",
      "sourcePage": 37,
      "refPage": 76,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Data",
          "path": "AI4AI Data › Selection and curation",
          "label": "DSIR",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.3.1",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.1 Selection and Curation"
        }
      ],
      "citekey": "dsir2023"
    },
    {
      "ref": 288,
      "name": "OSWorld",
      "title": "OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments",
      "authors": "Tianbao Xie, Danyang Zhang, Jixuan Chen, Xiaochuan Li, Siheng Zhao, Ruisheng Cao, Toh Jing Hua, Zhoujun Cheng, Dongchan Shin, Fangyu Lei, Yitao Liu, Yiheng Xu, Shuyan Zhou, Silvio Savarese, Caiming Xiong, Victor Zhong, and Tao Yu",
      "year": 2024,
      "citation": "Tianbao Xie, Danyang Zhang, Jixuan Chen, Xiaochuan Li, Siheng Zhao, Ruisheng Cao, Toh Jing Hua, Zhoujun Cheng, Dongchan Shin, Fangyu Lei, Yitao Liu, Yiheng Xu, Shuyan Zhou, Silvio Savarese, Caiming Xiong, Victor Zhong, and Tao Yu. OSWorld: Benchmarking multimodal agents for open-ended tasks in real computer environments. arXiv preprint arXiv:2404.07972, 2024.",
      "url": "https://arxiv.org/abs/2404.07972",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Inference"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 21,
      "refPage": 76,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": null,
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§5.2",
          "page": 28,
          "level": null,
          "family": null,
          "path": "§5.2 Evaluation and Minimum Evidence for L2"
        },
        {
          "type": "text",
          "where": "§7.2.3",
          "page": 42,
          "level": null,
          "family": "Inference",
          "path": "§7.2.3 Test-Time Reasoning and Serving"
        }
      ],
      "citekey": "osworld2024"
    },
    {
      "ref": 289,
      "name": "Text2Reward",
      "title": "Text2Reward: Reward Shaping with Language Models for Reinforcement Learning",
      "authors": "Tianbao Xie, Siheng Zhao, Chen Henry Wu, Yitao Liu, Qian Luo, Victor Zhong, Yanchao Yang, and Tao Yu",
      "year": 2024,
      "citation": "Tianbao Xie, Siheng Zhao, Chen Henry Wu, Yitao Liu, Qian Luo, Victor Zhong, Yanchao Yang, and Tao Yu. Text2Reward: Reward shaping with language models for reinforcement learning. In International Conference on Learning Representations, 2024.",
      "url": "https://arxiv.org/abs/2309.11489",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "figure",
      "families": [
        "Learning"
      ],
      "category": "Generated objectives and self-evaluation › Executable reward design",
      "sourcePage": 32,
      "refPage": 77,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Generated objectives and self-evaluation › Executable reward design",
          "label": "Text2Reward"
        },
        {
          "type": "text",
          "where": "§6.4",
          "page": 34,
          "level": "L3",
          "family": null,
          "path": "§6.4 Generated Objectives and Self-Evaluation"
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "text2reward2023"
    },
    {
      "ref": 290,
      "name": "Evol-Instruct",
      "title": "WizardLM: Empowering Large Pre-Trained Language Models to Follow Complex Instructions",
      "authors": "Can Xu, Qingfeng Sun, Kai Zheng, Xiubo Geng, Pu Zhao, Jiazhan Feng, Chongyang Tao, Qingwei Lin, and Daxin Jiang",
      "year": 2024,
      "citation": "Can Xu, Qingfeng Sun, Kai Zheng, Xiubo Geng, Pu Zhao, Jiazhan Feng, Chongyang Tao, Qingwei Lin, and Daxin Jiang. WizardLM: Empowering large pre-trained language models to follow complex instructions. In The Twelfth International Conference on Learning Representations, 2024.",
      "url": "https://arxiv.org/abs/2304.12244",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "AI4AI Data › Augmentation, synthesis, and curricula",
      "sourcePage": 37,
      "refPage": 77,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Data",
          "path": "AI4AI Data › Augmentation, synthesis, and curricula",
          "label": "Evol-Instruct",
          "starred": true
        },
        {
          "type": "text",
          "where": "§7.3.2",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.2 Augmentation, Synthesis, and Curricula"
        }
      ],
      "citekey": "evolinstruct2023"
    },
    {
      "ref": 291,
      "name": "Magpie",
      "title": "Magpie: Alignment Data Synthesis from Scratch by Prompting Aligned LLMs with Nothing",
      "authors": "Zhangchen Xu, Fengqing Jiang, Luyao Niu, Yuntian Deng, Radha Poovendran, Yejin Choi, and Bill Yuchen Lin",
      "year": 2024,
      "citation": "Zhangchen Xu, Fengqing Jiang, Luyao Niu, Yuntian Deng, Radha Poovendran, Yejin Choi, and Bill Yuchen Lin. Magpie: Alignment data synthesis from scratch by prompting aligned LLMs with nothing. arXiv preprint arXiv:2406.08464, 2024.",
      "url": "https://arxiv.org/abs/2406.08464",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Data"
      ],
      "category": "AI4AI Data › Augmentation, synthesis, and curricula",
      "sourcePage": 37,
      "refPage": 77,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Data",
          "path": "AI4AI Data › Augmentation, synthesis, and curricula",
          "label": "Magpie",
          "starred": true
        },
        {
          "type": "text",
          "where": "§7.3.2",
          "page": 42,
          "level": null,
          "family": "Data",
          "path": "§7.3.2 Augmentation, Synthesis, and Curricula"
        }
      ],
      "citekey": "magpie2024"
    },
    {
      "ref": 292,
      "name": "The AI Scientist-v2",
      "title": "The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search",
      "authors": "Yutaro Yamada, Robert Tjarko Lange, Cong Lu, Shengran Hu, Chris Lu, Jakob Foerster, Jeff Clune, and David Ha",
      "year": 2025,
      "citation": "Yutaro Yamada, Robert Tjarko Lange, Cong Lu, Shengran Hu, Chris Lu, Jakob Foerster, Jeff Clune, and David Ha. The AI scientist-v2: Workshop-level automated scientific discovery via agentic tree search. arXiv preprint arXiv:2504.08066, 2025.",
      "url": "https://arxiv.org/abs/2504.08066",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1",
        "L3"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 21,
      "refPage": 77,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§6.5",
          "page": 35,
          "level": "L3",
          "family": null,
          "path": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 45,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "yamada2025scientistv2"
    },
    {
      "ref": 293,
      "name": "OPRO",
      "title": "Large Language Models as Optimizers",
      "authors": "Chengrun Yang, Xuezhi Wang, Yifeng Lu, Hanxiao Liu, Quoc V. Le, Denny Zhou, and Xinyun Chen",
      "year": 2024,
      "citation": "Chengrun Yang, Xuezhi Wang, Yifeng Lu, Hanxiao Liu, Quoc V. Le, Denny Zhou, and Xinyun Chen. Large language models as optimizers. In International Conference on Learning Representations, 2024.",
      "url": "https://arxiv.org/abs/2309.03409",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "figure",
      "families": [
        "Inference"
      ],
      "category": "Reflective histories › Textual gradients and critiques",
      "sourcePage": 17,
      "refPage": 77,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Reflective histories › Textual gradients and critiques",
          "label": "OPRO"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Inference",
          "path": "AI4AI Inference › Prompt and workflow optimization",
          "label": "OPRO",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§4.3",
          "page": 19,
          "level": "L1",
          "family": null,
          "path": "§4.3 Prompt, Pipeline, and Workflow Optimization"
        },
        {
          "type": "text",
          "where": "§7.2.1",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.1 Prompt and Workflow Optimization"
        }
      ],
      "citekey": "yang2024opro"
    },
    {
      "ref": 294,
      "name": "SWE-agent",
      "title": "SWE-Agent: Agent-Computer Interfaces Enable Automated Software Engineering",
      "authors": "John Yang, Carlos E. Jimenez, Alexander Wettig, Kilian Lieret, Shunyu Yao, Karthik Narasimhan, and Ofir Press",
      "year": 2024,
      "citation": "John Yang, Carlos E. Jimenez, Alexander Wettig, Kilian Lieret, Shunyu Yao, Karthik Narasimhan, and Ofir Press. SWE-agent: Agent-computer interfaces enable automated software engineering. arXiv preprint arXiv:2405.15793, 2024.",
      "url": "https://arxiv.org/abs/2405.15793",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 21,
      "refPage": 77,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "sweagent2024"
    },
    {
      "ref": 295,
      "name": "DDSAS",
      "title": "DDSAS: Dynamic and Differentiable Space-Architecture Search",
      "authors": "Longxing Yang, Yu Hu, Shun Lu, Zihao Sun, Jilin Mei, Yiming Zeng, Zhiping Shi, Yinhe Han, and Xiaowei Li",
      "year": 2021,
      "citation": "Longxing Yang, Yu Hu, Shun Lu, Zihao Sun, Jilin Mei, Yiming Zeng, Zhiping Shi, Yinhe Han, and Xiaowei Li. DDSAS: Dynamic and differentiable space-architecture search. In Proceedings of the 13th Asian Conference on Machine Learning, volume 157 of Proceedings of Machine Learning Research, pages 284--299, 2021.",
      "url": null,
      "urlSource": null,
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L2"
      ],
      "level": "L2",
      "basis": "table",
      "families": [
        "Learning"
      ],
      "category": "Available primitives (P)",
      "sourcePage": 26,
      "refPage": 77,
      "placements": [
        {
          "type": "table",
          "where": "Table 4",
          "page": 26,
          "level": "L2",
          "family": null,
          "path": "Available primitives (P)",
          "label": "DDSAS"
        },
        {
          "type": "figure",
          "where": "Figure 6",
          "page": 25,
          "level": "L2",
          "path": "Available primitives (P) › Neural operation selection",
          "label": "DDSAS"
        },
        {
          "type": "text",
          "where": "§5.1",
          "page": 24,
          "level": "L2",
          "family": null,
          "path": "§5.1 Formalization and evaluation of AI-defined search spaces"
        },
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "fieldsFrom": 4,
      "tableLabel": "DDSAS",
      "artifact": "dynamic binary edge–operation mask",
      "human": "fixed architecture graph, candidate operations, budgets",
      "citekey": "ddsas2021"
    },
    {
      "ref": 296,
      "name": "SciIntegrity-Bench",
      "title": "SciIntegrity-Bench: A Benchmark for Evaluating Academic Integrity in AI Scientist Systems",
      "authors": "Zonglin Yang, Xingtong Liu, and Xinyan Xu",
      "year": 2026,
      "citation": "Zonglin Yang, Xingtong Liu, and Xinyan Xu. SciIntegrity-Bench: A benchmark for evaluating academic integrity in AI scientist systems. arXiv preprint arXiv:2605.10246, 2026.",
      "url": "https://arxiv.org/abs/2605.10246",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Cross-family"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 22,
      "refPage": 77,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 22,
          "level": null,
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "sciintegrity2026"
    },
    {
      "ref": 297,
      "name": "Justice or prejudice? quantifying biases in LLM-as-a-judge",
      "title": "Justice or Prejudice? Quantifying Biases in LLM-as-a-Judge",
      "authors": "Jiayi Ye, Yanbo Wang, Yue Huang, Dongping Chen, Qihui Zhang, Nuno Moniz, Tian Gao, Werner Geyer, Chao Huang, Pin-Yu Chen, Nitesh V Chawla, and Xiangliang Zhang",
      "year": 2024,
      "citation": "Jiayi Ye, Yanbo Wang, Yue Huang, Dongping Chen, Qihui Zhang, Nuno Moniz, Tian Gao, Werner Geyer, Chao Huang, Pin-Yu Chen, Nitesh V Chawla, and Xiangliang Zhang. Justice or prejudice? Quantifying biases in LLM-as-a-judge. arXiv preprint arXiv:2410.02736, 2024.",
      "url": "https://arxiv.org/abs/2410.02736",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence",
      "sourcePage": 35,
      "refPage": 77,
      "placements": [
        {
          "type": "text",
          "where": "§6.5",
          "page": 35,
          "level": "L3",
          "family": null,
          "path": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "ye2024justice"
    },
    {
      "ref": 298,
      "name": "NAS-Bench-101",
      "title": "NAS-Bench-101: Towards Reproducible Neural Architecture Search",
      "authors": "Chris Ying, Aaron Klein, Esteban Real, Eric Christiansen, Kevin Murphy, and Frank Hutter",
      "year": 2019,
      "citation": "Chris Ying, Aaron Klein, Esteban Real, Eric Christiansen, Kevin Murphy, and Frank Hutter. NAS-Bench-101: Towards reproducible neural architecture search. arXiv preprint arXiv:1902.09635, 2019.",
      "url": "https://arxiv.org/abs/1902.09635",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "Experimental histories › Reproducible search replay",
      "sourcePage": 17,
      "refPage": 77,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": null,
          "path": "Experimental histories › Reproducible search replay",
          "label": "NAS-Bench-101"
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": null,
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§5.2",
          "page": 28,
          "level": null,
          "family": null,
          "path": "§5.2 Evaluation and Minimum Evidence for L2"
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "nasbench1012019"
    },
    {
      "ref": 299,
      "name": "BigNAS",
      "title": "BigNAS: Scaling up Neural Architecture Search with Big Single-Stage Models",
      "authors": "Jiahui Yu, Pengchong Jin, Hanxiao Liu, Gabriel Bender, Pieter-Jan Kindermans, Mingxing Tan, Thomas Huang, Xiaodan Song, Ruoming Pang, and Quoc V. Le",
      "year": 2020,
      "citation": "Jiahui Yu, Pengchong Jin, Hanxiao Liu, Gabriel Bender, Pieter-Jan Kindermans, Mingxing Tan, Thomas Huang, Xiaodan Song, Ruoming Pang, and Quoc V. Le. BigNAS: Scaling up neural architecture search with big single-stage models. In European Conference on Computer Vision, pages 702--717, 2020.",
      "url": "https://arxiv.org/abs/2003.11142",
      "urlSource": "openalex-arxiv",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§7.1.2 Architectures and Update Rules",
      "sourcePage": 38,
      "refPage": 77,
      "placements": [
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "bignas2020"
    },
    {
      "ref": 300,
      "name": "Towards automated kernel generation in the era of llms",
      "title": "Towards Automated Kernel Generation in the Era of Llms",
      "authors": "Yang Yu, Peiyu Zang, Chi Hsu Tsai, Haiming Wu, Yixin Shen, Jialing Zhang, Haoyu Wang, Zhiyou Xiao, Jingze Shi, Yuyu Luo, Wentao Zhang, Chunlei Men, Guang Liu, and Yonghua Lin",
      "year": 2026,
      "citation": "Yang Yu, Peiyu Zang, Chi Hsu Tsai, Haiming Wu, Yixin Shen, Jialing Zhang, Haoyu Wang, Zhiyou Xiao, Jingze Shi, Yuyu Luo, Wentao Zhang, Chunlei Men, Guang Liu, and Yonghua Lin. Towards automated kernel generation in the era of llms. In Diego Calvanese, editor, Proceedings of the Thirty-Fifth International Joint Conference on Artificial Intelligence, IJCAI-26, pages 8069--8077. International Joint Conferences on Artificial Intelligence Organization, August 2026.",
      "url": "https://arxiv.org/abs/2601.15727",
      "urlSource": "openalex-arxiv",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 8,
      "refPage": 77,
      "placements": [],
      "citekey": "kernelgen2026"
    },
    {
      "ref": 301,
      "name": "ChiPBench",
      "title": "ChipBench: A next-Step Benchmark for Evaluating LLM Performance in AI-Aided Chip Design",
      "authors": "Zhongkai Yu, Chenyang Zhou, Yichen Lin, Hejia Zhang, Haotian Ye, Junxia Cui, Zaifeng Pan, Jishen Zhao, and Yufei Ding",
      "year": 2026,
      "citation": "Zhongkai Yu, Chenyang Zhou, Yichen Lin, Hejia Zhang, Haotian Ye, Junxia Cui, Zaifeng Pan, Jishen Zhao, and Yufei Ding. ChipBench: A next-step benchmark for evaluating LLM performance in AI-aided chip design. arXiv preprint arXiv:2601.21448, 2026.",
      "url": "https://arxiv.org/abs/2601.21448",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Infrastructure"
      ],
      "category": "§7.4.3 Logic, RTL, and Physical Design",
      "sourcePage": 45,
      "refPage": 77,
      "placements": [
        {
          "type": "text",
          "where": "§7.4.3",
          "page": 45,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.3 Logic, RTL, and Physical Design"
        }
      ],
      "citekey": "chipbenchllm2026"
    },
    {
      "ref": 302,
      "name": "CRAFT",
      "title": "Craft: Customizing Llms by Creating and Retrieving from Specialized Toolsets",
      "authors": "Lifan Yuan, Yangyi Chen, Xingyao Wang, Yi R. Fung, Hao Peng, and Heng Ji",
      "year": 2024,
      "citation": "Lifan Yuan, Yangyi Chen, Xingyao Wang, Yi R. Fung, Hao Peng, and Heng Ji. Craft: Customizing llms by creating and retrieving from specialized toolsets. In International Conference on Learning Representations, volume 2024, pages 40097--40125, 2024.",
      "url": "https://arxiv.org/abs/2309.17428",
      "urlSource": "openalex-arxiv",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L2"
      ],
      "level": "L2",
      "basis": "table",
      "families": [
        "Inference"
      ],
      "category": "Available primitives (P)",
      "sourcePage": 26,
      "refPage": 78,
      "placements": [
        {
          "type": "table",
          "where": "Table 4",
          "page": 26,
          "level": "L2",
          "family": null,
          "path": "Available primitives (P)",
          "label": "CRAFT"
        },
        {
          "type": "table",
          "where": "Table 7",
          "page": 41,
          "level": "L2",
          "family": "Inference",
          "path": "Agent, tool, and library design",
          "label": "CRAFT"
        },
        {
          "type": "figure",
          "where": "Figure 6",
          "page": 25,
          "level": "L2",
          "path": "Available primitives (P) › Reusable tool construction",
          "label": "CRAFT"
        },
        {
          "type": "text",
          "where": "§5.1",
          "page": 25,
          "level": "L2",
          "family": null,
          "path": "§5.1 Formalization and evaluation of AI-defined search spaces"
        },
        {
          "type": "text",
          "where": "§7.2.2",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.2 Agent, Tool, and Library Design"
        }
      ],
      "fieldsFrom": 4,
      "tableLabel": "CRAFT",
      "artifact": "abstracted, validated, deduplicated tool library",
      "human": "task APIs, Python runtime, training tasks, validators",
      "citekey": "craft2024"
    },
    {
      "ref": 303,
      "name": "Self-Rewarding LMs",
      "title": "Self-Rewarding Language Models",
      "authors": "Weizhe Yuan, Richard Yuanzhe Pang, Kyunghyun Cho, Xian Li, Sainbayar Sukhbaatar, Jing Xu, and Jason Weston",
      "year": 2024,
      "citation": "Weizhe Yuan, Richard Yuanzhe Pang, Kyunghyun Cho, Xian Li, Sainbayar Sukhbaatar, Jing Xu, and Jason Weston. Self-rewarding language models. In Proceedings of the 41st International Conference on Machine Learning, volume 235 of Proceedings of Machine Learning Research, pages 57905--57923, 2024.",
      "url": "https://arxiv.org/abs/2401.10020",
      "urlSource": "arxiv-id",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3",
        "L2"
      ],
      "level": "L3",
      "basis": "table",
      "families": [
        "Learning"
      ],
      "category": "Generated objectives and self-evaluation",
      "sourcePage": 33,
      "refPage": 78,
      "placements": [
        {
          "type": "table",
          "where": "Table 5",
          "page": 33,
          "level": "L3",
          "family": null,
          "path": "Generated objectives and self-evaluation",
          "label": "Self-Rewarding LMs"
        },
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Generated objectives and self-evaluation › Self-reward and meta-judgment",
          "label": "Self-Rewarding LMs"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Parameter-updating post-training",
          "label": "Self-Rewarding LMs",
          "starred": true
        },
        {
          "type": "text",
          "where": "§5.3",
          "page": 29,
          "level": "L2",
          "family": null,
          "path": "§5.3 Composition with Direction and Evaluation Control"
        },
        {
          "type": "text",
          "where": "§6.4",
          "page": 34,
          "level": "L3",
          "family": null,
          "path": "§6.4 Generated Objectives and Self-Evaluation"
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "fieldsFrom": 5,
      "tableLabel": "Self-Rewarding LMs",
      "artifact": "responses, self-judgments, preference-training pairs",
      "human": "seed instruction data, judging prompt, training procedure",
      "citekey": "yuan2024selfrewarding"
    },
    {
      "ref": 304,
      "name": "From static templates to dynamic runtime graphs: A survey of workflow optimization for LLM agents",
      "title": "From Static Templates to Dynamic Runtime Graphs: A Survey of Workflow Optimization for LLM Agents",
      "authors": "Ling Yue, Kushal Raj Bhandari, Ching-Yun Ko, Dhaval Patel, Shuxin Lin, Nianjun Zhou, Jianxi Gao, Pin-Yu Chen, and Shaowu Pan",
      "year": 2026,
      "citation": "Ling Yue, Kushal Raj Bhandari, Ching-Yun Ko, Dhaval Patel, Shuxin Lin, Nianjun Zhou, Jianxi Gao, Pin-Yu Chen, and Shaowu Pan. From static templates to dynamic runtime graphs: A survey of workflow optimization for LLM agents. arXiv preprint arXiv:2603.22386, 2026.",
      "url": "https://arxiv.org/abs/2603.22386",
      "urlSource": "manuscript",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 8,
      "refPage": 78,
      "placements": [],
      "citekey": "yue2026workflow"
    },
    {
      "ref": 305,
      "name": "ToolLibGen",
      "title": "ToolLibGen: Scalable Automatic Tool Creation and Aggregation for LLM Reasoning",
      "authors": "Murong Yue, Zhiwei Liu, Liangwei Yang, Jianguo Zhang, Zuxin Liu, Haolin Chen, Ziyu Yao, Silvio Savarese, Caiming Xiong, Shelby Heinecke, and Huan Wang",
      "year": 2025,
      "citation": "Murong Yue, Zhiwei Liu, Liangwei Yang, Jianguo Zhang, Zuxin Liu, Haolin Chen, Ziyu Yao, Silvio Savarese, Caiming Xiong, Shelby Heinecke, and Huan Wang. ToolLibGen: Scalable automatic tool creation and aggregation for LLM reasoning. arXiv preprint arXiv:2510.07768, 2025.",
      "url": "https://arxiv.org/abs/2510.07768",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L2"
      ],
      "level": "L2",
      "basis": "figure",
      "families": [
        "Inference"
      ],
      "category": "Available primitives (P) › Reusable tool construction",
      "sourcePage": 25,
      "refPage": 78,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 6",
          "page": 25,
          "level": "L2",
          "path": "Available primitives (P) › Reusable tool construction",
          "label": "ToolLibGen"
        },
        {
          "type": "text",
          "where": "§5.1",
          "page": 25,
          "level": "L2",
          "family": null,
          "path": "§5.1 Formalization and evaluation of AI-defined search spaces"
        },
        {
          "type": "text",
          "where": "§7.2.2",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.2 Agent, Tool, and Library Design"
        }
      ],
      "citekey": "toollibgen2025"
    },
    {
      "ref": 306,
      "name": "TextGrad",
      "title": "TextGrad: Automatic ``Differentiation'' via Text",
      "authors": "Mert Yuksekgonul, Federico Bianchi, Joseph Boen, Sheng Liu, Zhi Huang, Carlos Guestrin, and James Zou",
      "year": 2024,
      "citation": "Mert Yuksekgonul, Federico Bianchi, Joseph Boen, Sheng Liu, Zhi Huang, Carlos Guestrin, and James Zou. TextGrad: Automatic ``differentiation'' via text. arXiv preprint arXiv:2406.07496, 2024.",
      "url": "https://arxiv.org/abs/2406.07496",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Inference"
      ],
      "category": "Reflective histories",
      "sourcePage": 18,
      "refPage": 78,
      "placements": [
        {
          "type": "table",
          "where": "Table 3",
          "page": 18,
          "level": "L1",
          "family": null,
          "path": "Reflective histories",
          "label": "TextGrad"
        },
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": "L1",
          "path": "Reflective histories › Textual gradients and critiques",
          "label": "TextGrad"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Inference",
          "path": "AI4AI Inference › Prompt and workflow optimization",
          "label": "TextGrad",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§4.3",
          "page": 19,
          "level": "L1",
          "family": null,
          "path": "§4.3 Prompt, Pipeline, and Workflow Optimization"
        },
        {
          "type": "text",
          "where": "§4.6",
          "page": 22,
          "level": "L1",
          "family": null,
          "path": "§4.6 Direction Quality, Failure Modes, and the Boundary with L2"
        },
        {
          "type": "text",
          "where": "§7.2.1",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.1 Prompt and Workflow Optimization"
        }
      ],
      "fieldsFrom": 3,
      "tableLabel": "TextGrad",
      "artifact": "editable component and targeted revision",
      "historyRead": "execution trace, loss, textual gradient",
      "citekey": "textgrad2024"
    },
    {
      "name": "KernelGenBench",
      "url": "https://arxiv.org/abs/2607.27231",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Infrastructure"
      ],
      "category": "§7.4.3 Logic, RTL, and Physical Design",
      "placements": [
        {
          "type": "text",
          "where": "§7.4.3",
          "page": 45,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.3 Logic, RTL, and Physical Design"
        }
      ],
      "ref": 307,
      "title": "KernelGenBench: Can LLMs and Agents Write Efficient Kernels Across Operator Sources and Hardware Platforms?",
      "authors": "Peiyu Zang, Jian Tao, Jialing Zhang, Yichen Yuan, Wentao Zhang, Guang Liu, and Yonghua Lin",
      "year": 2026,
      "citation": "Peiyu Zang, Jian Tao, Jialing Zhang, Yichen Yuan, Wentao Zhang, Guang Liu, and Yonghua Lin. Kernelgenbench: Can llms and agents write efficient kernels across operator sources and hardware platforms?, 2026.",
      "citekey": "zang2026kernelgenbench",
      "refPage": 78,
      "sourcePage": 45
    },
    {
      "ref": 308,
      "name": "surrogate NAS benchmarks",
      "title": "Surrogate NAS Benchmarks: Going beyond the Limited Search Spaces of Tabular NAS Benchmarks",
      "authors": "Arber Zela, Julien Niklas Siems, Lucas Zimmer, Jovita Lukasik, Margret Keuper, and Frank Hutter",
      "year": 2022,
      "citation": "Arber Zela, Julien Niklas Siems, Lucas Zimmer, Jovita Lukasik, Margret Keuper, and Frank Hutter. Surrogate NAS benchmarks: Going beyond the limited search spaces of tabular NAS benchmarks. In International Conference on Learning Representations, 2022.",
      "url": "https://arxiv.org/abs/2008.09777",
      "urlSource": "arxiv-id",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "Experimental histories › Reproducible search replay",
      "sourcePage": 17,
      "refPage": 78,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 4",
          "page": 17,
          "level": null,
          "path": "Experimental histories › Reproducible search replay",
          "label": "surrogate NAS benchmarks"
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": null,
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§5.2",
          "page": 28,
          "level": null,
          "family": null,
          "path": "§5.2 Evaluation and Minimum Evidence for L2"
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "surrogatebench2020"
    },
    {
      "ref": 309,
      "name": "Quiet-STaR",
      "title": "Quiet-STaR: Language Models Can Teach Themselves to Think before Speaking",
      "authors": "Eric Zelikman, Georges Harik, Yijia Shao, Varuna Jayasiri, Nick Haber, and Noah D. Goodman",
      "year": 2024,
      "citation": "Eric Zelikman, Georges Harik, Yijia Shao, Varuna Jayasiri, Nick Haber, and Noah D. Goodman. Quiet-STaR: Language models can teach themselves to think before speaking. arXiv preprint arXiv:2403.09629, 2024.",
      "url": "https://arxiv.org/abs/2403.09629",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "AI4AI Learning › Parameter-updating post-training",
      "sourcePage": 37,
      "refPage": 78,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Parameter-updating post-training",
          "label": "Quiet-STaR",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "quietstar2024"
    },
    {
      "ref": 310,
      "name": "STOP",
      "title": "Self-Taught Optimizer (STOP): Recursively Self-Improving Code Generation",
      "authors": "Eric Zelikman, Eliana Lorch, Lester Mackey, and Adam Tauman Kalai",
      "year": 2023,
      "citation": "Eric Zelikman, Eliana Lorch, Lester Mackey, and Adam Tauman Kalai. Self-taught optimizer (STOP): Recursively self-improving code generation. arXiv preprint arXiv:2310.02304, 2023.",
      "url": "https://arxiv.org/abs/2310.02304",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1",
        "L3"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Inference"
      ],
      "category": "AI4AI Inference › Parameter-free agent and tool design",
      "sourcePage": 37,
      "refPage": 78,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Inference",
          "path": "AI4AI Inference › Parameter-free agent and tool design",
          "label": "STOP",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.5",
          "page": 22,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§6.5",
          "page": 36,
          "level": "L3",
          "family": null,
          "path": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence"
        },
        {
          "type": "text",
          "where": "§7.2.2",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.2 Agent, Tool, and Library Design"
        }
      ],
      "citekey": "zelikman2023stop"
    },
    {
      "ref": 311,
      "name": "STaR",
      "title": "STaR: Bootstrapping Reasoning with Reasoning",
      "authors": "Eric Zelikman, Yuhuai Wu, Jesse Mu, and Noah D. Goodman",
      "year": 2022,
      "citation": "Eric Zelikman, Yuhuai Wu, Jesse Mu, and Noah D. Goodman. STaR: Bootstrapping reasoning with reasoning. arXiv preprint arXiv:2203.14465, 2022.",
      "url": "https://arxiv.org/abs/2203.14465",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Learning"
      ],
      "category": "Parameter-updating post-training",
      "sourcePage": 38,
      "refPage": 78,
      "placements": [
        {
          "type": "table",
          "where": "Table 6",
          "page": 38,
          "level": "L1",
          "family": "Learning",
          "path": "Parameter-updating post-training",
          "label": "STaR"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Parameter-updating post-training",
          "label": "STaR",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.4",
          "page": 20,
          "level": "L1",
          "family": null,
          "path": "§4.4 Reflection, Memory, and Search over Trajectories"
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "fieldsFrom": 6,
      "tableLabel": "STaR",
      "artifact": "rationales and rationalizations",
      "human": "seed rationales, answer key, fine-tuning recipe",
      "citekey": "star2022"
    },
    {
      "ref": 312,
      "name": "Darwin Gödel Machine",
      "title": "Darwin Godel Machine: Open-Ended Evolution of Self-Improving Agents",
      "authors": "Jenny Zhang, Shengran Hu, Cong Lu, Robert Tjarko Lange, and Jeff Clune",
      "year": 2025,
      "citation": "Jenny Zhang, Shengran Hu, Cong Lu, Robert Tjarko Lange, and Jeff Clune. Darwin godel machine: Open-ended evolution of self-improving agents. arXiv preprint arXiv:2505.22954, 2025.",
      "url": "https://arxiv.org/abs/2505.22954",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1",
        "L3"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Inference"
      ],
      "category": "AI4AI Inference › Parameter-free agent and tool design",
      "sourcePage": 37,
      "refPage": 78,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Inference",
          "path": "AI4AI Inference › Parameter-free agent and tool design",
          "label": "Darwin Gödel Machine",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.5",
          "page": 22,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§6.5",
          "page": 36,
          "level": "L3",
          "family": null,
          "path": "§6.5 Adaptive Oversight, Robustness, and Recursive Evidence"
        },
        {
          "type": "text",
          "where": "§7.2.2",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.2 Agent, Tool, and Library Design"
        }
      ],
      "citekey": "zhang2025dgm"
    },
    {
      "ref": 313,
      "name": "AFlow",
      "title": "AFlow: Automating Agentic Workflow Generation",
      "authors": "Jiayi Zhang, Jinyu Xiang, Zhaoyang Yu, Fengwei Teng, Xiong-Hui Chen, Jiaqi Chen, Mingchen Zhuge, Xin Cheng, Sirui Hong, Jinlin Wang, Bingnan Zheng, Bang Liu, Yuyu Luo, and Chenglin Wu",
      "year": 2025,
      "citation": "Jiayi Zhang, Jinyu Xiang, Zhaoyang Yu, Fengwei Teng, Xiong-Hui Chen, Jiaqi Chen, Mingchen Zhuge, Xin Cheng, Sirui Hong, Jinlin Wang, Bingnan Zheng, Bang Liu, Yuyu Luo, and Chenglin Wu. AFlow: Automating agentic workflow generation. In International Conference on Learning Representations (ICLR), 2025.",
      "url": "https://arxiv.org/abs/2410.10762",
      "urlSource": "arxiv-id",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Inference"
      ],
      "category": "AI4AI Inference › Parameter-free agent and tool design",
      "sourcePage": 37,
      "refPage": 78,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Inference",
          "path": "AI4AI Inference › Parameter-free agent and tool design",
          "label": "AFlow",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.2.2",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.2 Agent, Tool, and Library Design"
        }
      ],
      "citekey": "aflow2025"
    },
    {
      "ref": 314,
      "name": "GenRM",
      "title": "Generative Verifiers: Reward Modeling as next-Token Prediction",
      "authors": "Lunjun Zhang, Arian Hosseini, Hritik Bansal, Seyed Mehran Kazemi, Aviral Kumar, and Rishabh Agarwal",
      "year": 2025,
      "citation": "Lunjun Zhang, Arian Hosseini, Hritik Bansal, Seyed Mehran Kazemi, Aviral Kumar, and Rishabh Agarwal. Generative verifiers: Reward modeling as next-token prediction. In International Conference on Learning Representations, 2025.",
      "url": "https://arxiv.org/abs/2408.15240",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "table",
      "families": [
        "Inference"
      ],
      "category": "Executable evaluation artifacts",
      "sourcePage": 33,
      "refPage": 78,
      "placements": [
        {
          "type": "table",
          "where": "Table 5",
          "page": 33,
          "level": "L3",
          "family": null,
          "path": "Executable evaluation artifacts",
          "label": "GenRM"
        },
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Executable evaluation artifacts › Learned verifiers and process critics",
          "label": "GenRM"
        },
        {
          "type": "text",
          "where": "§6.2",
          "page": 32,
          "level": "L3",
          "family": null,
          "path": "§6.2 Executable Evaluation Artifacts"
        },
        {
          "type": "text",
          "where": "§7.2.3",
          "page": 41,
          "level": null,
          "family": "Inference",
          "path": "§7.2.3 Test-Time Reasoning and Serving"
        }
      ],
      "fieldsFrom": 5,
      "tableLabel": "GenRM",
      "artifact": "generative verifier that judges correctness as tokens",
      "human": "verification demonstrations, supervised task corpus",
      "citekey": "genrm2024"
    },
    {
      "ref": 315,
      "name": "Understanding the importance of evolutionary search in automated heuristic design with large language models",
      "title": "Understanding the Importance of Evolutionary Search in Automated Heuristic Design with Large Language Models",
      "authors": "Rui Zhang, Fei Liu, Xi Lin, Zhenkun Wang, Zhichao Lu, and Qingfu Zhang",
      "year": 2024,
      "citation": "Rui Zhang, Fei Liu, Xi Lin, Zhenkun Wang, Zhichao Lu, and Qingfu Zhang. Understanding the importance of evolutionary search in automated heuristic design with large language models. arXiv preprint arXiv:2407.10873, 2024.",
      "url": "https://arxiv.org/abs/2407.10873",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Infrastructure"
      ],
      "category": "§4.2 Evolutionary Program Improvement",
      "sourcePage": 18,
      "refPage": 79,
      "placements": [
        {
          "type": "text",
          "where": "§4.2",
          "page": 18,
          "level": "L1",
          "family": null,
          "path": "§4.2 Evolutionary Program Improvement"
        },
        {
          "type": "text",
          "where": "§4.6",
          "page": 22,
          "level": "L1",
          "family": null,
          "path": "§4.6 Direction Quality, Failure Modes, and the Boundary with L2"
        },
        {
          "type": "text",
          "where": "§7.4.1",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.1 Kernels and Tensor Programs"
        }
      ],
      "citekey": "evosearchheuristics2024"
    },
    {
      "ref": 316,
      "name": "TEMPERA",
      "title": "TEMPERA: Test-Time Prompting via Reinforcement Learning",
      "authors": "Tianjun Zhang, Xuezhi Wang, Denny Zhou, Dale Schuurmans, and Joseph E. Gonzalez",
      "year": 2022,
      "citation": "Tianjun Zhang, Xuezhi Wang, Denny Zhou, Dale Schuurmans, and Joseph E. Gonzalez. TEMPERA: Test-time prompting via reinforcement learning. arXiv preprint arXiv:2211.11890, 2022.",
      "url": "https://arxiv.org/abs/2211.11890",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Inference"
      ],
      "category": "§4.3 Prompt, Pipeline, and Workflow Optimization",
      "sourcePage": 19,
      "refPage": 79,
      "placements": [
        {
          "type": "text",
          "where": "§4.3",
          "page": 19,
          "level": "L1",
          "family": null,
          "path": "§4.3 Prompt, Pipeline, and Workflow Optimization"
        },
        {
          "type": "text",
          "where": "§7.2.1",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.1 Prompt and Workflow Optimization"
        }
      ],
      "citekey": "tempera2022"
    },
    {
      "ref": 317,
      "name": "Revisiting OPRO",
      "title": "Revisiting OPRO: The Limitations of Small-Scale LLMs as Optimizers",
      "authors": "Tuo Zhang, Jinyue Yuan, and Salman Avestimehr",
      "year": 2024,
      "citation": "Tuo Zhang, Jinyue Yuan, and Salman Avestimehr. Revisiting OPRO: The limitations of small-scale LLMs as optimizers. arXiv preprint arXiv:2405.10276, 2024.",
      "url": "https://arxiv.org/abs/2405.10276",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Inference"
      ],
      "category": "§4.3 Prompt, Pipeline, and Workflow Optimization",
      "sourcePage": 19,
      "refPage": 79,
      "placements": [
        {
          "type": "text",
          "where": "§4.3",
          "page": 19,
          "level": "L1",
          "family": null,
          "path": "§4.3 Prompt, Pipeline, and Workflow Optimization"
        },
        {
          "type": "text",
          "where": "§7.2.1",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.1 Prompt and Workflow Optimization"
        }
      ],
      "citekey": "revisitingopro2024"
    },
    {
      "name": "EvalResearchBench",
      "url": "https://arxiv.org/abs/2610.04184",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Cross-family"
      ],
      "category": "Benchmarks › Cross-family AI research and evaluation",
      "placements": [
        {
          "type": "table",
          "where": "Table 10",
          "page": 48,
          "family": "Cross-family",
          "path": "Benchmarks › Cross-family AI research and evaluation",
          "label": "EvalResearchBench",
          "level": null
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "ref": 318,
      "title": "EvalResearchBench: Can AI Agents Build Their Own Feedback for Recursive Self-Improvement?",
      "authors": "Yaolun Zhang, Tianyi Xu, Yujie Zhao, Jishen Zhao, Qingyun Wu, and Huazheng Wang",
      "year": 2026,
      "citation": "Yaolun Zhang, Tianyi Xu, Yujie Zhao, Jishen Zhao, Qingyun Wu, and Huazheng Wang. Evalresearchbench: Can ai agents build their own feedback for recursive self-improvement?, 2026.",
      "citekey": "zhang2026evalresearchbench",
      "refPage": 79,
      "task": "Construct reliable executable evaluators",
      "protocol": "Select or synthesize tasks, implement graders, and pilot within budgets; freeze for independent assessment",
      "evidence": "Score/rank agreement and execution cost",
      "fieldsFrom": 10,
      "sourcePage": 48
    },
    {
      "ref": 319,
      "name": "NOAH",
      "title": "Neural Prompt Search",
      "authors": "Yuanhan Zhang, Kaiyang Zhou, and Ziwei Liu",
      "year": 2022,
      "citation": "Yuanhan Zhang, Kaiyang Zhou, and Ziwei Liu. Neural prompt search. arXiv preprint arXiv:2206.04673, 2022.",
      "url": "https://arxiv.org/abs/2206.04673",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§7.1.3 Parameter-Updating Post-Training",
      "sourcePage": 39,
      "refPage": 79,
      "placements": [
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "noah2022"
    },
    {
      "ref": 320,
      "name": "ExpeL",
      "title": "ExpeL: LLM Agents Are Experiential Learners",
      "authors": "Andrew Zhao, Daniel Huang, Quentin Xu, Matthieu Lin, Yong-Jin Liu, and Gao Huang",
      "year": 2023,
      "citation": "Andrew Zhao, Daniel Huang, Quentin Xu, Matthieu Lin, Yong-Jin Liu, and Gao Huang. ExpeL: LLM agents are experiential learners. arXiv preprint arXiv:2308.10144, 2023.",
      "url": "https://arxiv.org/abs/2308.10144",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§4.4 Reflection, Memory, and Search over Trajectories",
      "sourcePage": 20,
      "refPage": 79,
      "placements": [
        {
          "type": "text",
          "where": "§4.4",
          "page": 20,
          "level": "L1",
          "family": null,
          "path": "§4.4 Reflection, Memory, and Search over Trajectories"
        },
        {
          "type": "text",
          "where": "§4.6",
          "page": 22,
          "level": "L1",
          "family": null,
          "path": "§4.6 Direction Quality, Failure Modes, and the Boundary with L2"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "expel2023"
    },
    {
      "ref": 321,
      "name": "Automated LLM Speedrunning",
      "title": "The Automated LLM Speedrunning Benchmark: Reproducing NanoGPT Improvements",
      "authors": "Bingchen Zhao, Despoina Magka, Minqi Jiang, Xian Li, Roberta Raileanu, Tatiana Shavrina, Jean-Christophe Gagnon-Audet, Kelvin Niu, Shagun Sodhani, Michael Shvartsman, Andrei Lupu, Alisia Lupidi, Edan Toledo, Karen Hambardzumyan, Martin Josifoski, Thomas Foster, Lucia Cipolina-Kun, Abhishek Charnalia, Derek Dunfield, Alexander H. Miller, Oisin Mac Aodha, Jakob Foerster, and Yoram Bachrach",
      "year": 2025,
      "citation": "Bingchen Zhao, Despoina Magka, Minqi Jiang, Xian Li, Roberta Raileanu, Tatiana Shavrina, Jean-Christophe Gagnon-Audet, Kelvin Niu, Shagun Sodhani, Michael Shvartsman, Andrei Lupu, Alisia Lupidi, Edan Toledo, Karen Hambardzumyan, Martin Josifoski, Thomas Foster, Lucia Cipolina-Kun, Abhishek Charnalia, Derek Dunfield, Alexander H. Miller, Oisin Mac Aodha, Jakob Foerster, and Yoram Bachrach. The automated LLM speedrunning benchmark: Reproducing NanoGPT improvements. In Advances in Neural Information Processing Systems, volume 38, 2025.",
      "url": "https://arxiv.org/abs/2506.22419",
      "urlSource": "arxiv-id",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§7.1.3 Parameter-Updating Post-Training",
      "sourcePage": 39,
      "refPage": 79,
      "placements": [
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "citekey": "speedrunning2025"
    },
    {
      "ref": 322,
      "name": "MT-Bench judge",
      "title": "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena",
      "authors": "Lianmin Zheng, Wei-Lin Chiang, Ying Sheng, Siyuan Zhuang, Zhanghao Wu, Yonghao Zhuang, Zi Lin, Zhuohan Li, Dacheng Li, Eric P. Xing, Hao Zhang, Joseph E. Gonzalez, and Ion Stoica",
      "year": 2023,
      "citation": "Lianmin Zheng, Wei-Lin Chiang, Ying Sheng, Siyuan Zhuang, Zhanghao Wu, Yonghao Zhuang, Zi Lin, Zhuohan Li, Dacheng Li, Eric P. Xing, Hao Zhang, Joseph E. Gonzalez, and Ion Stoica. Judging LLM-as-a-judge with MT-Bench and chatbot arena. arXiv preprint arXiv:2306.05685, 2023.",
      "url": "https://arxiv.org/abs/2306.05685",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3",
        "L2"
      ],
      "level": "L3",
      "basis": "figure",
      "families": [
        "Cross-family"
      ],
      "category": "Learned preference evaluation and model judges › General-purpose model judges",
      "sourcePage": 32,
      "refPage": 79,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Learned preference evaluation and model judges › General-purpose model judges",
          "label": "MT-Bench judge"
        },
        {
          "type": "text",
          "where": "§5.3",
          "page": 29,
          "level": "L2",
          "family": null,
          "path": "§5.3 Composition with Direction and Evaluation Control"
        },
        {
          "type": "text",
          "where": "§6.3",
          "page": 32,
          "level": "L3",
          "family": null,
          "path": "§6.3 Learned Preference Evaluation and Model Judges"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "zheng2023judge"
    },
    {
      "ref": 323,
      "name": "Ansor",
      "title": "Ansor: Generating High-Performance Tensor Programs for Deep Learning",
      "authors": "Lianmin Zheng, Chengfan Jia, Minmin Sun, Zhao Wu, Cody Hao Yu, Ameer Haj-Ali, Yida Wang, Jun Yang, Danyang Zhuo, Koushik Sen, Joseph E. Gonzalez, and Ion Stoica",
      "year": 2020,
      "citation": "Lianmin Zheng, Chengfan Jia, Minmin Sun, Zhao Wu, Cody Hao Yu, Ameer Haj-Ali, Yida Wang, Jun Yang, Danyang Zhuo, Koushik Sen, Joseph E. Gonzalez, and Ion Stoica. Ansor: Generating high-performance tensor programs for deep learning. In 14th USENIX Symposium on Operating Systems Design and Implementation (OSDI 20), pages 863--879, 2020.",
      "url": "https://arxiv.org/abs/2006.06762",
      "urlSource": "arxiv-id",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Infrastructure"
      ],
      "category": "Algorithms, kernels, and tensor programs",
      "sourcePage": 45,
      "refPage": 79,
      "placements": [
        {
          "type": "table",
          "where": "Table 9",
          "page": 45,
          "level": "L1",
          "family": "Infrastructure",
          "path": "Algorithms, kernels, and tensor programs",
          "label": "Ansor"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Infrastructure",
          "path": "AI4AI Infrastructure › Kernels and tensor programs",
          "label": "Ansor",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.4.1",
          "page": 44,
          "level": null,
          "family": "Infrastructure",
          "path": "§7.4.1 Kernels and Tensor Programs"
        }
      ],
      "fieldsFrom": 9,
      "tableLabel": "Ansor",
      "artifact": "sketch annotations: tiles, unrolling",
      "human": "sketch rules, schedule space, tests",
      "citekey": "ansor2020"
    },
    {
      "ref": 324,
      "name": "From automation to autonomy: A survey on large language models in scientific discovery",
      "title": "From Automation to Autonomy: A Survey on Large Language Models in Scientific Discovery",
      "authors": "Tianshi Zheng, Zheye Deng, Hong Ting Tsang, Weiqi Wang, Jiaxin Bai, Zihao Wang, and Yangqiu Song",
      "year": 2025,
      "citation": "Tianshi Zheng, Zheye Deng, Hong Ting Tsang, Weiqi Wang, Jiaxin Bai, Zihao Wang, and Yangqiu Song. From automation to autonomy: A survey on large language models in scientific discovery. In Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing, pages 17733--17750, 2025.",
      "url": "https://arxiv.org/abs/2505.13259",
      "urlSource": "arxiv-id",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 5,
      "refPage": 79,
      "placements": [],
      "citekey": "zheng2025automation"
    },
    {
      "name": "BenchBench",
      "url": "https://arxiv.org/abs/2603.20807",
      "urlSource": "manuscript",
      "kind": "Benchmark",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Cross-family"
      ],
      "category": "§7.5 Research Workflows and Shared Evaluation",
      "placements": [
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "ref": 325,
      "title": "BenchBench: Benchmarking Automated Benchmark Generation",
      "authors": "Yandan Zheng, Haoran Luo, Zhenghong Lin, Wenjin Liu, and Luu Anh Tuan",
      "year": 2026,
      "citation": "Yandan Zheng, Haoran Luo, Zhenghong Lin, Wenjin Liu, and Luu Anh Tuan. Benchbench: Benchmarking automated benchmark generation, 2026.",
      "citekey": "zheng2026benchbench",
      "refPage": 79,
      "sourcePage": 46
    },
    {
      "ref": 326,
      "name": "LLM4EDA",
      "title": "LLM4EDA: Emerging Progress in Large Language Models for Electronic Design Automation",
      "authors": "Ruizhe Zhong, Xingbo Du, Shixiong Kai, Zhentao Tang, Siyuan Xu, Hui-Ling Zhen, Jianye Hao, Qiang Xu, Mingxuan Yuan, and Junchi Yan",
      "year": 2023,
      "citation": "Ruizhe Zhong, Xingbo Du, Shixiong Kai, Zhentao Tang, Siyuan Xu, Hui-Ling Zhen, Jianye Hao, Qiang Xu, Mingxuan Yuan, and Junchi Yan. LLM4EDA: Emerging progress in large language models for electronic design automation. arXiv preprint arXiv:2401.12224, 2023.",
      "url": "https://arxiv.org/abs/2401.12224",
      "urlSource": "manuscript",
      "kind": "Reference",
      "annotated": false,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [],
      "category": "Contextual reference",
      "sourcePage": 8,
      "refPage": 79,
      "placements": [],
      "citekey": "zhong2023llm4eda"
    },
    {
      "ref": 327,
      "name": "MemoryBank",
      "title": "MemoryBank: Enhancing Large Language Models with Long-Term Memory",
      "authors": "Wanjun Zhong, Lianghong Guo, Qiqi Gao, He Ye, and Yanlin Wang",
      "year": 2023,
      "citation": "Wanjun Zhong, Lianghong Guo, Qiqi Gao, He Ye, and Yanlin Wang. MemoryBank: Enhancing large language models with long-term memory. arXiv preprint arXiv:2305.10250, 2023.",
      "url": "https://arxiv.org/abs/2305.10250",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§4.4 Reflection, Memory, and Search over Trajectories",
      "sourcePage": 20,
      "refPage": 79,
      "placements": [
        {
          "type": "text",
          "where": "§4.4",
          "page": 20,
          "level": "L1",
          "family": null,
          "path": "§4.4 Reflection, Memory, and Search over Trajectories"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "memorybank2023"
    },
    {
      "ref": 328,
      "name": "AutoPEFT",
      "title": "AutoPEFT: Automatic Configuration Search for Parameter-Efficient Fine-Tuning",
      "authors": "Han Zhou, Xingchen Wan, Ivan Vulic, and Anna Korhonen",
      "year": 2024,
      "citation": "Han Zhou, Xingchen Wan, Ivan Vulic, and Anna Korhonen. AutoPEFT: Automatic configuration search for parameter-efficient fine-tuning. Transactions of the Association for Computational Linguistics, 12:525--542, 2024.",
      "url": "https://arxiv.org/abs/2301.12132",
      "urlSource": "arxiv-id",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Learning"
      ],
      "category": "Adaptation and compression",
      "sourcePage": 38,
      "refPage": 80,
      "placements": [
        {
          "type": "table",
          "where": "Table 6",
          "page": 38,
          "level": "L1",
          "family": "Learning",
          "path": "Adaptation and compression",
          "label": "AutoPEFT"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Parameter-updating post-training",
          "label": "AutoPEFT",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.1.3",
          "page": 39,
          "level": null,
          "family": "Learning",
          "path": "§7.1.3 Parameter-Updating Post-Training"
        }
      ],
      "fieldsFrom": 6,
      "tableLabel": "AutoPEFT",
      "artifact": "adapter types, sizes, insertion layers",
      "human": "adapter space, performance and parameter cost",
      "citekey": "autopeft2024"
    },
    {
      "ref": 329,
      "name": "Memento-Skills",
      "title": "Memento-Skills: Let Agents Design Agents",
      "authors": "Huichi Zhou, Siyuan Guo, Anjie Liu, Zhongwei Yu, Ziqin Gong, Bowen Zhao, Zhixun Chen, Menglong Zhang, Yihang Chen, Jinsong Li, Runyu Yang, Qiangbin Liu, Xinlei Yu, Jianmin Zhou, Na Wang, Chunyang Sun, and Jun Wang",
      "year": 2026,
      "citation": "Huichi Zhou, Siyuan Guo, Anjie Liu, Zhongwei Yu, Ziqin Gong, Bowen Zhao, Zhixun Chen, Menglong Zhang, Yihang Chen, Jinsong Li, Runyu Yang, Qiangbin Liu, Xinlei Yu, Jianmin Zhou, Na Wang, Chunyang Sun, and Jun Wang. Memento-skills: Let agents design agents. arXiv preprint arXiv:2603.18743, 2026.",
      "url": "https://arxiv.org/abs/2603.18743",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L2"
      ],
      "level": "L2",
      "basis": "figure",
      "families": [
        "Inference"
      ],
      "category": "Available primitives (P) › Skill repertoire construction",
      "sourcePage": 25,
      "refPage": 80,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 6",
          "page": 25,
          "level": "L2",
          "path": "Available primitives (P) › Skill repertoire construction",
          "label": "Memento-Skills"
        },
        {
          "type": "text",
          "where": "§5.1",
          "page": 25,
          "level": "L2",
          "family": null,
          "path": "§5.1 Formalization and evaluation of AI-defined search spaces"
        },
        {
          "type": "text",
          "where": "§7.2.2",
          "page": 41,
          "level": null,
          "family": "Inference",
          "path": "§7.2.2 Agent, Tool, and Library Design"
        }
      ],
      "citekey": "mementoskills2026"
    },
    {
      "ref": 330,
      "name": "Self-Discover",
      "title": "Self-Discover: Large Language Models Self-Compose Reasoning Structures",
      "authors": "Pei Zhou, Jay Pujara, Xiang Ren, Xinyun Chen, Heng-Tze Cheng, Quoc V. Le, Ed H. Chi, Denny Zhou, Swaroop Mishra, and Huaixiu Steven Zheng",
      "year": 2024,
      "citation": "Pei Zhou, Jay Pujara, Xiang Ren, Xinyun Chen, Heng-Tze Cheng, Quoc V. Le, Ed H. Chi, Denny Zhou, Swaroop Mishra, and Huaixiu Steven Zheng. Self-discover: Large language models self-compose reasoning structures. arXiv preprint arXiv:2402.03620, 2024.",
      "url": "https://arxiv.org/abs/2402.03620",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Inference"
      ],
      "category": "Test-time reasoning and serving",
      "sourcePage": 41,
      "refPage": 80,
      "placements": [
        {
          "type": "table",
          "where": "Table 7",
          "page": 41,
          "level": "L1",
          "family": "Inference",
          "path": "Test-time reasoning and serving",
          "label": "Self-Discover"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Inference",
          "path": "AI4AI Inference › Test-time reasoning and serving",
          "label": "Self-Discover",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.2.3",
          "page": 41,
          "level": null,
          "family": "Inference",
          "path": "§7.2.3 Test-Time Reasoning and Serving"
        }
      ],
      "fieldsFrom": 7,
      "tableLabel": "Self-Discover",
      "artifact": "chosen modules; reasoning structure",
      "human": "module library, selection rules, task metric",
      "citekey": "selfdiscover2024"
    },
    {
      "ref": 331,
      "name": "APE",
      "title": "Large Language Models Are Human-Level Prompt Engineers",
      "authors": "Yongchao Zhou, Andrei Ioan Muresanu, Ziwen Han, Keiran Paster, Silviu Pitis, Harris Chan, and Jimmy Ba",
      "year": 2023,
      "citation": "Yongchao Zhou, Andrei Ioan Muresanu, Ziwen Han, Keiran Paster, Silviu Pitis, Harris Chan, and Jimmy Ba. Large language models are human-level prompt engineers. In International Conference on Learning Representations, 2023.",
      "url": "https://arxiv.org/abs/2211.01910",
      "urlSource": "arxiv-id",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "table",
      "families": [
        "Inference"
      ],
      "category": "Prompt and workflow optimization",
      "sourcePage": 41,
      "refPage": 80,
      "placements": [
        {
          "type": "table",
          "where": "Table 7",
          "page": 41,
          "level": "L1",
          "family": "Inference",
          "path": "Prompt and workflow optimization",
          "label": "APE"
        },
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Inference",
          "path": "AI4AI Inference › Prompt and workflow optimization",
          "label": "APE",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.3",
          "page": 19,
          "level": "L1",
          "family": null,
          "path": "§4.3 Prompt, Pipeline, and Workflow Optimization"
        },
        {
          "type": "text",
          "where": "§7.2.1",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.1 Prompt and Workflow Optimization"
        }
      ],
      "fieldsFrom": 7,
      "tableLabel": "APE",
      "artifact": "candidate instructions; final pick",
      "human": "proposal prompt, output format, task metric",
      "citekey": "zhou2023ape"
    },
    {
      "ref": 332,
      "name": "JudgeLM",
      "title": "JudgeLM: Fine-Tuned Large Language Models Are Scalable Judges",
      "authors": "Lianghui Zhu, Xinggang Wang, and Xinlong Wang",
      "year": 2023,
      "citation": "Lianghui Zhu, Xinggang Wang, and Xinlong Wang. JudgeLM: Fine-tuned large language models are scalable judges. arXiv preprint arXiv:2310.17631, 2023.",
      "url": "https://arxiv.org/abs/2310.17631",
      "urlSource": "manuscript",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L3"
      ],
      "level": "L3",
      "basis": "figure",
      "families": [
        "Cross-family"
      ],
      "category": "Learned preference evaluation and model judges › General-purpose model judges",
      "sourcePage": 32,
      "refPage": 80,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 8",
          "page": 32,
          "level": "L3",
          "path": "Learned preference evaluation and model judges › General-purpose model judges",
          "label": "JudgeLM"
        },
        {
          "type": "text",
          "where": "§6.3",
          "page": 32,
          "level": "L3",
          "family": null,
          "path": "§6.3 Learned Preference Evaluation and Model Judges"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "judgelm2023"
    },
    {
      "ref": 333,
      "name": "AI scientists fail without strong implementation capability",
      "title": "AI Scientists Fail without Strong Implementation Capability",
      "authors": "Minjun Zhu, Qiujie Xie, Yixuan Weng, Jian Wu, Zhen Lin, Linyi Yang, and Yue Zhang",
      "year": 2025,
      "citation": "Minjun Zhu, Qiujie Xie, Yixuan Weng, Jian Wu, Zhen Lin, Linyi Yang, and Yue Zhang. AI scientists fail without strong implementation capability. arXiv preprint arXiv:2506.01372, 2025.",
      "url": "https://arxiv.org/abs/2506.01372",
      "urlSource": "manuscript",
      "kind": "Discussed",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Cross-family"
      ],
      "category": "§4.5 Experiment-Driven Research Direction",
      "sourcePage": 21,
      "refPage": 80,
      "placements": [
        {
          "type": "text",
          "where": "§4.5",
          "page": 21,
          "level": "L1",
          "family": null,
          "path": "§4.5 Experiment-Driven Research Direction"
        },
        {
          "type": "text",
          "where": "§7.5",
          "page": 46,
          "level": null,
          "family": "Cross-family",
          "path": "§7.5 Research Workflows and Shared Evaluation"
        }
      ],
      "citekey": "implementationgap2025"
    },
    {
      "ref": 334,
      "name": "GPTSwarm",
      "title": "GPTSwarm: Language Agents as Optimizable Graphs",
      "authors": "Mingchen Zhuge, Wenyi Wang, Louis Kirsch, Francesco Faccio, Dmitrii Khizbullin, and Jurgen Schmidhuber",
      "year": 2024,
      "citation": "Mingchen Zhuge, Wenyi Wang, Louis Kirsch, Francesco Faccio, Dmitrii Khizbullin, and Jurgen Schmidhuber. GPTSwarm: Language agents as optimizable graphs. In Proceedings of the 41st International Conference on Machine Learning, volume 235 of Proceedings of Machine Learning Research, pages 62743--62767, 2024.",
      "url": "https://arxiv.org/abs/2402.16823",
      "urlSource": "arxiv-id",
      "kind": "Method",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Inference"
      ],
      "category": "AI4AI Inference › Parameter-free agent and tool design",
      "sourcePage": 37,
      "refPage": 80,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Inference",
          "path": "AI4AI Inference › Parameter-free agent and tool design",
          "label": "GPTSwarm",
          "starred": false
        },
        {
          "type": "text",
          "where": "§7.2.2",
          "page": 40,
          "level": null,
          "family": "Inference",
          "path": "§7.2.2 Agent, Tool, and Library Design"
        }
      ],
      "citekey": "gptswarm2024"
    },
    {
      "ref": 335,
      "name": "Auto-PyTorch",
      "title": "Auto-PyTorch: Multi-Fidelity MetaLearning for Efficient and Robust AutoDL",
      "authors": "Lucas Zimmer, Marius Lindauer, and Frank Hutter",
      "year": 2021,
      "citation": "Lucas Zimmer, Marius Lindauer, and Frank Hutter. Auto-PyTorch: Multi-fidelity MetaLearning for efficient and robust AutoDL. IEEE Transactions on Pattern Analysis and Machine Intelligence, 43(9):3079--3090, 2021.",
      "url": "https://arxiv.org/abs/2006.13799",
      "urlSource": "arxiv-id",
      "kind": "Discussed",
      "annotated": true,
      "levels": [],
      "level": null,
      "basis": null,
      "families": [
        "Learning"
      ],
      "category": "§7.1.1 Configurations and Training Pipelines",
      "sourcePage": 38,
      "refPage": 80,
      "placements": [
        {
          "type": "text",
          "where": "§7.1.1",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.1 Configurations and Training Pipelines"
        }
      ],
      "citekey": "autopytorch2021"
    },
    {
      "ref": 336,
      "name": "NAS-RL",
      "title": "Neural Architecture Search with Reinforcement Learning",
      "authors": "Barret Zoph and Quoc V. Le",
      "year": 2017,
      "citation": "Barret Zoph and Quoc V. Le. Neural architecture search with reinforcement learning. In International Conference on Learning Representations, 2017.",
      "url": "https://arxiv.org/abs/1611.01578",
      "urlSource": "arxiv-id",
      "kind": "Method",
      "annotated": true,
      "levels": [
        "L1"
      ],
      "level": "L1",
      "basis": "chapter",
      "families": [
        "Learning"
      ],
      "category": "AI4AI Learning › Architectures and update rules",
      "sourcePage": 37,
      "refPage": 80,
      "placements": [
        {
          "type": "figure",
          "where": "Figure 10",
          "page": 37,
          "family": "Learning",
          "path": "AI4AI Learning › Architectures and update rules",
          "label": "NAS-RL",
          "starred": false
        },
        {
          "type": "text",
          "where": "§4.1",
          "page": 16,
          "level": "L1",
          "family": null,
          "path": "§4.1 History-Conditioned Direction Selection"
        },
        {
          "type": "text",
          "where": "§7.1.2",
          "page": 38,
          "level": null,
          "family": "Learning",
          "path": "§7.1.2 Architectures and Update Rules"
        }
      ],
      "citekey": "zoph2017nas"
    }
  ]
};
