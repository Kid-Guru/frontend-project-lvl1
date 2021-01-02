install:
	npm install

brain-games:
	node bin/brain-games.js

make lint:
	npx eslint .

publish: 
	npm publish --dry-run

.PHONY: test