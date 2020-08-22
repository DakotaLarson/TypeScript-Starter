class Application {
  public start() {
    console.log("Works!");
  }
}

(async () => {
  const app = new Application;
  app.start();
})();
