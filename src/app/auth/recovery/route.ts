const RECOVERY_HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Third &amp; Manageable | Reset Password</title>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #040485;
        color: #ffffff;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        padding: 24px;
      }
      .card {
        width: min(420px, 100%);
        text-align: center;
      }
      .spinner {
        width: 40px;
        height: 40px;
        border-radius: 9999px;
        border: 3px solid rgba(255, 255, 255, 0.24);
        border-top-color: #ffffff;
        margin: 0 auto 20px;
        animation: spin 0.8s linear infinite;
      }
      h1 {
        margin: 0 0 8px;
        font-size: 22px;
      }
      p {
        margin: 0 0 22px;
        font-size: 14px;
        opacity: 0.84;
        line-height: 1.4;
      }
      a {
        display: inline-block;
        padding: 12px 28px;
        border-radius: 12px;
        text-decoration: none;
        background: #ffffff;
        color: #040485;
        font-weight: 700;
      }
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    </style>
  </head>
  <body>
    <main class="card">
      <div class="spinner"></div>
      <h1>Opening password reset...</h1>
      <p>If you are not redirected in a moment, tap the button below.</p>
      <a id="open-app" href="#">Open Third &amp; Manageable</a>
    </main>
    <script>
      (function () {
        var query = window.location.search || "";
        var hash = window.location.hash || "";
        var appUrl = "thirdandmanageableapp://reset-password" + query + hash;
        var isAndroid = /android/i.test(navigator.userAgent || "");
        var intentUrl =
          "intent://reset-password" +
          query +
          "#Intent;scheme=thirdandmanageableapp;package=com.thirdandmanageable.app;end";
        var openButton = document.getElementById("open-app");
        if (openButton) {
          openButton.setAttribute("href", appUrl);
        }
        function redirectToApp() {
          window.location.replace(appUrl);
        }
        setTimeout(redirectToApp, 250);
        setTimeout(redirectToApp, 1000);
        if (isAndroid) {
          setTimeout(function () {
            window.location.replace(intentUrl);
          }, 1600);
        }
      })();
    </script>
  </body>
</html>
`;

export function GET() {
  return new Response(RECOVERY_HTML, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
