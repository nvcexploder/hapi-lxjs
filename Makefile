test:
	@node node_modules/.bin/lab -m 90000
test-json:
	@node node_modules/.bin/lab -m 90000 -r json -o results.json
test-cov:
	@node node_modules/.bin/lab
test-cov-mock:
	@MOCK=true node node_modules/.bin/lab -t 90 -m 90000 -v -p
test-cov-html:
	@node node_modules/.bin/lab -r html -o coverage.html -m 90000


test-unit:
	@node node_modules/.bin/lab ./test/unit -m 5000
test-json-unit:
	@node node_modules/.bin/lab -r json -o results.json ./test/unit
test-cov-html-unit:
	@node node_modules/.bin/lab -r html -o coverage.html ./test/unit


test-integration:
	@node node_modules/.bin/lab -m 90000 ./test/integration
test-integration-mock:
	@MOCK=true node node_modules/.bin/lab -m 90000 ./test/integration -v -p
test-json-integration:
	@node node_modules/.bin/lab -m 90000 -r json -o results.json ./test/integration
test-cov-html-integration:
	@node node_modules/.bin/lab -r html -o coverage.html -m 90000 ./test/integration

.PHONY: test test-json test-cov test-cov-mock test-cov-html test-unit test-json-unit test-cov-html-unit test-integration test-integration-mock test-json-integration test-cov-html-integration

