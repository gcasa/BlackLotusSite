# Black Lotus Incorporated

The website is plain HTML and CSS with local images and fonts. It has no
JavaScript, framework, dependencies, build step, application server, or database.
The complete deployable website is in `site/`.

## GitHub Pages

1. In the repository's **Settings → Pages**, select **GitHub Actions** as the source.
2. Push to `main` or `static_site`, or manually run **Deploy static site to GitHub
   Pages** in Actions.

The workflow checks the files and uploads `site/` directly. All local asset and
navigation links are relative, so the same files work at a repository Pages URL
such as `https://gcasa.github.io/BlackLotusSite/` or at a custom domain.

You can also upload the contents of `site/` to any static web host. No compilation
or installation is required.

## Edit and preview

- Edit text, product links, and support details in `site/index.html`.
- Edit the design in `site/styles.css`.
- Images and self-hosted fonts are in `site/assets/`.
- Open `site/index.html` directly in a browser, or optionally preview over HTTP:

```sh
python3 -m http.server 8080 --directory site
```

Open `http://localhost:8080`. Python is only needed for the optional local preview
and repository checks; the deployed site runs entirely as static files.

To check the HTML, internal links, CSS font files, and product support links:

```sh
python3 -m unittest discover -s tests
```

The support URL is the site's public URL followed by `#support`. Support and
contact emails go to `greg.casamento@gmail.com`.

## Product downloads

The page links to `downloads/MacBasic.zip`, `downloads/ScoreMaker.zip`, and
`downloads/ScrubBit.zip`. These archives are not included in this repository.
Place the release files in `site/downloads/` to enable those downloads.
SalonSync links to its separately hosted application.

Social-preview image URLs in `site/index.html` use the repository's GitHub Pages
URL. Update those absolute URLs if you move the website to a custom domain.
