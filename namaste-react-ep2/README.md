This is the second episode of Namaste React course by Akshay Saini.

In this episode we saw how to create a git repository and push the code to github.

Then we learned about the NPM. Its a package manager and its full form is not node package manager. We also learned about about parcel. It is bundler which done numerous thing to build our react app and push it into the production. We also learned that the files which can be regenerated such node modules (database for npm), dist (which is created by parcel when we run the production build) and paece-cache should be put into gitignore file.

First we run the command npm init. It basically let our project use npm and create a package.json file. This package.json file is configuration for npm, it keeps track of all the versions of the packages we have installed. In this file the versions are written with prefix of ' ^ ' - caret or ' ~ ' tilde. If we add caret as a prefix then the minor update are installed automatically by npm when new updates are available. When we add tilde major updates are installed when available. Then we installed parcel as a dev dependencies. There two types of dependencies one is normal which is used in production and other are dev dependencies which are used in development. Parcel also has it own dependencies and these dependencies have there own dependencies. This is known as transitive dependencies. All these dependencies are in node modules folder and when we installed any package a package-lock.json file is created it has the code of the exact version of the package. Then we removed the cdn links of react and installed react and react-dom as dependencies with the help of npm. Then to run the app we use command npx parcel index.html here npx means execute npm and index.html is entry point and for production build the command is npx parcel build index.html. Parcel minify our code, it does bundle our code before putting it into production, it does image compression, it also creates a server, it also do hot module replacement - parcel has a file watching algorithm which is written in C++. When we edit or update something in any file and when we save it this hmr reloads the server. It also has a package known as browserslist. With the help of browserslist we can tell our on what versions of browsers to run.

Assignment 2

1. What is `NPM`?
   > npm is a package manager for node. We can install various packages which are available with the help of npm install <'name of the package'> command.

2) What is `Parcel/Webpack`? Why do we need it?

   > Parcel and Webpack are both bundlers that transform raw code into optimized files for web applications.

3) What is `.parcel-cache`

   > In parcel-cache folder information about our project is stored when parcel build it, so that it does not have to re parse and re analyse everything from scrath. It increases spped of the development.

4) What is `npx` ?

   > npx stands for npm execute. Its simply npm package runner.

5) What is difference between `dependencies` vs `devDependencies`

   > The main between the two is that devDependencies are required only in the development phase and dependencies are required in the production.

6) What is Tree Shaking?

   > Tree shaking is a JavaScript technique that removes unused code from a bundle of files to create smaller, more efficient, and faster-loading of web applications

7) What is Hot Module Replacement?

   > hot module replacement does the reloading of the page after we have edited or updated our code. This reduces time in development phase.

8) List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
   own words.

> Hot Module Replacement, Caching, Image optimization, Tree shaking, Bundling, Minification, Hashing.
>
> 1. hot module replacement does the reloading of the page after we have edited or updated our code. This reduces time in development phase.
> 2. Tree shaking is a JavaScript technique that removes unused code from a bundle of files to create smaller, more efficient, and faster-loading of web applications
> 3. Caching is the process of storing information about project when parcel builds it. so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It increases speed of the development.

9. What is `.gitignore`? What should we add and not add into it?

   > Gitignore is a file in which we add the name of file that we should not upload to git. These file are heavy and can be regenerated with the help of package.json file.

10. What is the difference between `package.json` and `package-lock.json`?

    > Package.json file is a configuration for NPM. Whatever packages our project needs, we install those packages using npm install '<packageName>'.
    > Package-lock.json locks the exact version of packages being used in the project.
    > In package. json we have information about generic version of installed packages whereas in package.lock.json we have information about the specific or exact version of installed packages.

11. Why should I not modify `package-lock.json`?

    > As package-lock.json file maintains the exact version of the packages in this file to make sure, everyone has the same version of packages installed on their computers so that it works perfectly fine on all computers. To ensure consistency and reproducibility across different environments, developers should be careful not to modify the package-lock. json file

12. What is `node_modules` ? Is it a good idea to push that on git?

    > node_modules is like a database for the npm. Node modules are very heavy so we should always put this in git ignore.

13. What is the `dist` folder?

    > It keeps the files minified for us. When bundler builds the app, the build goes into a folder called dist. The `/dist` folder contains the minimized and optimised version the source code.

14. What is `browserlists` ?
    > Browserslist is a tool that specifies which browsers should be supported/compatible in your frontend app. It makes our code compatible for a lot of browsers.
