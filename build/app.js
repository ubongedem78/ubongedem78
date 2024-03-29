"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const md = require("markdown-it")({
    html: true, // Enable HTML tags in source
    breaks: true, // Convert '\n' in paragraphs into <br>
    linkify: true, // Autoconvert URL-like text to links
});
const fetchGitHubData_1 = require("./fetchGitHubData");
const githubUsername = "Ubongedem78";
const ProjectRepos = ["ShuttleQ", "TPSS_2023"];
const websiteUrl = "https://github.com/ubongedem78";
const twitterUrl = "https://twitter.com/usernameissnull";
const linkedinUrl = "https://linkedin.com/in/ubongedem78/";
function generateMarkdown() {
    return __awaiter(this, void 0, void 0, function* () {
        const websiteBadge = `[![Website Badge](https://img.shields.io/badge/-Website-3B7EBF?style=for-the-badge&logo=amp&logoColor=white)](${websiteUrl})`;
        const linkedinBadge = `[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-3B7EBF?style=for-the-badge&logo=Linkedin&logoColor=white)](${linkedinUrl})`;
        const twitterBadge = `[![Twitter Badge](https://img.shields.io/badge/-@usernameissnull-3B7EBF?style=for-the-badge&logo=x&logoColor=white)](${twitterUrl})`;
        const profileCountBadge = `![Profile Views Count Badge](https://komarev.com/ghpvc/?username=${githubUsername}&style=for-the-badge)`;
        const githubStatsCardDark = `[![GitHub-Stats-Card-Dark](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=FFF&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-dark-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-dark-mode-only)`;
        const githubStatsCardLight = `[![GitHub-Stats-Card-Light](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=474A4E&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-light-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-light-mode-only)`;
        const technologiesUsed = `
  <h3 align="left">Languages and Technologies Used:</h3>
  <a href="https://nodejs.org" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
      alt="nodejs"
      width="50"
      height="50"
    /> </a
  ><a href="https://expressjs.com" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
      alt="express"
      width="50"
      height="50"
    /> </a
  ><a
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    target="_blank"
    rel="noreferrer"
  >
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
      alt="javascript"
      width="50"
      height="50"
  /></a>
  <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
    <img
      src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
      alt="git"
      width="50"
      height="50"
    /> </a
  ><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
      alt="html5"
      width="50"
      height="50"
    /> </a
  ><a href="https://jestjs.io" target="_blank" rel="noreferrer">
    <img
      src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
      alt="jest"
      width="50"
      height="50"
    /> </a
  ><a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
      alt="mongodb"
      width="50"
      height="50"
  /></a>
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
      alt="typescript"
      width="50"
      height="50"
    /> </a
  ><a href="https://www.arduino.cc/" target="_blank" rel="noreferrer"
    ><img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/arduino/arduino-original-wordmark.svg"
      alt="arduino"
      width="50"
      height="50"
    /> </a
  ><a href="https://aws.amazon.com/" target="_blank" rel="noreferrer"
    ><img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg"
      alt="aws"
      width="50"
      height="50"
    /> </a
  ><a href="https://www.docker.com/" target="_blank" rel="noreferrer"
    ><img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
      alt="docker"
      width="50"
      height="50" /></a
  ><a href="https://www.rabbitmq.com/" target="_blank" rel="noreferrer"
    ><img
      src="https://www.rabbitmq.com/img/logo-rabbitmq.svg"
      alt="rabbitmq"
      width="50"
      height="50"
  /></a>
  <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
      alt="postgresql"
      width="50"
      height="50"
    />
  </a>
  <a
    href="https://github.com/features/actions"
    target="_blank"
    rel="noreferrer"
  >
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
      alt="github-actions"
      width="50"
      height="50"
    />
  </a>
  <a href="https://typeorm.io/" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/typeorm/typeorm/master/resources/logo_big.png"
      alt="typeorm"
      width="50"
      height="50"
    />
  </a>
  <a href="https://graphql.org" target="_blank" rel="noreferrer">
    <img
      src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
      alt="graphql"
      width="50"
      height="50"
  /></a>
  <a href="https://golang.org/" target="_blank" rel="noreferrer">
    <img
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg"
      alt="golang"
      width="50"
      height="50"
    />
  </a>
  `;
        const myCV = `[![Download My CV](https://img.shields.io/badge/-Download%20My%20CV-3B7EBF?style=for-the-badge&logo=amp&logoColor=white&color=007ACC)](https://docs.google.com/document/d/1yFys95xi4srG8z0SlhGkS3M98YNcWpr5XFwkGcC1HIE/edit?usp=sharing)`;
        const markdownText = `<div align="center">\n
  # Hi there, I'm Ubong Edem ✌🏻👋🏻

  I am a Backend Engineer with expertise building scalable applications with NodeJS. I have a fervor for conceptualizing and bringing to fruition, cutting-edge products designed to streamline processes, automate tasks, and elevate overall quality of life. I am focused on transforming ideas into impactful, user-centric experiences.\n

  ${myCV}\n

  ${technologiesUsed}\n

  \n
  ${githubStatsCardDark}\n
  ${githubStatsCardLight}\n

  </div>\n


  ## Projects

  Here are some of my projects that may or may not be pinned; Meanwhile, don't forget to have a look at my pinned projects directly below the Github-Stats-Card at the bottom:\n
\n
  ${yield (0, fetchGitHubData_1.fetchGitHubData)(ProjectRepos)}\n


  ## Quick Tips

  - 💬 How to reach me: DM [@usernameissnull](https://twitter.com/usernameissnull) on X (Twitter).\n
  - 📬 Where to find me: Send a game request on [LICHESS](https://lichess.org/@/wrapid78).\n
  - 📖 Book recommendations: [So Good They Can't Ignore You by Cal Newport](https://www.amazon.com/Good-They-Cant-Ignore-You/dp/1455509124) and [Atomic Habits by James Clear](https://bit.ly/45r1kBH).\n
  </details>\n
  \n
  ${websiteBadge} ${linkedinBadge} ${twitterBadge} ${profileCountBadge}\n

`;
        const result = md.render(markdownText);
        fs.writeFile("README.md", result, (error) => {
            if (error)
                throw new Error(`Something went wrong: ${error}.`);
            console.log(`✅ README.md file was succesfully generated.`);
        });
    });
}
generateMarkdown();
