`/!\ Work In Progress /!\`
`/!\ Doesn't Even Work /!\`

# Crystal git

An attempt to make a version control system, based on git, where everything fits together without feeling awkward and misshapen (like git).

this is the clearest explanation of the problem i'm trying to solve i've seen so far: (https://ginsys.eu/git-and-github-keeping-a-feature-branch-updated-with-upstream/)

```
npm i -g crystal-git
cg init
cg watch
```

*Crystal git* is based on the mainline/feature branching model. It doesn't do releases. It doesn't do shit for your team, really, it's just supposed to make local development easier.

Crystal git is supposed to help you not lose your work, ever.

 - Crystal git commits changes every five minutes locally, so you can time-travel through your day. Don't worry, it will squash all those commits later, so the commit history isn't ugly.
 - Crystal git is hard to fuck up. It takes care of merging and rebasing for you using best practices.
 - Crystal git can merge some conflicts for you that git isn't smart enough to merge, helping everybody not hate everything about teamwork.
 - Crystal git encourages you to push code to the mainline more frequently, and always updates your feature branches with the latest code from the mainline, helping everyone prevent conflicts


# Possible Usage Some Day In The FuTuRe

cg init
cg watch
cg update
cg commit

# Recommended Aliases

```
alias cgu='cg update'
alias cgc='cg commit'
```

# But, like, why, even?

Because I suck at git, and probably so do you. Let's find out why.

What happens when you do a merge? What happens when you do a rebase? What about an interactive rebase, or a merge with --no-ff? What happens when you merge a feature branch into the master branch and then try to rebase your feature branch on top of master again? What's the right way to keep your feature branch up-to-date with master? How do you read git log or git blame and why is everything so messy? What's the best way to resolve conflicts, what is left vs right and why isn't it called "theirs" and "yours" or "dev" and "master" and instead are called "BASE" "LOCAL" "REMOTE" and "MERGED", especially since like gah omg there's my local version of master and the remote origin/master and maybe both of them are the base for the merge but then what's the name for the branch that I'm merging in from? Like how even do I git? What words do I use to communicate my intentions?

THAT is the problem with git. The api is a clusterfuck where random words were cut and pasted from other version control systems onto totally different parts of the git version control code base. Git is an toolbag where you reach for a hammer and pull out a drill. Fuck git. There, I said it.

If you like googling, you'll love git. If you like reading the same stack overflow answer time after time after time again, you'll love git. For those of us who just want to do basic operations and have things just work, now there is crystal git.

# what it does: cg pull

pulls commits in from the remote origin branch and rebases your commits on top of it.

TODO try to figure out what the parent branch was and keep your feature branch up-to-date with it as well.

cg commit

commits or appends to an existing commit.

# reading
http://endoflineblog.com/gitflow-considered-harmful
