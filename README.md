# Crystal git

An attempt to make a version control system, based on git, where everything fits together and just makes sense, like a beautiful and symmetric crystal.

*Crystal git* is based on the mainline/feature branching model, where tags serve as production releases. Here's an example of a person using `cg`, crystal git, for a new repo.

```
npm i -g crystal-git
cg init
cg watch
```

Here's an example of a person using crystal git in an existing repo. It's pretty likely that you can use it even if the rest of your team doesn't want to.

```
npm i -g crystal-git
cg init
# choose mainline = development
cg watch
```

Crystal git helps you not lose your work, ever.

 - Crystal git commits changes every five minutes locally, so you can time-travel through your day. Don't worry, it will squash all those commits later, so the commit history isn't ugly.
 - Crystal git is hard to fuck up. It takes care of merging and rebasing for you using best practices.
 - Crystal git can merge some conflicts for you that git isn't smart enough to merge, helping junior developers not fuck stuff up and preventing lazy senior developers from brashly merging their own code in over others.
 - Crystal git encourages you to push code to the mainline more frequently, and always updates your feature branches with the latest code from the mainline, helping everyone prevent conflicts


# Usage

cg init
cg watch
cg pull
cg push
cg add
cg blame
cg commit
cg merge
cg revert
cg status
cg log

# But, like, why, even?

Because I suck at git, and probably so do you. Let's find out why.

What happens when you do a merge? What happens when you do a rebase? What about an interactive rebase, or a merge with --no-ff? What happens when you merge a feature branch into the master branch and then try to rebase your feature branch on top of master again? What's the right way to keep your feature branch up-to-date with master? How do you read git log or git blame and why is everything so messy? What's the best way to resolve conflicts, what is left vs right and why isn't it called "theirs" and "yours" or "dev" and "master" and instead are called "BASE" "LOCAL" "REMOTE" and "MERGED", especially since like gah omg there's my local version of master and the remote origin/master and maybe both of them are the base for the merge but then what's the name for the branch that I'm merging in from? Like how even do I git? What words do I use to communicate my intentions?

THAT is the problem with git. The api is a clusterfuck where random words were cut and pasted from other version control systems onto totally different parts of the git version control code base. Git is an toolbag where you reach for a hammer and pull out a drill. Fuck git. There, I said it. 

If you like googling, you'll love git. If you like reading the same stack overflow answer time after time after time again, you'll love git. For those of us who just want to do basic operations and have things just work, now there is crystal git. 


# reading
http://endoflineblog.com/gitflow-considered-harmful
