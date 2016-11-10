Node.js:
 - javscript server side runtime environment
 - cross platform
 - uses javascript as language

Package.json:
- npm init

NPM:
 - Node Package Manager
 - when we try to npm install it will check in package.json in the following way
 - ^ : ^4.x.y - looks for higher x versions
 - ~ : ~4.14.y - looks for higher y versions
 - nothing : 4.14.5 - exact versions
 - package manager for backend (eg: Express)

 Express:
 - used to build web applications

 Bower:
 - package manager for the web
 - flat package hierachy (doesn't install the underneath dependencies whicg it depends on)
 - works very similar to npm

 bower.json:
 - bower init

 .bowerrc:
 - mention the path under which folder the bower components has to install

 Gulp:
 - Automate the process like enforcing coding standards, injecting CSS and JS references, auto restarting our application
 - task manager for web projects
 - code based configuration
 - package based

.jscsrc & .jshintrc:
 - https://github.com/jonathanfmills/CodingStandards

 wiredep:
 - It is used to include the external js and css files into our index.html
 - For CSS file need to config 'overrides' in bower.json to inject the files
 - To ignore the common path we use 'ignorePath' in gulp wiredep options

 gulp-inject:
 - It is used to include our own js and css files into our index.html

 gulp-nodemon:
 - it is used to restart our server automatically when ever we change something in our code


 To start work on the project,
 -npm install
 -bower install