module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      url: ['http://localhost:3000'],
      numberOfRuns: 3,
      settings: {
        chromeFlags: '--no-sandbox --disable-setuid-sandbox --headless',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', {minScore: 0.9}],
        'categories:accessibility': ['error', {minScore: 0.95}],
        'first-contentful-paint': ['warn', {maxNumericValue: 2000}],
        'interactive': ['error', {maxNumericValue: 3500}],
        'resource-summary:mainthread-work-breakdown:total': ['warn', {maxNumericValue: 5000}],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
