![BASH image](https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gnu-bash-logo.svg/1200px-Gnu-bash-logo.svg.png)

# BASH

Commands in BASH terminal.

## pwd

Path to working directory.

```sh
$ pwd
/Users/b00tc4mp/workspace
```

## ls

List files and folders (directories).
```sh
$ ls
Desktop Download Movies Pictures
Documents Library Music
```

## ls -l

list files and folders with details.
```sh
$ ls -l
total 0
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

## chmod rwx file-name/folder-name

Updates permissions in given file or folder

```sh
$ chmod 700 readme.txt
```

# nano file-name

Opens a given file in the Nano editor.

```sh
$ nano readme.txt
```

## rm file-name

Removes a given file from system.

```sh
$ rm readme.txt
```

## rmdir folder name

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

Shows visible and  hidden files and folders in give path.

```sh
$ ls -a
.               ..              .DS_Store       .git            staff
```
