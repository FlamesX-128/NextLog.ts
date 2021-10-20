import log from "./mod.ts";

(function main(): void {
  // Output: [<Date>] [<Time>] [<Status>] <Message>

  log.error("New Error!");

  log.info("New Info!");

  log.ok("New Ok!");

  log.print("New Print!");

  log.warn("New Warn");
})();