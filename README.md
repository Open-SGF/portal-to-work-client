# portal-to-work-client
Create a new directory and cd to it.
Initialize git in it.
`git init`

Set this repo as your remote repo.
`git remote add origin git@github.com:Open-SGF/portal-to-work-client.git`

Tell git to link your local main branch to the remote main branch.
`git branch --set-upstream-to=origin/main main`

Pull down the project's code.
`git pull`

Initiate NPM in the directory
`npm init -y`

Install the NPM dependencies
`npm install`

To serve the code to a local viewable website, your code must be properly formatted.
Format it by running the following.
`npm run lint`

After linting the code, you can serve it to localhost with the following command.
`npm run serve`

For submitting new work to the project, make a new git branch named one of the following:
    bug-fixes/[description]
    chores/[description]
    features/[desription]
    
This command will create a new branch
`git checkout -b [branchName]`

To push this new branch up to github. You wil have to do this for the first push on that branch:
`git push --set-upstream origin [branchName]`

For any following pushes, you can just do:
`git push`





