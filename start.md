1. Create your files
2. Open vs code and open folder
3. Open the terminal
4. Initialize the repository by typing `git init`
5. Tell git about yourself,`git config user.name "any name"` OR `git config user.email "your email"`

6. `git status`
7. `git add start.txt`
8. `git commit -m "First instructions"`
9. "git log" => this shows the author name, email, date and time we comitted and the commit message
10. `git remote add origin https://github.com/TTENDO/Refactory.git` connects local repo to the other repo and  origin can be changed into anything say refactory and the like
11. `git push -u origin master` push to an origin called refactory and a branch called master

{command result
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 4 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (6/6), 896 bytes | 179.00 KiB/s, done.
Total 6 (delta 0), reused 0 (delta 0)
To https://github.com/TTENDO/Refactory.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'refactory'.}