### Development Log

The project was created using the yarn command for redwood projects. It should be noted that I made sure that yarn was upgraded to its' latest version.

``` yarn create redwood-app marcus --typescript --overwrite ```

I used the `--overwrite` option because I had already created the repository for the project.

Next I added the `/docs` folder and the description.md and devlog.md file. That is the initial version of the project.

Then I installed tailwind with the following command ...

```yarn rw setup ui tailwindcss --force```

And installing variant to prep for Shadcn

```yarn add clsx tailwind-variants```

Next I want to test Shadcn by adding in a component. This will mean creating a component, I will use a card component, and a landingpage component. Starting with the card component ...

```yarn rw g component Card```

And then a home page ...

```yarn rw g page Home```

To make the Card compenent a Shadcn Card, I copy the source from Shadcn into the web/src/component/Card/Card.tsx.

It turns out that I need a @/lib/utils folder with a `cn` function. To do that I need to create the web/src/utils folder. And then I added a `utils.ts` file in the folder. That file has the `cn` function. After some fiddling around with configuration I got the base app to work with a Shadcn dark theme.

**Note.** To add a Shadcn component generate a redwood component with the same name, then paste the Shadcn code into the new source file.

## Firebase

I have created a **Firebase** project to use for authentication. I may also host the application there too, and might also use Firestore instead of Redwood's builtin SQL database.

The Firebase project is **marcus**. The management portal is here: https://console.firebase.google.com/u/0/project/marcus-c6e57/overview

My next step is to figure out how to incorporate Firebase authentication into my RedwoodJS project.

In Firebase, `marcus` is a project. For this prototype I added a web app to the project named marcus-web. The authentication settings are found in marcus-web.

To add Firebase to the RedwoodJS project I started by updating the .env file and the redwood.toml. The values for this are found on the Firebase console in the settings for the marcus web app.

### Integrating Firebase into the app

I start by adding the Shadcn Button control to the app. This starts with this yarn command ...

```bash
yarn add @radix-ui/react-slot
```

Then I generated a RedwoodJS Button component ...

```bash
yarn rw g component Button
```

And then copying the Shadcn code over the Button.tsx file.
