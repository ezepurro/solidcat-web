
export async function GET() {
    return new Response(
      `User-agent: *
        Allow: /
        Sitemap: https://www.solidcat.dev/sitemap.xml`,
      { headers: { "Content-Type": "text/plain" } }
    );
  }
  