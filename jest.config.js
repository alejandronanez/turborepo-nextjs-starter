/**
 * This was hell of a challenge to get right, but I finally made it. :success:
 *
 * In the end, creating a different tsconfig was the only thing needed to get ts-jest to work with TS and Next.js
 *
 * Reference:
 * - https://github.com/vercel/next.js/issues/8663#issuecomment-802289395
 * - https://github.com/vercel/next.js/issues/8663#issuecomment-890371130
 */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
      isolatedModules: true,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
