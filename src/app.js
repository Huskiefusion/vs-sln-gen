let fs = require('fs');
let templates=require("../res/file_templates.js");
let uuids = require("../res/project-uuids.json");
crypto = require("crypto");
main();

function main(){
	if(process.argv[2] == "--help" || process.argv[2] == "-h"){
		console.log("Usage: node app.js [path to config file]");
		console.log("If no path is supplied, the program will default to ./config.json relative to the current directory.");
		return;
	}
	else if(process.argv[2]=="--list" || process.argv[2]=="-l"){
		console.log("Supported project types:");
		for (let key in uuids){
			console.log(`${key}: ${uuids[key]}`);
		}
		return;
	}
	// Check if a config file path was supplied
	if(!process.argv[2]) { console.log("Path to config not supplied, defaulting to ./config.json");}
	const configPath = (process.argv[2]) ? process.argv[2] : 'config.json';
	let projectConfig;
	let slnUUID = crypto.randomUUID().toUpperCase(); // Generate a UUID for the solution
	let projectUUID = crypto.randomUUID().toUpperCase();	// Generate a UUID for the project

	try{ // Read the config file
		projectConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
		console.log("Configuration read successfully.");
	} catch (e){ // Error reading
		console.log("Error reading config file: " + e);
		return;
	}
	slnContent = templates.generateSln(projectConfig.name, uuids[projectConfig.type], slnUUID, projectUUID);
	vcxprojContent = templates.generateVcxproj(projectConfig.name, projectUUID, projectConfig["source-files"], projectConfig["header-files"], projectConfig["resource-files"]);
	vcxprojFiltersContent = templates.generateVcxfilters(projectConfig["source-files"], projectConfig["header-files"], projectConfig["resource-files"]);
	
	fs.mkdirSync(projectConfig.name); fs.mkdirSync(`${projectConfig.name}/${projectConfig.name}`);
	fs.writeFile(`${projectConfig.name}/${projectConfig.name}.sln`, slnContent, (err)=> {
		if(err) { console.log("Error writing .sln file: " + err); }
		else { console.log("Solution file written successfully."); }
	})
	fs.writeFile(`${projectConfig.name}/${projectConfig.name}/${projectConfig.name}.vcxproj`, vcxprojContent, (err)=> {
		if(err) { console.log("Error writing .vcxproj file: " + err); }
		else { console.log("Project file written successfully."); }
	})
	fs.writeFile(`${projectConfig.name}/${projectConfig.name}/${projectConfig.name}.vcxproj.filters`, vcxprojFiltersContent, (err)=> {
		if(err) { console.log("Error writing .filters file: " + err); }
		else { console.log("Filter file written successfully."); }
	})

	// Copy source files to new directory
	projectConfig["source-files"].forEach((filepath) => {
		file=fileFromPath(filepath);
		fs.copyFile(filepath, `${projectConfig.name}/${projectConfig.name}/${file}`, (err) => {
			if(err) {throw err;}
	})});
	// Copy header files to new directory
	projectConfig["header-files"].forEach((filepath) => {
		file=fileFromPath(filepath);
		fs.copyFile(filepath, `${projectConfig.name}/${projectConfig.name}/${file}`, (err) => {
			if(err) {throw err;}
	})});
	// Copy resource files to new directory
	projectConfig["resource-files"].forEach((filepath) => {
		file=fileFromPath(filepath);
		fs.copyFile(filepath, `${projectConfig.name}/${projectConfig.name}/${file}`, (err) => {
			if(err) {throw err;}
	})});

	console.log(`Project name: ${projectConfig.name} || Project type: ${projectConfig.type} || Type UUID: ${uuids[projectConfig.type]}`);
}

function fileFromPath(path){
	return path.split("/").pop();
}