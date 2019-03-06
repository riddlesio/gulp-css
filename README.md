# Gulp CSS Task

This repository contains a reusable gulp task for CSS asset compilation

## Installation

Run the following npm command:

```
npm install @riddles/gulp-css --save-dev
```

## Usage

Add the following to your gulpfile:

```
const
    css     = require('@riddles/css-gulp-task'),
    gulp    = require('gulp'),
    read    = gulp.src.bind(gulp),
    write   = gulp.dest.bind(gulp),
    config  = { ... };

gulp.task('css', css(read, write, config));

```

### Configuring the plugin

The plugin expects the following configuration options to be defined:

```
{
    "environment": {
        "debug": true|false
    },
    "src": "/path/to/css/source/**/*.css",
    "bundle": {
        "name": "bundledFileName.css",
        "dest": "/path/to/public/css/folder",
    },
    "autoprefixer": {
        "browsers": ["last 3 versions"]
    }
}
```

## Contributions

This repository follows the Git Flow branching model. Branches follow the naming convention listed below:

- master
- development
- feature/*
- hotfix/*
- release/*
- support/*

The development and master branches are closed for writing. Contributions should be submitted through a pull request from a feature branch. Each pull request must describe the changes made and why these changes are nessecary (for future reference). Furthermore, the implementation must be documented using JSDoc. All unit tests must pass.

Every pull request made according to these guidelines will be peer reviewed. The review will result in on of these scenarios:

- Contribution is merged with development branch as is;
- Contribution needs to be rewritten. This can happen for architectural as well as stylistic reasons;
- Contribution needs to be moved to a different or separate bundle.
