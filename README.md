<<<<<<< HEAD
# yt_analysis
Youtube &amp; Twitter Analysis
=======
<p align="center">
 <img width="400px" src="https://github.com/TIGMINT/TIGMINT/raw/master/TIGMINT-logo.png" align="center" alt="TIGMINT" />
 <h2 align="center">TIGMINT : Twitter, Instagram and Geo-Tagging Media Intelligence</h2>
</p>

<p align="center">
 <a href="https://github.com/TIGMINT/TIGMINT/releases">
      <img alt="Releases" src="https://img.shields.io/github/v/release/tigmint/tigmint?include_prereleases&color=blueviolet" />
    </a>
    <a href="https://github.com/TIGMINT/TIGMINT/blob/master/LICENSE">
      <img alt="License" src="https://img.shields.io/github/license/tigmint/tigmint?color=orange" />
    </a>
 <a href="https://github.com/TIGMINT/TIGMINT/graphs/contributors">
      <img alt="Contributors" src="https://img.shields.io/badge/Contributors-9-green" />
    </a>
    <a href="https://github.com/TIGMINT/TIGMINT">
      <img src="https://img.shields.io/github/languages/count/tigmint/tigmint" />
    </a>
    <a href="https://github.com/TIGMINT/TIGMINT/network/members">
      <img alt="Forks" src="https://img.shields.io/github/forks/tigmint/tigmint?style=social" />
    </a>
    <a href="https://github.com/TIGMINT/TIGMINT/stargazers">
      <img alt="Github Stars" src="https://img.shields.io/github/stars/tigmint/tigmint?style=social" />
    </a>
  </p>
  
## Introduction

An **OSINT (Open Source Intelligence)** software framework with an objective of making cyber investigations more convinient by implementing abstraction mechanisms to hide the background technical complexity also bundling different analysis techniques for **social media Intelligence** together providing a simple intuitive web interface for the user to work with.

## Preview
![TIGMINT](https://github.com/TIGMINT/TIGMINT/blob/master/ReadMeImages/Screenshot%20(181).png)
### Modules
![Modules](https://github.com/TIGMINT/TIGMINT/blob/master/ReadMeImages/Screenshot%20from%202020-09-11%2012-17-33.png)
### Our Team
![Team](https://github.com/TIGMINT/TIGMINT/blob/master/ReadMeImages/Screenshot%20(172).png)
### Documentation
![Docs](https://github.com/TIGMINT/TIGMINT/blob/master/ReadMeImages/Screenshot%20(173).png)
### Account Finder
![Account Finder](https://github.com/TIGMINT/TIGMINT/blob/master/ReadMeImages/Screenshot%20(174).png)
### Twitter Analyser
![Twitter Analyser](https://github.com/TIGMINT/TIGMINT/blob/master/ReadMeImages/Screenshot%20(175).png)

## Working Tool Screenshots

![TIGMINT](https://github.com/TIGMINT/TIGMINT/blob/master/ReadMeImages/1.png)
![TIGMINT](https://github.com/TIGMINT/TIGMINT/blob/master/ReadMeImages/2.png)
![TIGMINT](https://github.com/TIGMINT/TIGMINT/blob/master/ReadMeImages/4.png)
![TIGMINT](https://github.com/TIGMINT/TIGMINT/blob/master/ReadMeImages/8.png)
![TIGMINT](https://github.com/TIGMINT/TIGMINT/blob/master/ReadMeImages/9.png)
![TIGMINT](https://github.com/TIGMINT/TIGMINT/blob/master/ReadMeImages/10.png)


## Local Setup

### Requirements
- Python 3.6;
- beautifulsoup4;
- Nodejs;
- matplotlib;
- pandas;
- NPM;
- nltk;

## Windows Setup Issues
For windows users, if the setup fails or application is redirecting to 404 error page always. You can verify the below steps.
1. Verify all the modules in requirements.txt are successfully installed using <b>pip3 install -r requirements.txt </b> Command . In windows you have to manually install wordcloud module based on your python version. <br>
[WordCloud module download Link](https://www.lfd.uci.edu/~gohlke/pythonlibs/#wordcloud) &nbsp;&nbsp;|&nbsp;&nbsp; [StackOverflow Help Thread](https://stackoverflow.com/questions/41409570/cant-install-wordcloud-in-python-anaconda) <br>
Ex: If you had python 3.6 installed, then you have to install <i></b>wordcloud‑1.8.0‑cp36‑cp36m‑win_amd64.whl</i></b> module from the above link. 
<br> After installing the wordcloud module, run command <b> pip install -r requirements.txt </b> again to check if all requirements are installed successfully.
2. Check if all Node requirements are installed using <b>npm install</b> command.

If you still had any problems please open a issue with module name, operating system, input and output and console log. We will try to fix the issue as soon as possible.

### Linux Meta-Analysis Requirment

```bash
sudo apt install exiftool
```
The above tool is required to retreive metadata from various file formats.

## Installing and running

**Git:**
```bash
git clone https://github.com/TIGMINT/TIGMINT
cd TIGMINT
pip3 install -r requirements.txt

npm install
node Api/server.js
```

## Using Docker

you can run with docker with this command

```
docker run --name tigmint -p 3000:3000 k1m0ch1/tigmint
```

and open the `http://localhost:3000`

or you can build the image by yourself with command

```
docker build -t tigmint .
```

## Contributors

[//]: contributor-faces

 <a href="https://github.com/Yajassardana"><img src="https://avatars0.githubusercontent.com/u/62782513?s=400&u=8f9cba3e81ba81ae4fbc2032926da55bc1bcc23c&v=4" title="Yajassardana" width="80" height="80"></a> <a href="https://github.com/kiranmuddam"><img src="https://avatars2.githubusercontent.com/u/26572836?s=400&u=81fb75089e21563554cf375f73030a44b69efae2&v=4" title="Kiran Babu Muddam" width="80" height="80"></a> <a href="https://github.com/kaustubhsh"><img src="https://avatars0.githubusercontent.com/u/37601331?s=400&u=1ae319dd3c0b399465bc90fb8948f80136fad164&v=4" title="kaustubhsh" width="80" height="80"></a>  <a href="https://github.com/Sumit-sah"><img src="https://avatars0.githubusercontent.com/u/67474183?s=400&v=4" title="Sumit-sah" width="80" height="80"></a>  <a href="https://github.com/Sakshi-25"><img src="https://avatars2.githubusercontent.com/u/49511150?s=400&u=a96a65bb47f7c65a27c246390d41ef8028017619&v=4" title="Sakshi-25" width="80" height="80"></a><a href="https://github.com/chaudharypawansohlot"><img src="https://avatars0.githubusercontent.com/u/67505465?s=460&u=6dfd7c5977d79eeae206169c42e798830877d549&v=4" title="Chaudhary Pawan sohlot" width="80" height="80"></a><a href="https://github.com/niSarg1910"><img src="https://avatars2.githubusercontent.com/u/50866039?s=460&v=4" title="Nisarg Shah" width="80" height="80"></a><a href="https://github.com/Rishabh-2802"><img src="https://avatars1.githubusercontent.com/u/63997779?s=460&u=c652b258d1c88eac6b995db4f159508bebe805c6&v=4" title="Rishabh Sharma
" width="80" height="80"></a><a href="https://github.com/k1m0ch1"><img src="https://avatars1.githubusercontent.com/u/5756522?s=460&v=4" title="Yahya F. Al Fatih
" width="80" height="80"></a>


## Note
Meta Analysis module is not yet integrated into the web application.

### Suggestions, Comments, Feedback
Feedback or new tool suggestions are extremely welcome!  Please feel free to submit a pull request or open an issue on github
>>>>>>> 40cc22827b82ede225a9fcc201df8fa86df992a1
