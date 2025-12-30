export default function sitemap() {
  const baseUrl = "https://jeerankpredictor.in";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },

   

    {
      url: `${baseUrl}/jee_main_marks_vs_rank_2026`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/blog/jee_main_2025`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/jee_main_cutoff_2026`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },

    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
