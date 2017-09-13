'use strict';

class GitGroup {

    /**
     *
     * @param {string} name The git repositories group name
     * @param {Immutable.List<GitPackage>} repositories The git repositories
     */
    constructor(name, repositories) {
        this.name = name;
        this.repositories = repositories;
    }
}

module.exports = GitGroup;
