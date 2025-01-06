### Development Log

The project was created using the yarn command for redwood projects. It should be noted that I made sure that yarn was upgraded to its' latest version.

``` yarn create redwood-app marcus --typescript --overwrite ```

I used the `--overwrite` option because I had already created the repository for the project.

Next I added the `/docs` folder and the description.md and devlog.md file. That is the initial version of the project.

Then I installed tailwind with the following command ...

```yarn rw setup ui tailwindcss --force```

And installing variant to prep for Shadcn

```yarn add clsx tailwind-variants```

Next I want to test Shadcn by adding in a component. This will mean creating a component, I will use a card component, and a homepage component. Starting with the card component ...

```yarn rw g component Card```

And then a home page ...

```yarn rw g page Home```

To make the Card compenent a Shadcn Card, I copy the source from Shadcn into the web/src/component/Card/Card.tsx.

It turns out that I need a @/lib/utils folder with a `cn` function. To do that I need to create the web/src/utils folder. And then I added a `utils.ts` file in the folder. That file has the `cn` function. After some fiddling around with configuration I got the base app to work with a Shadcn dark theme.

**Note.** To add a Shadcn component generate a redwood component with the same name, then paste the Shadcn code into the new source file.
