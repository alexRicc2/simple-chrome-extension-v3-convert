// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.

console.log("This prints to the console of the page ");

const body = document.querySelector("body");
const element = document.createElement("div");

element.classList.add("element-injected");
body.appendChild(element);

const injectStylesheet = () => {
  if (
    !document.querySelector(
      "link[href='" + chrome.runtime.getURL("css/style.css") + "']"
    )
  ) {
    ("");
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = chrome.runtime.getURL("css/style.css"); // Adjust the path to your stylesheet

    // Append the link element to the document head
    document.head.appendChild(link);
  }
};

injectStylesheet();

chrome.runtime.onMessage.addListener((obj) => {
  if (obj.type === "action_clicked") {
    const elementClick = document.createElement("div");

    elementClick.classList.add("element-injected");
    elementClick.classList.add('clicked')
    body.appendChild(elementClick);
  }
});
