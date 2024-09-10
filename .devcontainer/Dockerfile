# Base Docker image with Node.js and other tools
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:18

# Set working directory
WORKDIR /workspace

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app code into the container
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the development server
CMD ["npm", "start"]
