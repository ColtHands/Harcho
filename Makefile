branch := $(shell git rev-parse --abbrev-ref HEAD)

run:
	$(MAKE) rust
	$(MAKE) dotnet
	$(MAKE) python
	$(MAKE) haskell

rust:
	echo "RUNNING RUST"
	cargo run

py:
	echo "RUNNING PYTHON"
	python ./src/python.py

hask:
	echo "RUNNING HASKELL"
	runhaskell ./src/hask.hs

elixir:
	elixir ./src/elixir.exs

lisp:
	sbcl --script ./src/common.lisp

save:
	git branch
	git status
	git add .
	git commit -m save
	git push origin $(branch)
