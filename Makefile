NVM_DIR := $(HOME)/.nvm
NVM_NODE := $(NVM_DIR)/versions/node/$(shell ls $(NVM_DIR)/versions/node 2>/dev/null | sort -V | tail -1)
NODE := $(shell command -v node 2>/dev/null)

dev:
	@if [ -s "$(NVM_DIR)/nvm.sh" ]; then \
		bash -c '. $(NVM_DIR)/nvm.sh && nvm use 20 --silent && npm run dev'; \
	elif [ -n "$(NODE)" ]; then \
		npm run dev; \
	else \
		echo "Node.js não encontrado. Instale o nvm: https://github.com/nvm-sh/nvm"; \
		exit 1; \
	fi
