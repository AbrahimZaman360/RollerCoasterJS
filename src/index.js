import { program } from "commander";
import chalk from "chalk";
import ora from "ora";

program
  .name("RollerCoaster JS")
  .description("Another JS framework, made just for fun (:")
  .version("0.0.1");

program
  .command("create@rcoasterjs")
  .description("Split a string into substrings and display as an array")
  .argument("<string>", "Project name.")
  .option("--typescript", "Generate with typescript support.")
  .action((str, options) => {
    new Promise((resolve, reject) => {
      ora(
        chalk.blue.bold(
          ` - Creating RollerCoasterJS project: ${chalk.underline.red(str)}`
        )
      ).start();
    });
  });

program.parse();
