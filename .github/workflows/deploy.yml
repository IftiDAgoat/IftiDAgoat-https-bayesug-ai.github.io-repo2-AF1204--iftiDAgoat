name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch: {}

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: "3.12"

      - name: Install marimo
        run: pip install marimo pandas plotly

      - name: Export notebook to WASM
        run: |
          mkdir -p output_dir
          marimo export html-wasm notebooks/portfolio.py -o output_dir --mode run

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: output_dir

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4