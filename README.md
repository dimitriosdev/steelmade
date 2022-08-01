<h1 align="center">
  Gatsby v3 - Netlify CMS - Tailwind CSS - Starter
</h1>


A website built using Gatsby v3, Netlify CMS and Tailwind CSS.

It's a website of a aluminium and steel company and comprises of a landing page, a project portfolio, about page with team members, and a contact form.


## 🦾 Technologies and Plugins

- ⚛️ **Gatsby v3**
- ✍️ **Netlify CMS** (incl. Admin live preview for all pages)
- 💨 **Tailwind CSS** for styling
- 🌃 Performant images with gatsby-plugin-image and gatsby-plugin-sharp
- ⛑ Site metadata with react-helmet
- 🗺 Sitemap with gatsby-plugin-sitemap
- 🤖 Robots.txt with gatsby-plugin-robots-txt
- 🧩 Persistent navbar and footer with gatsby-plugin-layout
- ...

## 💻 Local Development

Start development environment with

```
$ git clone https://github.com/jimmybutton/gatsby-netlifycms-tailwind-starter.git
$ cd gatsby-netlifycms-tailwind-starter
$ npm install
$ gatsby develop
```

The site is now available at `localhost:8000/`.

You can connect Netlify CMS to your [local git repo](https://www.netlifycms.org/docs/beta-features/#working-with-a-local-git-repository) (currenly a beta feature) by running this command in a separate terminal.

```
$ npx netlify-cms-proxy-server
```

The Netlify CMS Admin will then be available at `localhost:8000/admin`.

For more details on how to set up the CMS, check out the [Netlify CMS Docs](https://www.netlifycms.org/docs/intro/).

## 🚨 Known issues

-

## 🙌 Credits and thanks

- This template was inspired by [gatsby-starter-netlify-cms](https://github.com/netlify-templates/gatsby-starter-netlify-cms)

## 🛠 Todo

- Google analytics? https://www.gatsbyjs.com/plugins/gatsby-plugin-gtag/?=google%20analytics#gatsby-plugin-gtag
- gatsby plugin offline?
