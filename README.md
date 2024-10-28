# Visual Studio Project Generator for NodeJs

This project is now functional. The format required for your `config.json` file is shown below.
You can run the program with `--help` or `-h` to view the usage.

If you wish to compile the program into a single executable and you are on Linux, take a peep at `esbuild.sh`. Even if you aren't on Linux, it shouldn't take much tinkering to get it to work with your OS. Once the program is compiled and the containing folder added to the `PATH`, you can run it with `vspg`. Feel free to rename or move the binary.

If you choose to the uncomiled program that you run with `node`, I would recommend adding it as a command with the `alias gen-proj="node PATH/TO/APP.JS"` option. I don't know the Windows version of it (I think it's the same for Mac but I don't know either).

## Extra (but very important) Info

Run the program with `--help` or `-h` for additional info.

**NOTE**

For the resource files in the project: You will need to update the paths within your code! Eventually there will be a configuration option that will mitigate the issue, but that time is not right now.

### Prerequisites

NodeJS (I use v23.1.0)

The project installed somewhere on your machine

**If you want to compile the binary:**

- Npx

- Npx Package: esbuild

- Npx Package: pkg

Changed the build method, now peep [this one](https://dev.to/midnqp/bundling-nodejs-into-single-executable-binary-l3g).
Also [this](https://www.npmjs.com/package/pkg/v/3.0.5) could be helpful.

~~Look at [this guide](https://nodejs.org/api/single-executable-applications.html)~~

### Example File tree

For a file tree that looks like this:

```plain
Yatzee/
 ├──build/
 │   └─yahtzee.o
 │
 ├─data/
 │   ├─previous_game.txt
 │   └─config.json (THIS IS FOR THE GENERATOR)
 │
 ├─src/
 │   ├─main.c
 │   ├─yahtz.c
 │   └─yahtz.h
 │
 └─Whatever else you choose to have
```

The corresponding config.json should look like:

```json
{"name":"Yahtzee",
"type":"C",
"source-files":["src/main.c", "src/yahtz.c"],
"header-files":["include/yahtz.h"],
"resource-files":["data/previous_game.txt"]}
```

The paths to source/header/res files are relative to the current working directory of the terminal.

After running the program, a new folder will be created in the current working directory of your terminal. **Please** make sure this folder does not already exist. The program *does not* check and will fail if the directory already exists.

The only type of project this has been tested is C/C++, others may not work.

### Resources

I used [this](https://stackoverflow.com/questions/10802198/visual-studio-project-type-guids) handy VS UUID Reference from Drew Noakes on Stack Exchange.

See also: [This project](https://github.com/TheTerrarian03/VisualStudioTools) made using python by a friend.
Does some stuff mine doesn't and probably won't.

Cheers! :D
