/*

MIT License

Copyright (c) 2021 FlamesX128

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/


// deno-lint-ignore-file no-explicit-any
/** @typedef {TStatus} TStatus */
type TStatus = "ERR" | "INFO" | "OK" | "WARN";


/** @interface IVStatus */
interface IVStatus {
  ERR: "\x1b[31m",
  INFO: "\x1b[34m",
  OK: "\x1b[32m",
  WARN: "\x1b[33m"
}


/** @type {IVStatus} validStatus */
const validStatus: IVStatus = {
  "ERR": "\x1b[31m",
  "INFO": "\x1b[34m",
  "OK": "\x1b[32m",
  "WARN": "\x1b[33m"
};


/** @class Log */
class Log {
  /**
   * Print a log to console.
   * @param {any} message - message to print.
   * @param {any[]} options - message options.
   * @returns {void}
   */
  public print(message: any, ...options: any[]): void {
    console.log(
      `${this.getTime().join(" ")} ${message}`, ...options
    );
  }

  /**
   * Print a log with a status in console
   * @param {any} message - message to print.
   * @param {any[]} options - message options.
   * @returns {void}
   */
  public warn(message: any, ...options: any[]): void {
    this.buildTypeLog("WARN", message, options);
  }

  /**
   * Print a log with a status in console
   * @param {any} message - message to print.
   * @param {any[]} options - message options.
   * @returns {void}
   */
  public error(message: any, ...options: any[]): void {
    this.buildTypeLog("ERR", message, options);
  }

  /**
   * Print a log with a status in console
   * @param {any} message - message to print.
   * @param {any[]} options - message options.
   * @returns {void}
   */
  public ok(message: any, ...options: any[]): void {
    this.buildTypeLog("OK", message, options);
  }

  /**
   * Print a log with a status in console
   * @param {any} message - message to print.
   * @param {any[]} options - message options.
   * @returns {void}
   */
  public info(message: any, ...options: any[]): void {
    this.buildTypeLog("INFO", message, options);
  }

  /**
   * Build a new log with a status.
   * @param {TStatus} type - type of status.
   * @param {any} message - message to print.
   * @param {any[]} options - message options.
   * @returns {void}
   */
  private buildTypeLog(type: TStatus, message: any, options: any[]): void {
    console.log(
      `${this.getTime().join(" ")} ${this.getStatus(type)} ${message}`,
      ...options
    );
  }

  /**
   * Add brackets to any value.
   * @param {string} str - value to add brackets.
   * @returns {string}
   */
  private buildBrackets(str: string): string {
    return `\x1b[36m[\x1b[0m${str}\x1b[36m]\x1b[0m`;
  }

  /**
   * Get the current time.
   * @returns {[string, string]}
   */
  private getTime(): [string, string] {
    const date = new Date();

    return [
      this.buildBrackets(
        `${date.toLocaleDateString()}`
      ),

      this.buildBrackets(
        `${date.toLocaleTimeString()}`
      )
    ];
  }

  /**
   * Get current status.
   * @param {TStatus} status - Type of status.
   * @returns {string}
   */
  private getStatus(status: TStatus): string {
    return this.buildBrackets(
      `${validStatus[status]}${status}`
    );
  }
}


/** @exports Log */
export default new Log();