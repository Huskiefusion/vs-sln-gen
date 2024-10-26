# Visual Studio Project Generator for NodeJs

This project is now functional. The format required for your `config.json` file is shown below.
You can run the program with `--help` or `-h` to view the usage.

I am also looking to compile this into a standalone executable, so you don't have to run it with node. Unsure on the feasibility of that, we will see...

## Extra (but very important) Info

Run the program with `--help` or `-h` for additional info.

### Example File tree

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

Your config.json should look like:

```json
{"name":"Yahtzee",
"type":"C",
"source-files":["src/main.c", "src/yahtz.c"],
"header-files":["include/yahtz.h"],
"resource-files":["data/previous_game.txt"]}
```

After running the program, a new folder will be created in the current working directory of your terminal. **Please** make sure this folder does not already exist. The program *does not* check and will just write to an existing folder.

### Resources

I used [this](https://stackoverflow.com/questions/10802198/visual-studio-project-type-guids) handy VS UUID Reference from Drew Noakes on Stack Exchange.

See also: [This project](https://github.com/TheTerrarian03/VisualStudioTools) made using python by a friend.
Does some stuff mine doesn't.

Cheers! :D
