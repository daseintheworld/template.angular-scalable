# table of contents
- Environment
- Architecture

## Environment

### install npm
[npm download](https://nodejs.org/en/download/)

### install angular cli
npm install -g @angular/cli
[angular cli](https://cli.angular.io/)

## Architecture

### Module
<br>Referenced posts below

[Angular Folder Structure](https://medium.com/@motcowley/angular-folder-structure-d1809be95542)
[How to define a highly scalable folder structure for your Angular project](https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7)

* Shared Module 
shared resources placed
* Core Module 
application level services (session, http, intercepter, ...)
* Layout Module
application level layout components
* Modules: feature modules 
would be lazy loaded, includes login & home module

### Feature Module Structure

* components
* pages
* services
* store
* view models
* routing module