setup:
	npm install --save-dev babel-preset-es2015

deps:
	npm install

test:
	npm test

deploy-local:
	mkdir -p ../openchs-server/fs/config/modules/bmi
	mkdir -p ../openchs-server/fs/config/modules/sample
	cp modules/bmi/*.js* ../openchs-server/fs/config/modules/bmi/
	cp modules/sample/*.js* ../openchs-server/fs/config/modules/sample/