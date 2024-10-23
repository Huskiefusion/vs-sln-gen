# Visual Studio Project Generator for NodeJs

**THIS IS NOT CURRENTLY FUNCTIONING.**

It will soon be, and the end goal is integration with vscode in plugin form.

I am also looking to compile this into a standalone executable, so you don't have to run it with node. Unsure on the pheasability of that, we will see...

## Extra Info

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
