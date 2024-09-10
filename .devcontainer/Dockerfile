# Use a base image that includes Node.js or add Node.js installation
FROM codercom/code-server:latest

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Optional: Install yarn if needed
RUN npm install -g yarn

# Set the working directory
WORKDIR /home/coder/app

# Expose ports if needed
EXPOSE 3000
