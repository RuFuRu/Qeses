const packageJsonContent = `{
  "name": "static-web-server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "esbuild client/TS/main.ts --bundle --minify --target=es2020 --outdir='client/JS'",
    "compileServer": "tsc server/server.ts --outdir server/dist",
    "compileServer:watch": "tsc server/server.ts --outdir server/dist --watch",
    "dev": "nodemon server/dist/server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@types/mime": "^3.0.1",
    "@types/node": "^20.3.1",
    "esbuild": "0.18.4",
    "mime": "^3.0.0",
    "typescript": "^5.1.3"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}
`;

const packageJsonLockContent = `{
  "name": "static-web-server",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "static-web-server",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "@types/mime": "^3.0.1",
        "@types/node": "^20.3.1",
        "esbuild": "0.18.4",
        "mime": "^3.0.0",
        "typescript": "^5.1.3"
      },
      "devDependencies": {
        "nodemon": "^2.0.22"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.18.4",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.18.4.tgz",
      "integrity": "sha512-yKmQC9IiuvHdsNEbPHSprnMHg6OhL1cSeQZLzPpgzJBJ9ppEg9GAZN8MKj1TcmB4tZZUrq5xjK7KCmhwZP8iDA==",
      "cpu": [
        "arm"
      ],
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.18.4",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.18.4.tgz",
      "integrity": "sha512-yQVgO+V307hA2XhzELQ6F91CBGX7gSnlVGAj5YIqjQOxThDpM7fOcHT2YLJbE6gNdPtgRSafQrsK8rJ9xHCaZg==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.18.4",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.18.4.tgz",
      "integrity": "sha512-yLKXMxQg6sk1ntftxQ5uwyVgG4/S2E7UoOCc5N4YZW7fdkfRiYEXqm7CMuIfY2Vs3FTrNyKmSfNevIuIvJnMww==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.18.4",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.18.4.tgz",
      "integrity": "sha512-MVPEoZjZpk2xQ1zckZrb8eQuQib+QCzdmMs3YZAYEQPg+Rztk5pUxGyk8htZOC8Z38NMM29W+MqY9Sqo/sDGKw==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.18.4",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.18.4.tgz",
      "integrity": "sha512-uEsRtYRUDsz7i2tXg/t/SyF+5gU1cvi9B6B8i5ebJgtUUHJYWyIPIesmIOL4/+bywjxsDMA/XrNFMgMffLnh5A==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.18.4",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.18.4.tgz",
      "integrity": "sha512-I8EOigqWnOHRin6Zp5Y1cfH3oT54bd7Sdz/VnpUNksbOtfp8IWRTH4pgkgO5jWaRQPjCpJcOpdRjYAMjPt8wXg==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.18.4",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.18.4.tgz",
      "integrity": "sha512-1bHfgMz/cNMjbpsYxjVgMJ1iwKq+NdDPlACBrWULD7ZdFmBQrhMicMaKb5CdmdVyvIwXmasOuF4r6Iq574kUTA==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.18.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.18.4.tgz",
      "integrity": "sha512-4XCGqM/Ay1LCXUBH59bL4JbSbbTK1K22dWHymWMGaEh2sQCDOUw+OQxozYV/YdBb91leK2NbuSrE2BRamwgaYw==",
      "cpu": [
        "arm"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.18.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.18.4.tgz",
      "integrity": "sha512-J42vLHaYREyiBwH0eQE4/7H1DTfZx8FuxyWSictx4d7ezzuKE3XOkIvOg+SQzRz7T9HLVKzq2tvbAov4UfufBw==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.18.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.18.4.tgz",
      "integrity": "sha512-4ksIqFwhq7OExty7Sl1n0vqQSCqTG4sU6i99G2yuMr28CEOUZ/60N+IO9hwI8sIxBqmKmDgncE1n5CMu/3m0IA==",
      "cpu": [
        "ia32"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.18.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.18.4.tgz",
      "integrity": "sha512-bsWtoVHkGQgAsFXioDueXRiUIfSGrVkJjBBz4gcBJxXcD461cWFQFyu8Fxdj9TP+zEeqJ8C/O4LFFMBNi6Fscw==",
      "cpu": [
        "loong64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.18.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.18.4.tgz",
      "integrity": "sha512-LRD9Fu8wJQgIOOV1o3nRyzrheFYjxA0C1IVWZ93eNRRWBKgarYFejd5WBtrp43cE4y4D4t3qWWyklm73Mrsd/g==",
      "cpu": [
        "mips64el"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.18.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.18.4.tgz",
      "integrity": "sha512-jtQgoZjM92gauVRxNaaG/TpL3Pr4WcL3Pwqi9QgdrBGrEXzB+twohQiWNSTycs6lUygakos4mm2h0B9/SHveng==",
      "cpu": [
        "ppc64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.18.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.18.4.tgz",
      "integrity": "sha512-7WaU/kRZG0VCV09Xdlkg6LNAsfU9SAxo6XEdaZ8ffO4lh+DZoAhGTx7+vTMOXKxa+r2w1LYDGxfJa2rcgagMRA==",
      "cpu": [
        "riscv64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.18.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.18.4.tgz",
      "integrity": "sha512-D19ed0xreKQvC5t+ArE2njSnm18WPpE+1fhwaiJHf+Xwqsq+/SUaV8Mx0M27nszdU+Atq1HahrgCOZCNNEASUg==",
      "cpu": [
        "s390x"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.18.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.18.4.tgz",
      "integrity": "sha512-Rx3AY1sxyiO/gvCGP00nL69L60dfmWyjKWY06ugpB8Ydpdsfi3BHW58HWC24K3CAjAPSwxcajozC2PzA9JBS1g==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.18.4",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.18.4.tgz",
      "integrity": "sha512-AaShPmN9c6w1mKRpliKFlaWcSkpBT4KOlk93UfFgeI3F3cbjzdDKGsbKnOZozmYbE1izZKLmNJiW0sFM+A5JPA==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.18.4",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.18.4.tgz",
      "integrity": "sha512-tRGvGwou3BrvHVvF8HxTqEiC5VtPzySudS9fh2jBIKpLX7HCW8jIkW+LunkFDNwhslx4xMAgh0jAHsx/iCymaQ==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.18.4",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.18.4.tgz",
      "integrity": "sha512-acORFDI95GKhmAnlH8EarBeuqoy/j3yxIU+FDB91H3+ZON+8HhTadtT450YkaMzX6lEWbhi+mjVUCj00M5yyOQ==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.18.4",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.18.4.tgz",
      "integrity": "sha512-1NxP+iOk8KSvS1L9SSxEvBAJk39U0GiGZkiiJGbuDF9G4fG7DSDw6XLxZMecAgmvQrwwx7yVKdNN3GgNh0UfKg==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.18.4",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.18.4.tgz",
      "integrity": "sha512-OKr8jze93vbgqZ/r23woWciTixUwLa976C9W7yNBujtnVHyvsL/ocYG61tsktUfJOpyIz5TsohkBZ6Lo2+PCcQ==",
      "cpu": [
        "ia32"
      ],
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.18.4",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.18.4.tgz",
      "integrity": "sha512-qJr3wVvcLjPFcV4AMDS3iquhBfTef2zo/jlm8RMxmiRp3Vy2HY8WMxrykJlcbCnqLXZPA0YZxZGND6eug85ogg==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@types/mime": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/@types/mime/-/mime-3.0.1.tgz",
      "integrity": "sha512-Y4XFY5VJAuw0FgAqPNd6NNoV44jbq9Bz2L7Rh/J6jLTiHBSBJa9fxqQIvkIld4GsoDOcCbvzOUAbLPsSKKg+uA=="
    },
    "node_modules/@types/node": {
      "version": "20.3.1",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-20.3.1.tgz",
      "integrity": "sha512-EhcH/wvidPy1WeML3TtYFGR83UzjxeWRen9V402T8aUGYsCHOmfoisV3ZSg03gAFIbLq8TnWOJ0f4cALtnSEUg=="
    },
    "node_modules/abbrev": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
      "dev": true
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "dev": true,
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true
    },
    "node_modules/binary-extensions": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.2.0.tgz",
      "integrity": "sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dev": true,
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
      "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
      "dev": true,
      "dependencies": {
        "fill-range": "^7.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/chokidar": {
      "version": "3.5.3",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.5.3.tgz",
      "integrity": "sha512-Dr3sfKRP6oTcjf2JmUmFJfeVMvXBdegxB0iVQ5eb2V10uFJUCAS8OByZdVAyVb8xXNz3GjjTgj9kLWsZTqE6kw==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://paulmillr.com/funding/"
        }
      ],
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true
    },
    "node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/esbuild": {
      "version": "0.18.4",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.18.4.tgz",
      "integrity": "sha512-9rxWV/Cb2DMUXfe9aUsYtqg0KTlw146ElFH22kYeK9KVV1qT082X4lpmiKsa12ePiCcIcB686TQJxaGAa9TFvA==",
      "hasInstallScript": true,
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=12"
      },
      "optionalDependencies": {
        "@esbuild/android-arm": "0.18.4",
        "@esbuild/android-arm64": "0.18.4",
        "@esbuild/android-x64": "0.18.4",
        "@esbuild/darwin-arm64": "0.18.4",
        "@esbuild/darwin-x64": "0.18.4",
        "@esbuild/freebsd-arm64": "0.18.4",
        "@esbuild/freebsd-x64": "0.18.4",
        "@esbuild/linux-arm": "0.18.4",
        "@esbuild/linux-arm64": "0.18.4",
        "@esbuild/linux-ia32": "0.18.4",
        "@esbuild/linux-loong64": "0.18.4",
        "@esbuild/linux-mips64el": "0.18.4",
        "@esbuild/linux-ppc64": "0.18.4",
        "@esbuild/linux-riscv64": "0.18.4",
        "@esbuild/linux-s390x": "0.18.4",
        "@esbuild/linux-x64": "0.18.4",
        "@esbuild/netbsd-x64": "0.18.4",
        "@esbuild/openbsd-x64": "0.18.4",
        "@esbuild/sunos-x64": "0.18.4",
        "@esbuild/win32-arm64": "0.18.4",
        "@esbuild/win32-ia32": "0.18.4",
        "@esbuild/win32-x64": "0.18.4"
      }
    },
    "node_modules/fill-range": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
      "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
      "dev": true,
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",
      "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",
      "dev": true,
      "hasInstallScript": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/ignore-by-default": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-1.0.1.tgz",
      "integrity": "sha512-Ius2VYcGNk7T90CppJqcIkS5ooHUZyIQK+ClZfMfMNFEF9VSE73Fq+906u/CWu92x4gzZMWOwfFYckPObzdEbA==",
      "dev": true
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dev": true,
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/mime": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/mime/-/mime-3.0.0.tgz",
      "integrity": "sha512-jSCU7/VB1loIWBZe14aEYHU/+1UMEHoaO7qxCOVJOw9GgH72VAWppxNcjU+x9a2k3GSIBXNKxXQFqRvvZ7vr3A==",
      "bin": {
        "mime": "cli.js"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true
    },
    "node_modules/nodemon": {
      "version": "2.0.22",
      "resolved": "https://registry.npmjs.org/nodemon/-/nodemon-2.0.22.tgz",
      "integrity": "sha512-B8YqaKMmyuCO7BowF1Z1/mkPqLk6cs/l63Ojtd6otKjMx47Dq1utxfRxcavH1I7VSaL8n5BUaoutadnsX3AAVQ==",
      "dev": true,
      "dependencies": {
        "chokidar": "^3.5.2",
        "debug": "^3.2.7",
        "ignore-by-default": "^1.0.1",
        "minimatch": "^3.1.2",
        "pstree.remy": "^1.1.8",
        "semver": "^5.7.1",
        "simple-update-notifier": "^1.0.7",
        "supports-color": "^5.5.0",
        "touch": "^3.1.0",
        "undefsafe": "^2.0.5"
      },
      "bin": {
        "nodemon": "bin/nodemon.js"
      },
      "engines": {
        "node": ">=8.10.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/nodemon"
      }
    },
    "node_modules/nopt": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/nopt/-/nopt-1.0.10.tgz",
      "integrity": "sha512-NWmpvLSqUrgrAC9HCuxEvb+PSloHpqVu+FqcO4eeF2h5qYRhA7ev6KvelyQAKtegUbC6RypJnlEOhd8vloNKYg==",
      "dev": true,
      "dependencies": {
        "abbrev": "1"
      },
      "bin": {
        "nopt": "bin/nopt.js"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "dev": true,
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pstree.remy": {
      "version": "1.1.8",
      "resolved": "https://registry.npmjs.org/pstree.remy/-/pstree.remy-1.1.8.tgz",
      "integrity": "sha512-77DZwxQmxKnu3aR542U+X8FypNzbfJ+C5XQDk3uWjWxn6151aIMGthWYRXTqT1E5oJvg+ljaa2OJi+VfvCOQ8w==",
      "dev": true
    },
    "node_modules/readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "dev": true,
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
      "dev": true,
      "bin": {
        "semver": "bin/semver"
      }
    },
    "node_modules/simple-update-notifier": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/simple-update-notifier/-/simple-update-notifier-1.1.0.tgz",
      "integrity": "sha512-VpsrsJSUcJEseSbMHkrsrAVSdvVS5I96Qo1QAQ4FxQ9wXFcB+pjj7FB7/us9+GcgfW4ziHtYMc1J0PLczb55mg==",
      "dev": true,
      "dependencies": {
        "semver": "~7.0.0"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/simple-update-notifier/node_modules/semver": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.0.0.tgz",
      "integrity": "sha512-+GB6zVA9LWh6zovYQLALHwv5rb2PHGlJi3lfiqIHxR0uuwCgefcOJc59v9fv1w8GbStwxuuqqAjI9NMAOOgq1A==",
      "dev": true,
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/touch": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/touch/-/touch-3.1.0.tgz",
      "integrity": "sha512-WBx8Uy5TLtOSRtIq+M03/sKDrXCLHxwDcquSP2c43Le03/9serjQBIztjRz6FkJez9D/hleyAXTBGLwwZUw9lA==",
      "dev": true,
      "dependencies": {
        "nopt": "~1.0.10"
      },
      "bin": {
        "nodetouch": "bin/nodetouch.js"
      }
    },
    "node_modules/typescript": {
      "version": "5.1.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.1.3.tgz",
      "integrity": "sha512-XH627E9vkeqhlZFQuL+UsyAXEnibT0kWR2FWONlr4sTjvxyJYnyefgrkyECLzM5NenmKzRAy2rR/OlYLA1HkZw==",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/undefsafe": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/undefsafe/-/undefsafe-2.0.5.tgz",
      "integrity": "sha512-WxONCrssBM8TSPRqN5EmsjVrsv4A8X12J4ArBiiayv3DyyG3ZlIg6yysuuSYdZsVz3TKcTg2fd//Ujd4CHV1iA==",
      "dev": true
    }
  }
}
`;

const tsconfigJsonContent = `{
    "compilerOptions": {
        "strict": true,
        "module": "NodeNext",
        "moduleResolution": "NodeNext",
        "target": "ES2020",
        "sourceMap": true,
        "outDir": "dist",
    },
    "include": [
        "server/**/*",
        "client/TS/**/*"
    ],
    "exclude": [
        "client/JS/**/*"
    ]
}
`;

const readmeContent = `# Write your readme here
`

const gitignoreContent = `node_modules
`;

const serverTsContent = `import * as http from "node:http";
import * as fs from "node:fs";
import * as path from "node:path";
import * as mime from "mime";

const PORT = 3215;

const server = http.createServer((req, res) => {
  const urlPath = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(__dirname, '../../client', urlPath!);

  // Check if the file exists
  fs.access(filePath, (err) => {
    if (err) {
      res.statusCode = 404;
      res.end('404 Not Found');
      return;
    }

    // Set the appropriate MIME type for module files
    const fileExtension = path.extname(filePath);
    const mimeContentType = mime.getType(fileExtension) || 'text/plain';

    // Read and serve the file
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
        return;
      }

      res.statusCode = 200;
      res.setHeader('Content-Type', mimeContentType);
      res.end(data);
    });
  });
});

server.listen(PORT, () => {
  console.log(\`The Server is running locally on: http:://localhost:\${PORT}/\`);
});
`

const clientIndexHTMLcontent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Static Web Server</title>
</head>
<body>
</body>
</html>
`;


export {
    packageJsonContent,
    packageJsonLockContent,
    tsconfigJsonContent,
    readmeContent,
    gitignoreContent,
    serverTsContent,
    clientIndexHTMLcontent
}









