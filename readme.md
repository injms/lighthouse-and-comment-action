# 🗄 Archived - this action is no longer maintained

I think this was a neat idea, but just too flakey for real life as it required a third party to be up and running by the time the audit was being run. And it was just too soul destroying when bug fixing to have to run the action on GitHub every single time - if there's a better way please please let me know.

Ta.

---

# Lighthouse audit to compare live and pull request

This runs a Lighthouse audit on the live site and on the pull request deploy - then make a comment with the difference between the two so you can better show what improvements you're making.

## Inputs

### `live_url`

**Required**.

The URL of the live site to be audited.

### `pr_url_pattern`

**Required**

Some services, such as Heroku and Netlify, can be set up to deploy the pull request to a URL that is has a regular pattern to it. For example, Netlify will deploy pull request number 42 to `https://deploy-preview-42--website.netlify.app`.

The action replaces `{{PULL_REQUEST_NUMBER}}` replaced with the pull request number, which is then used as a URL for the Lighthouse audit.

So for the Netlify example, the `pr_url_pattern` would be `https://deploy-preview-{{PULL_REQUEST_NUMBER}}--website.netlify.app`.

### `paths`

An stringified array of paths that should be checked on **both** production and the pull request preview.

For example:

```yaml
paths: '["/", "/about", "/contact"]'
```


This will default to `'["/"]'`.

### `github_token`

**Required**

Set to `${{ secrets.GITHUB_TOKEN }}`.

## Outputs

No outputs directly from the action.

### Comment

A comment on the pull request from the `github-actions` bot with the top-level results from the audit.

### Artifacts

The full results for each page's audit are saved as an artifact that can be downloaded. These are in JSON and HTML format.

This artifact is called `lighthouse-reports` if you want to use the [download artifact action](https://github.com/actions/download-artifact).

## Example configuration

This workflow runs a test on the live site, and on the PR pattern given:

```yaml
name: Lighthouse audit and comparison
on: pull_request

jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - name: Audit live URL
        uses: injms/lighthouse-and-comment-action@v1.2.1
        with:
          live_url: "https://inj.ms"
          pr_url_pattern: "https://deploy-preview-{{PULL_REQUEST_NUMBER}}--injms.netlify.app"
          pages: "['/', '/about' '/contact']"
          github_token: ${{ secrets.GITHUB_TOKEN }}
```
