document.addEventListener('DOMContentLoaded', function() {
  gitbook.events.bind("page.change", function() {
      if (gitbook.state.filepath === "BOOKREADME.md") {
        document.title = "Hyland Academy @ UCS";
      }
    });
});
