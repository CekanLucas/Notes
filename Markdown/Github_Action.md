<head>
 
  <link 
    href="https://fonts.googleapis.com/css?family=Fira+Mono:500&display=swap" 
    rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<style> 
body ::selection {
  /*highlighting*/
  background: transparent;
  text-shadow: 
    1px  0px 1px ,
    0px  1px 1px ,
    -1px  0px 1px ,
    0px -1px 1px ,
    0px  1px black ,
    1px  0px black ,
    -1px  0px black ,
    0px -1px black ;
  text-outline: black;  
}
h1, h2, h3, h4, h5, h6 {
  text-align: center;
  text-shadow: none;
  font-weight: bolder;
  color: skyblue;
}
h1 {
  box-shadow: 0px 1px red !important;
  box-shadow: none !important;
  outline: none;
}

</style>
</head>    
<div id="stack-container">
  <a href="https://docs.github.com/en/free-pro-team@latest/actions"><img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Github Octocat"></a>
</div>

#  Github Actions
``` yaml 
name: Super-Linter

# Run this workflow every time a new commit pushed to your repository
on: push

jobs:
  # Set the job key. The key is displayed as the job name
  # when a job name is not provided
  super-lint:
    # Name the Job
    name: Lint code base
    # Set the type of machine to run on
    runs-on: ubuntu-latest

    steps:
      # Checks out a copy of your repository on the ubuntu-latest machine
      - name: Checkout code
        uses: actions/checkout@v2
      
      # Runs the Super-Linter action
      - name: Run Super-Linter
        users: github/super-linter@v3
        env: 
          DEFAULT_BRANCH: main
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Components & Key Concepts 
### Workflows
A workflow is a <span class="LightGreen">automated procedure</span> that you add to your repo
Workflow is madup up of <b class="Violet">job(s)</b> triggered by an <span class="Violet"><b>event</b> when something happens IN or TO your repository</span>

<div class="pagination">
	<span class="tag is-warning">PR created</span>
	<span class="tag is-warning">Contributer Joined</span>
	<span class="tag is-warning">Issue Created</span>
	<span class="tag is-warning">PR merged</span>
	<span class="tag is-warning">Other apps</span>
</div>

_The workflow can be used to build, test, package, release, or deploy a project on GitHub_
### Events <small class="LightBlue">list</small>
> **Example of using multiple events**
``` yaml
# Triggered when code is pushed to any branch in a repository
on: push
# Triggered on push or pull request events 
on: [push, pull_request]

on:
  # Trigger the workflow on push or pull request,
  # but only for the main branch
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  # Also trigger on page_build, as well as release created events
  page_build:
  release:
    types: # This configuration does not affect the page_build event above
      - created
```

- <b class="CadetBlue">Scheduled Events</b>
  - `schedule`
  ```yaml
  # triggers workflow every 15 minutes 
  on:
    schedule:
      # * special char in yaml so need to quote string
      # minute | hour day of month | month(1-12 or JAN-DEC) | day of the week(0 - 6 SUN-SAT)
      - cron: `*/15 * * * *`
  ```
- <b class="CadetBlue">Manual Events</b>
  - `workflow_dispatch`
  - `repository_dispatch`
- <b class="CadetBlue">Webhook Events</b>
  - `check_run`
  - `check_suite`
  - `create`
  - `delete`
  - `deployment`
  - `deployment_status`
  - `fork`
  - `gollum` when create or update wiki page
  - `issue_comment`
  - `issues`
  - `label`
  - `milestone`
  - `page_build`
  - `project`
  - `project_card`
  - `project_column`
  - `public`
  - `pull_request`
  - `pull_request_review`
  - `pull_request_review_comment`
  - `pull_request_target`
  - `release`
  - `status`
  - `watch`
  - `workflow_run`

### Jobs 
Set of steps executed by the same runner 
Workflows with multiple jobs run these in parallel

### Steps 
Can be a <b class="HotPink">action</b> or a <b class="HotPink">shell command</b>, executed by the same runner so data can be shared between steps

### Actions 
Smallest portable block of a workflow
To use a action you must include it as a step

### Runers 
A runner is a server that has <a href="https://github.com/actions/runner">Github Actions runner application</a> You can use a runner hosted by GitHub, or you can host your own. A runner listens for available jobs, runs one job at a time, and reports the progress, logs, and results back to GitHub. For GitHub-hosted runners, each job in a workflow runs in a fresh virtual environment

## Encrypted Secrets <a href="https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets"><sup>link</sup></a>
On Github repo click settings tab and then `New organisation secret`

## Managing Complex Workflows 
- secrets
- creating dependendencies 
> because jobs are run in parrallel use `needs` to make jobs run at different times 
```yaml
jobs:
  setup:
    runs-on: ubuntu-latest
    steps:
      - run: ./setup_server.sh
  build:
    needs: setup
    runs-on: ubuntu-latest
    steps:
      - run: ./build_server.sh
  test:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - run: ./test_server.sh
```

- build matrix 
> To run multiple combinations of things
```yaml
jobs: # to run with multiple node versions
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [6, 8, 10]
    steps:
      - uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node }}
```

- Caching 
> becuase each job uses a fresh environment to reuse things use cache
```yaml
jobs:
  example-job:
    steps:
      - name: Cache node modules
        uses: actions/cache@v2
        env:
          cache-name: cache-node-modules
        with:
          path: ~/.npm
          key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-build-${{ env.cache-name }}-
```

- <a href="https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/managing-complex-workflows#using-databases-and-service-containers">Using databases and service containers </a>
> you can use `services` to create an ephemeral container to host the service; the resulting container is then available to all steps in that job and is removed when the job has completed
```yaml
# use services to create a postgres container and then use node to connect to service
jobs:
  container-job:
    runs-on: ubuntu-latest
    container: node:10.18-jessie
    services:
      postgres:
        image: postgres
    steps:
      - name: Check out repository code
        uses: actions/checkout@v2
      - name: Install dependencies
        run: npm ci
      - name: Connect to PostgreSQL
        run: node client.js
        env:
          POSTGRES_HOST: postgres
          POSTGRES_PORT: 5432
```

- <a href="https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/managing-complex-workflows#using-labels-to-route-workflows">Labels to route workflows </a>
> Here you can assign jobs to a specific self-hosted runner. You can use labels to control where jobs are executed 
```yaml
# here we use labels to specify the required runner
jobs:
  example-job:
    runs-on: [self-hosted, linux, x64, gpu]
```

- <a href="https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/managing-complex-workflows#using-environments">uses environments</a>

## Sharing Workflows with your Organisation <a href="https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/sharing-workflows-with-your-organization"><sup>link</sup></a>
 ### Workflow
 #### Templates 
 #### Secrets
 #### Self-Hoisted runners within an organisation 

 ## Sharing Workflows with your Organisation <a href="https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/security-hardening-for-github-actions"><sup>link</sup></a>