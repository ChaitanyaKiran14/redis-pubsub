````markdown
# Git Setup and Workflow Guide

This repository uses a standard Git workflow to ensure smooth collaboration and version control.  
Follow the steps below to initialize, sync, and push your changes properly.

---

## 🚀 Initial Setup

```bash
# Initialize a new Git repository
git init

# Add the remote GitHub repository
git remote add origin https://github.com/ChaitanyaKiran14/redis-pubsub.git
````

---

## 💾 Commit Your Changes

```bash
# Add all files to the staging area
git add .

# Commit the changes with a message
git commit -m "lgtm"
```

---

## 🌿 Working with Branches

```bash
# List all existing branches
git branch -a

# Create and switch to a new branch named 'dev'
git checkout -b dev

# OR, switch to an existing branch named 'dev'
git checkout dev
```

---

## 🔄 Sync Changes from Remote

Before committing or pushing new changes, make sure your local branch is up to date:

```bash
# Pull the latest changes from the remote 'dev' branch
git pull origin dev
```

---

## ⬆️ Push Changes to GitHub

```bash
# Push local 'dev' branch to remote and set tracking
git push -u origin dev
```

---




## Running Docker
```bash

Let’s start redis locally and start using it as a DB
docker run --name my-redis -d -p 6379:6379 redis
Connecting to your container
docker exec -it container_id /bin/bash
Connecting to the redis cli
redis-cli

```

### ✅ Notes

* Always run `git pull origin dev` before pushing to avoid merge conflicts.
* Use clear and meaningful commit messages.
* Work on separate branches for new features or fixes and merge only after testing.


