const lodashSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js";
const jQuerySrc = "https://code.jquery.com/jquery-3.4.1.min.js";
const momentSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.js";

const arr = [];

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  document.head.append(script);
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error("Smthg went wrong"));
}

loadScript(jQuerySrc, (error, script) => {
  if (error) {
    console.log("oops");
  } else {
    console.log("jq loaded");
    $("#jquery-load").text("jquery-load");
    const jqcontainer = $("#jquery-load");

    loadScript(lodashSrc, (error, script) => {
      if (error) {
        console.log("oops");
      } else {
        console.log("lodash loaded");
        console.log(_.isArray(jqcontainer));

        loadScript(momentSrc, () => {
          console.log("moment load");
          console.log(moment().add(1, "year"));
        });
      }
    });
  }
});
