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
	python ./src/python/index.py

hask || hs || h:
	echo "RUNNING HASKELL"
	runhaskell ./src/haskell/index.hs

elixir:
	elixir ./src/elixir/index.exs

lisp:
	sbcl --script ./src/lisp/index.lisp

ps:
	powershell.exe -noexit -file "C:\Users\F1ks3r\desktop\stuff\junk\solyanka\PowerShell.ps1" "MY-PC"

php:
	php ./src/php/index.php

save:
	git branch
	git status
	git add .
	git commit -m save
	git push origin $(branch)
	git push bitbucket $(branch)

update:
	echo "asd"