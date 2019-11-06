# Static Site Start

This is what Magic Lamp uses to start website developement so we are all using the same build process. This ensures that no matter who starts the project, we all have the same foundation.

## Getting Started

### Prerequisites

What things you need to install the software and how to install them

```
Node.js - https://nodejs.org/en/
NPM - https://www.npmjs.com/
npm-check-updates - https://www.npmjs.com/package/npm-check-updates
GIT - https://git-scm.com/
```

### Installing

Download or clone the following repository and place where you want to work on the files locally.

Open your command line or terminal and navigate to the folder from above.

```
cd ../../project/folder
```

Run npm init to update project.json. Just updated name for current project, press enter to keep the defaults for everything else. You can update the description in the project.json through your editor.

```
npm init
```

Then run npm install. You can ignore warnings at this point.

```
npm install
```

Once NPM is done doing its thing, you are going to check if anything is outdated using npm-check-updates.

```
ncu
```

If anything is outdated, run the following commands.

```
npm update
ncu -a
```

You should now have everything installed to get started on the static website.

## Helpful Resources

### Documentation

```
Susy - http://oddbird.net/susy/docs/
Breakpoint - http://breakpoint-sass.com/
```

### Helpful Sites

```
Favicon Generator - https://realfavicongenerator.net/
```

## Version

1.0.0