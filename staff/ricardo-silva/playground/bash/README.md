![BASH image](https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gnu-bash-logo.svg/1200px-Gnu-bash-logo.svg.png)

# BASH

Commands in BASH terminal.

## pwd

Path to working directory.

```sh
$ pwd
/Users/richiesilva/workspace
```

## ls 

List files and folders (directories).

```sh
$ ls
Desktop		Downloads	Movies		Pictures	workspace
Documents	Library		Music		Public
```

## ls -l

List Files and folders with details.

```sh
$ ls -l
total 0
drwx------@  3 richiesilva  staff    96 23 feb.   2023 Desktop
drwx------@  7 richiesilva  staff   224 28 oct.  11:24 Documents
drwx------+  8 richiesilva  staff   256 28 oct.  17:40 Downloads
drwx------@ 91 richiesilva  staff  2912 28 oct.  16:59 Library
drwx------   4 richiesilva  staff   128 28 oct.  11:40 Movies
drwx------+  4 richiesilva  staff   128 25 oct.  18:13 Music
drwx------+  4 richiesilva  staff   128 25 oct.  17:05 Pictures
drwxr-xr-x+  4 richiesilva  staff   128 25 oct.  17:05 Public
drwxr-xr-x   3 richiesilva  staff    96 28 oct.  19:23 workspace
```

## mkdir folder-name

Creates a folder with the provided name.

```sh
$ mkdir workspace
```

## touch file-name

Creates and empty file with the given name.

```sh
$ touch readme.txt
```

## chmod rwx file-name/foder-name

Updates permisions in given file or folder.

```sh
$ chmod 700 readme.txt
```

## nano file-name

Opens a given file in the Nano editor. 

```sh
$ nano readme.txt
```

## rm file-name

Removes a given file from system.

```sh
$ rm readme.txt
```

## rmdir folder-name

Removes a given folder when is empty.

```sh
$ rmdir temp
```

### cd folder-name

Changes from current folder to the given folder path.

```sh
$ cd workspace
```

### ls -a 

Shows visible and hidden files and folders in give path.

```sh
$ ls -a 
.       ..      .git    staff
```