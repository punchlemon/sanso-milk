/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // setupFilesとsetupFilesAfterEnvの違いに注意
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  // setupFilesを削除するか、実際に存在するファイルを指定
  // setupFiles: ['<rootDir>/src/setupTests.ts'], // 削除または修正
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
        diagnostics: { warnOnly: true }
      }
    ]
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@reduxjs|redux|redux-thunk|reselect|immer))'
  ],
  // 環境変数のモックは別の方法で処理
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  }
};

module.exports = config;