module.exports = {
  testRegex: "\\.(test)\\.js$",
  snapshotSerializers: [
    "jest-serializer-vue"
  ],
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  collectCoverageFrom: [
    "src/**/*.{js,vue}"
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$": "jest-transform-stub"
  },
  globals: {
    "TARGET_ENV": "production"
  },
  // setupFiles: [
  //   "./test/MockData/localStorageMock.js"
  // ],
  moduleNameMapper: {
    "^assets(.*)": "<rootDir>/src/assets$1",
    "^components(.*)": "<rootDir>/src/components$1",
    "^locales(.*)": "<rootDir>/src/locales$1",
    "^mockData(.*)": "<rootDir>/test/mockData$1",
    "^src(.*)": "<rootDir>/src$1",
    "^stylesheets(.*)": "<rootDir>/src/stylesheets$1",
    "^test(.*)": "<rootDir>/test$1",
    "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/"
  ]
}
