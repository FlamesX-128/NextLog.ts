# **NextLog.ts**
This library adds different console logs with status and color.

## **ChangeLog (0.1.0)**
Functions:

```ts
error(message: any, ...options: any[]): void
```

```ts
info(message: any, ...options: any[]): void
```

```ts
ok(message: any, ...options: any[]): void
```

```ts
print(message: any, ...options: any[]): void
```

```ts
warn(message: any, ...options: any[]): void
```

### **Examples**

```ts
import log from "./mod.ts";

(function main(): void {
  // Output: [<Date>] [<Time>] [<Status>] <Message>

  log.error("New Error!");

  log.info("New Info!");

  log.ok("New Ok!");

  log.print("New Print!");

  log.warn("New Warn");
})();
```

`Output:`

![image](https://user-images.githubusercontent.com/78381898/138024422-60033d96-014f-4cc8-a7a9-04005716e8b9.png)


##### **Created at 2021 ~ FlamesX-128**