![Git image](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png)

# Git - The Stupid Content Tracker

Git commands in terminal.

## git init 

Initialzes a local folder as a repository.

```sh
$ git init
Initialized Git repository in /Users/richiesilva/workspace/neoland-202510/.git/
```

## git remote add origin repo-address

Connects the local repository to its origin in GitHub.

```sh
$ git remote add origin https://github.com/rsilva89/neoland-202510
```

## git pull

Pulls all the changes from remote (origin) repository.

```sh
$ git pull
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> main
```

## git branch -a

Shows all the branches in the repository.

```sh
$ git branch -a
  remotes/origin/HEAD -> origin/main
  remotes/origin/main
```

## git switch branch-name

Changes the branch to the given one.

```sh
$ git switch main
Already on 'main'
Your branch is up to date with 'origin/main'.
```

## git branch

Shows the local branches.

```sh
$ git branch
* main
```

## git status 

Shows the status of files in local repo.

```sh
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        staff/ricardo-silva/playground/

nothing added to commit but untracked files present (use "git add" to track)
```

## git add content-name 

Adds content to staging.

```sh
$ git add staff
```

## git config setting

Configures settings in local git.

```sh
$ git config user.email "gsilvalaredo@gmail.com"
$ git config user.name "Ricardo Silva"
```

## git commit -m message

Consolidates the changes in local repository.

```sh
$ git commit -m "add bash and git docs"
```

## git push

Pushes the changes from local to remote repository (origin).

```sh
$ git push
Enumerating objects: 12, done.
Counting objects: 100% (12/12), done.
Delta compression using up to 10 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (9/9), 2.01 KiB | 2.01 MiB/s, done.
Total 9 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/rsilva89/neoland-202510
   bea1370..4dbf3f5  main -> main
```

## git log

Shows commits history ordened descending by time.

```sh
$ git log 
commit b8be8960af8011f1a606e697ebbd4deae02a3e96 (HEAD -> main, origin/main, origin/HEAD)
Author: Ricardo Silva <gsilvalaredo@gmail.com>
Date:   Tue Oct 28 23:54:24 2025 +0100

  add git commit and git push commands to git doc

commit 4dbf3f5719c0d7ce6ad87159419ef1f45b9797a3
Author: Ricardo Silva <gsilvalaredo@gmail.com>
Date:   Tue Oct 28 23:29:04 2025 +0100

  add bash and git docs

commit bea1370357f908dfbb3b860c4f0953b7e18733c5
Author: Ricardo Silva <gsilvalaredo@gmail.com>
Date:   Thu Oct 23 21:52:20 2025 +0200

  Initial commit 
```
