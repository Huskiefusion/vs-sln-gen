npx esbuild src/app.js  --bundle --outfile=bin/build.cjs \
--format=cjs --platform=node

# LINUX X64
npx pkg bin/build.cjs -t node*-linux-x64 -o bin/vspg

rm bin/build.cjs

# WINDOWS X64 | btw, i dont think this script works on Windows. But you could put this in a .bat
# npx pkg bin/build.cjs -t node*-win-x64

# MacOS X64
# npx pkg bin/build.cjs -t node*-macos-x64
# MacOS ARM64 (i think)
# npx pkg bin/build.cjs -t node*-macos-armv6