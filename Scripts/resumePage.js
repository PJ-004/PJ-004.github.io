const resume = "<p> <h2> Work Experience </h2> </p>\
                <p></p>\
                <p> <h3> July 2024 - Present </h3> </p>\
                <p> Interned at QuicHub Innovations India as a Software Developer. Migrated their data from the older urql to GraphQL.  \
                 I worked with React, TypeScript, Next.js, and GraphQL to help with designing their frontend software. \
                 Worked on a WhatsApp business account that can send and receive messages built using Go </p>\
                <p> <h3> July 2023 - August 2023 </h3> </p>\
                <p> Developed a python script for a close relative that extracts the warnings from a System Verilog logfile. \
                 The script searches through a log file and extracts warning messages from them after looping through every line. \
                 This script required thorough knowledge of the python programming language. \
                 It also drastically improved the workflow of the employees by automating an otherwise tedious task. </p>\
<p> <h2> Education </h2> </p> \
<p> <h3> September 2022 - Present | University of California - Santa Cruz </h3> </p>\
<p> Bachelor's of Science in Computer Engineering </p>\
<p> <h3> September 2012 - July 2022 | Delhi Public School - Bangalore East </h3> </p>\
<p> PCMC Stream </p>";

function resumePage() {
    document.getElementById('body').innerHTML = resume;
}