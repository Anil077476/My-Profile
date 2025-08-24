# My Profile

Web page to display skills, experience and works for software engineers.
An Angular website build by me using [Brittany Chiang](https://brittanychiang.com/) design.

Prod Link :- https://www.tilakpuli.site/

## Story

I was a React guy with 2+ experience working on production scale react UI/Full stack web applications. But I never got chance to work on Angular project and was curious to know what Angular provides. And also at the same time I needed portfolio site. So I have built this application with Angular using @Brittany Chiang's portfolio site as reference (As I wanted to build this quick and only concentrate on learning Angular). Thanks Brittany for Design and some CSS. In next version, I would like to update this website design to my own.

## How to use.

If you want to use this project as your portfolio, Feel free to use it. But please credit it to Brittany Chiang as she deserves it.

1. Open `src/assets/data.ts` and you can see most of my text data is present there. Replace it with yours.
2. Go to `src/assets` and update the profile image and `resume.pdf`. Done.

## ToDo's for Next Version

1. Create a new UX design for porfolio and implement.
2. Find a better way to add google analytics tracking (Currently updating github pages index.html manually)

## How to deploy

For deploying this repo, I am using `angular-cli-ghpages` module for building and deploying to github pages.

Run `ng deploy --base-href=__domain__url__ --cname=__domain__url`
**domain**url\_\_ example => https://tilak-puli.github.io/My-Profile/
