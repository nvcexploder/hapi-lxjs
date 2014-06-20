test:
	@node node_modules/lab/bin/lab
test-cov:
	@node node_modules/lab/bin/lab -t 100 -v

.PHONY: test test-cov
