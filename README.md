# My Website
This is my personal website that I created using HTML/CSS and Javascript. I used to host another website on here before but that was just made to test my Javascript skills. The site is hosted through GitHub Pages and can be accessed [here](https://pranavjha.org/)

## Site Preview
![Website Picture](https://github.com/user-attachments/assets/7e1b1206-d61e-4884-9404-44114b900264)

## How it works
All the Javascript and WASM code is stored in the `/Scripts` directory. The main `index.html` file loads those scripts.

Since the C file uses the time.h library in C, I had to compile to a .js file so that it can use the C functions.

The website saw a 2x improvement in loading time after I added wasm. The drawback is that the size of the website increased to 9 MB.

## Hosting
This site was built using [GitHub Pages](https://pages.github.com/), however, I have now attached a domain name to it. The domain is hosted via Cloudflare.

## Usage
You can host the site on any server and it should load up on any browser. They should be compatible with wasm however.

## Build wasm file
You would need to use emscripten to build wasm. Get emscripten [here](https://emscripten.org/docs/getting_started/downloads.html)

Use this command in the Scripts/ directory:
`emcc js_time.c -o js_time.js   -s MODULARIZE=1   -s EXPORT_NAME="createModule"   -s EXPORTED_FUNCTIONS="['_curr_age','_get_date','_malloc','_free']"   -s EXPORTED_RUNTIME_METHODS="['ccall','cwrap','UTF8ToString']"`
