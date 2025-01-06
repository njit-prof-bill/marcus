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

To make the Card compenent a Shadcn Card, I copy the source from Shadcn into the web/src/component/Card/
