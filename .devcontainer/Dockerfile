# Pull the VS Code web image
FROM ghcr.io/coder/code-server:latest

# Install dependencies including Git and Node.js
USER root
RUN apt-get update && apt-get install -y \
    git \
    curl \
    sudo

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - && \
    apt-get install -y nodejs

# Set working directory and clone the shopping-frontend repo
WORKDIR /home/coder/app
RUN git clone https://github.com/K-Fayaz/shopping-frontend.git

# Set the cloned repo as the workspace and start VS Code Web
CMD ["code-server", "--bind-addr", "0.0.0.0:8080", "--auth", "none", "/home/coder/app/shopping-frontend"]
