For submitting new work to the project, make a new git branch named one of the following:
* bugfix/[description]
* chore/[description]
* feature/[description]

This command will create a new branch:
`git checkout -b [branchName]`

To push this new branch up to github. You wil have to do this for the first push on that branch:
`git push --set-upstream origin [branchName]`

For any following pushes, you can just do:
`git push`
