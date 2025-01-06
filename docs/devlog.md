### Development Log

The project was created using the yarn command for redwood projects. It should be noted that I made sure that yarn was upgraded to its' latest version.

``` yarn create redwood-app marcus --typescript --overwrite ```

I used the `--overwrite` option because I had already created the repository for the project.

Next I added the `/docs` folder and the description.md and devlog.md file. That is the initial version of the project.

Then I installed tailwind with the following command ...

```yarn rw setup ui tailwindcss --force```

And installing variant to prep for Shadcn

```yarn add clsx tailwind-variants```
