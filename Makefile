default:
	@echo "PLEASE SPECIFY A TARGET"
WINDOWS-X64: # Make sure you run this in Powershell!
	npx esbuild src\app.js  --bundle --outfile=bin\build.cjs --format=cjs --platform=node
	npx pkg bin/build.cjs -t node*-win-x64 -o bin/vspg.exe
LINUX-X64: # I haven't tested this one yet :/
	npx esbuild src/app.js  --bundle --outfile=bin/build.cjs --format=cjs --platform=node
	npx pkg bin/build.cjs -t node*-linux-x64 -o bin/vspg
	rm bin/build.cjs

# MacOS X64
# npx pkg bin/build.cjs -t node*-macos-x64
# MacOS ARM64 (i think)
# npx pkg bin/build.cjs -t node*-macos-armv6
