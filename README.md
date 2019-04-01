# Deadline

## Usage

Using **Deadline** is simple. Once you've installed it in your repository you will need to setup your `.github/setup.yml` file and **Deadline** will do the rest.

## Configuring for your project

There are a couple of configuration options that you will need to setup depending on what you want.

```yml

-
  label: development
  time: Friday at 2pm
  comment: You've missed the deadline
-
  label: version
  time: Thursday at 2pm
  comment: release is done
```

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Contributing

If you have suggestions for how Deadline could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2018 Irvin Jimenez-Solis &lt;ijimenez.solis18@gmail.com&gt; (https://github.com/Irvin-Solis)
