const Projects = "<p> <h2> Academic Projects </h2> </p>\
                <p></p>\
                <p> <h3> Platforming Game </h3> </p>\
                <p> <h4> UC Santa Cruz </h4> </p>\
                <p> Built a video game using a free online game development engine called GDevelop.\
                 The game was built alongside a team of two other people.\
                 I led the team, built the second level and helped set up the GitHub link for the game.\
                 The game's source code is located on my old, personal GitHub <a href='https://github.com/Emperor-Chinohito/GDevelop-Game'>Emperor-Chinohito</a> </p>\
                <p> <h2> Other Projetcs </h2> </p> \
                <p> <h3> PJTerm - A Minimalist Linux Terminal Built with Qt6 </h3> </p>\
                <p> The source code can be found on <a href='https://github.com/PJ-004/PJTerm'>my GitHub</a>.\
                 This is a terminal that I built for Personal use using a guide by DonnieWest of Code Koalas.\
                 whose <a href='https://codekoalas.com/blog/build-your-own-minimal-terminal'>2017 blog helped me a lot with getting started.</a> \
                 The terminal was built in C++ and is minimalist to fit my workflow</p>\
                <p> <h3> Warning Collection Script </h3> </p>\
                <p> Developed a python script for a close relative that extracts the warnings from a System Verilog logfile. \
                 The script searches through a log file and extracts warning messages from them after looping through every line. \
                 This script required thorough knowledge of the python programming language. \
                 It also drastically improved the workflow of the employees by automating an otherwise tedious task.\
                 I am not at liberty to divulge the source code due to a non-disclosure agreement </p>\
                ";

function projectPage() {
    document.getElementById('body').innerHTML = Projects;
    document.getElementById('body').style.textAlign = 'justify';
}