'use strict';
const path = require('path');
const Git = require('./git');

class GitPackage {

    /**
     * Create an instance from a {@link PackageRoot}.
     * This will contain a reference to the path and basename, as well
     * as an object that represents an actual git repository.
     * @param {string} absolutePackagePath The file path to the git repository
     * @param {string} alias The git repository alias (will be used instead of the repository
     * directory basename when provided
     */
    constructor(absolutePackagePath, alias) {
        this.git = Git.createRepository(absolutePackagePath);
        this.path = absolutePackagePath;
        this.basename = alias ? alias : path.basename(absolutePackagePath);
    }
}

module.exports = GitPackage;
