# My Profile

Web page to display skills, experience and works for software engineers.
An Angular website build by me using [Brittany Chiang](https://brittanychiang.com/) design.

Prod Link :- https://anil-kumble-profile.vercel.app/

## Story

This is an Angular portfolio site adapted from Brittany Chiang's design. It can be used as a template to showcase skills, experience, and projects. Update the data file and assets to personalize it.

## How to use.

If you want to use this project as your portfolio, Feel free to use it. But please credit it to Brittany Chiang as she deserves it.

1. Open `src/assets/data.ts` and you can see most of my text data is present there. Replace it with yours.
2. Go to `src/assets` and update the profile image and `resume.pdf`. Done.
3. Update your social links (`links`) and project images/URLs in `src/assets/data.ts`.

## ToDo's for Next Version

1. Create a new UX design for porfolio and implement.
2. Find a better way to add google analytics tracking (Currently updating github pages index.html manually)

## How to deploy

For deploying this repo, I am using `angular-cli-ghpages` module for building and deploying to github pages.

Run `ng deploy --base-href=__domain__url__ --cname=__domain__url`
**domain**url\_\_ example => https://github.com/Anil077476/My-Profile
