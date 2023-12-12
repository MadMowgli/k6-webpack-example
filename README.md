# K6 Webpack Example
> This repo serves as example on how you should set up your project structure such that you can use Node.js modules in a k6 script

### Project Structure
- /dist
	- This directory contains the webpacked k6 scripts, together with all its' dependencies
- /src
	- This directory contains the k6 script `HelloNode.js`, which uses a command from te `lodash` JS library to validate the inclusion of Node.js libraries in a k6 script
- package.json
	- This is the output of the `npm init -y` command. It defines the Node.js package.
- package-lock.json
	- Locks the dependency versions and gives the detailed dependency tree used in this Node.js project
- webpack.config.js
	- The configuration used for the webpack module. Taken from the (official documentation from k6)[https://k6.io/docs/using-k6/modules/#configuring-webpack]

### Sources
- https://k6.io/docs/using-k6/http-requests/
- https://k6.io/docs/using-k6/modules/
- https://lodash.com/docs/4.17.15