![Git image](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png)

# Git - The Stupid Content Tracker

Git commands in terminal.

## git init

Initializes a local folder as a repository.

```sh
$ git init
git init
Reinicializado el repositorio Git existente en /Users/richiesilva/workspace/neoland-202510/.git/
```

## git remote add origin repo-address

Connects the local repository to its origin in GitHub.

```sh
$ git remote add origi
n https://github.com/rsilva89/neoland-202510
```

## git pull

Pulls all the changes from remote (origin) repository.

```sh
$ git pull
No hay información de rastreo para la rama actual.
Por favor especifica a qué rama quieres fusionar.
Ver git-pull(1) para detalles.

    git pull <remoto> <rama>
Si deseas configurar la información de rastreo para esta rama, puedes hacerlo con:

    git branch --set-upstream-to=origin/<rama> master
```
## git branch -a

Shows the all the branches in the repository.

```sh
$ git branch -a
  remotes/origin/HEAD -> origin/main
  remotes/origin/main
```
## git switch main

Changes the branch to the given one.

```sh
$ git switch main
rama 'main' configurada para rastrear 'origin/main'.
Cambiado a nueva rama 'main'
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
En la rama main
Tu rama está actualizada con 'origin/main'.

Archivos sin seguimiento:
  (usa "git add <archivo>..." para incluirlo a lo que será confirmado)
        .DS_Store
        staff/

no hay nada agregado al commit pero hay archivos sin seguimiento presentes (usa "git add" para hacerles seguimiento)
```

## git add content-name

Adds content to staging. 

```sh
$ git add staff
```

## git config setting

Configures settings in local git.

```sh
$ git config user.email "gsilvalaredo@gma
il.com"
$ 
