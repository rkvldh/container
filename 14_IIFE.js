// Immedielly Invoke Expressions functions (IIFE)
(function chai() {
    console.log(`DB CANNECTED ONE`);
  })();
  (function aurcode() {
    console.log(`DB CANNECTED TWO`);
  })();
  // nammed IIFE
  ((name) => {
    console.log(`db cannected two ${name}`);
  })(`hitesh`);
  // 05:55 MINUT
  