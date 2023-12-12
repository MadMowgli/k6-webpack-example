# K6 Webpack Example
> This repo serves as example on how you should set up your project structure such that you can use Node.js modules in a k6 script


## General Information
This repo is the output of closely following the (official k6 guide)[https://k6.io/docs/using-k6/modules/] on how to use Node.js modules with k6.

### Project Structure
- `/dist`
	- This directory contains the webpacked k6 scripts, together with all its' dependencies
- `/src`
	- This directory contains the k6 script `HelloNode.js`, which uses a command from te `lodash` JS library to validate the inclusion of Node.js libraries in a k6 script
- `package.json`
	- This is the output of the `npm init -y` command. It defines the Node.js package.
- `package-lock.json`
	- Locks the dependency versions and gives the detailed dependency tree used in this Node.js project
- `webpack.config.js`
	- The configuration used for the webpack module. Taken from the [official documentation from k6](https://k6.io/docs/using-k6/modules/#configuring-webpack)


### Divergancy from the k6 tutorial
- The `HelloNode.js` doesn't exactly match the example scripts used in the k6 documentation. However, it serves the purpose.
	- It defines an array and `console.log` outputs the return value from a `lodash` command to verify that the Node.js import works
	- It makes a simgle http GET request to the `http://test.k6.io` URL to verify that the k6 part works. 


### Sources
- https://k6.io/docs/using-k6/http-requests/
- https://k6.io/docs/using-k6/modules/
- https://lodash.com/docs/4.17.15