let fs = require('fs');
let templates=require("../res/file_templates.js");
let uuids = require("../res/project-uuids.json");

main();

function main(){
	if(process.argv[2] == "--help" || process.argv[2] == "-h"){
		console.log("Usage: node app.js [path to config file]");
		console.log("If no path is supplied, the program will default to ./config.json relative to the current directory.");
		return;
	}
	// Check if a config file path was supplied
	if(!process.argv[2]) { console.log("Path to config not supplied, defaulting to ./config.json");}
	const configPath = (process.argv[2]) ? process.argv[2] : 'config.json';
	let projectConfig;
	let slnUUID = crypto.randomUUID()	; // Generate a UUID for the solution
	let projectUUID = crypto.randomUUID();	// Generate a UUID for the project

	try{ // Read the config file
		projectConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
		console.log("Configuration read successfully.");
	} catch (e){ // Error reading
		console.log("Error reading config file: " + e);
		return;
	}
	console.log(templates.generateVcxfilters(projectConfig["source-files"], projectConfig["header-files"], projectConfig["resource-files"]) );

	console.log(`Project name: ${projectConfig.name} || Project type: ${projectConfig.type} || Type UUID: ${uuids[projectConfig.type]}`);
}